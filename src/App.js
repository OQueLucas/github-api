import Header from "./components/header";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import useGithub from "./hooks/github-hooks";
import GithubProvider from "./providers/github-provider";

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
              <div>No users search</div>
            )}
          
          </Layout>
    </div>
  );
}

export default App;