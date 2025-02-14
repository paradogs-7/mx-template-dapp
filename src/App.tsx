import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { routes } from 'routes';
import { BatchTransactionsContextProvider } from 'wrappers';
import { Layout } from './components';

export const App = () => {
  return (
    <Router>
      <BatchTransactionsContextProvider>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={`route-key-'${route.path}`}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BatchTransactionsContextProvider>
    </Router>
  );
};
