import { useSelector } from "react-redux";
import Router from "./router/Router";

function App() {
  const selector = useSelector((state) => state);
  console.log(selector.users);

  return (
    <main className="App">
      <Router />
    </main>
  );
}

export default App;
