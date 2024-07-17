a=["hello",12,54,true,null,4,"aljo"];
console.log(a.length);
console.log(a[4]);
console.log(a.indexOf("aljo"));
// a.push(false)
// console.log(a);
// a.pop();
// console.log(a);
a.splice(a.indexOf(54),1);
console.log(a);
// a.shift();
// console.log(a);