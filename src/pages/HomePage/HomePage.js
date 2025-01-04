import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const test = 10;
  const drugiTest = 15;
  console.log(test);
  console.log(test + drugiTest);

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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          {[10, 20, 30].map((age) => (
            <MenuItem value={age}>{age}</MenuItem>
          ))}
          {/* <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
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
