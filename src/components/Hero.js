import '../css/App.css';
import heroImg from '../images/hero-img.png';

export default function Hero() {

	return (
		<section className="hero-section">
			<img src={heroImg} className="hero-img" alt="hero-img"></img>
			<h1 className="hero-title">Online Experiences</h1>
			<p className='hero-detail'>Join unique interactive activities led by<br />
				one-of-a-kind hosts—all without leaving home.</p>
		</section>
	);
}