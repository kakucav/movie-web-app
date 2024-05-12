import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useSnackbar } from "notistack";

interface useFetchDataParams<TData> {
  fetchEndpoint: (signal: AbortSignal) => Promise<AxiosResponse<TData>>;
  errorMessage: string;
}

const useFetchData = <TData,>(
  params: useFetchDataParams<TData>
): { loading: boolean; data: TData | undefined } => {
  const { fetchEndpoint, errorMessage } = params;

  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TData | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    fetchEndpoint(controller.signal)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;

        enqueueSnackbar({ variant: "error", message: errorMessage });
        setLoading(false);
      });

    return (): void => controller.abort();
  }, [fetchEndpoint, errorMessage, enqueueSnackbar]);

  return { loading, data };
};

export default useFetchData;
