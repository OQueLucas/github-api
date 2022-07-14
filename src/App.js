import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./global/resetCSS";

const App = () => {
  return (
    <div className="App">
      <main>
        <ResetCSS />
        <Layout>
          <Profile />
          <div>
            Repositories
          </div>
          <div>
            Starred's
          </div>
        </Layout>
      </main>
    </div>
  );
}

export default App;