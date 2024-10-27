import { Table } from "manish-quick-ui";
import React from "react";
import Listx from "../../ui-utils/List/Listx";

const GroupList = () => {
  const grpMock = [
    {
      name: "Ormanjhi Park",
      id: "132",
    },
    {
      name: "getalsud",
      id: "2735",
    },
    {
      name: "New Trip",
      id: "2735d",
    },
  ];

  return (
    <Listx
      records={[
        { name: "Manish", id: "manish1", value: "manih1" },
        { name: "Manish", id: "manish1", value: "manih1" },
        { name: "Manish", id: "manish1", value: "manih1" },
        { name: "Manish", id: "manish1", value: "manih1" },
        { name: "Manish", id: "manish1", value: "manih1" },
        { name: "Manish", id: "manish1", value: "manih1" },
        {
          name: "Group 1",
          id: "group1",
          value: "Group 1",
          children: [
            { name: "Manish", id: "manish1", value: "manih1" },
            { name: "Sita", id: "sita1", value: "sita1" },
            {
              name: "Rahul",
              id: "rahul1",
              value: "rahul1uu",
            },
          ],
        },
        {
          name: "Group 2",
          id: "group2",
          value: "Group 2",
          children: [
            { name: "Anita", id: "anita1", value: "anita1" },
            { name: "Karan", id: "karan1", value: "karan1" },
          ],
        },
        {
          name: "Group 3",
          id: "group3",
          value: "Group 3",
          children: [
            { name: "Ravi", id: "ravi1", value: "ravi1" },
            { name: "Priya", id: "priya1", value: "priya1" },
            { name: "Aman", id: "aman1", value: "aman1" },
          ],
        },
      ]}
    />
  );
};

export default GroupList;
