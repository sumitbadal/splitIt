import React from "react";
import Listx from "../ui-utils/List/Listx";
import { Add, Person3 } from "@mui/icons-material";
import { Button } from "@mui/material";

const Friends = () => {
  const dummy = [
    {
      id: "1",
      name: "Manish",
      value: "Manish",
      owe: true,
      amount: 200.4,
    },
    {
      id: "2",
      name: "Sita",
      value: "Sita",
      owe: false,
      amount: 150.0,
    },
    {
      id: "3",
      name: "Priya",
      value: "Priya",
      owe: true,
      amount: 75.5,
    },
    {
      id: "4",
      name: "Anita",
      value: "Anita",
      owe: false,
      amount: 300.75,
    },
    {
      id: "5",
      name: "Karan",
      value: "Karan",
      owe: true,
      amount: 120.25,
    },
  ];

  return (
    <div className={" pad5"}>
      <Button variant={"outlined"} fullWidth>
        Invite new friend
        <Add />
      </Button>
      <Listx records={dummy} primaryIocn={<Person3 />} navPath={"/friend"} />
    </div>
  );
};

export default Friends;
