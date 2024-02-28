

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [...rest] = values;
console.log(rest);
sum(...rest);

let aa = [1,2,3,4];
let dd= 'gf';
console.log("aa",aa);
aa.push(10,11);
let bb = [...aa,dd];
console.log("aa",aa);
aa.pop();
console.log("aa",aa);
console.log("bb",bb);

bb.push(11,12);
bb.pop();

console.log("aa",aa);
console.log("bb",bb);
