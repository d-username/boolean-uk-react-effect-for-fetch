import UsersListItem from "./UsersListItem";

export default function UsersList({ userData }) {
  return (
    <div className="scroll-container">
      <ul class="users-list">
        {userData.map((user, index) => {
          return <UsersListItem user={user} key={index} />;
        })}
      </ul>
    </div>
  );
}
