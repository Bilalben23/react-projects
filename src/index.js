import { createRoot } from "react-dom/client"
import App from "./App"
import "./App.css"
import { Provider } from "react-redux"
import { store } from "./components/store"

const root = createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)