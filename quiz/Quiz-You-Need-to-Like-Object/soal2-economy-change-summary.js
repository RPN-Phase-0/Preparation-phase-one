const splitStr = (arr) => {
    const result = [];

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        
        if (arr[i + 1] == "+" || arr[i + 1] == "-") {
            result.push(str);
            str = "";
        }

        if (arr[i + 1] == "%") {
            result.push(Number(str) / 100);
            break;
        }
    }

    return result;
}

function economyChangeSummary(tradeActivity) {
    let duitJeff = 100000;
    let duitLarry = 95000;
    let duitJack = 90000;

    if (!tradeActivity.length) {
        return null;
    }

    const trader = {
        "Jeff Bezos": { money: duitJeff, company: "Amazon" },
        "Larry Page": { money: duitLarry, company: "Google" },
        "Jack Ma": { money: duitJack, company: "Alibaba" }
    };

    const result = [];

    for (const changes of tradeActivity) {
        for (const detail of changes) {
            const [ name, diff ] = splitStr(detail);

            const deposit = trader[name].money += diff * trader[name].money;

            result.push({ name, deposit, owner: trader[name].company });
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
