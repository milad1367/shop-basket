import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";

test("render App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
