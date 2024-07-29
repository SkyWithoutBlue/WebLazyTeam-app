export const imageAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
}
export const textAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
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
