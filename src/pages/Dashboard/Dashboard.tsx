import { useAppContext } from "context/app-context";

import { ITabsToggleItem } from "interfaces/Tab";

import TabsToggle from "components/TabsToggle/TabsToggle";
import MoviesTab from "components/MoviesTab/MoviesTab";
import TVShowsTab from "components/TVShowsTab/TVShowsTab";
import DebouncedInputField from "components/DebouncedInputField/DebouncedInputField";

import styles from "./Dashboard.module.scss";

const Dashboard = (): JSX.Element => {
  const { filters, handleFiltersChange } = useAppContext();
  const { showMovies, q } = filters;

  const tabsToggleItems: ITabsToggleItem[] = [
    {
      label: "Movies",
      isActive: showMovies,
      onClick: () => handleFiltersChange({ showMovies: true }),
    },
    {
      label: "TV Shows",
      isActive: !showMovies,
      onClick: () => handleFiltersChange({ showMovies: false }),
    },
  ];

  return (
    <div className={styles.dashboard_wrapper}>
      <TabsToggle items={tabsToggleItems} />

      <DebouncedInputField
        placeholder={`Search ${showMovies ? "Movies" : "TV Shows"} by title`}
        value={q}
        onChange={(value): void => handleFiltersChange({ q: value })}
      />

      {showMovies ? <MoviesTab /> : <TVShowsTab />}
    </div>
  );
};

export default Dashboard;
