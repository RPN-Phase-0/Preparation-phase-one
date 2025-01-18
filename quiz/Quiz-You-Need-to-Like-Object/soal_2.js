/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000;
  let duitLarry = 95000;
  let duitJack = 90000;

  let result = [];

  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let transaction = tradeActivity[i][j];

      let name = '';
      let sign = '';
      let percent = '';
      for (let k = 0; k < transaction.length; k++) {
        if (transaction[k] === '+' || transaction[k] === '-') {
          sign = transaction[k];
          name = transaction.slice(0, k);
          percent = transaction.slice(k + 1, -1);
          break;
        }
      }

      percent = parseFloat(percent);
      let change = (percent / 100);

      if (name === 'Jeff Bezos') {
        duitJeff = duitJeff + duitJeff * change;
        result.push({ name: 'Jeff Bezos', deposit: duitJeff, owner: 'Amazon' });
      } else if (name === 'Larry Page') {
        duitLarry = duitLarry + duitLarry * change;
        result.push({ name: 'Larry Page', deposit: duitLarry, owner: 'Google' });
      } else if (name === 'Jack Ma') {
        duitJack = duitJack + duitJack * change;
        result.push({ name: 'Jack Ma', deposit: duitJack, owner: 'Alibaba' });
      }
    }
  }

  return result;
}

console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log("==============================================================================");

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/