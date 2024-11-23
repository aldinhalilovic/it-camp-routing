import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/users");

      const users = await data.users;

      setUsers(users);
    } catch (error) {
      console.error("Error while fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            width: 350,
            height: 500,
            backgroundColor: "beige",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <h3>Ime:</h3>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <h3>Godine:</h3>
            <h1>{user.age}</h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <h3>Visina:</h3>
            <h1>{user.height} cm</h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <h3>Autorizacija:</h3>
            <h1>{user.role}</h1>
          </div>

          <div
            style={{
              fontSize: 10,
            }}
          >
            <h1>{user.email}</h1>
          </div>

          <div
            onClick={() => navigate(`/profile/${user.id}`, { state: user })}
            style={{
              margin: "50px auto 0",
              width: "max-content",
              padding: "2px 15px",
              backgroundColor: "darkgreen",
              color: "white",
              cursor: "pointer",
              fontSize: 18,
              borderRadius: 8,
            }}
          >
            <p>Vidi detalje</p>
          </div>
        </div>
      ))}
    </div>
  );
}
