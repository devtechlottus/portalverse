import { createContext, FC, useContext, useState } from "react"

type BreadcrumbContextRouteData = {
  route: string;
  label: string;
}

type BreadcrumbContextData = {
  routes: Array<BreadcrumbContextRouteData>;
  beforeRoute: () => void;
  addRoute: () => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextData>({
  routes: [
    { route: "/", label: "/" }
  ],
  beforeRoute: () => {},
  addRoute: () => {},
});
BreadcrumbContext.displayName = "BreadcrumbContext";

const BreadcrumbProvider: FC<any> = ({ children }: any) => {

  const [ routes, setRoutes ] = useState<Array<any>>([]);

  const addRoute = (route: any) => {
    setRoutes([...routes, route])
  };

  const values: any = {
    routes,
    addRoute
  };

  return <BreadcrumbContext.Provider value={values}>
    { children }
  </BreadcrumbContext.Provider>
}

export const useBreadcrumbs = () => {
  const {
    routes,
    addRoute
  } = useContext(BreadcrumbContext);

  return {
    routes,
    addRoute
  }
}

export default BreadcrumbProvider