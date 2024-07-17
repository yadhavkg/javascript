a=[];
n= prompt("enter a number");
for(i=1;i<=n;i++)
    {
        if(i%5==0 && i%3==0)
            {
                a.push("fizzbuzz")
            }
        else if(i%5==0)
            {
                a.push("fizz")
            }
        else if(i%3==0)
            {
                a.push("buzz")
            }
        else
            {
                a.push(i)
            }        
    }
    console.log(a);