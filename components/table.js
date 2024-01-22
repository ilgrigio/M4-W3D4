export const createTable = (usr) => {
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
