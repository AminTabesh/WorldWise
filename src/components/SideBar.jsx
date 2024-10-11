import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
import Logo from "./Logo";
import styles from "./sidebar.module.css";
import AppNav from "./AppNav";
function SideBar() {
  return <div className={styles.sidebar}>
    <Logo />
    <AppNav />

    <Outlet />

    <AppFooter />
  </div>;
}

export default SideBar;
