let month=1;
switch(month)
{
    case 1:
        {
            console.log("january");
            break;
        }
    case 2:
        {
            console.log("feb");
            break;
        }
    case 3:
        {
            console.log("march");
            break;
        }
    case 4:
        {
            console.log("april");
            break;
        }
    case 5:
        {
            console.log("may");
            break;
        }
    case 6:
        {
            console.log("june");
            break;
        }
    case 7:
        {
            console.log("july");
            break;
        }
    case 8:
        {
            console.log("august");
            break;
        }
    case 9:
        {
            console.log("september");
            break;
        }
    case 10:
        {
            console.log("october");
            break;
        }
    case 11:
        {
            console.log("november");
            break;
        }
    case 12:
        {
            console.log("december");
            break;
        }
    }
    //object 
    const b={
        name:"kiran gajjana",
        age:24,
        college:"national institute of technology sikkim"
    }
    if(Object.keys(b).length===3)
    {
        console.log("hey welcome to kiran gajjana");
    }
    else{
        console.log("hey now you dont have any chances");
    }
    //null collesion operator
    let a=null??null??null;
    console.log(a);