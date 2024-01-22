import { createTable } from "./table.js";
import { users, userFetch } from "../fetch.js";

let tableUsers;
export const getUsers = () => {
  // try {
  //   const apiRequest = await fetch(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   users = await apiRequest.json();
  // userFetch();
  tableUsers = document.getElementById("users");

  users.map((usr) => {
    tableUsers.innerHTML += createTable(usr);
  });
  // } catch (err) {
  //   console.error("Errore" + err);
  // }

  // const searchResult = () => {
  //   const valueSearchBar = searchBar.value.toLowerCase();
  //   const valueSelect = selectOption.value;

  //   searchButton.onclick = () => {
  //     if (valueSearchBar === "") {
  //       alert("Devi compilare entrambi i campi");
  //     }
  //   };
  //   // Filter users
  //   const filteredUsers = users.filter((user) => {
  //     return user[valueSelect].toLowerCase().includes(valueSearchBar);
  //   });

  //   // Clear the table content
  //   tableUsers.innerHTML = "";

  //   // Populate the table with filtered results
  //   filteredUsers.map((usr) => {
  //     tableUsers.innerHTML += createTable(usr);
  //   });
  // };
};

export const searchResult = () => {
  const valueSearchBar = searchBar.value.toLowerCase();
  const valueSelect = selectOption.value;

  searchButton.onclick = () => {
    if (valueSearchBar === "") {
      alert("Devi compilare entrambi i campi");
    }
  };
  // Filter users
  const filteredUsers = users.filter((user) => {
    return user[valueSelect].toLowerCase().includes(valueSearchBar);
  });
  console.log(filteredUsers);
  // Clear the table content
  tableUsers.innerHTML = "";

  // Populate the table with filtered results
  filteredUsers.map((usr) => {
    tableUsers.innerHTML += createTable(usr);
  });
};
const selectOption = document.getElementById("select_options");
const searchBar = document.getElementById("searchField");
const searchButton = document.getElementById("Search");

// Add event listener to search button
searchButton.addEventListener("click", searchResult);

// Add event listener to search bar
searchBar.addEventListener("change", searchResult);
