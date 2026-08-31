//Set Time out Example
// console.log("Start");

// setTimeout(()=>{
//     console.log("Loading...");
// },3000);

// console.log("Stop");

//Call back function Example

const PakStates = (first,second,third,fourth)=>{
    console.log("Pakistan have following states " + first+ " "+ second+ " " + third+ " " +fourth);
}
PakStates("Punjab","Sindh","KPK","Balochistan");

function PunjabCities(one,two,three){
    console.log("Famous Cities of Punjab are : "+ one+" " + two+" " + three);
}
PunjabCities("Lahore","Gujranwala","Faisalabad");