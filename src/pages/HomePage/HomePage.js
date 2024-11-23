import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    if (users.length > 0) {
      navigate("/about");
    } else {
      console.log("NEMA NESTO PETO");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  console.log(users);

  return (
    <div>
      <h1>Ovo je Home Page</h1>

      {/* <p
        style={{ backgroundColor: "blue", fontSize: 24, color: "white" }}
        onClick={() => setUsers((prev) => [...prev, "Aldin"])}
      >
        Dodaj korisnika
      </p> */}

      {/* Link -> component from react-router-dom with properties 
      of a tag, that we use when we want to go to other page
      https://reactrouter.com/en/main/components/link#link */}
      <Link to="/about" state={{ name: "Aldin" }}>
        Idi na About us BUTTON
      </Link>

      <br />
      <br />

      {/* NavLink -> component from react-router-dom, extends Link 
      and has isActive and isPending properties for customizing
      https://reactrouter.com/en/main/components/nav-link */}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "activePage" : "inactivePage")}
      >
        Idi na About us BUTTON
      </NavLink>

      <p
        style={{ backgroundColor: "red", fontSize: 20, color: "white" }}
        onClick={() => navigate("/about")}
      >
        Idi na About Us
      </p>

      <br />
      <a href="/about">Idi na About us</a>
      <br />
    </div>
  );
}
