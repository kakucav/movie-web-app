export interface IBaseMedia {
  backdropPath: string;
  id: number;
  overview: string;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
}

interface IGenre {
  id: number;
  name: string;
}

export interface IBaseMediaDetails extends IBaseMedia {
  genres: IGenre[];
}
