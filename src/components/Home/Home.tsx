import React, { useEffect } from "react";
import "./Home.scss";
import { useDataStateContext } from "../context/DataStateContext";
import { Grid } from "@mui/material";

const Home = () => {
  const { state, dispatch } = useDataStateContext();
  const {
    loginDetails: { name, email },
  } = state;
  const [groups, setGroups] = React.useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      {groups?.length > 0 ? (
        <></>
      ) : (
        <Grid item xs={12} sm={12}>
          <button
            className={"add-item-btn"}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Create a group +
          </button>
        </Grid>
      )}
    </div>
  );
};

export default Home;
