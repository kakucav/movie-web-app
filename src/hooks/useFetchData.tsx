import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface useFetchDataParams<TData> {
  fetchEndpoint: () => Promise<AxiosResponse<TData>>;
  onError: () => void;
}

const useFetchData = <TData,>(
  params: useFetchDataParams<TData>
): { loading: boolean; data: TData | undefined } => {
  const { fetchEndpoint, onError } = params;

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TData | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    fetchEndpoint()
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;

        onError();
        setLoading(false);
      });

    return (): void => controller.abort();
  }, [fetchEndpoint, onError]);

  return { loading, data };
};

export default useFetchData;