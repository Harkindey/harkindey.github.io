const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://standardresume.co/r/emmanuelakinde', {
		waitUntil: 'networkidle2',
	});
	await page.pdf({ path: 'EmmanuelAkindeCV.pdf', format: 'A4' });

	await browser.close();
})();
