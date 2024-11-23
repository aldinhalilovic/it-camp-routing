import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return navigate("/");
  }
  return (
    <div>
      Ovo je About Us iz komponente
      <Link to="/">Idi na HomePage</Link>
      <p onClick={() => navigate(-1)}>Idi nazad</p>
      <p onClick={() => navigate("/")}>Idi nazad</p>
      <p>Ovo je napisao {state.name}</p>
    </div>
  );
}
