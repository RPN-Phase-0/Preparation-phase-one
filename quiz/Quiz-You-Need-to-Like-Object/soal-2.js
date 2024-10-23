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

  const owners = {
    "Jeff Bezos": "Amazon",
    "Larry Page": "Google",
    "Jack Ma": "Alibaba",
  };

  const result = [];

  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      const activity = tradeActivity[i][j];
      let name = "";
      let percentChange = "";
      let isPositive = true;

      let k = 0;
      while (activity[k] !== "+" && activity[k] !== "-") {
        name += activity[k];
        k++;
      }

      if (activity[k] === "-") isPositive = false;

      k++;

      while (k < activity.length && activity[k] !== "%") {
        percentChange += activity[k];
        k++;
      }

      const change = parseFloat(percentChange) / 100;

      let deposit;

      if (name === "Jeff Bezos") {
        newDeposit = duitJeff * (isPositive ? 1 + change : 1 - change);
        duitJeff = newDeposit;
      } else if (name === "Larry Page") {
        newDeposit = duitLarry * (isPositive ? 1 + change : 1 - change);
        duitLarry = newDeposit;
      } else if (name === "Jack Ma") {
        newDeposit = duitJack * (isPositive ? 1 + change : 1 - change);
        duitJack = newDeposit;
      }

      result.push({
        name,
        deposit: parseFloat(newDeposit.toFixed(2)),
        owner: owners[name],
      });
    }
  }

  return result;
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
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
console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/
