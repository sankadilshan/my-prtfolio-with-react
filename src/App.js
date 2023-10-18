import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Home />
      <Layout />
    </div>
  );
}

export default App;
