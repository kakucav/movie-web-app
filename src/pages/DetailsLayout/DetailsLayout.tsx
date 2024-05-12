import { Outlet } from "react-router-dom";

import DashboardLink from "components/DashboardLink/DashboardLink";

import styles from "./DetailsLayout.module.scss";

const DetailsLayout = (): JSX.Element => {
  return (
    <div className={styles.details_layout}>
      <DashboardLink text="Back" />
      <Outlet />
    </div>
  );
};

export default DetailsLayout;
