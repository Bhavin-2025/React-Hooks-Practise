import { useState, useMemo } from "react";

export default function AgeFilterApp() {
  
  const [users] = useState([
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Charlie", age: 40 },
    { id: 4, name: "David", age: 22 },
    { id: 5, name: "Eva", age: 31 },
  ]);

  
  const [minAge, setMinAge] = useState(30);

  
  

  
  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > minAge);
  }, [users, minAge]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Age Filter</h1>

      <label>
        Show users older than:{" "}
        <input
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(Number(e.target.value))}
        />
      </label>

    

      <h2>Filtered Users:</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}
