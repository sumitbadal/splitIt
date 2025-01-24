import Listx from "../ui-utils/List/Listx";
import { Person3 } from "@mui/icons-material";
import { useFetchFriends } from "../hooks/Hooks";
import SkeletonFriends from "../Skeletons/SkeletonFriends";

const Friends = () => {
  const { loading, friends } = useFetchFriends();
  const frnds = friends.map((x) => ({
    ...x,
    value: x.due ? (
      <span style={{ color: "red" }}>-{x.due}</span>
    ) : (
      <span style={{ color: "green" }}>+{x.owe}</span>
    ),
  }));
  return (
    <div className={" pad5"}>
      <button className={"btn"}>Invite new friend</button>
      {loading ? (
        <SkeletonFriends />
      ) : (
        <Listx records={frnds} primaryIocn={<Person3 />} navPath={"/friend"} />
      )}
    </div>
  );
};

export default Friends;
