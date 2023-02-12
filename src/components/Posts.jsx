import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import PostItem from "./PostItem";

const Posts = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const sendReq = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setList(response.data);
  };
  const removeUser = () => {
    localStorage.removeItem("organicUser");
    navigate("/signup");
  };
  useEffect(() => {
    sendReq();
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#8f5a3b" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              OrganicMe
            </Typography>
            <Button color="inherit" onClick={removeUser}>
              LogOut
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid>
        {list.map((value) => {
          return (
            <Grid item key={value.id} xs={12} sx={{ margin: "15px" }}>
              <PostItem post={value} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Posts;
