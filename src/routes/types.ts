import { FC } from "react";

export interface IRoute {
  path: string;
  name: string;
  component: FC<unknown>;
  public?: boolean;
  routes?: IRoute[];
}
