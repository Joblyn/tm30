import React from "react";
import PaymentForm from "../../components/paymentForm/form";
// import "./style.css";
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function PaymentPage() {
  return (
    <main className="page">
      <header className="page-header">
        <h3>Make a Payment</h3>
        <div className="page-description">
          <span>Enter an amount you can afford to give away</span>
        </div>
      </header>
      <section>
        <div className="right">
          <Link to={ROUTES.TRANSFERS} className="link">
            Transfer history <ChevronRightOutlinedIcon />
          </Link>
        </div>
        <PaymentForm />
      </section>
    </main>
  );
}
