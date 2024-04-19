import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";

interface RoutePath {
  path: string;
  component: any;
}
export const routes: RoutePath[] = [
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 },
  { path: '/tab3', component: Tab3 },
]