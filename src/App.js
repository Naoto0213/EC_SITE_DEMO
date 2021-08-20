import { Header } from "./components/common/Header";
import Router from "./router/Router";
import { makeStyles } from "@material-ui/core/styles";
import "./swiper.css";

const useStyles = makeStyles((theme) => ({
  App: {
    padding: "64px 0px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <main className={classes.App}>
      <Header />
      <Router />
    </main>
  );
}

export default App;
