import "@/sass/main.scss";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { SnackbarProvider } from "notistack";
import Notify from "src/utils/Notify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={4000}
        maxSnack={3}
      >
         <Notify />
        <NextNprogress color="#004ba8" />
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
}

export default MyApp;
