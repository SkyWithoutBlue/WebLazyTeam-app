export const imageAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
}
export const textAnimation = {
	hidden: { opacity: 0 },
	visible: (i: number) => ({
		opacity: [0, 0.5, 1],

		transition: {
			delay: i * 0.2,
			duration: 1,
			ease: 'easeInOut',
		},
	}),
}
export const titleAnimation = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, duration: 2 },
}
export const listItemVariants = {
	closed: {
		x: -10,
		opacity: 0,
	},
	opened: {
		x: 0,
		opacity: 1,
	},
}
export const underlineAnimation = {
	hidden: {
		width: 0,
		opacity: 0,
	},
	visible: {
		width: '100%',
		opacity: 1,
	},
}
export const listVariants = {
	closed: {
		x: '100vw',
	},
	opened: {
		x: 0,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
}
export const topVariants = {
	closed: {
		rotate: 0,
	},
	opened: {
		rotate: 45,
		backgroundColor: 'rgb(255,255,255)',
	},
}
export const centerVariants = {
	closed: {
		opacity: 1,
	},
	opened: {
		opacity: 0,
	},
}
export const bottomVariants = {
	closed: {
		rotate: 0,
	},
	opened: {
		rotate: -45,
		backgroundColor: 'rgb(255,255,255)',
	},
}

export const textVariant = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
			type: 'spring',
			stiffness: 100,
		},
	},
}
export const contentVariant = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 2.5,
			ease: 'easeInOut',
			type: 'spring',
			stiffness: 200,
		},
	},
}
