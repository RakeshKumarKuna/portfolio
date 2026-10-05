import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('profile renders without errors or removed project content', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Engineering what’s next.*',
  );
  await expect(page.locator('#experience')).toContainText(
    'APRIL 2025 — PRESENT',
  );
  await expect(page.locator('#experience')).toContainText('Infor ION');
  await expect(page.locator('body')).not.toContainText(/warehouse/i);
  await expect(page.locator('img')).toHaveCount(0);
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(() => document.fonts.check('500 16px Manrope')),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test('stack nodes update the accessible detail panel', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Angular THE EXPERIENCE' }).click();
  await expect(page.locator('.visual-detail')).toContainText(
    'Complexity, made intuitive.',
  );
  await expect(
    page.getByRole('button', { name: 'Angular THE EXPERIENCE' }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'AI & ML THE NEXT CHAPTER' }).click();
  await expect(page.locator('.visual-detail')).toContainText(
    'Curiosity meets capability.',
  );
  await page.getByRole('button', { name: 'Java THE FOUNDATION' }).click();
  await expect(page.locator('.visual-detail')).toContainText(
    'Built on a solid foundation.',
  );
});

test('navigation works and the mobile menu closes on selection and Escape', async ({
  page,
  isMobile,
}) => {
  await page.goto('/');
  if (isMobile) {
    await page.getByRole('button', { name: 'Menu' }).click();
    await expect(page.getByRole('navigation')).toBeVisible();
  }
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Expertise' })
    .click();
  await expect(page).toHaveURL(/#expertise$/);
  await expect(page.locator('#expertise-title')).toBeInViewport();
  if (isMobile) {
    await expect(page.getByRole('navigation')).toBeHidden();
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('navigation')).toBeHidden();
    await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();
  }
});

test('motion can be paused and respects system preferences', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Pause motion' }).click();
  await expect(
    page.getByRole('button', { name: 'Play motion' }),
  ).toHaveAttribute('aria-pressed', 'true');
  expect(
    await page
      .locator('.orbit-spin')
      .evaluate((el) => getComputedStyle(el).animationPlayState),
  ).toBe('paused');
  await page.getByRole('button', { name: 'Play motion' }).click();
  await expect(
    page.getByRole('button', { name: 'Pause motion' }),
  ).toHaveAttribute('aria-pressed', 'false');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(
    page.getByRole('button', { name: 'Play motion' }),
  ).toHaveAttribute('aria-pressed', 'true');
  expect(
    await page
      .locator('.hero-enter')
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none');
});

test('contact actions contain real destinations and copy the email', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/#contact');
  await expect(page.locator('.email-link')).toHaveAttribute(
    'href',
    'mailto:kunarakeshkumar@gmail.com',
  );
  await page.getByRole('button', { name: 'Copy email', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText('Email copied!');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    'kunarakeshkumar@gmail.com',
  );
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(link).toHaveAttribute('href', /^https:\/\//);
  }
});

test('clipboard failure gives a useful fallback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('denied')) },
    });
  });
  await page.goto('/#contact');
  await page.getByRole('button', { name: 'Copy email', exact: true }).click();
  await expect(page.getByRole('status')).toHaveText(
    'Please use the email link',
  );
});

for (const [route, section] of [
  ['Home', ''],
  ['Works', 'experience'],
  ['Works/project1', 'experience'],
  ['Works/project2', 'experience'],
  ['About', 'about'],
  ['Contact', 'contact'],
]) {
  test(`legacy route /${route} resolves correctly`, async ({ page }) => {
    await page.goto('/' + route);
    await expect(page).toHaveURL(
      new RegExp('/' + (section ? '#' + section : '') + '$'),
    );
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    if (section) await expect(page.locator('#' + section)).toBeInViewport();
  });
}

test('layout fits narrow phones through large desktop screens', async ({
  page,
}) => {
  await page.goto('/');
  for (const width of [320, 375, 680, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const overflow = await page
      .locator('h1, .stack-node, .email-link, .capability-card')
      .evaluateAll((elements) =>
        elements
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.left < -1 || r.right > innerWidth + 1;
          })
          .map((el) => el.className),
      );
    expect(overflow).toEqual([]);
  }
});

test('page passes automated accessibility checks', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});
