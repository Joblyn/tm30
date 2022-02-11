import React from "react";
import PaymentForm from "../../components/paymentForm/form";
import "./style.css";

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
        <PaymentForm />
      </section>
    </main>
  );
}
