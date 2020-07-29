export function first_letter_uppercase(input: string) {
	return `${input.substr(0, 1).toUpperCase()}${input.substr(1)}`;
}