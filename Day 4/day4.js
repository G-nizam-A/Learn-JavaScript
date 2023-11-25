if(NaN){ 
    console.log('true');
} else {
    console.log('failure');
}

// null = 0
// true = 1
// false = 0

// undefined, false, null, 0, "", '', NaN => will take it as failure 


a = 1; 
b = '1';
if(a === b){
    console.log('equal');
} else {
    console.log('not equal');

}


a = 10;
console.log(a++);
console.log('a',a);
b = '10a';
c = +b+ b
console.log(c);
console.log(typeof c);
console.log(typeof +c);

////type conversion
// //number to string
aa = 100;
console.log(typeof aa);
console.log(typeof String(aa));
console.log(typeof aa.toString())


// //string to number
bb = '100';
console.log(typeof bb);
console.log(typeof Number(bb));
console.log(typeof +bb);


bb1 = ""
console.log(typeof bb1);
console.log(typeof Number(bb1));
console.log(typeof +bb1);
console.log(+bb1);

cc = "4.45fggf4567u" 
console.log(typeof cc);
console.log(typeof parseFloat(cc));   
console.log(parseFloat(cc).toFixed(4));   


dd = '4.567abcdefgh'
console.log(typeof cc);
console.log(cc);
console.log(parseInt(cc)); ///


// //boolean to string
ee = true 
console.log(ee);
console.log(typeof ee);
console.log(typeof String(ee));
console.log(typeof ee.toString())
console.log(ee.toString());


// //boolean to number
ff = true 
console.log(ff);
console.log(typeof ff);
console.log(typeof Number(ff));
console.log(typeof +ff)
console.log(Number(ff));

