const useDebouncedFn = (callback: any, delay: number = 1000) => {
	let timeout: any;
	return function (args: any) {
		clearTimeout(timeout);
		timeout = setTimeout(() => callback(args), delay);
	};
};

export { useDebouncedFn };
