const fun=()=>
{
    let sum=0;
    let count=0;
    for(let i=0;i<=4;i++)
    {
        sum+=i;
        count=count+1    
    }
    return sum/count;
}
let a=fun();
console.log(`average of the above 5 elements are ${a}`);
console.log("the above code has been exicuted");