// Set Time out Example
console.log("Start");

setTimeout(()=>{
    console.log("Loading...");
},3000);

console.log("Stop");

function Example-Arrow and Normal Function

const PakStates = (first,second,third,fourth,PunjabCities)=>{
    console.log("Pakistan have following states " + first+ " "+ second+ " " + third+ " " +fourth);
}
PakStates("Punjab","Sindh","KPK","Balochistan");

function PunjabCities(one,two,three){
    console.log("Famous Cities of Punjab are : "+ one+" " + two+" " + three);
}
PunjabCities("Lahore","Gujranwala","Faisalabad");

// Callback examples
const pakFamousCities=(Capital,Punjab,KPK,Sindh,Balochistan)=>{
    console.log("Capital of Pakistan is :" + Capital);
    console.log("Famouscities of Pakistan are :" + Punjab + ":" + Sindh +":"+ KPK +":"+ Balochistan);
    Punjab();
    KPK();
    Sindh();
    Balochistan();
}
pakFamousCities("Islamabad",
function Punjab(){
    console.log("Famous Cities of Punjab are : Lahore, Faisalabad, Gujranwala");
},
function KPK(){
    console.log("Famous Cities of KPK are : Peshawar, Mardan, Abbottabad");
},
function Sindh(){
    console.log("Famous Cities of Sindh are : Karachi, Hyderabad, Sukkur");
},
function Balochistan(){
    console.log("Famous Cities of Balochistan are : Quetta, Gwadar, Khuzdar");
});
function India(){
    console.log("Famous Cities of India are : Delhi, Mumbai, Bangalore");
}
India();

// Prmoises Examples
function login(username,password)
{
    if(username==="admin" && password==="1234")
    {
        console.log("Login Successful");
    }
    else
    {
        console.log("Login Failed");
    }
}
login("admin","123456");

function login(username,password)
{
    return new Promise((resolve,reject)=>{
        if(username === "admin" && password === "1234")
        {
            resolve("Login Successful");
        }
        else
        {
            reject("Login Failed");
        }
    })
}
login("admin","1234")
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});