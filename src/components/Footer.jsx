import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            {/* Top Row */}
            <div className="footer-top">
                {/* Logos Section with Summit Text */}
                <div className="footer-logos-section">
                    <div className="footer-logos">
                        <img
                            src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/asset-4.png"
                            alt="Logo 1"
                            className="footer-logo"
                        />
                        <img
                            src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/76264147.png"
                            alt="Logo 2"
                            className="footer-logo"
                        />
                    </div>
                    <div className="footer-summit">
                        The Most Innovative Entrepreneurship Summit Of INDIA
                    </div>
                </div>

                {/* Address */}
                <div className="footer-section">
                    <h2 className="footer-heading">Address</h2>
                    <p className="footer-text">
                        E-Cell, IIIT Guwahati<br />
                        Assam - 781015
                    </p>
                </div>

                {/* Email */}
                <div className="footer-section">
                    <h2 className="footer-heading">Email</h2>
                    <p className="footer-text">ecell@iiitg.ac.in</p>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h2 className="footer-heading">Follow Us</h2>
                    <div className="footer-social">
                        <img
                            src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/instagra.png"
                            alt="Instagram"
                            className="social-icon"
                        />
                        <img
                            src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/linkedin.png"
                            alt="LinkedIn"
                            className="social-icon"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="footer-copyright">
                Made in panic by ecell technical team (2025)
            </div>
        </div>
    );
};

export default Footer;