import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import List from "@mui/material/List";
import SendIcon from "@mui/icons-material/Send";
import CollapseList from "./CollapseList";
import { Circle, ListAlt, TripOrigin } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Listx.scss";
interface IAttrib {
  name: string;
  value: string | React.ReactNode;
  id: string;
  children?: IAttrib[]; // Allow children to be an array of the same type
}

interface IListx {
  records: IAttrib[];
  title?: string; // Optional title for when you need to render group titles
  primaryIocn?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  navPath?: string;
}
const Listx = ({ records, primaryIocn, navPath }: IListx) => {
  const navigate = useNavigate();

  const createList = () => {
    return records.map((x) => (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <ListItemIcon />
          </IconButton>
        }
        disablePadding
        onClick={() => navPath && navigate(`${navPath}/${x.id}`)}
        className={"list-rows"}
      >
        {x.children ? (
          <CollapseList records={x.children} title={x.value} />
        ) : (
          <ListItemButton>
            <ListItemIcon>{primaryIocn || <ListAlt />}</ListItemIcon>
            <ListItemText primary={x.name} />
            <ListItemText primary={x.value} className={"x-value"} />
          </ListItemButton>
        )}
      </ListItem>
    ));
  };
  return (
    <div className="listx-container">
      {records?.length > 0 ? (
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={createList()}
          className={""}
        />
      ) : (
        <>no groups</>
      )}
    </div>
  );
};

export default Listx;
