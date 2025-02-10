import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import Table from "./components/Table";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturesSection />
      <Testimonials />
      <JoinUs />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
