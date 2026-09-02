const button = document.getElementById("loadbtn");
const userList = document.getElementById("users");
button.addEventListener("click", () => 
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users)=>
    {
        userList.innerHTML = "";
        users.forEach((user) => 
        {
            userList.innerHTML += `<li>${user.name}</li>`;
        });
    })
    .catch((error) => {
        console.log("Error fetching users:", error);
    });
});