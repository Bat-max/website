import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { useRouter } from "next/router";

const useMenuItems = () => {
  const router = useRouter();
  const { global } = useContext(GlobalContext);
  const { main_menu } = global;

  const isHomePage = router.route === "/";

  const menuItems = [
    {
      id: "nav_1",
      title: main_menu.nav_1,
      url: "/",
    },
    {
      id: "nav_2",
      title: main_menu.nav_2,
      url: isHomePage ? "#garage-substrate" : "/#garage-substrate",
    },
    {
      id: "nav_3",
      title: main_menu.nav_3,
      url: "/colors",
    },
    {
      id: "nav_4",
      title: main_menu.nav_4,
      url: "/offer",
      dropdown: global.categories,
    },
    {
      id: "nav_5",
      title: main_menu.nav_5,
      url: isHomePage ? "#delivery" : "/#delivery",
    },
    {
      id: "nav_6",
      title: main_menu.nav_6,
      url: "/gallery",
    },
    {
      id: "nav_7",
      title: main_menu.nav_7,
      url: "#contact",
    },
  ];

  return menuItems;
};

export default useMenuItems;
