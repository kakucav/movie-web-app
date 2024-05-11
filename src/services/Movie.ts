import { AxiosResponse } from "axios";
import { generatePath } from "react-router-dom";

import axios from "config/axios";

import { Endpoints } from "enums/Endpoints";

import { IMovie, IMovieDetails } from "interfaces/Movie";
import { ITopRatedResponse } from "interfaces/EndpointResponses";

export default class MovieService {
  static getTopRated = (
    signal: AbortSignal
  ): Promise<AxiosResponse<ITopRatedResponse<IMovie>>> => {
    return axios.get(Endpoints.TopRatedMovies, {
      signal,
    });
  };

  static getDetails = (
    id: IMovie["id"],
    signal: AbortSignal
  ): Promise<AxiosResponse<IMovieDetails>> => {
    return axios.get(
      generatePath(Endpoints.MovieDetails, { id: id.toString() }),
      { signal }
    );
  };
}
