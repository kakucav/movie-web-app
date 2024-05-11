import { Outlet } from "react-router-dom";

import DashboardLink from "components/DashboardLink/DashboardLink";

const DetailsLayout = (): JSX.Element => {
  return (
    <div>
      <DashboardLink text="Back" />
      <Outlet />
    </div>
  );
};

export default DetailsLayout;
