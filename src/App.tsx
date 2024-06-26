import { useState } from "react";
import { SnackbarProvider } from "notistack";

import { AppContext } from "context/app-context";

import { IFilters } from "interfaces/Filters";

import Router from "pages/Router";

import styles from "App.module.scss";

function App(): JSX.Element {
  const [filters, setFilters] = useState<IFilters>({
    showMovies: false,
    q: undefined,
  });

  const handleFiltersChange = (value: Partial<IFilters>): void => {
    setFilters((prev) => ({ ...prev, ...value }));
  };

  return (
    <SnackbarProvider>
      <AppContext.Provider value={{ filters, handleFiltersChange }}>
        <div className={styles.app_container}>
          <Router />
        </div>
      </AppContext.Provider>
    </SnackbarProvider>
  );
}

export default App;
