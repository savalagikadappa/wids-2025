import React from 'react';
import '../styles/Committee.css';

const Committee = () => {
    return (
        <div className="committee" id="committee">
            {/* Header Section */}
            <div className="header">WiDS Committee</div>

            {/* Patrons Section */}
            <div className="section">
                <div className="patronContainer">
                    <p className="title">Patrons</p>
                    <div className="memberGroup">
                        <div className="member">
                            <p className="name">Dr. Ashok Shettar</p>
                            <p className="designation">Pro Chancellor</p>
                        </div>
                        <div className="member">
                            <p className="name">Dr. Meena S. M</p>
                            <p className="designation">Dean Faculty, SoCSE</p>
                        </div>
                        <div className="member">
                            <p className="name">Dr. Vijayalakshmi M</p>
                            <p className="designation">HoS, SoCSE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advisors Section */}
            <div className="section">
                <div className="advisorsContainer">
                    <p className="title">Advisors</p>
                    <div className="memberGroup">
                        <div className="member">
                            <p className="name">Prof. B. L Desai</p>
                            <p className="designation">Executive Dean</p>
                        </div>
                        <div className="member">
                            <p className="name">Prof. B. S Anami</p>
                            <p className="designation">Registrar</p>
                        </div>
                        <div className="member">
                            <p className="name">Dr. Uma Mudenagudi</p>
                            <p className="designation">Dean R&D</p>
                        </div>
                        <div className="member">
                            <p className="name">Ms. Srujana K</p>
                            <p className="designation">AI Leader at Walmart Global Tech, USA</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambassador Section */}
            <div className="section">
                <div className="ambassadorContainer">
                    <p className="title">WiDS Ambassadors</p>
                    <div className="memberGroup">
                        <div className="member">
                            <img src="/co-ambassador-sujatha.jpg" alt="Dr. Sujatha C" className="memberImage" />
                            <p className="name">Dr. Sujatha C</p>
                            <p className="designation">Professor, SoCSE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Co-Ambassadors Section */}
            <div className="coAmbassadorsContainer">
                <p className="title">WiDS Co-Ambassadors</p>
                <div className="memberGroup">
                    
                    <div className="member">
                        <img src="/co-ambassador-padmashree.jpg" alt="Dr. Padmashree Desai" className="memberImage" />
                        <p className="name">Dr. Padmashree Desai</p>
                        <p className="designation">Professor, SoCSE</p>
                    </div>

                    <div className="member">
                        <img src="/nehamadam.jpeg" alt="Mrs Neha T" className="memberImage" />
                        <p className="name">Mrs. Neha T</p>
                        <p className="designation">Faculty, SoCSE</p>
                    </div>

                </div>
            </div>

            {/* Organizers Section */}
            <div className="organizersContainer">
                <p className="title">Organizers</p>
                <div className="organizerGroup">
                    <p className="organizerName">Dr. P. G Sunitha Hiremath</p>
                    <p className="organizerName">Prof. Sneha V</p>
                    <p className="organizerName">Prof. Tulasa B</p>
                    <p className="organizerName">Prof. Shilpa Hotagi</p>
                    <p className="organizerName">Prof. Channabasappa</p>
                    <p className="organizerName">Prof. Vaishnavi</p>
                </div>
            </div>
        </div>
    );
};

export default Committee;