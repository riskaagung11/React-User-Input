import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <>
      <AddUser />
      <UsersList users={[]} />
    </>
  );
}

export default App;
