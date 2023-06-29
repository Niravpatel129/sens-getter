import puppeteer from 'puppeteer';

const gamesList = [
  '1v1.LOL',
  '7 Days to Die',
  'Aim Gods',
  'Aim Lab',
  'Aiming.Pro',
  'Aimtastic',
  'Apex Legends',
  'Arma 3',
  'Battalion 1944',
  'Battlefield V/1/Hardline',
  'Black Squad',
  'Bloodhunt',
  'Borderlands 1/2',
  'Borderlands 3',
  'Call of Duty: Black Ops 4',
  'Call of Duty: Black Ops Cold War',
  'Call of Duty: Modern Warfare',
  'Call of Duty: Warzone',
  'Call of Duty: WWII',
  'Creative Destruction',
  'CS 1.6',
  'CS:GO',
  'Cyberpunk 2077',
  'Darwin Project',
  'DayZ',
  'Deep Rock Galactic',
  'Destiny 2',
  'Doom Eternal',
  'Dying Light',
  'Escape from Tarkov',
  'Fallout 4',
  'Far Cry 3',
  'Far Cry 4',
  'Far Cry 5',
  'Far Cry Primal',
  'Fortnite',
  "Garry's Mod",
  'Gears 5',
  'Halo',
  'Halo Infinite',
  'Heroes & Generals',
  'Hunt: Showdown',
  'Hyperscape',
  'Insurgency',
  'Insurgency: Sandstorm',
  'Ironsight',
  'Krunker',
  'Line of Sight',
  'Minecraft Java Edition',
  'Overwatch',
  'Overwatch 2',
  'Paladins',
  'Payday 2',
  'PUBG',
  'Quake Live',
  'Realm Royale',
  'Ring of Elysium',
  'Roblox',
  'Rogue Company',
  'Rust',
  'Splitgate',
  'Squad',
  'Team Fortress 2',
  'Titanfall 2',
  "Tom Clancy's Rainbow 6: Siege",
  "Tom Clancy's The Division 2",
  'Unturned',
  'Valheim',
  'Valorant',
  'Warface',
  'Warframe',
  'Zula',
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://aiming.pro/mouse-sensitivity-calculator');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  //   write Valorant inside #convert-to input
  await page.type('#convert-from', 'Valorant');
  //   press enter
  await page.keyboard.press('Enter');

  //   write 1 inside #input-sensitivity
  // clear the field then type
  await page.click('#input-sensitivity', { clickCount: 3 });
  await page.type('#input-sensitivity', '1');
  await page.keyboard.press('Enter');

  let myOutput = [];

  //   clear the field then write "Overwatch" and press enter in #convert-to
  for (let game of gamesList) {
    if (!game) continue;

    await page.click('#convert-to', { clickCount: 3 });
    await page.type('#convert-to', game);
    await page.keyboard.press('Enter');
    const outputSensitivity = await page.$eval('#output-sensitivity', (el) => el.value);

    // Check if the element exists before trying to get its value
    let fieldOfViewElements = await page.$$('.aim-input.tabular-nums');
    let fieldOfView = '103';

    if (fieldOfViewElements.length >= 3) {
      fieldOfView = await page.evaluate((el) => el.value, fieldOfViewElements[2]); // Arrays are 0-indexed
    }

    myOutput.push({
      name: game,
      sensitivity: outputSensitivity,
      fieldOfView: fieldOfView,
    });
    // console.log(game, outputSensitivity, fieldOfView);
  }

  console.log(myOutput);

  await browser.close();
})();
