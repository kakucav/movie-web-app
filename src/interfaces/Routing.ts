export interface IRouteItem {
  path: string;
  element: JSX.Element;
  children?: IRouteItem[];
}
