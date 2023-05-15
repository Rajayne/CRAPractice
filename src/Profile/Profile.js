import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileViewer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/elie`)
      .then((res) => setData(res.data.name));
  }, []);
  /* OR:
  useEffect(() => {
    async function loadProfile() => {
      const res = await axios.get("https://api.github.com/users/elie");
      setData(res.data.name);
      };
    loadProfile()
  }, [])
  */

  return <h3>{data ? data : "Loading..."}</h3>;
};

export default ProfileViewer;
