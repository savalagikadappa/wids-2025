import React from 'react';
import '../styles/Committee.css';

const Committee = () => {
    return (
        <div className="committee" id="committee">
            {/* Header Section */}
            <div className="header">WiDS Committee</div>

            {/* Patron and Advisors Section */}
            <div className="section">
                <div className="patronContainer">
                    <div className="member">
                        <p className="title">Patron</p>
                        <img
                            src="/patron-vc.jpg"
                            alt="Patron Dr. Ashok Shettar"
                            className="memberImage"
                        />
                        <p className="name">Dr. Ashok Shettar</p>
                        <p className="designation">Vice Chancellor</p>
                    </div>
                </div>
                <div className="advisorsContainer">
                    <p className="title">Advisors</p>
                    <div className="memberGroup">
                        <div className="member">
                            <img
                                src="/advisor-bld.jpg"
                                alt="Prof. B. L Desai"
                                className="memberImage"
                            />
                            <p className="name">Prof. B. L Desai</p>
                            <p className="designation">Executive Dean</p>
                        </div>
                        <div className="member">
                            <img
                                src="/advisor-registrar.jpg"
                                alt="Prof. B. S Anami"
                                className="memberImage"
                            />
                            <p className="name">Prof. B. S Anami</p>
                            <p className="designation">Registrar</p>
                        </div>
                        <div className="member">
                            <img
                                src="/advisor-uma.jpg"
                                alt="Dr. Uma Mudenagudi"
                                className="memberImage"
                            />
                            <p className="name">Dr. Uma Mudenagudi</p>
                            <p className="designation">Dean R&D</p>
                        </div>
                        <div className="member">
                            <img
                                src="/advisor-srujana.jpg"
                                alt="Ms. Srujana K"
                                className="memberImage"
                            />
                            <p className="name">Ms. Srujana K</p>
                            <p className="designation">AI Leader at Walmart Global Tech, USA</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambassador and Co-Ambassadors Section */}
            <div className="section">
                <div className="ambassadorContainer">
                    <div className="member">
                        <p className="title">WiDS Ambassador</p>
                        <img
                            src="/ambassador-meena.jpg"
                            alt="Dr. Meena S. M"
                            className="memberImage"
                        />
                        <p className="name">Dr. Meena S. M</p>
                        <p className="designation">Dean Faculty, SoCSE</p>
                    </div>
                    <div className="member">
                        <p className="title">‎</p>
                        <img
                            src="/hod-vijayalakshmi-1.jpg"
                            alt="Dr. Vijayalakshmi M"
                            className="memberImage"
                        />
                        <p className="name">Dr. Vijayalakshmi. M</p>
                        <p className="designation">HoS, SoCSE</p>
                    </div>
                </div>
                <div className="coAmbassadorsContainer">
                    <p className="title">WiDS Co-Ambassadors</p>
                    <div className="memberGroup">
                        <div className="member">
                            <img
                                src="/co-ambassador-sujatha.jpg"
                                alt="Dr. Sujatha C"
                                className="memberImage"
                            />
                            <p className="name">Dr. Sujatha C</p>
                            <p className="designation">Professor, SoCSE</p>
                        </div>
                        <div className="member">
                            <img
                                src="/co-ambassador-padmashree.jpg"
                                alt="Dr. Padmashree Desai"
                                className="memberImage"
                            />
                            <p className="name">Dr. Padmashree Desai</p>
                            <p className="designation">Professor, SoCSE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizers Section */}
            <div className="organizersContainer">
                <p className="title">Organizers</p>
                <div className="organizerGroup">
                    <p className="organizerName">Dr. P. G Sunitha Hiremath</p>
                    <p className="organizerName">Prof. Neha Tarannum</p>
                    <p className="organizerName">Prof. Sneha V</p>
                    <p className="organizerName">Prof. Tulasa B</p>
                    <p className="organizerName">Prof. Shilpa Hotagi</p>
                </div>
            </div>
        </div>
    );
};

export default Committee;