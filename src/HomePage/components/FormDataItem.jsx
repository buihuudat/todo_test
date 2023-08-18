import { LoadingButton } from "@mui/lab";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { markAction } from "../../actions";
import React from "react";
import { useDispatch } from "react-redux";

const FormDataItem = (task) => {
  const [checked, setChecked] = React.useState([0]);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleMark = async () => {
    setIsLoading(true);
    try {
      await dispatch(markAction({ userId: task.userId, taskId: task.id }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <ListItem
      secondaryAction={
        task.completed ? (
          <></>
        ) : (
          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={handleMark}
          >
            Mark
          </LoadingButton>
        )
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle(task.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": task.id }}
          />
        </ListItemIcon>
        <ListItemText id={task.id} primary={task.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default FormDataItem;
