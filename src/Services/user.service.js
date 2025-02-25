import config from "./config";

import { authHeader } from "../Routes";

export const userService = {
	login,
	logout,
	getAll,
	getById,
	update,
};

function login(username) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username }),
	};

	return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
		.then(handleResponse)
		.then((user) => {
			if (user.token) {
				localStorage.setItem("user", JSON.stringify(user));
			}

			return user;
		});
}

function logout() {
	//localStorage.removeItem("user");
}


function getAll() {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
		handleResponse
	);
}

function update(user) {
	const requestOptions = {
		method: "PUT",
		headers: { ...authHeader(), "Content-Type": "application/json" },
		body: JSON.stringify(user),
	};

	return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
		handleResponse
	);
}


function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				logout();
				location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
