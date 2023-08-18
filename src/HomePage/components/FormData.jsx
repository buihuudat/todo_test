import * as React from "react";
import List from "@mui/material/List";

import { Box, Typography } from "@mui/material";
import _ from "lodash";
import FormDataItem from "./FormDataItem";

export default function FormData({ tasks }) {
  const countComple = tasks.filter((task) => task.completed === true).length;

  return (
    <Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          height: 500,
          overflowY: "auto",
        }}
      >
        {_.orderBy(tasks, ["completed"]).map((task) => (
          <FormDataItem {...task} key={task.id} />
        ))}
      </List>
      <Typography
        mt={1}
      >{`Done ${countComple}/${tasks.length} task`}</Typography>
    </Box>
  );
}
