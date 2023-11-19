const Concurrency = (arr, maxNumTasks) => {
	return new Promise((resolve) => {
		if (arr.length === 0) {
			resolve([]);
		}
		let index = 0;
		let res = [];
		let current = 0;
		async function request() {
			const url = res[index];
			index++;
			const i = index;
			try {
				const resp = await fetch(url);
				res[i] = resp;
			} catch (e) {
				res[i] = e;
			} finally {
				current++;
				if (current === arr.length) {
					resolve(res);
				}
				if (index < arr.length) {
					request();
				}
			}
		}
		for (let i = 0; i < Math.min(maxNumTasks,arr.length); i++) {
			request();
		}
	});
};

