import { createContext, useContext } from "react";

import { IFilters } from "interfaces/Filters";

interface IAppContext {
  filters: IFilters;
  handleFiltersChange: (value: Partial<IFilters>) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const useAppContext = (): IAppContext => {
  const appContext = useContext(AppContext);

  if (!appContext) throw new Error("No AppContext.Provider found.");

  return appContext;
};
