/**
 * Convert a string to camelCase
 */
export const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};

/**
 * Convert a string to PascalCase
 */
export const toPascalCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/(^\w|[^a-zA-Z0-9]+\w)/g, (match) =>
      match.toUpperCase().replace(/[^a-zA-Z0-9]/g, "")
    );
};

/**
 * Convert a string to snake_case
 */
export const toSnakeCase = (str: string): string => {
  return str
    .replace(/\s+/g, "_")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase();
};

/**
 * Convert a string to kebab-case
 */
export const toKebabCase = (str: string): string => {
  return str
    .replace(/\s+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
};

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Reverse a string
 */
export const reverse = (str: string): string => {
  return str.split("").reverse().join("");
};

/**
 * Truncate a string to a specific length and add "..." if truncated
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};

/**
 * Check if a string is a palindrome
 */
export const isPalindrome = (str: string): boolean => {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
};

/**
 * Count the number of words in a string
 */
export const wordCount = (str: string): number => {
  return str.trim().split(/\s+/).length;
};

/**
 * Generate a random string of a specific length
 */
export const generateRandomString = (length: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
