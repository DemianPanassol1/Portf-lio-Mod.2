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

const transitionContent = {
	duration: 0.4,
};

export { scrollToTop, transitionContent,variantsContent };
