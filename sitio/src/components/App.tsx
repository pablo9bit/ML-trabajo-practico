import { HelmetProvider } from "react-helmet-async";
import SearchProvider from "../contexts/SearchProvider";
import Layout from "./UI/Layout";
import { Outlet } from "react-router-dom";

const App = () => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <SearchProvider>
        <Layout>
          <Outlet />
        </Layout>
      </SearchProvider>
    </HelmetProvider>
  );
};

export default App;
