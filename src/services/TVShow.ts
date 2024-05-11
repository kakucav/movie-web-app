import { AxiosResponse } from "axios";
import { generatePath } from "react-router-dom";

import axios from "config/axios";

import { Endpoints } from "enums/Endpoints";

import { ITVShow, ITVShowDetails } from "interfaces/TVShow";
import { ITopRatedResponse } from "interfaces/EndpointResponses";

export default class TVShowService {
  static getTopRated = (
    signal: AbortSignal
  ): Promise<AxiosResponse<ITopRatedResponse<ITVShow>>> => {
    return axios.get(Endpoints.TopRatedTVShows, {
      signal,
    });
  };

  static getDetails = (
    id: ITVShow["id"],
    signal: AbortSignal
  ): Promise<AxiosResponse<ITVShowDetails>> => {
    return axios.get(
      generatePath(Endpoints.TVShowDetails, { id: id.toString() }),
      { signal }
    );
  };
}
