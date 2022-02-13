import React from "react";
import TransfersHistory from "../../components/transfers/transfers";
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function TranserPage() {
  return (
    <main className="page">
      <header className="page-header">
        <h3>Transfer History</h3>
        <div className="page-description">
          <span>Your transfers made so far.</span>
        </div>
      </header>
      <section>
        <div className="right">
          <Link to={ROUTES.HOME} className="link">
            Make a transfer <ChevronRightOutlinedIcon />
          </Link>
        </div>
        <TransfersHistory />
      </section>
    </main>
  );
}
