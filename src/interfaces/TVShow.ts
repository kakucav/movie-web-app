import { IBaseMedia, IBaseMediaDetails } from "./Media";

export interface ITVShow extends IBaseMedia {
  firstAirDate: string;
  name: string;
  originalName: string;
}

export interface ITVShowDetails extends ITVShow, IBaseMediaDetails {}
