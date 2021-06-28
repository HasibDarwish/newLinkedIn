import {Component} from "react";
import Carousel from "react-elastic-carousel";
import "../ProfilePage/Profile.css";

 class CarouselBadge extends Component {
	state = {
		items: [
			{id: 1, title: "item #1"},
			{id: 2, title: "item #2"},
			{id: 3, title: "item #3"},
			{id: 4, title: "item #4"},
			{id: 5, title: "item #5"},
		],
	};

	render() {
		const {items} = this.state;
		return (
			<>
				<Carousel className="carousel pt-3 pb-3" itemsToShow={2}>
					{items.map((item) => (
						<div key={item.id}>
							<span>
								<div className="alert alert-info" role="alert">
									A simple info it out! A simple info alert—check it out!
								</div>
							</span>
						</div>
					))}
				</Carousel>
			</>
		);
	}
}

export default CarouselBadge;
