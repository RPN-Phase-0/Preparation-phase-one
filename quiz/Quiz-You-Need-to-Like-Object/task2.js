function economyChangeSummary(tradeActivity) {
    let account = {
        "Jeff Bezos": { deposit: 100000, owner: 'Amazon' },
        "Larry Page": { deposit: 95000, owner: 'Google' },
        "Jack Ma": { deposit: 90000, owner: 'Alibaba' }
    };

    let result = [];

    for (let i = 0; i < tradeActivity.length; i++) {
        for (let j = 0; j < tradeActivity[i].length; j++) {
            let transaction = tradeActivity[i][j];
            let name = "";
            let percent = "";
            let sign = 1;

            for (let k = 0; k < transaction.length; k++) {
                if (transaction[k] === '+') {
                    name = transaction.substring(0, k);
                    percent = transaction.substring(k + 1, transaction.length - 1);
                    break;
                } else if (transaction[k] === '-') {
                    name = transaction.substring(0, k);
                    percent = transaction.substring(k + 1, transaction.length - 1);
                    sign = -1;
                    break;
                }
            }

            account[name].deposit += sign * (account[name].deposit * (parseFloat(percent) / 100));
            result.push({
                name: name,
                deposit: account[name].deposit,
                owner: account[name].owner
            });
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

console.log(economyChangeSummary([
    ['Jeff Bezos-10%']
]));
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/
