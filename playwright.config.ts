import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://ge.globo.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',             
    video: 'on',                 
    trace: 'retain-on-failure'    
  },
  testDir: './tests',
  reporter: [['html']]            
});
