import { useState } from "react";
import { Link } from "react-router-dom";

import { generateTMDBImageSrc } from "helpers/ImageHelper";

import { IBaseMedia } from "interfaces/Media";

import defaultImage from "assets/default_image.png";
import videoIcon from "assets/icon_video.svg";

import styles from "./MediaCard.module.scss";

interface MediaCardProps<T extends IBaseMedia> {
  data: T;
  getTitle: (data: T) => string;
  getTo: (data: T) => string;
  hasVideo?: (data: T) => boolean;
}

const MediaCard = <T extends IBaseMedia>(
  props: MediaCardProps<T>
): JSX.Element => {
  const { data, getTitle, getTo, hasVideo } = props;
  const { backdropPath, voteAverage } = data;

  // show default image while cover isn't loaded completely
  const [coverLoaded, setCoverLoaded] = useState<boolean>(false);

  return (
    <Link className={styles.media_card} to={getTo(data)}>
      <div className={styles.image_wrapper}>
        <img className={styles.default_img} src={defaultImage} alt="default" />

        {backdropPath && (
          <img
            onLoad={(): void => setCoverLoaded(true)}
            className={`${styles.cover_img} ${
              coverLoaded ? styles.loaded : ""
            }`}
            src={generateTMDBImageSrc(backdropPath, "w780")}
            alt="poster"
          />
        )}
      </div>

      <p className={styles.title}>{getTitle(data)}</p>

      <span className={styles.rating}>
        {voteAverage ? `Rating: ${voteAverage.toFixed(2)}` : "No rating"}
      </span>

      {hasVideo?.(data) && (
        <span className={styles.video}>
          <img src={videoIcon} alt="video" />
        </span>
      )}
    </Link>
  );
};

export default MediaCard;
