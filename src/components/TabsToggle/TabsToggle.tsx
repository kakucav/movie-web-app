import { ITabsToggleItem } from "interfaces/Tab";

import styles from "./TabsToggle.module.scss";

interface TabsToggleProps {
  items: ITabsToggleItem[];
}

const TabsToggle = ({ items }: TabsToggleProps): JSX.Element => {
  return (
    <div className={styles.toggle_wrapper}>
      {items.map(({ label, isActive, onClick }) => (
        <button
          className={`${styles.toggle_item} ${isActive ? styles.active : ""}`}
          key={label}
          onClick={onClick}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TabsToggle;
