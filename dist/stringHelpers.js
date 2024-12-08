"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.wordCount = exports.isPalindrome = exports.truncate = exports.reverse = exports.capitalize = exports.toKebabCase = exports.toSnakeCase = exports.toPascalCase = exports.toCamelCase = void 0;
/**
 * Convert a string to camelCase
 */
const toCamelCase = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};
exports.toCamelCase = toCamelCase;
/**
 * Convert a string to PascalCase
 */
const toPascalCase = (str) => {
    return str
        .toLowerCase()
        .replace(/(^\w|[^a-zA-Z0-9]+\w)/g, (match) => match.toUpperCase().replace(/[^a-zA-Z0-9]/g, ""));
};
exports.toPascalCase = toPascalCase;
/**
 * Convert a string to snake_case
 */
const toSnakeCase = (str) => {
    return str
        .replace(/\s+/g, "_")
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toLowerCase();
};
exports.toSnakeCase = toSnakeCase;
/**
 * Convert a string to kebab-case
 */
const toKebabCase = (str) => {
    return str
        .replace(/\s+/g, "-")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase();
};
exports.toKebabCase = toKebabCase;
/**
 * Capitalize the first letter of a string
 */
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
exports.capitalize = capitalize;
/**
 * Reverse a string
 */
const reverse = (str) => {
    return str.split("").reverse().join("");
};
exports.reverse = reverse;
/**
 * Truncate a string to a specific length and add "..." if truncated
 */
const truncate = (str, length) => {
    if (str.length <= length)
        return str;
    return str.slice(0, length) + "...";
};
exports.truncate = truncate;
/**
 * Check if a string is a palindrome
 */
const isPalindrome = (str) => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
};
exports.isPalindrome = isPalindrome;
/**
 * Count the number of words in a string
 */
const wordCount = (str) => {
    return str.trim().split(/\s+/).length;
};
exports.wordCount = wordCount;
/**
 * Generate a random string of a specific length
 */
const generateRandomString = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
exports.generateRandomString = generateRandomString;
