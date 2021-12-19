import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { routes } from "./routes";
import { IRoute } from "./types";

const renderRoutes = (route: IRoute, index: number) => {
  const Component = route.component;
  return <Route key={`${route.path}-${index}`} path={route.path} element={<Component />} />;
};

export const MainRouteSwitch: FC = () => {
  return (
    <Routes>
      {routes.map(renderRoutes)}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
