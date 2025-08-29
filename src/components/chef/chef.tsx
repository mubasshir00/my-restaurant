/** @format */

import Image from "next/image";
import React from "react";

const Chef = () => {
	return (
		<div>
			<p>Our exparts chef</p>
			<p>
				Lorem Ipsum has been the industry&apos;s standard dummy text ever since
				the 1500s, when an unknown printer took a galley of type and scrambled
				it to make a type specimen book.
			</p>
			<ul>
				<li>Lorem Ipsum is simply dummy text of the printing</li>
				<li>Lorem Ipsum is simply dummy text of the printing</li>
				<li>Lorem Ipsum is simply dummy text of the printing</li>
				<li>Lorem Ipsum is simply dummy text of the printing</li>
				<li>Lorem Ipsum is simply dummy text of the printing</li>
				<li>Lorem Ipsum is simply dummy text of the printing</li>
			</ul>
			<Image
				src={
					"https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1400&auto=format&fit=crop"
				}
				alt='Chef'
				width={200} // px
				height={150} // px
				className='object-cover'
				sizes='(min-width:768px) 50vw, 100vw'
			/>
		</div>
	);
};

export default Chef;
