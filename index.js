// https://jsonplaceholder.typecode.com/users
const getUsers = async () => {
  try {
    const apiRequest = await fetch(
      "https://jsonplaceholder.typecode.com/users"
    );
    let resp = await queryUser.json();
    console.log(resp);
  } catch (err) {
    console.error("Errore" + err);
  }
};
getUsers();
