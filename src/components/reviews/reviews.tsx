/** @format */

import { reviewsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Reviews = () => {
	return (
		<div>
			<header>Our Happy Customers</header>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry
			</p>

			<div>
				{reviewsData.map(({ id, name, title, comment, rating, image }) => (
					<div key={id}>
						<p>{name}</p>
						<p>{title}</p>
						<p>{comment}</p>
						<p>{rating}</p>
						<Image
							src={image}
							alt={name}
							width={200} // px
							height={150} // px
							className='object-cover'
							sizes='(min-width:768px) 50vw, 100vw'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
