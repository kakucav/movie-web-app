import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Pages } from "enums/Pages";

import { IRouteItem } from "interfaces/Routing";

import Dashboard from "./Dashboard/Dashboard";
import DetailsLayout from "./DetailsLayout/DetailsLayout";
import MovieDetails from "./DetailsLayout/MovieDetails/MovieDetails";
import TVShowDetails from "./DetailsLayout/TVShowDetails/TVShowDetails";
import NotFound from "./NotFound/NotFound";

const Router = (): JSX.Element => {
  const routeItems: IRouteItem[] = [
    { path: Pages.Dashboard, element: <Dashboard /> },
    {
      path: Pages.Details,
      element: <DetailsLayout />,
      children: [
        { path: Pages.MovieDetails, element: <MovieDetails /> },
        { path: Pages.TVShowDetails, element: <TVShowDetails /> },
      ],
    },
    { path: Pages.NotFound, element: <NotFound /> }, // should always be last element!!!
  ];

  const renderRoute = (item: IRouteItem): JSX.Element => {
    const { path, element, children } = item;

    return (
      <Route key={path} path={path} element={element}>
        {children?.map((child) => renderRoute(child))}
      </Route>
    );
  };

  return (
    <BrowserRouter>
      <Routes>{routeItems.map((route) => renderRoute(route))}</Routes>
    </BrowserRouter>
  );
};

export default Router;
