import { useCallback } from "react";
import { generatePath } from "react-router-dom";

import { useAppContext } from "context/app-context";

import TVShowService from "services/TVShow";

import useFetchData from "hooks/useFetchData";

import { Pages } from "enums/Pages";

import { ITVShow } from "interfaces/TVShow";

import MediaCard from "components/MediaCard/MediaCard";
import MediaCardsContainer from "components/MediaCardsContainer/MediaCardsContainer";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import NoResults from "components/NoResults/NoResults";

const TVShowsTab = (): JSX.Element => {
  const { filters } = useAppContext();
  const { q } = filters;

  const showTopRatedResults = !q || q.length < 3;

  const fetchEndpoint = useCallback(
    (signal: AbortSignal) => {
      return showTopRatedResults
        ? TVShowService.getTopRated(signal)
        : TVShowService.getByName({ query: q }, signal);
    },
    [q, showTopRatedResults]
  );

  const { data, loading } = useFetchData({
    fetchEndpoint,
    errorMessage: "Something went wrong while fetching Top Rated TV Shows.",
  });

  const noResults = !loading && !data?.results.length;

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <MediaCardsContainer>
          {data?.results.slice(0, 10).map((data) => (
            <MediaCard<ITVShow>
              key={data.id}
              data={data}
              getTitle={({ name }): string => name}
              getTo={({ id }): string =>
                generatePath(Pages.TVShowDetails, { id: id.toString() })
              }
            />
          ))}
        </MediaCardsContainer>
      )}

      {noResults && <NoResults />}
    </>
  );
};

export default TVShowsTab;
