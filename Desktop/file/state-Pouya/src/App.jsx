import { useState, useEffect } from "react";
import "./App.css";
import { useAxios } from "./hooks/useAxios.js";
function App() {
  
  const [users, setUsers] = useState([]);
  useAxios("http://localhost:3000/users", setUsers);

  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
