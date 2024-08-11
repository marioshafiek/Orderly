//React Router
import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
//Redux
import { Provider } from "react-redux";
import { store, persistor } from "@store/store";
import { PersistGate } from "redux-persist/integration/react";
//Axios -- Global axios defaults
import "@services/axios-global";
//Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
