import React from "react";
import "./App.css";

function App() {
  interface user {
    name: string;
    age?: number;
    birthday?: any;
  }

  const prettyPrintWilder = (users: user[]) => {
    users.map((user) => {
      console.log(
        `${user.name} is  ${
          user.age
            ? user.age
            : new Date().getFullYear() - new Date(user.birthday).getFullYear()
        } years old`
      );
    });
  };

  const wilders: user[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", birthday: "10/02/1990" };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  console.log(wilders);

  prettyPrintWilder(wilders);
  return <div>ok</div>;
}

export default App;
