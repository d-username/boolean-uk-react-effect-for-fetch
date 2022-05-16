import { useEffect, useState } from "react";

import UsersList from "./components/UsersList";

function UsersSection() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((parsedData) => setUserData(parsedData.results));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <UsersList userData={userData} />
    </section>
  );
}

export default UsersSection;
