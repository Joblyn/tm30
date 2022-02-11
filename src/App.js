// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import TranserPage from "./pages/Transfers";
import PaymentPage from "./pages/Payment";

function App() {
  return (
    <Router>
      <div className="paystack-container">
        <div className="color-bar"></div>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<PaymentPage />} />
          <Route exact path={ROUTES.TRANSFERS} element={<TranserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
