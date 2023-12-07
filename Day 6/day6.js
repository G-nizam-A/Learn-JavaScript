function a(){
  console.log('A');
}
setTimeout(function(){
  console.log('B')
},0);

a();

console.log('C')

Promise.resolve().then(()=>console.log('D'));

