let users = [];
const getUsers = async () => {
  try {
    const apiRequest = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    let users = await apiRequest.json();
    console.log(users);
  } catch (err) {
    console.error("Errore" + err);
  }
};
getUsers();
