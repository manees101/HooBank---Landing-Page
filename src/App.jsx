import { useState } from "react";
import styles from "./style";
import "./App.css";
import {
  Navbar,
  Hero,
  Business,
  Billing,
  Button,
  Stats,
  CTA,
  Footer,
  CardDeal,
  Clients,
  FeedbackCard,
  GetStarted,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/> 
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
          </div>
      </div>
    </div>
  );
}

export default App;
