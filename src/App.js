import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <div className="App">
          <Layout>
            {githubState.hasUser ? (
              <>
              {githubState.loading ? (
                <p>Loading</p>
              ) : ( 
                <>
                  <Profile />
                <Repositories />
                </>
              )}
            </>
            ) : (
              <div></div>
            )}
          <NoSearch />
          </Layout>
    </div>
  );
}

export default App;