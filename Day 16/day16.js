let aa = ["Ramesh",29,true,{name:'john'}, ['arr1','arr2']];

//         0      1    2     3
let a = ["Ramesh",29,200000,"Dev"];

let a0 = a[0];
let a1= a[1];
let a2 = a[2];
let a3 = a[3];

console.log(`Name: ${a0}| Age: ${a0} | Salary: ${a0}| Desg: ${a0}`);
console.log("Name:",a0,"| Age:",a1,"| Salary:",a2,"| Desg:",a3);

//  0      1     2     3
let [name, age, ...rest] = a;

console.log(rest);

function sum(n1, n2, n3, ...n) {
  let tl = n1 + n2 + n3;
  console.log(tl);
  console.log(n);
}

// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [...rest] = values;
// console.log(rest);
// sum(...rest);

// let aa = [1,2,3,4];
// let dd= 'gf';
// console.log("aa",aa);
// aa.push(10,11);
// let bb = [...aa,dd];
// console.log("aa",aa);
// aa.pop();
// console.log("aa",aa);
// console.log("bb",bb);

// bb.push(11,12);
// bb.pop();

// console.log("aa",aa);
// console.log("bb",bb);

// let a0 = a[0];
// let a1 = a[1];
// let [a0,...ff] = a;
// let [...ii] = aa;
// console.log(ii[2]);

function call(a,b,...rr){
    console.log(a+b+rr);
}
call(1,2,35,4,5,6,7,8,9,93);

// let gg[0] = 10;
// let o[1] =20;

let arr = [10,20,30,40,50];

let bb = [1,2,3,4];
let cc = [6,8,...bb,3,6,7];
console.log(bb);
console.log(cc);
bb.pop();

console.log(bb);
console.log(cc);

let o1 = {
    new1: {
        name: 'nn1', age: 20, address: 'man1'
    },
    new2: {
        name: 'nn2', age: 21, address: 'man2'
    },
    new3: {
        name: 'nn3', age: 22, address: 'man3'
}
};

// let {new3,new2,new1}=o1;
// console.log(new1)

let oob = [
    { name: 'nn1', age: 20, address: 'mang', sal: 5000 },
    { name: 'nn2', age: 21, address: 'mang', sal: 5000 },
    { name: 'nn3', age: 22, address: 'mang', sal: 5000 },
    { name: 'nn4', age: 23, address: 'bang', sal: 5000 },
    { name: 'nn5', age: 24, address: 'mang', sal: 5000 },
    { name: 'nn6', age: 25, address: 'bang', sal: 5000 },
];

// for(let i = 0;i<o.length;i++){

// }

console.log(o);
let [name1,name2,name3,...or] = oob;

console.log(or);

let ad = o.filter((val)=> (val.address === "mang")).map((val) => val.sal + 1000);
console.log(ad);

// let ad1 = o.reduce((val,cur)=> {(cur.address==="mang")?val.push(cur.sal+1000):null; return val},[]);
// console.log(ad1);

// let ad1 = o.reduce((val,cur)=> {
//     (cur.address==="mang")?val.push(cur.sal+1000):null;
// return val
// },[]);
// console.log(ad1)

// const ad1 = o.reduce(function (val, ind,arr) {
//     if(ind.address ==="mang"){
//         val.push(ind.sal +1000);
//     }
//     return  val;
// },[]);
// console.log(ad1)

let {new1, new2, new3} = o;
console.log(new1);
o.new = "hello"
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

  console.log(person);
