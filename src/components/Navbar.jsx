import eCellLogo from '../assets/e-cell-logo.png';
import wheelIcon from '../assets/wheel.png';

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-2 my-4">
            <div>
                <img src={eCellLogo} alt="E-Cell Logo" className="h-25" />
            </div>

            <div className="flex items-center gap-16 text-white font-semibold">
                <a href="home.com">HOME</a>
                <a href="events.com">EVENTS</a>
                <img src={wheelIcon} alt="Wheel Icon" className="h-10" />
                <a href="teams.com">TEAMS</a>
                <a href="sponsors.com">SPONSORS</a>
            </div>

            <div>
                <a href="contact.com" className="text-white font-semibold">CONTACT US</a>
            </div>
        </div>
    );
}
