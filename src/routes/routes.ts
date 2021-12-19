import { Home } from "features/Home";
import { PageNotFound } from "features/PageNotFound";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/404",
    name: "Page Not Found",
    component: PageNotFound,
  },
];
