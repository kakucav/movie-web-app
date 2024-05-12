export const generateTMDBImageSrc = (
  imagePath: string,
  size: "w780" | "original"
): string => {
  return `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/${size}/${imagePath}`;
};
