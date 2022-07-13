import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <main>
        <Layout>
          <div>
            <img src="https://avatars.githubusercontent.com/u/36959868?v=4" alt="Avatar of User" />
            <h1>Lucas Queiroz</h1>
            <h3>username: </h3>
            <span>OQueLucas</span>
            <div>
              <div>
                <h4>Followers: </h4>
                <span>5</span>
              </div>
              <div>
                <h4>Starred: </h4>
                <span>5</span>
              </div>
              <div>
                <h4>Following: </h4>
                <span>5</span>
              </div>
            </div>
          </div>
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