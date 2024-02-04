let a = [10,20,30];
console.log('a',a);
let b = a;
console.log('b',b);
let c = b;
console.log('c',c);
c.push(40);
console.log('a',a);
console.log('b',b);
console.log('c',c);


// let aa = [1,2,3];
// let bb = ['js',...aa,'dh',10]; //spread operator
// console.log('aa',aa);
// console.log('bb',bb);
// bb.push(40);
// console.log('aa',aa);
// console.log('bb',bb);


// const person = { name: 'John', age: 20, status:'in relation'};
// const updatedPerson = { ...person, age:21,status:'unmarried' };
// const updatedPerson1 = { ...updatedPerson, age:23,status:'married' };
// const updatedPerson2 = { ...updatedPerson1, status:'father' };
// const updatedPerson3 = { ...updatedPerson2, name:'alex' };
// console.log(person);
// console.log(updatedPerson);
// console.log(updatedPerson1);
// console.log(updatedPerson2);
// console.log(updatedPerson3);



function naqhi(a,b,c,d,...rest){
  console.log(a,b,c,d);
  console.log(rest);
  let spread = [...rest,"jjj"];
  console.log(spread);
}
naqhi('add','mul','div','cooking','listen','eating','singing','riding','arguing')


// let name1 = "NIZAM";
// let name2 = "naqhi";
// console.log(name1);
// console.log(name2);
// let sp = [...name1, ...name2];
// console.log(sp);



// let names = ['akmal','naqhi','ashifya','afreen','punith','bharat'];
// console.log(names);
// let a = names[0];
// let b = names[1];
// let c = names[2]
// let d = names[2]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log("------Destructuring-----");
// let [a,b,c,d,...rest] = names;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(rest);



// let obj = { fname:'naqhi', age:24, add:"mang",  sal:"3k" }

// console.log(obj.fname);
// console.log(obj.age);
// console.log(obj.add);
// console.log(obj.sal);

// let {fname,age,...rest} = obj;
// console.log(fname);
// console.log(age);
// console.log(rest);
const [firstName, setFirstName] = useState('hello');



// ------> example snippet starts (other way of mapping)<------
// let aa = [1,2,3,4];

// // aa.push(10);
// let bb = [...aa];

// console.log("aa",aa);
// console.log("bb",bb);

// // bb.push(11,12);
// bb.pop();

// console.log("aa",aa);
// console.log("bb",bb);

// let aa = [1,2,3,8,"o",8];

// for(let i =0;i<aa.length;i++){
//     console.log(aa[i]);
// }

// for(let i of aa){
//     console.log(i);
// }   //array elements

// for(let i in aa){
//     console.log(i);
// } //elements index

// console.log(aa[0]);
// console.log(aa[1]);
// console.log(aa[2]);

// ------> example snippet ends  <------

// ------> forEach <------
// const numbers1 = ["a","b","c"];
// numbers1.forEach(function(val,ind){
//     console.log(ind,":",val);
// });

// ------> high order functions <------
// ------> map <------
// let aa = function (value){
//     return value
// }
// const numbers = [1, 2, 3];
// const doubled = numbers.map(aa);
// console.log(doubled); // Output: [1, 2, 3]

// const mapnum = [1, 2, 3];
// const map1 = mapnum.map(function(value){
//     return value *2;
// });
// console.log("map",map1); // Output: [2, 4, 6]

// ------> example snippet starts (other way of filtering) <------

// let sum =(a)=> (a%2 == 0)? console.log("even") : console.log("odd");
// sum(21);

// let aa = [10, 20, 30, 40];
// function sum1() {
//     for (let nn of aa) {
//         (nn%2 == 0)? console.log("even") : console.log("odd");
//      }
// }
// sum1();

// ------> example snippet ends <------

// ------> filter <------
// const filtnum = [1, 2, 3,39,20,1,3,4,6,5];
// const filt = filtnum.filter(function(value){
//     return value%2 == 0;
// });
// console.log("filter: ",filt); // Output: [2, 4, 6]

// ------> example snippet starts (other way of reducing) <------
// let aa = [1, 2, 3, 4, 5];
// let num = 0;
// for (let n of aa) {
//     num = num + n;
// }
// console.log(num);

// let sum =(a,b,c)=> a*b*c;
// console.log(sum(10,2,2));

// ------> example snippet ends <------

// ------> reduce <------
// const redunum = [1, 2,7];
// const redu = redunum.reduce(function(valu,num){
//     return valu + num
// },0);
// console.log("reduce:",redu); // Output: [2, 4, 6]

// ------> filter & map <------

// const filtnum = [1, 2, 3,39,20,1,3,4,6,5];
// const filt = filtnum.filter(function(value){
//     return value%2 === 0;
// }).map(function(value){
//     return value *2;
// });
// console.log("filter & map: ",filt); // Output: [2, 4, 6]

// ------> assigning array to a string (for reduce example) <------
// let a  = "10";
// console.log(a);
// a = ["10"];
// console.log(a);
// a.push("10");
// console.log(a);

// ------> using only reduce instead of filter & map <------

// let a  = "10";
// console.log(a);
// a = ["10"];
// console.log(a);
// a.push("10");
// console.log(a);

// const reduc = [1, 2, 3, 39, 20, 1, 3, 4, 6, 5];
// const result = reduc.reduce(function (val, num) {
//     if (num %2 === 0) { val.push(num * 2) }
//      return val;
// }, []);

// console.log("reduce: ", result);
