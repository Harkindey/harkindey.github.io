const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto('http://localhost:8080/new.html', {
		waitUntil: 'networkidle2',
	});
	await page.emulateMedia('screen');
	await page.pdf({
		path: 'assets/EmmanuelAkindeCV2.pdf',
		format: 'A4',
		preferCSSPageSize: true,
		printBackground: true,
	});

	await browser.close();
})();
