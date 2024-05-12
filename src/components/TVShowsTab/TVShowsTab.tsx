import { generatePath } from "react-router-dom";

import TVShowService from "services/TVShow";

import useFetchData from "hooks/useFetchData";

import { Pages } from "enums/Pages";

import { ITVShow } from "interfaces/TVShow";

import MediaCard from "components/MediaCard/MediaCard";
import MediaCardsContainer from "components/MediaCardsContainer/MediaCardsContainer";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

const TVShowsTab = (): JSX.Element => {
  const { data, loading } = useFetchData({
    fetchEndpoint: TVShowService.getTopRated,
    errorMessage: "Something went wrong while fetching Top Rated TV Shows.",
  });

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
              getTitle={({ originalName }): string => originalName}
              getTo={({ id }): string =>
                generatePath(Pages.TVShowDetails, { id: id.toString() })
              }
            />
          ))}
        </MediaCardsContainer>
      )}
    </>
  );
};

export default TVShowsTab;
