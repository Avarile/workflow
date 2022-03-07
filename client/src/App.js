import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { MainContentContainer } from "./Components/MainContentContainer"
// import { ErrorBoundary } from "react-error-boundary"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" render={() => <MainContentContainer />} />
          <Redirect from="/" to="/admin/userstable" />
        </Switch>
      </Router>
    </>
  )
}

export default App
