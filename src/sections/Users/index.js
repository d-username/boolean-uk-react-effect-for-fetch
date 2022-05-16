import { useEffect, useState } from "react";

function UsersSection() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((parsedData) => setUserData(parsedData.results));
  }, []);
  console.log("DATA FROM USESTATE: ", userData);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"></div>
    </section>
  );
}

export default UsersSection;

// An image of the user
// The full name of the user
// The background colour of each list item should change according to gender
// The email of the user
