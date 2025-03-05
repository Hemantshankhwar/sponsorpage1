import React from "react";
import skull from "../assets/skull.png";
import "./SponsorSection.css"; // Make sure this file includes the updated CSS

const sponsors = {
    platinum: [skull, skull, skull],
    gold: [skull, skull, skull],
    silver: [skull, skull, skull, skull, skull, skull],
};

const SponsorSection = () => {
    return (
        <div className="sponsor-section">
            <h2 className="sponsor-title">Platinum Sponsor</h2>
            <div className="sponsor-container">
                {sponsors.platinum.map((img, index) => (
                    <div key={index} className="sponsor-wrapper">
                        <img src={img} alt="Platinum Sponsor" className="sponsor-image" />
                        <span className="sponsor-label">Sponsor</span>
                    </div>
                ))}
            </div>

            <h2 className="sponsor-title">Gold Sponsor</h2>
            <div className="sponsor-container">
                {sponsors.gold.map((img, index) => (
                    <div key={index} className="sponsor-wrapper">
                        <img src={img} alt="Gold Sponsor" className="sponsor-image" />
                        <span className="sponsor-label">Sponsor</span>
                    </div>
                ))}
            </div>

            <h2 className="sponsor-title">Silver Sponsor</h2>
            <div className="sponsor-container">
                {sponsors.silver.map((img, index) => (
                    <div key={index} className="sponsor-wrapper">
                        <img src={img} alt="Silver Sponsor" className="sponsor-image" />
                        <span className="sponsor-label">Sponsor</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorSection;