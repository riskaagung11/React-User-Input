import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEntredUsername] = useState("");
  const [enteredAge, setEntredAge] = useState("");
  const [error, SetError] = useState();

  const addUserhandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      SetError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no-empty value).",
      });
      return;
    }
    if (+enteredAge < 0) {
      SetError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEntredUsername("");
    setEntredAge("");
  };

  const usernameChangedHandler = (event) => {
    setEntredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEntredAge(event.target.value);
  };

  const errorHandler = () => {
    SetError(null);
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
