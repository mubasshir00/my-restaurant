import React from 'react'
import { Button } from '../ui';

const Newsletter = () => {
  return (
		<div>
			<p>Get Or Promo Code by Subscribing To our Newsletter</p>
			<form>
				<label>Email Address</label>
				<input placeholder='Enter your email' />
				<Button>Subscribe</Button>
			</form>
		</div>
	);
}

export default Newsletter