import { useState } from "react";
import { Link } from "react-router-dom";

import { IBaseMedia } from "interfaces/Media";

import defaultImage from "assets/default_image.png";

import styles from "./MediaCard.module.scss";

interface MediaCardProps<T extends IBaseMedia> {
  data: T;
  getTitle: (data: T) => string;
  getTo: (data: T) => string;
}

const MediaCard = <T extends IBaseMedia>(
  props: MediaCardProps<T>
): JSX.Element => {
  const { data, getTitle, getTo } = props;
  const { backdropPath } = data;

  // show default image while cover isn't loaded completely
  const [coverLoaded, setCoverLoaded] = useState<boolean>(false);

  return (
    <Link className={styles.media_card} to={getTo(data)}>
      <div className={styles.image_wrapper}>
        <img className={styles.default_img} src={defaultImage} alt="default" />

        <img
          onLoad={(): void => setCoverLoaded(true)}
          className={`${styles.cover_img} ${coverLoaded ? styles.loaded : ""}`}
          src={`https://image.tmdb.org/t/p/w780/${backdropPath}`}
          alt="poster"
        />
      </div>

      <p>{getTitle(data)}</p>
    </Link>
  );
};

export default MediaCard;
