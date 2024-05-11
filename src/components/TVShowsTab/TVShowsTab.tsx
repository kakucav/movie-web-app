import { generatePath } from "react-router-dom";

import TVShowService from "services/TVShow";

import useFetchData from "hooks/useFetchData";
import { Pages } from "enums/Pages";

import { ITVShow } from "interfaces/TVShow";

import MediaCard from "components/MediaCard/MediaCard";
import MediaCardsContainer from "components/MediaCardsContainer/MediaCardsContainer";

const TVShowsTab = (): JSX.Element => {
  const { data } = useFetchData({
    fetchEndpoint: TVShowService.getTopRated,
    errorMessage: "Something went wrong while fetching Top Rated TV Shows.",
  });

  return (
    <MediaCardsContainer>
      {data?.results.map((data) => (
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
  );
};

export default TVShowsTab;
