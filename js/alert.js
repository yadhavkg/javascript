let a=[];
while(true)
    {
        choice=prompt("(1) Add Task\n\n(2) Display Task\n\n(3) Edit Task\n\n(4) Delete Task\n\n(5) Exit\n\n ENTER YOUR CHOICE:\n");
    if(choice==1)
        {
            b=prompt("ENTER YOUR NAME:")
            x=prompt("ENTER YOUR NUMBER:");
            a.push({name:b,number:x});
            
          
        }
    else if(choice==2)
        {
            str=' '
            for(i=0;i<a.length;i++)
                {
                    str+=`${i+1}) ${a[i].name},${a[i].number}\n`;
                }
                alert(str);
        } 
    else if(choice==3)
        {
            c=prompt("ENTER THE INDEX TO BE EDITED");
            d=prompt("");
            a[c-1]=d;

        }
    else if(choice==4)
        {
            e=prompt("ENTER THE INDEX TO BE DELETED");
            a.splice(e-1,1);
        }       

    else if(choice==5)
        {
            exit;
        }
    else 
        {
          alert("invalid choice");  
        }
    }    
           