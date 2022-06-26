const puppeteer = require("puppeteer");
// import * as puppeteer from "puppeteer";

// /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
// /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge

const optionsLaunch = {
    headless: false,
    devtools: false,
    defaultViewport: {
        width: 1200,
        height: 900
    },
    // slowMo: 250,
    timeout: 0,
    // product: "chrome",
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: ["--enable-automation"],
    // channel: "chrome",
    // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    // executablePath: "C:\/Program Files (x86)\/Microsoft\/Edge\/Application\/msedge.exe"
};
const optionsPage = {
    timeout: 0,
    waitUntil: "domcontentloaded"
};

;(async () => {
    await initBrowser();
})().catch(async error => {
    await initBrowser();
});

// 2022 05-22
let pageUrl = "https://m11.1024xp2.club/pw/thread.php?fid=110";
let pageSize = 3;
let pageStart = 1;
let tempPage = 0;

const initBrowser = async () => {
    // await page.evaluateOnNewDocument(() => {
    //     Object.defineProperty(navigator, 'webdriver', { get: () => false });
    // });
    // for (let i = pageStart; i <= pageSize; i++) {
    for (let i = pageSize; i >= pageStart; i--) {
        const browser = await puppeteer.launch(optionsLaunch);
        try {
            const page = await browser.newPage();
            console.log(i);
            await page.goto(pageUrl + `&page=${i}`, optionsPage);
            await getData(page, browser, i);
            await page.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
            await browser.close();
        } catch (error) {
            pageSize = tempPage;
            await browser.close();
            await initBrowser();
        }
    }
}

const getData = async (page, browser, index) => {
    await page.waitForSelector("#ajaxtable");
    let listLength = await page.$$eval("#ajaxtable > tbody:nth-child(2) > tr.tr3", el => el.length);
    let start = 1;
    if (index === 1) {
        start = 11;
    }
    for (let i = start; i <= listLength; i++) {
        const pageDetail = await browser.newPage();
        try {
            let linkHref = await page.$eval(`#ajaxtable > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(2) > h3 > a`, el => el.href);
            console.log("page href = ", i, linkHref);
            await pageDetail.goto(linkHref, optionsPage);
            let downHref = await pageDetail.$$eval("#read_tpc a", el => {
                for (let j = 0; j < el.length; j++) {
                    if (el[j].getAttribute("href").includes("torrent") || el[j].getAttribute("href").includes("ww1")) {
                        return el[j].getAttribute("href");
                    }
                }
            });
            console.log("download href = ", i, downHref);
            await pageDetail.goto(downHref, optionsPage);
            await pageDetail.waitForSelector("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(1)");
            await pageDetail.click("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(1)");
            console.log("success", i, downHref);
            await pageDetail.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
            await pageDetail.close();
        } catch(e) {
            console.log("get download url error");
            await pageDetail.close();
            continue;
        }
    }
}
