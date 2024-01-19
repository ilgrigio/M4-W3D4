let htmlUsers = [];
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
  users.map((urs) => {
    htmlUsers += `<div class="row">
            <div class="col">
                <ol>
                    <li id="${urs.id}"></li>
                    <li id="${urs.name}"></li>
                    <li id="${urs.username}"></li>
                    <li id="${urs.phone}"></li>
                    <li id="${urs.email}"></li>
                </ol>
            </div>
        </div>`;
    document.getElementById("users").innerHTML = htmlUsers;
  });

  let mainDiv = document.createElement("div");
  mainDiv.innerText = "This is a paragraph";
  document.body.appendChild(mainDiv);
};
getUsers();
