import { IBaseMediaDetails } from "interfaces/Media";

import { generateTMDBImageSrc } from "helpers/ImageHelper";

import defaultImage from "assets/default_image.png";

import styles from "./MediaDetails.module.scss";

interface MediaDetailsProps<T extends IBaseMediaDetails> {
  data: T;
  getName: (data: T) => string;
  getOriginalName: (data: T) => string;
  getReleaseInfo: (data: T) => string;
}

const MediaDetails = <T extends IBaseMediaDetails>(
  props: MediaDetailsProps<T>
): JSX.Element => {
  const { data, getName, getOriginalName, getReleaseInfo } = props;
  const { genres, overview, voteAverage, voteCount } = data;

  const name = getName(data);
  const originalName = getOriginalName(data);
  const releaseInfo = getReleaseInfo(data);

  return (
    <div className={styles.media_details}>
      <img
        className={styles.cover_img}
        src={
          data.backdropPath
            ? generateTMDBImageSrc(data.backdropPath, "original")
            : defaultImage
        }
        alt="cover"
      />

      <h1>{name}</h1>

      {name !== originalName && <p>{`Original name: ${originalName}`}</p>}

      <p>{releaseInfo}</p>
      <p>{`Genres: ${genres.map(({ name }) => name).join(", ")}`}</p>
      <p>{`Overview:\n${overview}`}</p>
      <p>{`Rating: ${voteAverage}`}</p>
      <p>{`Total votes: ${voteCount}`}</p>
    </div>
  );
};

export default MediaDetails;
