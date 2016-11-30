const arg = require('../util/arg');

/**
 * Entity to represent a telegram user.
 */
class User {
    /**
     * @param  {Number} id - Numeric ID of the user.
     * @param  {String} username - Telegram username, without the @
     * @param  {String} firstName - The first name of the user.
     * @param  {String} lastName - The last name of the user.
     * @return {User}
     */
    constructor(id, username, firstName, lastName) {
        arg.checkIfNumber(id, 'id');
        arg.checkIfNullOrEmpty(username, 'username');
        arg.checkIfNullOrEmpty(firstName, 'firstName');
        arg.checkIfNullOrEmpty(lastName, 'lastName');

        this._id = id;
        this._username = username;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    /**
     * @return {Number}
     */
    get id() {
        return this._id;
    }

    /**
     * @return {String}
     */
    get username() {
        return this._username;
    }

    /**
     * @return {String}
     */
    get firstName() {
        return this._firstName;
    }

    /**
     * @return {String}
     */
    get lastName() {
        return this._lastName;
    }
}

module.exports = User;