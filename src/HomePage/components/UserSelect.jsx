import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";

const UserSelect = ({ onSelect, users, userSeletect }) => {
  return (
    <Box pb={1}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select User</InputLabel>
        <Select label="Select User" onChange={onSelect} value={userSeletect}>
          {users.map((user) => (
            <MenuItem key={user.id} value={user?.id}>
              {user?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default UserSelect;
