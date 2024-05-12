import { useCallback } from "react";
import { useParams } from "react-router-dom";

import TVShowService from "services/TVShow";

import useFetchData from "hooks/useFetchData";

import { ITVShowDetails } from "interfaces/TVShow";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import MediaDetails from "components/MediaDetails/MediaDetails";

const TVShowDetails = (): JSX.Element => {
  const { id } = useParams();

  const fetchEndpoint = useCallback(
    (signal: AbortSignal) => TVShowService.getDetails(Number(id), signal),
    [id]
  );

  const { data, loading } = useFetchData({
    fetchEndpoint,
    errorMessage: "Something went wrong while fetching TV Show.",
  });

  return (
    <>
      {loading && <LoadingSpinner />}

      {data && (
        <MediaDetails<ITVShowDetails>
          data={data}
          getName={({ name }): string => name}
          getOriginalName={({ originalName }): string => originalName}
          getReleaseInfo={({ firstAirDate }): string =>
            `First air date: ${new Date(firstAirDate).toLocaleDateString()}`
          }
        />
      )}
    </>
  );
};

export default TVShowDetails;
