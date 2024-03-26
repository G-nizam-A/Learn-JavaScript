function handleConvert() {
    let cov = [82.92, 88.88, 103.0, 22.01];
    let rup = document.querySelector("input");
  
    let res = cov.map(function (val) {
      return parseFloat(rup.value) / val;
    });
    console.log(res);
    const currencyIds = ["#dollar", "#euros", "#pounds", "#riyal"];
    for (let i = 0; i < currencyIds.length; i++) {
      document.querySelector(currencyIds[i]).textContent = res[0].toFixed(2);
    }
  
    for (let nn in currencyIds) {
      document.querySelector(nn).textContent = res[0].toFixed(2);
    }
    for (let nn1 of currencyIds) {
      document.querySelector(nn1).textContent = res[0].toFixed(2);
    }
    currencyIds.forEach(function (id, index) {
      document.querySelector(id).textContent = res[0].toFixed(2);
    });
  
    currencyIds.map(function (id) {
      document.querySelector(id).textContent = res[0].toFixed(2);
    });
  }
  //     document.querySelector('#dollar').textContent = res[0].toFixed(2);
  //     document.querySelector('#euros').textContent = res[1].toFixed(2);
  //     document.querySelector('#pounds').textContent = res[2].toFixed(2);
  //     document.querySelector('#riyal').textContent = res[3].toFixed(2);
  