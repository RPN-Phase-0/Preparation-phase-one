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
  if(!Array.isArray(tradeActivity)) {
    return "You don't have money!  miskin!"
  }

  let jeffMoney = 100000;
  let larryMoney = 95000;
  let jackMoney = 90000;
  let result = [];

  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let getArr = tradeActivity[i][j];
      let findPlusMinus = getArr.match(/[+-]/);
      let tanda = findPlusMinus ? findPlusMinus[0] : null;
      let splitWord = getArr.split(tanda);
     
      function addPercentage(who, tanda) {
        let getNumber = Number(getArr.match(/\d+/)[0]);
         let finalMoney = 0;

        if (who === "Jeff Bezos" && tanda === "+") {
          jeffMoney += (jeffMoney * getNumber / 100) ;
          finalMoney += jeffMoney
        } else if (who === "Larry Page" && tanda === "+") {
          larryMoney += (larryMoney * getNumber /100);
          finalMoney += larryMoney
        } else if (who === "Jack Ma" && tanda === "+") {
          jackMoney += (jackMoney * getNumber /100);
          finalMoney += jackMoney
        }

        return finalMoney;
      }

      function subtractPersentage(who, tanda) {
        let getNumber = Number(getArr.match(/\d+/)[0]);
        let finalMoney = 0

        if (who === "Jeff Bezos" && tanda === "-") {
          jeffMoney -= (jeffMoney * getNumber /100);
          finalMoney = jeffMoney
        } else if (who === "Larry Page" && tanda === "-") {
          larryMoney -= (larryMoney * getNumber /100);
          finalMoney = larryMoney
        } else if (who === "Jack Ma" && tanda === "-") {
          jackMoney -= (jackMoney * getNumber /100);
          finalMoney = jackMoney
        }

        return finalMoney;
      }

      let perusahaan = "";

      if (splitWord[0] === "Jeff Bezos") {
        perusahaan = "Amazon";
      } else if (splitWord[0] === "Larry Page") {
        perusahaan = "Google";
      } else {
        perusahaan = "Alibaba";
      }

      result.push({
        name: splitWord[0],
        deposit:
          tanda === "+"
            ? addPercentage(splitWord[0], "+")
            : subtractPersentage(splitWord[0], "-"),
        owner: perusahaan,
      });
    }
  }

  return result;
}

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/

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
