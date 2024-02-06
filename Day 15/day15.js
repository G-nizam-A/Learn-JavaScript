const openAmtData = [  {
    "id": 1,
    "date_create": "2024-02-01",
    "opening_amount": 254084
  },]
const reportData = [
 
  {
    "driver_id": 1,
    "driver_name": "NIZAM",
    "trips": [
      {
        "trip_id": 18,
        "driver_id": 1,
        "vehicle_id": 1,
        "opening_km": 0,
        "trip_date": "2024-02-01",
        "closing_km": 0,
        "total_run": 0,
        "fuel_liters": 0,
        "fuel_amount": 0,
        "totalOfAllItems": 121,
        "totalCash": 0,
        "credit_name": "Adhil",
        "items": [
          {
            "item_id": 13,
            "product_id": 1,
            "total": 121
          }
        ],
        "balances": [
          {
            "balance_id": 13,
            "balance_title": "Cash",
            "price": 11,
            "remark": "online"
          },
          {
            "balance_id": 14,
            "balance_title": "Credit",
            "price": 110,
            "remark": "credit"
          }
        ]
      }
    ]
  }
]

const filteredData = reportData.reduce((result, driver) => {
  if (!driver.trips) return result;

  driver.trips.forEach((trip) => {
      if (trip.credit_name && trip.balances) {
          const creditBalance = trip.balances.find((balance) => balance.balance_title === "Credit");
          if (creditBalance) {
              const act_amount = trip.totalOfAllItems;
              const amt_recvd = trip.totalOfAllItems - creditBalance.price;
              result.push({
                  driver_name: driver.driver_name,
                  trip_id: trip.trip_id,
                  credit_name: trip.credit_name,
                  price: creditBalance.price,
                  remark: creditBalance.remark,
                  act_amount: act_amount,
                  amt_recvd: amt_recvd
              });
          }
      }
  });

  return result;
}, []);

// const totalAllItems = reportData.reduce((acc, driver) => acc + driver.trips.reduce((acc, trip) => acc + trip.items.reduce((acc, item) => acc + item.total, 0), 0), 0) + (openAmtData[0]?.opening_amount) + filteredData.reduce((acc, item) => acc + item.act_amount, 0);

// const totalCash = reportData.reduce((acc, driver) => acc + driver.trips.reduce((acc, trip) => acc + trip.totalCash, 0), 0);

const totalAmount = reportData.reduce((acc, driver) => acc + driver.trips.reduce((acc, trip) => acc + trip.items.reduce((acc, item) => acc + item.total, 0) - trip.balances.filter(balance => ['Online', 'Paytm', 'Expence'].includes(balance.balance_title)).reduce((acc, balance) => acc + balance.price, 0), 0), 0) + (openAmtData[0]?.opening_amount) + filteredData.reduce((acc, item) => acc + item.amt_recvd, 0);

// const remarksMap = reportData.flatMap(driver => driver.trips.flatMap(trip => trip.balances.filter(balance => ['Online', 'Paytm', 'Expence'].includes(balance.balance_title)).map(balance => balance.remark || ' ')));

// const totalBalanceDetails = reportData.flatMap(driver => driver.trips.flatMap(trip => trip.balances)).reduce((acc, balance) => {
//   acc[balance.balance_title] = (acc[balance.balance_title] || 0) + balance.price;
//   return acc;
// }, {});

// console.log('filteredData:', filteredData);
// console.log('totalAllItems:', totalAllItems);
// console.log('totalCash:', totalCash);
console.log('totalAmount:', totalAmount);
// console.log('remarksMap:', remarksMap);
// console.log('totalBalanceDetails:', totalBalanceDetails);