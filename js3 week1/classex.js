document.addEventListener("DOMContentLoaded", fetchedUser);

function fetchedUser(data) {
  console.log(data);
}
const fetchedUser = fetch("https://jsonplaceholder.typicode.com/users");
return fetchedUser.json().then((response) => response.json());

function updateDOM(users) {}
