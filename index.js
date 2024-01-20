let htmlUsers = "";
let users = [];
const getUsers = async () => {
  try {
    const apiRequest = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = await apiRequest.json();
    console.log(users);
    users.map((usr) => {
      console.log(usr);
      htmlUsers += `
      <tr>
          <td id="${usr.id}">${usr.id}</td>
          <td id="${usr.name}">${usr.name}</td>
          <td id="${usr.username}">${usr.username}</td>
          <td id="${usr.phone}">${usr.phone}</td>
          <td id="${usr.email}">${usr.email}</td>
      </tr>
                  `;
      document.getElementById("users").innerHTML = htmlUsers;
    });
  } catch (err) {
    console.error("Errore" + err);
  }
  // Created function to cicling searchbar and select value
  const searchResult = () => {
    const valueSearchBar = searchBar.value;
    const valueSelect = selectOption.value;

    let filterUsers = users.filter((user) => {
      user[valueSelect]
        .toLowerCase()
        .indexOf(valueSearchBar.toLowerCase().trim() !== -1);

      // user[valueBar].indexOf();
      console.log(user[valueSelect]);
    });
  };
  // Create variable to select field
  const selectOption = document.getElementById("select_options");
  const searchBar = document.getElementById("searchField");
  const searchButton = document.getElementById("Search");
  // Add event to search button
  searchButton.addEventListener("click", searchResult);
};
getUsers();
