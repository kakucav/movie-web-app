import { IBaseMedia, IBaseMediaDetails } from "./Media";

export interface IMovie extends IBaseMedia {
  originalTitle: string;
  releaseDate: string;
  title: string;
  video: boolean;
}

export interface IMovieDetails extends IMovie, IBaseMediaDetails {}
