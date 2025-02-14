import React from "react";
import { useParams } from "react-router-dom";

const GroupDetails = () => {
  const params = useParams();
  return <div>{params.groupId}</div>;
};

export default GroupDetails;
