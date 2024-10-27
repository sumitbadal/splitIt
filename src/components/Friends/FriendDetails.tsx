import { Box, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import AvatarGroup from "@mui/joy/AvatarGroup";
import { useParams } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";
import { useLoading } from "../context/LoadingContext";
import { useDataStateContext } from "../context/DataStateContext";
interface IFrienddetails {
  id: string;
}
const FriendDetails = () => {
  const { showLoading, hideLoading } = useLoading();
  const params = useParams();
  const {
    state: {
      loginDetails: { name },
    },
  } = useDataStateContext();
  const [friendDetail, setDetails] = useState({
    name: "",
    owe: false,
    owePrice: 0,
  });

  useEffect(() => {
    showLoading();

    setTimeout(() => {
      setDetails({ name: name, owe: true, owePrice: 1000.3 });
      hideLoading();
    }, 2000);
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <Card
        variant="outlined"
        sx={{
          // to make the card resizable
          overflow: "auto",
          resize: "horizontal",
          padding: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar src="/static/images/avatar/1.jpg" size="lg" />
          {friendDetail.name}
          <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
            {params.friendId}
          </AvatarGroup>
        </Box>
      </Card>
    </div>
  );
};

export default FriendDetails;
