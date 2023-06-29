import cheerio from 'cheerio';

const test = `<div class="aim-select__options" style="column-count: 3;">
  <div class="option">
    <div class="option-content">1v1.LOL</div>
  </div>
  <div class="option">
    <div class="option-content">7 Days to Die</div>
  </div>
  <div class="option">
    <div class="option-content">Aim Gods</div>
  </div>
  <div class="option">
    <div class="option-content">Aim Lab</div>
  </div>
  <div class="option">
    <div class="option-content">Aiming.Pro</div>
  </div>
  <div class="option">
    <div class="option-content">Aimtastic</div>
  </div>
  <div class="option">
    <div class="option-content">Apex Legends</div>
  </div>
  <div class="option">
    <div class="option-content">Arma 3</div>
  </div>
  <div class="option">
    <div class="option-content">Battalion 1944</div>
  </div>
  <div class="option">
    <div class="option-content">Battlefield V/1/Hardline</div>
  </div>
  <div class="option">
    <div class="option-content">Black Squad</div>
  </div>
  <div class="option">
    <div class="option-content">Bloodhunt</div>
  </div>
  <div class="option">
    <div class="option-content">Borderlands 1/2</div>
  </div>
  <div class="option">
    <div class="option-content">Borderlands 3</div>
  </div>
  <div class="option">
    <div class="option-content">Call of Duty: Black Ops 4</div>
  </div>
  <div class="option">
    <div class="option-content">Call of Duty: Black Ops Cold War</div>
  </div>
  <div class="option">
    <div class="option-content">Call of Duty: Modern Warfare</div>
  </div>
  <div class="option">
    <div class="option-content">Call of Duty: Warzone</div>
  </div>
  <div class="option">
    <div class="option-content">Call of Duty: WWII</div>
  </div>
  <div class="option">
    <div class="option-content">Creative Destruction</div>
  </div>
  <div class="option">
    <div class="option-content">CS 1.6</div>
  </div>
  <div class="option">
    <div class="option-content">CS:GO</div>
  </div>
  <div class="option">
    <div class="option-content">Cyberpunk 2077</div>
  </div>
  <div class="option">
    <div class="option-content">Darwin Project</div>
  </div>
  <div class="option">
    <div class="option-content">DayZ</div>
  </div>
  <div class="option">
    <div class="option-content">Deep Rock Galactic</div>
  </div>
  <div class="option active">
    <div class="option-content">Destiny 2</div>
  </div>
  <div class="option">
    <div class="option-content">Doom Eternal</div>
  </div>
  <div class="option">
    <div class="option-content">Dying Light</div>
  </div>
  <div class="option">
    <div class="option-content">Escape from Tarkov</div>
  </div>
  <div class="option">
    <div class="option-content">Fallout 4</div>
  </div>
  <div class="option">
    <div class="option-content">Far Cry 3</div>
  </div>
  <div class="option">
    <div class="option-content">Far Cry 4</div>
  </div>
  <div class="option">
    <div class="option-content">Far Cry 5</div>
  </div>
  <div class="option">
    <div class="option-content">Far Cry Primal</div>
  </div>
  <div class="option">
    <div class="option-content">Fortnite</div>
  </div>
  <div class="option">
    <div class="option-content">Garry's Mod</div>
  </div>
  <div class="option">
    <div class="option-content">Gears 5</div>
  </div>
  <div class="option">
    <div class="option-content">Halo</div>
  </div>
  <div class="option">
    <div class="option-content">Halo Infinite</div>
  </div>
  <div class="option">
    <div class="option-content">Heroes &amp; Generals</div>
  </div>
  <div class="option">
    <div class="option-content">Hunt: Showdown</div>
  </div>
  <div class="option">
    <div class="option-content">Hyperscape</div>
  </div>
  <div class="option">
    <div class="option-content">Insurgency</div>
  </div>
  <div class="option">
    <div class="option-content">Insurgency: Sandstorm</div>
  </div>
  <div class="option">
    <div class="option-content">Ironsight</div>
  </div>
  <div class="option">
    <div class="option-content">Krunker</div>
  </div>
  <div class="option">
    <div class="option-content">Line of Sight</div>
  </div>
  <div class="option">
    <div class="option-content">Minecraft Java Edition</div>
  </div>
  <div class="option">
    <div class="option-content">Overwatch</div>
  </div>
  <div class="option">
    <div class="option-content">Overwatch 2</div>
  </div>
  <div class="option">
    <div class="option-content">Paladins</div>
  </div>
  <div class="option">
    <div class="option-content">Payday 2</div>
  </div>
  <div class="option">
    <div class="option-content">PUBG</div>
  </div>
  <div class="option">
    <div class="option-content">Quake Live</div>
  </div>
  <div class="option">
    <div class="option-content">Realm Royale</div>
  </div>
  <div class="option">
    <div class="option-content">Ring of Elysium</div>
  </div>
  <div class="option">
    <div class="option-content">Roblox</div>
  </div>
  <div class="option">
    <div class="option-content">Rogue Company</div>
  </div>
  <div class="option">
    <div class="option-content">Rust</div>
  </div>
  <div class="option">
    <div class="option-content">Splitgate</div>
  </div>
  <div class="option">
    <div class="option-content">Squad</div>
  </div>
  <div class="option">
    <div class="option-content">Team Fortress 2</div>
  </div>
  <div class="option">
    <div class="option-content">Titanfall 2</div>
  </div>
  <div class="option">
    <div class="option-content">Tom Clancy's Rainbow 6: Siege</div>
  </div>
  <div class="option">
    <div class="option-content">Tom Clancy's The Division 2</div>
  </div>
  <div class="option">
    <div class="option-content">Unturned</div>
  </div>
  <div class="option">
    <div class="option-content">Valheim</div>
  </div>
  <div class="option">
    <div class="option-content">Valorant</div>
  </div>
  <div class="option">
    <div class="option-content">Warface</div>
  </div>
  <div class="option">
    <div class="option-content">Warframe</div>
  </div>
  <div class="option">
    <div class="option-content">Zula</div>
  </div>
</div>;
`;

let $ = cheerio.load(test);

let list = [];
$('.option-content').each((index, element) => {
  list.push($(element).text());
});

console.log(list); // ['1v1.LOL']
