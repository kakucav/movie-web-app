import { ReactNode } from "react";

import styles from "./MediaCardsContainer.module.scss";

interface MediaCardsContainerProps {
  children: ReactNode;
}

const MediaCardsContainer = (props: MediaCardsContainerProps): JSX.Element => {
  const { children } = props;

  return <div className={styles.media_cards_container}>{children}</div>;
};

export default MediaCardsContainer;
