import React from "react"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { store } from "./data/dataStore/store.redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { createRoot } from "react-dom/client"

function render() {
  const root = createRoot(document.getElementById("root")!)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
