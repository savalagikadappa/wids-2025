import React from 'react';

function Speakers() {
  return (
    <div className="speakers" id="speaker">
      <h2 className="section-title">WiDS Speakers</h2>
      <div className="card-container">
        <div className="card">
          <img src="/ashwini-speaker2.png" alt="Ashwini Chandrashekharaiah" />
          <h3>Workshop 1</h3>
          <p><strong>Topic:</strong> Crack the Code: Mastering the WiDS Datathon 2025 – 'Unraveling the Mysteries of the Female Brain'</p>
          <p><strong>Speaker:</strong> Ms. Ashwini Chandrashekharaiah</p>
          <p>Senior Manager, Walmart Global Tech India</p>
          <p><strong>Email:</strong> Ashwini.Chandrashekharaiah@walmart.com</p>
          <p><strong>Date:</strong> 15/04/25</p>
          <p><strong>Time:</strong> 4:30 pm to 5:30 pm IST</p>
        </div>

        <div className="card">
          <img src="/srujana-speaker1.png" alt="Srujana Kaddevarmuth" />
          <h3>Workshop 2</h3>
          <p><strong>Topic:</strong> Trends in Gen AI</p>
          <p><strong>Speaker:</strong> Ms. Srujana Kaddevarmuth</p>
          <p>AI Leader at Walmart Global Tech, USA</p>
          <p>Building Next Gen AI & Machine Learning Enterprises, Futurist, Speaker, AI Thought Leader & Investor - LinkedIn</p>
          <p><strong>Email:</strong> srujana.aba@gmail.com</p>
          <p><strong>Date:</strong> 19/04/25</p>
          <p><strong>Time:</strong> 8:30 am to 10:00 am IST</p>
        </div>

        <div className="card">
          <img src="/saroja-speaker.png" alt="Dr. Saroja Naik" />
          <h3>Workshop 3</h3>
          <p><strong>Speaker:</strong> Dr. Saroja Naik</p>
          <p>Neurologist and expert in brain health</p>
          <p><strong>Date:</strong> 19/04/25</p>
          <p><strong>Time:</strong> 10:00 am to 11:00 am IST</p>
        </div>
      </div>
    </div>
  );
}

export default Speakers;