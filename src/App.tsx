import Router from "./pages/Router";

import styles from "./App.module.scss";

function App(): JSX.Element {
  return (
    <div className={styles.app_container}>
      <Router />
    </div>
  );
}

export default App;
