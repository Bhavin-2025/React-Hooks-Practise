import { useState, useMemo } from "react";

const users = [
  {
    id: 1,
    name: "Bhavin",
    age: 21,
  },
  {
    id: 2,
    name: "Abhinn",
    age: 20,
  },
  {
    id: 3,
    name: "Divit",
    age: 22,
  },
  {
    id: 4,
    name: "Bhavya",
    age: 22,
  },
  {
    id: 5,
    name: "Bhavlabya",
    age: 22,
  },
];

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
  return users.filter(user => {
    console.log("Filtering user:", user.name); //  user is defined here
    return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}, [searchTerm]);


// const filteredUsers = users.filter(user => {
//   console.log("Filtering user:", user.name); //  Will log for every user, every render
//   return user.name.toLowerCase().includes(searchTerm.toLowerCase());
// });

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
