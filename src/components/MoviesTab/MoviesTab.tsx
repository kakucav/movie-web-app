import { useCallback } from "react";
import { generatePath } from "react-router-dom";

import { useAppContext } from "context/app-context";

import MovieService from "services/Movie";

import useFetchData from "hooks/useFetchData";

import { IMovie } from "interfaces/Movie";

import { Pages } from "enums/Pages";

import MediaCard from "components/MediaCard/MediaCard";
import MediaCardsContainer from "components/MediaCardsContainer/MediaCardsContainer";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import NoResults from "components/NoResults/NoResults";

const MoviesTab = (): JSX.Element => {
  const { filters } = useAppContext();
  const { q } = filters;

  const showTopRatedResults = !q || q.length < 3;

  const fetchEndpoint = useCallback(
    (signal: AbortSignal) => {
      return showTopRatedResults
        ? MovieService.getTopRated(signal)
        : MovieService.getByName({ query: q }, signal);
    },
    [q, showTopRatedResults]
  );

  const { data, loading } = useFetchData({
    fetchEndpoint,
    errorMessage: "Something went wrong while fetching Top Rated Movies.",
  });

  const noResults = !loading && !data?.results.length;

  return (
    <>
      {data?.results.some((x) => x.video) ? "ima" : "nema"}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <MediaCardsContainer>
          {data?.results.slice(0, 10).map((data) => (
            <MediaCard<IMovie>
              key={data.id}
              data={data}
              getTitle={({ title }): string => title}
              getTo={({ id }): string =>
                generatePath(Pages.MovieDetails, { id: id.toString() })
              }
              hasVideo={({ video }): boolean => video}
            />
          ))}
        </MediaCardsContainer>
      )}

      {noResults && <NoResults />}
    </>
  );
};

export default MoviesTab;
