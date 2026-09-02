// 1ST TYPE
function sayHello(){
    console.log("Hello");
}
sayHello();

// // 2ND TYPE
function sayHello1(){
    return "Hello1";
}
const Hello1=sayHello1();
console.log(Hello1);

// 3RD TYPE
async function sayHello2(){
    return "Hello2";
}
sayHello2()
.then((msg) => console.log(msg))
.catch((err) => console.log(err));

// 4th Type
async function sayHello3(){
    return "Hello3";
}
const data = await sayHello3();
console.log(data);

function getUser()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User Loaded");
        },3000)
    })
}
async   function loadUser(){
    const data = await getUser();
    console.log(data);
}
console.log("1");
loadUser();
console.log("2");

// 5th Type
async function getpost()
{
    try
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log("data is :",data.length)
    }
    catch(error)
    {
        console.log(error);
    }
}
getpost();