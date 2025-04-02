import React from 'react';

function Speakers() {
  return (
    <div className="speakers" id="speaker">
      <h2 className="section-title">Speakers</h2>
      <div className="card-container">
        {/* Workshop 1 */}
        <div className="card">  <h3>Workshop 1</h3>
          <img src="/ashwini-speaker2.png" alt="Ashwini Chandrashekharaiah" />

          <p><strong>Topic:</strong> Crack the Code: Mastering the WiDS Datathon 2025</p>
          <p><strong>Speaker:</strong> Ms. Ashwini Chandrashekharaiah</p>
          <p>Senior Manager, Walmart Global Tech India</p>
          <p><strong>Email:</strong> Ashwini.Chandrashekharaiah@walmart.com</p>
          <p><strong>Date:</strong> 15/04/25</p>
          <p><strong>Time:</strong> 4:30 pm to 5:30 pm IST</p>
          <button className="register-btn">Register</button>
        </div>

        {/* Workshop 2 - Combined Card with Side-by-Side Layout */}
        <div className="card workshop-2">
          <h3>Workshop 2</h3>
          <div className="workshop-2-content">
            {/* Speaker 1 */}
            <div className="speaker-box">
              <img src="/srujana-speaker1.png" alt="Srujana Kaddevarmuth" />
              <p><strong>Topic:</strong> Trends in Gen AI</p>
              <p><strong>Speaker:</strong> Ms. Srujana Kaddevarmuth</p>
              <p>AI Leader, Walmart Global Tech, USA</p>
              <p><strong>Email:</strong> srujana.aba@gmail.com</p>
              <p><strong>Time:</strong> 8:30 am to 10:00 am IST</p>
            </div>

            {/* Speaker 2 */}
            <div className="speaker-box">
              <img src="/saroja-speaker.png" alt="Dr. Saroja Naik" />
              <p><strong>Topic:</strong> Brain Health and Neurology</p>
              <p className="saroja"><strong>Speaker:</strong> Dr. Saroja Naik</p>
              <p>Neurologist and Expert in Brain Health</p>
              <p><strong>Time:</strong> 10:00 am to 11:00 am IST</p>
            </div>
          </div>

          <p><strong>Date:</strong> 19/04/25</p>
          <button className="register-btn">Register </button>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
