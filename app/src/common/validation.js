import _ from "lodash";
import { getAge } from "./validation-utils";
import { isSameArray } from "./utils";

const genders = ["femme", "homme", "non binaire"];

/**
 * Validate an email.
 * An email is considered valid if it is composed of one `@', and has TLD prefix.
 * @param {String} email    An email to validate
 * @returns                 A boolean, true if email is valid, false otherwise
 */
export function validateEmail(email) {
    const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return String(email).toLowerCase().match(emailRe) !== null;
};

/**
 * Validate a password.
 * A password is considered valid if it is a valid string, composed of at least 6 characters
 * and a maximum of 20 characters, has at least one special character, at least one uppercase
 * and one number.
 * @param {String} password A password to validate
 * @returns {Boolean}       A boolean, true if password is valid, false otherwise
 */
export function validatePassword(password) {
    const passwordRe = /^(?=.*[!@#$&?])(?=.*\d)(?=.*[A-Z])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,20}$/;

    return passwordRe.test(password);
}

/**
 * Validate a date.
 * A date is considered valid if it is an instance of Date object and if the date is 
 * at least the current year minus 18 years.
 * @param {Date}        date    A date object
 * @returns {Boolean}           A boolean, true if date is valid, false otherwise
 */
export function validateDate(date) {
    return _.isDate(date) && getAge(date) >= 18;
}

/**
 * Validate preferences.
 * A preferences object is considered valid if it contains all of the propositions,
 * and at least one of its field has a value of true.
 * @param   {Object}    preferences An object of the form {"homme": <bool>, "femme": <bool>, "non binaire": <bool>}
 * @returns {Boolean}               A boolean, true if preferences is valid, false otherwise
 */
export function validatePreferences(preferences) {
    const keys = Object.keys(preferences);
    const vals = Object.values(preferences);

    return !_.isEmpty(preferences) && isSameArray(genders, keys) && vals.some(val => val === true);
}

/**
 * Validate a gender.
 * A gender is considered valid if it belongs to at least one of the
 * following gender set : 'homme', 'femme' or 'non binaire'.
 * @param {String}      gender  The gender to validate.
 * @returns {Boolean}           A boolean, true if gender is valid, false otherwise
 */
export function validateGender(gender) {
    return genders.includes(gender);
}