import { Person3 } from "@mui/icons-material";
import { Box, Skeleton } from "@mui/material";
import React from "react";

const SkeletonFriends = () => {
  const fills = Array.from(Array(77).keys()).map((x) => (
    <Box key={x} sx={{ width: "100%", m: 0, mb: 0, p: 0 }}>
      <Skeleton
        width="100%"
        height="80px"
        sx={{ marginBottom: 0, lineHeight: 1, m: 0 }}
      />
    </Box>
  ));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0, padding: 0 }}>
      {fills}
    </Box>
  );
};

export default SkeletonFriends;
