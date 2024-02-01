import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="flex flex-col justify-center dashboard">
      <Dashboard/>
      <Layout />
    </div>
  );
}

export default App;
