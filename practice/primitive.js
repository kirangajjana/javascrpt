// primitive datatypes
let a=null;
let b=23;
let c="kiran gajjana";
let d=Symbol("hello kiran gajjana");
let e=true;
let f=BigInt("256789");
let g=undefined;
console.log(a,b,c,d,e,f,g);
// objects are non primitive datatypes
let mtech={
    "abhishek":1,
    "deepak":2,
    "saket":3,
    "yetendra":4,
    "shubhani singh":5,
    "suman som":6,
    "soham biswas":7,
    "kiran gajjana":8,
    "dorothy barman":9,
    "sreyashi karmakar":10,
    "anurag maurya":11,
    "bipal khanal":12
}
let nitsikkim=mtech;
console.log(nitsikkim);
console.log(mtech);
mtech["anurag maurya"]=20;
console.log(mtech);
console.log(nitsikkim);