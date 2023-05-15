import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearch from "./ProfileSearch";

const ProfileWithSearch = ({ name = "Elie", color }) => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(`https://api.github.com/users/elie`);

  const search = (term) => {
    setUrl(`https://api.github.com/users/${term}`);
  };

  useEffect(() => {
    console.log("Loading Data");
    async function loadProfile() {
      const res = await axios.get(url);
      setData(res.data.name);
    }
    loadProfile();
    return () => console.log("Clean Up Function");
  }, [url]);

  return (
    <div>
      {data ? <h1>Hi {data}</h1> : <h1>"Loading..."</h1>}
      <ProfileSearch search={search} />
    </div>
  );
};

export default ProfileWithSearch;
