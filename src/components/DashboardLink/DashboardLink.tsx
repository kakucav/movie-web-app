import { Link } from "react-router-dom";

import { Pages } from "enums/Pages";

import arrowLeftIcon from "assets/arrow_left.svg";

import styles from "./DashboardLink.module.scss";

interface DashboardLinkProps {
  text?: string;
}

const DashboardLink = ({ text }: DashboardLinkProps): JSX.Element => {
  return (
    <Link className={styles.dashboard_link} to={Pages.Dashboard}>
      <img className={styles.arrow_icon} src={arrowLeftIcon} alt="left arrow" />
      {text ?? "Go to Dashboard"}
    </Link>
  );
};

export default DashboardLink;
