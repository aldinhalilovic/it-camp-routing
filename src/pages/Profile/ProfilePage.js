import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/users/${id}`);

      console.log(data);

      const user = await data;

      setUser(user);
    } catch (error) {
      console.error("Error while fetching users", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>{user.firstName}</h1>
    </div>
  );
}
