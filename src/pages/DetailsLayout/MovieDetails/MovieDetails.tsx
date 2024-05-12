import { useCallback } from "react";
import { useParams } from "react-router-dom";

import useFetchData from "hooks/useFetchData";

import MovieService from "services/Movie";

import { IMovieDetails } from "interfaces/Movie";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import MediaDetails from "components/MediaDetails/MediaDetails";

const MovieDetails = (): JSX.Element => {
  const { id } = useParams();

  const fetchEndpoint = useCallback(
    (signal: AbortSignal) => MovieService.getDetails(Number(id), signal),
    [id]
  );

  const { data, loading } = useFetchData({
    fetchEndpoint,
    errorMessage: "Something went wrong while fetching Movie.",
  });

  return (
    <>
      {loading && <LoadingSpinner />}

      {data && (
        <MediaDetails<IMovieDetails>
          data={data}
          getName={({ title }): string => title}
          getOriginalName={({ originalTitle }): string => originalTitle}
          getReleaseInfo={({ releaseDate }): string =>
            `Release date: ${new Date(releaseDate).toLocaleDateString()}`
          }
        />
      )}
    </>
  );
};

export default MovieDetails;
