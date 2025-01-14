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
    let duitJeff = 100000
    let duitLarry = 95000
    let duitJack = 90000
    const dataTrade = [];
    for (let i = 0; i < tradeActivity.length; i++) {
        const element = tradeActivity[i];
        for (let j = 0; j < element.length; j++) {
            const element2 = element[j];
            let name = '';
            let operation = '';
            let disc = '';
            let company = '';
            for (let k = 0; k < element2.length - 1; k++) {
                const element3 = element2[k];
                if (element3 === '+' || element3 === '-') {
                    operation += element3
                } else if ((Number(element3) || element3 === '0' || element3 === '%') && element3 !== ' ') {

                    disc += Number(element3) !== NaN ? Number(element3) : element3;
                } else if (element3 === '%') {
                    disc += element3;
                } else {
                    name += element3 !== '0' ? element3 : '';
                }
            }
            switch (name) {
                case 'Jeff Bezos':
                    company = 'Amazon';
                    additional = (disc / 100) * duitJeff;
                    if (operation === '+') {
                        duitJeff += additional
                    } else {
                        duitJeff -= additional
                    }
                    dataTrade.push({ name: name, deposit: duitJeff, company })
                    break;
                case 'Larry Page':
                    company = 'Google';
                    additional = (disc / 100) * duitLarry;
                    if (operation === '+') {
                        duitLarry += additional
                    } else {
                        duitLarry -= additional
                    }
                    dataTrade.push({ name: name, deposit: duitLarry, company })
                    break;
                case 'Jack Ma':
                    company = 'Alibaba'
                    additional = (disc / 100) * duitJack;
                    if (operation === '+') {
                        duitJack += additional
                    } else {
                        duitJack -= additional
                    }
                    dataTrade.push({ name: name, deposit: duitJack, company })
                    break;
                default:
                    break;
            }
        }
    }
    return dataTrade
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