var a=[
    {name:"aljo",age:20},
    {name:"sarath",age:20},
    {name:"jerike",age:20},
    {name:"yadhav",age:20},
]
console.log(a);
 b=JSON.stringify(a);
  console.log(b);
 c=JSON.parse(b);
 console.log(c);
for(i=0;i<c.length;i++)
    {
       
        console.log(c[i].name); 
    }