// Copied from https://github.com/eslint/eslint/blob/82177e4108d6b3e63ece6072d923c0a2c08907bf/lib/shared/string-utils.js#L27

/**
 * Converts the first letter of a string to uppercase.
 * @param {string} string The string to operate on
 * @returns {string} The converted string
 */
export function upperCaseFirst(string) {
	if (string.length <= 1) {
		return string.toUpperCase();
	}
	return string[0].toUpperCase() + string.slice(1);
};
