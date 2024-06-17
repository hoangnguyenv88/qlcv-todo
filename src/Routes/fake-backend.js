let users = [
	{ id: "5nwLmrzBoh", username: "Cơm sườn", localStorageKey: "comsuon" },
	{ id: "XhPFGzMpSw", username: "Cơm rang", localStorageKey: "comrang" },
	{ id: "CQzHn1UCwt", username: "Bún chả", localStorageKey: "buncha" },
	{ id: "jLZ0LCnyHH", username: "Bún riêu", localStorageKey: "bunrieu" },
	{ id: "AVVdxKZ96d", username: "Bánh cuốn", localStorageKey: "banhcuon" },
	{ id: "F3D6f7ekpE", username: "Phở bò", localStorageKey: "phobo" },
	{ id: "nutY2MqLrx", username: "Phở gà", localStorageKey: "phoga" },
	{ id: "bhAzwm6qKl", username: "Mỳ xào", localStorageKey: "myxao" },
	{ id: "izn7TzevOf", username: "Mỳ cay", localStorageKey: "mycay" },
	{ id: "OgzDTCTs0v", username: "Hủ tiếu", localStorageKey: "hutieu" },
];

export function configureFakeBackend() {
	let realFetch = window.fetch;
	window.fetch = function (url, opts) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					url.endsWith("/users/authenticate") &&
					opts.method === "POST"
				) {
					let params = JSON.parse(opts.body);

					let filteredUsers = users.filter((user) => {
						return user.username === params.username;
					});

					if (filteredUsers.length) {
						let user = filteredUsers[0];
						let responseJson = {
							id: user.id,
							username: user.username,
							token: "fake-jwt-token",
							localStorageKey: user.localStorageKey
						};
						resolve({
							ok: true,
							text: () =>
								Promise.resolve(JSON.stringify(responseJson)),
						});
					} else {
						reject("Username is incorrect");
					}

					return;
				}

				if (url.endsWith("/users") && opts.method === "GET") {
					if (
						opts.headers &&
						opts.headers.Authorization === "Bearer fake-jwt-token"
					) {
						resolve({
							ok: true,
							text: () => Promise.resolve(JSON.stringify(users)),
						});
					} else {
						reject("Unauthorised");
					}

					return;
				}

				if (url.match(/\/users\/\d+$/) && opts.method === "GET") {
					if (
						opts.headers &&
						opts.headers.Authorization === "Bearer fake-jwt-token"
					) {
						let urlParts = url.split("/");
						let id = parseInt(urlParts[urlParts.length - 1]);
						let matchedUsers = users.filter((user) => {
							return user.id === id;
						});
						let user = matchedUsers.length ? matchedUsers[0] : null;

						resolve({ ok: true, text: () => JSON.stringify(user) });
					} else {
						reject("Unauthorised");
					}

					return;
				}
				realFetch(url, opts).then((response) => resolve(response));
			}, 500);
		});
	};
}
