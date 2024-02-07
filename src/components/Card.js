import '../css/App.css';
import starImg from '../images/star.png';

export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (props.location === "Online") {
		badgeText = "ONLINE"
	}

	return (
		<div className='card'>
			{badgeText && <div className='card-badge'>{badgeText}</div>}
			<img src={`./${props.coverImg}`} alt="card-img" className='card-img' />
			<div className="card-title-block">
				<p className='card-title'>{props.title}</p>
				<div className='card-stats'>
					<img src={starImg} alt="" className="card-rating-icon" />
					<span className="card-rating">{props.stats.rating}</span>
					<span className='gray'>({props.stats.reviewCount}).</span>
				</div>
			</div>
			<p className='card-location'>{props.location}</p>
			<p className='card-price'><span className="bold">From ${props.price}</span>/person</p>
			{/* <p className='card-details'>{props.description}</p> */}
		</div>
	);
}