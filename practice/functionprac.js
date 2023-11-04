const update=()=>
{
    let obj={
        kiran:100,
        shubhani:200
    }
    return obj;
}
let c=update();
for(a in c)
{
    console.log(`hello mr.${a} and marks are ${c[a]}`);
}