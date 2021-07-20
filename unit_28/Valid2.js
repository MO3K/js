class Valid2 extends Valid {
    constructor(email, password, isValid = false, emaiError = '', passwordError = '') {
        super(email, password, isValid = false);
        this.emaiError = emaiError;
        this.passwordError = passwordError;
    }

    validate() {
        this.isValid = true;
        if (this.password.length < 6) {
            this.isValid = false;
            this.passwordError = 'min length 6';
        }
        if (this.email == '') {
            this.isValid = false;
            this.emaiError = 'email empty';
        }
    }
}
