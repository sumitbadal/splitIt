import { Box, Card, Skeleton, Typography } from "@mui/material";
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
  const [loading, setLoaidng] = useState<boolean>();

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
    setLoaidng(true);
    setTimeout(() => {
      setDetails({ name: name, owe: true, owePrice: 1000.3 });
      setLoaidng(false);
    }, 2000);
  }, []);

  const skeletons = [1].map((x) => (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
          )}
        </Box>
        <Box sx={{ width: "80%" }}>
          <Skeleton width="95%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
        <Box sx={{ width: "20%" }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
    </>
  ));
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
        {loading ? (
          skeletons
        ) : (
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
        )}
      </Card>
    </div>
  );
};

export default FriendDetails;
