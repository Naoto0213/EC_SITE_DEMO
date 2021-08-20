import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const HEADER_BAR = [
  {
    label: "トップ",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    label: "マイページ",
    link: "/Profile",
    icon: <AccountCircleIcon />,
  },
  {
    label: "ガンプラを作成する",
    link: "/product/edit",
    icon: <AddIcon />,
  },
];
