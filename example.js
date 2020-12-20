const puppeteer = require('puppeteer');

(async () => {
  // Você pode botar headless = true se não quiser que o chrome abra
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.capterra.com/agile-project-management-tools-software/');

  const pageData = await page.evaluate(() => {
    // Essa função é executada no próprio chrome, então você pode acessar a window, document, etc
    // Ai pega os dados com javascript mesmo

    // Pego todas as classes que começam com essa string, eles tem um final aleatorio nas classes então tem que fazer isso
    const titlesNodes = Array.from(document.querySelectorAll("[class^=ProductHeaderSection__ProductHeaderLink]"))

    // Pega o inner text desses elementos
    const titles = titlesNodes.map(t => {
      return t.innerText
    })

    
    return titles
  });

  console.log(pageData)

  await browser.close()
})();