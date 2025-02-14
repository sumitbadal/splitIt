import React from "react";
import { Outlet } from "react-router-dom";
import GroupList from "./GroupList/GroupList";

const Groups = () => {
  return (
    <div>
      <Outlet />
      <GroupList />
    </div>
  );
};

export default Groups;
