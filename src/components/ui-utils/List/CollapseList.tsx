import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import Listx from "./Listx";
import {
  ExpandLess,
  ExpandMore,
  Phone,
  PhoneIphoneTwoTone,
} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

interface IAttrib {
  name: string;
  value: string;
  id: string;
  children?: IAttrib[]; // Allow children to be an array of the same type
}

interface IListx {
  records: IAttrib[];
  title?: string; // Optional title for when you need to render group titles
}
const CollapseList = ({ records, title }: IListx) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PhoneIphoneTwoTone />
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit onClick={handleClick}>
        <Listx records={records} />
      </Collapse>
    </div>
  );
};

export default CollapseList;
