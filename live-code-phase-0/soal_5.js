function piramid2(num) {
    for (let i = num; i >= 1; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += i;
        }

        console.log(row);
    }

    for (let i = 2; i <= num; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += i;
        }

        console.log(row);
    }
  }
  
  console.log(piramid2(5))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */