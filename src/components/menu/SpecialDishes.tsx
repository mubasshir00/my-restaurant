import { dishes } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

const SpecialDishes = () => {
  return (
		<div>
			<div>Our Special Dishes</div>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry
			</p>
			<div>
				{dishes.map(({ id, name, price, image, desc, badge }) => (
					<div key={id}>
						<Image
							src={image}
							alt={name}
							width={200} // px
							height={150} // px
							className='object-cover'
							sizes='(min-width:768px) 50vw, 100vw'
						/>
						<p>{name}</p>
						<p>{price}</p>
						<p>{desc}</p>
						<p>{badge}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default SpecialDishes