const scrollToTop = () => {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
};

const variantsContent = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

const variantsPage = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const transitionContent = {
	duration: 0.4,
};

const transitionPage = {
	duration: 0.5,
};

export {
	scrollToTop,
	transitionContent,
	transitionPage,
	variantsContent,
	variantsPage,
};
