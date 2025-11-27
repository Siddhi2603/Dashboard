import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Homepage from "./Component/Homepage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Homepage />
    </div>
  );
}