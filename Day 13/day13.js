// let person= [1,2,3,4];
// person[0] = "nn"
// let a=[...person, 5];
// console.log(person);
// console.log(a);
// person.pop();
// // person.unshift('n')
// console.log(person);
// console.log(a);

// let profie={name:'naqhi', age:21,sal:20000,add:'mglore'};
// let profile1={...profie, age:22};
// let profile2={...profile1, age:23, sal:profie.sal+10000};
// let profile3={...profile2,add:'banglore'};
// let profile4={...profile3, age:24, sal:profile3.sal+20000};

// console.log(profie);
// console.log(profile1);
// console.log(profile2);
// console.log(profile3);
// console.log(profile4);


// let h=[10,20,30,40,50]
// let [a,b,c,d,...lol]= h
// console.log(a);
// console.log(b);
// console.log(lol);

// let nizam={name:'naqhi', age:23, design:'ediot',sal:10000000,add:'mng'};
// let {age,name,design,...rest}=nizam;
// console.log(name)
// console.log(age)
// console.log(rest.sal)


function naqhi(a,b,c,d,...rest){
  console.log(a,b,c,d);
  console.log(rest);
  let spread = [...rest,"jjj"];
  console.log(spread);
}
naqhi('add','mul','div','cooking','listen','eating','singing','riding','arguing')
