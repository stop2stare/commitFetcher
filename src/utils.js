export const saveLocalItem = (key, value) => {
	localStorage.setItem(key, value);
}

export const getLocalItem = (key) => localStorage.getItem(key);

export const removeLocalItem = (key) => {
	localStorage.removeItem(key);
}
