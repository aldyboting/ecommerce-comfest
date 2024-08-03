import { test, expect } from '@playwright/test';

test('should be able to register', async ({ page }) => {
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('User registered');
  });

  await page.goto('http://localhost:8080/');
  await page.locator('#registerUsername').pressSequentially('aldy');
  await page.locator('#registerPassword').pressSequentially('123');
  await page.getByRole('button', { name: 'Register' }).click();
});

test('should be able to login', async ({ page }) => {
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Login successful')
  });

  await page.goto('http://localhost:8080/');
  await page.locator('#loginUsername').pressSequentially('aldy');
  await page.locator('#loginPassword').pressSequentially('123');
  await page.getByRole('button', { name: 'Login' }).click();
  
});