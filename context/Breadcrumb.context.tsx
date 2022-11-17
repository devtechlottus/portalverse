import { createContext, FC, useState } from "react"

type BreadcrumbContextRouteData = {
  route: string;
  label: string;
}

type BreadcrumbContextData = {
  routes: Array<BreadcrumbContextRouteData>;
  beforeRoute: () => void;
}

type BreadcrumbProviderValues = {
  allRoutes: Array<BreadcrumbContextRouteData>;
  setAll: any;
}

const BreadcrumbContext = createContext<BreadcrumbContextData>({
  routes: [
    { route: "/", label: "/" }
  ],
  beforeRoute: () => {},
});
BreadcrumbContext.displayName = "BreadcrumbContext";

const BreadcrumbProvider: FC<any> = ({ children }: any) => {

  const [ allRoutes, setAll ] = useState([]);

  const values: any = {
    allRoutes,
    setAll
  }

  return <BreadcrumbContext.Provider value={values}>
    { children }
  </BreadcrumbContext.Provider>
}

export default BreadcrumbProvider