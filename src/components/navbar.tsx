/** @format */

import { Button } from "./ui";

export default function NavBar() {
	return (
		<header>
			<div>Resturant</div>
			<nav>
				{[
					["Home", "#"],
					["Menu", "#menu"],
                    ["Events","#events"],
                    ["Gallery","#gallery"],
                    ["About","#about"],
                    ["Contact","#contact"]
				].map(([label, href]) => (
					<a key={label} href={href}>
						{label}
					</a>
				))}
			</nav>
            <Button>Book a Table</Button>
		</header>
	);
}
