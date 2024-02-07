import '../css/App.css';
import logo from '../images/airbnb-logo.svg';

export default function Header() {

	return (
		<nav className="navbar">
			<div className="header">
				<img src={logo} className="logo" alt="react-logo" />
			</div>
		</nav>

	);
}