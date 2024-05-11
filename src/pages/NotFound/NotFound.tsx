import DashboardLink from "components/DashboardLink/DashboardLink";

import styles from "./NotFound.module.scss";

const NotFound = (): JSX.Element => {
  return (
    <div className={styles.not_found_wrapper}>
      <p className={styles.text}>404! Page not found.</p>
      <DashboardLink />
    </div>
  );
};

export default NotFound;
