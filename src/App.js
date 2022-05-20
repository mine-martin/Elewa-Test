import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BillingForm from "./components/BillingForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<BillingForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
