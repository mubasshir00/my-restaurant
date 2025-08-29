
import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Container({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div className={clsx("mx-auto w-full max-w-6xl px-4", className)}>
			{children}
		</div>
	);
}

export function Button({
	children,
	className,
	variant = "primary",
	href,
}: PropsWithChildren<{
	className?: string;
	variant?: "primary" | "outline" | "ghost";
	href?: string;
}>) {
	const base =
		"inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";
	const styles = {
		primary: "bg-orange-500 text-white shadow hover:bg-orange-600",
		outline: "border border-neutral-200 bg-white hover:bg-neutral-50",
		ghost: "hover:bg-black/5",
	}[variant];
	if (href)
		return (
			<a href={href} className={clsx(base, styles, className)}>
				{children}
			</a>
		);
	return <button className={clsx(base, styles, className)}>{children}</button>;
}

export function Badge({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<span
			className={clsx(
				"inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-neutral-700 shadow-sm backdrop-blur",
				className,
			)}>
			{children}
		</span>
	);
}

export function Card({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<article
			className={clsx(
				"rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md",
				className,
			)}>
			{children}
		</article>
	);
}