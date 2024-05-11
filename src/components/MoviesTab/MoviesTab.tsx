import { generatePath } from "react-router-dom";

import MovieService from "services/Movie";

import useFetchData from "hooks/useFetchData";

import { IMovie } from "interfaces/Movie";

import { Pages } from "enums/Pages";

import MediaCard from "components/MediaCard/MediaCard";
import MediaCardsContainer from "components/MediaCardsContainer/MediaCardsContainer";

const MoviesTab = (): JSX.Element => {
  const { data } = useFetchData({
    fetchEndpoint: MovieService.getTopRated,
    errorMessage: "Something went wrong while fetching Top Rated Movies.",
  });

  return (
    <MediaCardsContainer>
      {data?.results.map((data) => (
        <MediaCard<IMovie>
          key={data.id}
          data={data}
          getTitle={({ title }): string => title}
          getTo={({ id }): string =>
            generatePath(Pages.MovieDetails, { id: id.toString() })
          }
        />
      ))}
    </MediaCardsContainer>
  );
};

export default MoviesTab;
