import DashboardLink from "components/DashboardLink/DashboardLink";
import { Outlet } from "react-router-dom";

const DetailsLayout = (): JSX.Element => {
  return (
    <div>
      <DashboardLink text="Back" />
      <Outlet />
    </div>
  );
};

export default DetailsLayout;
