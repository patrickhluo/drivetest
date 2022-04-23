import { logger } from "./logger";

function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function NextMonth(page:any){
    logger.info('NextMonth');
    await delay(2000);
    const right = await page.$x('//*[@id="main"]/app-select-date/div/app-calendar-selection-container/div[1]/button[2]');
    await right[0].click();
  }
  
  async function PrevMonth(page:any){
    logger.info('PrevMonth');
    await delay(2000);
    const right = await page.$x('//*[@id="main"]/app-select-date/div/app-calendar-selection-container/div[1]/button[1]');
    await right[0].click();
  }
  
  async function refresh(page:any) {
    logger.info('refreshing');
    await NextMonth(page);
    await PrevMonth(page);
  }