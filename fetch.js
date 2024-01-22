import { getUsers } from "./components/users.js";
export let users = [];

export const userFetch = async () => {
  try {
    const apiRequest = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = await apiRequest.json();
    getUsers();
  } catch (err) {
    console.error("Errore" + err);
  }
};
