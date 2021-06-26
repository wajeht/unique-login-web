class Password {
    // private variable
    static #defaultPassword =
        'abcdefghijklmnopqrstuvwxyz!@#$%^&*-.ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    static #upercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static #lowercase = 'abcdefghijklmnopqrstuvwxyz';
    static #number = '1234567890';
    static #special = '!@#$%^&*-.';

    // public variable
    static defaultLength = 14;
    static isUppercase = false;
    static isLowercase = false;
    static isNumber = false;
    static isSpecial = false;

    static #getRandomUppercase() {
        let result = '';
        const upperCase = this.#upercase;
        const passwordLength = this.defaultLength;
        const upperCaseLength = this.#upercase.length;

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * upperCaseLength);
            result += upperCase[randomNumber];
        }

        return result;
    }

    static #getRandomLowercase() {
        let result = '';
        const lowerCase = this.#lowercase;
        const passwordLength = this.defaultLength;
        const lowerCaseLength = this.#lowercase.length;

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * lowerCaseLength);
            result += lowerCase[randomNumber];
        }

        return result;
    }

    static #getRandomNumber() {
        let result = '';
        const number = this.#number;
        const passwordLength = this.defaultLength;
        const numberLength = this.#number.length;

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * numberLength);
            result += number[randomNumber];
        }

        return result;
    }

    static #getRandomSpecial() {
        let result = '';
        const special = this.#special;
        const passwordLength = this.defaultLength;
        const specialLength = this.#special.length;

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * specialLength);
            result += special[randomNumber];
        }

        return result;
    }

    static #getDefaultPassword() {
        let result = '';
        const defaultPassword = this.#defaultPassword;
        const passwordLength = this.defaultLength;
        const defaultPasswordLengh = this.#defaultPassword.length;

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * defaultPasswordLengh);
            result += defaultPassword[randomNumber];
        }

        return result;
    }

    static getPassword() {
        let list = [];
        let result = '';
        const length = this.defaultLength;

        // if user check specific option, add it to the list
        if (this.isUppercase) {
            list.push(this.#getRandomUppercase());
        }
        if (this.isLowercase) {
            list.push(this.#getRandomLowercase());
        }
        if (this.isNumber) {
            list.push(this.#getRandomNumber());
        }
        if (this.isSpecial) {
            list.push(this.#getRandomSpecial());
        }

        // if there are more than one in the list, we can start randomizing
        if (list.length > 1) {
            const mixedPassword = list.join('');
            const mixedPasswordLength = mixedPassword.length;

            for (let i = 0; i < length; i++) {
                result += mixedPassword[Math.floor(Math.random() * mixedPasswordLength)];
            }
        } else {
            // if the list is empt then, we can just return defualt random password
            result = this.#getDefaultPassword();
        }

        return result;
    }
}

module.exports = Password;
