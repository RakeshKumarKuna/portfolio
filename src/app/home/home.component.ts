import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { capabilities, profile } from '../profile.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly profile = profile;
  readonly capabilities = capabilities;
  readonly year = new Date().getFullYear();
  readonly menuOpen = signal(false);
  readonly activeSection = signal('home');
  readonly selectedCapability = signal(0);
  readonly copyStatus = signal('Copy email');
  readonly motionPaused = signal(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private observers: IntersectionObserver[] = [];
  private copyTimer?: ReturnType<typeof setTimeout>;
  private motionQuery?: MediaQueryList;
  private readonly onMotionChange = (event: MediaQueryListEvent) =>
    this.motionPaused.set(event.matches);

  ngAfterViewInit(): void {
    this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.motionPaused.set(this.motionQuery.matches);
    this.motionQuery.addEventListener('change', this.onMotionChange);
    this.zone.runOutsideAngular(() => {
      if (!('IntersectionObserver' in window)) return;
      const reveal = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              reveal.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      this.host.nativeElement
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((element) => {
          element.classList.add('reveal-ready');
          reveal.observe(element);
        });
      const sections = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting)
              this.zone.run(() => this.activeSection.set(entry.target.id));
          });
        },
        { rootMargin: '-15% 0px -55% 0px' },
      );
      this.host.nativeElement
        .querySelectorAll('main > section[id]')
        .forEach((element) => sections.observe(element));
      this.observers = [reveal, sections];
    });
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
      this.host.nativeElement
        .querySelector<HTMLButtonElement>('.menu-toggle')
        ?.focus();
    }
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(profile.email);
      this.copyStatus.set('Email copied!');
    } catch {
      this.copyStatus.set('Please use the email link');
    }
    clearTimeout(this.copyTimer);
    this.copyTimer = setTimeout(() => this.copyStatus.set('Copy email'), 3500);
  }

  ngOnDestroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.motionQuery?.removeEventListener('change', this.onMotionChange);
    clearTimeout(this.copyTimer);
  }
}
