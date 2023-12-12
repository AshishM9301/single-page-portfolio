import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-[#1a191d] text-gray-100">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
