import React from 'react';

function Speakers() {
  return (
    <div className="speakers" id="speaker">
      <h2 className="section-title">Speakers</h2>
      <div className="card-container">
        <div className="card">
          <img src="/srujana-speaker1.png" alt="Srujana Kaddevarmuth" />
          <h3>Ms. Srujana Kaddevarmuth</h3>
          <p>AI Leader at Walmart Global Tech, USA</p>
          <p>Building Next Gen AI & Machine Learning Enterprises, Futurist, Speaker, AI Thought Leader & Investor - LinkedIn</p>
          <p><strong>Topic:</strong> Generative AI applications in Retail</p>
          <p><strong>Time:</strong> 8:30am to 9:30am IST</p>
        </div>
        <div className="card">
          <img src="/ashwini-speaker2.png" alt="Ashwini Chandrashekharaiah" />
          <h3>Ms. Ashwini Chandrashekharaiah</h3>
          <p>Senior Manager, Walmart Global Tech India</p>
          <p>LinkedIn</p>
          <p><strong>Topic:</strong> How to attempt and ace the datathon: Equity in healthcare</p>
          <p><strong>Time:</strong> 9:30am to 10:30am IST</p>
        </div>
      </div>
    </div>
  );
}

export default Speakers;