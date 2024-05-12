import styles from "./NoResults.module.scss";

const NoResults = (): JSX.Element => {
  return (
    <p className={styles.no_results_message}>
      No results found for entered filters.
    </p>
  );
};

export default NoResults;
