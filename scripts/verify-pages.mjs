import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', err => errors.push(err.message));

// 首页
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
const homeTitle = await page.title();
const homeH1 = await page.locator('h1').first().textContent().catch(() => 'none');
console.log('首页标题:', homeTitle);
console.log('首页 H1:', homeH1);

// 作品页
await page.goto('http://localhost:5173/games', { waitUntil: 'networkidle' });
const gameCards = await page.locator('a[href^="/games/"]').count();
console.log('游戏卡片数量:', gameCards);

// RTS 游戏页 - 检查 iframe
await page.goto('http://localhost:5173/games/rts', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
const iframe = page.locator('iframe');
const iframeSrc = await iframe.getAttribute('src').catch(() => 'none');
const hasIframe = (await iframe.count()) > 0;
console.log('RTS iframe src:', iframeSrc);
console.log('RTS 页面有 iframe:', hasIframe);

// 错误汇总
if (errors.length) {
  console.log('页面错误:', errors.join('; '));
} else {
  console.log('✅ 无控制台错误');
}

await browser.close();
