import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormData from "./components/FormData";
import { useDispatch, useSelector } from "react-redux";
import { getTaskAction, getUsersAction } from "../actions";
import UserSelect from "./components/UserSelect";

const HomePage = () => {
  const dispatch = useDispatch();
  const { users, taskOfUser, loading } = useSelector((state) => state.user);
  const [userSeletect, setuserSeletect] = useState("");

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  const handleSelectUser = (e) => {
    dispatch(getTaskAction(e.target.value));
    setuserSeletect(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Paper elevation={8} sx={{ p: 3, width: 700 }}>
        <Typography mb={2} fontWeight={600} fontSize={23} align="center">
          Todo Lists
        </Typography>

        <UserSelect
          onSelect={handleSelectUser}
          users={users}
          userSeletect={userSeletect}
        />

        {loading && <LinearProgress />}
        {taskOfUser && <FormData tasks={taskOfUser} />}
      </Paper>
    </Box>
  );
};

export default HomePage;
