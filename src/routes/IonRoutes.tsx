import { Redirect, Route } from 'react-router-dom';
import { routes } from './routes';

export const IonRoutes = () => {
  return (
    <>
      {routes.map(({ path, component }) => (
        <Route exact path={path} key={path} component={component}></Route>
      ))}
      <Route exact path="/">
        <Redirect to="/tab1" />
      </Route>
    </>
  )
}
