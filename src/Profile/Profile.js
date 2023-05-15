import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileViewer = ({ name = "Elie", color }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => setData(res.data.name));
  }, [name]);
  /* OR:
  useEffect(() => {
    async function loadProfile() => {
      const res = await axios.get("https://api.github.com/users/elie");
      setData(res.data.name);
      };
    loadProfile()
  }, [])
  */

  return <h3 style={{ color: color }}>{data ? data : "Loading..."}</h3>;
};

export default ProfileViewer;
