// const puppeteer = require('puppeteer');
const wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');

// (async () => {
// 	const browser = await puppeteer.launch({ headless: true });
// 	const page = await browser.newPage();
// 	await page.goto('https://harkindey.github.io/', {
// 		waitUntil: 'networkidle2',
// 	});
// 	await page.emulateMedia('screen');
// 	await page.pdf({
// 		path: 'EmmanuelAkindeCV.pdf',
// 		format: 'A4',
// 		// preferCSSPageSize: true,
// 		// printBackground: true,
// 	});

// 	await browser.close();
// })();

wkhtmltopdf('https://harkindey.github.io/', { pageSize: 'letter' }).pipe(
	fs.createWriteStream('out.pdf')
);
