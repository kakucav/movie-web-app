export interface IBaseMedia {
  backdropPath: string | null;
  id: number;
  overview: string;
  voteAverage?: number;
  voteCount?: number;
}

interface IGenre {
  id: number;
  name: string;
}

export interface IBaseMediaDetails extends IBaseMedia {
  genres: IGenre[];
}
