export default function UsersListItem({ user }) {
  return (
    <li className={user.gender === "male" ? "bg-blue" : "bg-pink"}>
      <img src={user.picture.large} alt="Ritthy Ryan" />
      <h3>{user.name.first + " " + user.name.last}</h3>
      <p>{user.email}</p>
    </li>
  );
}
