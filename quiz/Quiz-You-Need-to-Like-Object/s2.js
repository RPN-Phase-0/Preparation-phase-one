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
  // console.log(tradeActivity[0][0]);
  let arrPerson = [];
  let arrMoney = [];

  for (let i = 0; i < tradeActivity.length; i++){
    
    for (let j = 0; j < tradeActivity[i].length; j++){
      arrPerson.push(tradeActivity[i][j].match(/[A-Z]/gi).join(""));
      arrMoney.push(tradeActivity[i][j].match(/[\+\-\d]+/g));

      // console.log(tradeActivity[i][j][0]);

    }
  }
  // console.log(arrPerson)
  // console.log(arrMoney)
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  
  for(let i = 0; i < arrPerson.length; i++){
    if(arrPerson[i] == "JeffBezos" ){
      let operator = arrMoney[i][0][0];
      let persen = arrMoney[i][0].slice(1);
      duitJeff = operators[operator](duitJeff, ((parseInt(persen) * duitJeff) / 100)) ;
      arrPerson[i] = {
        name : 'Jeff Bezos',
        deposit : duitJeff ,
        owner : "Amazon"
      }
    } else if(arrPerson[i] == "LarryPage" ){
      let operator = arrMoney[i][0][0];
      let persen = arrMoney[i][0].slice(1);
      duitLarry = operators[operator](duitLarry, ((parseInt(persen) * duitLarry) / 100)) ;
      arrPerson[i] = {
        name : 'Larry Page',
        deposit : duitLarry ,
        owner : "Google"
      }
    } else if(arrPerson[i] == "JackMa" ){
      let operator = arrMoney[i][0][0];
      let persen = arrMoney[i][0].slice(1);
      duitJack = operators[operator](duitJack, ((parseInt(persen) * duitJack) / 100)) ;
      arrPerson[i] = {
        name : 'Jack Ma',
        deposit : duitJack ,
        owner : "Alibaba"
      }
    }
  }
  return arrPerson;
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