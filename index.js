const init = () => {
  // to do
};
init();

let users = [];
let tableUsers;

const createTable = (usr) => {
  return `
    <tr>
        <td id="${usr.id}">${usr.id}</td>
        <td id="${usr.name}">${usr.name}</td>
        <td id="${usr.username}">${usr.username}</td>
        <td id="${usr.phone}">${usr.phone}</td>
        <td id="${usr.email}">${usr.email}</td>
    </tr>
  `;
};

const getUsers = async () => {
  try {
    const apiRequest = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = await apiRequest.json();

    tableUsers = document.getElementById("users");

    users.map((usr) => {
      tableUsers.innerHTML += createTable(usr);
    });
  } catch (err) {
    console.error("Errore" + err);
  }

  const searchResult = () => {
    const valueSearchBar = searchBar.value.toLowerCase();
    const valueSelect = selectOption.value;

    // Filter users
    const filteredUsers = users.filter((user) => {
      return user[valueSelect].toLowerCase().includes(valueSearchBar);
    });

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
  searchBar.addEventListener("input", searchResult);
};

getUsers();
