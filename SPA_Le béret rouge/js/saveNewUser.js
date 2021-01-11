newUser = {
    inputs: null,
    signup_firstName: null,
    signup_lastName: null,
    signup_userName: null,
    signup_passWord: null,
    signup_passWord_check: null,
    PassCheckMsg: null,
    signup_email: null,
    signup_email_msg: null,
    saveUserBtn: null,
    blank_msg: null,

    init() {
        this.saveUserClick();
    },

    saveUserClick() {
        var t = this;
        t.saveUserBtn.addEventListener('click', () => {
            var regex = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\..{2,4}$/gi);
            var VerifyEmail = regex.test(t.signup_email.value);
            for (let i = 0; i < t.inputs.length; i++) {
                if (!t.inputs[i].value) {
                    t.blank_msg.innerHTML = "Please fill out the form."
                    return;
                };
                t.blank_msg.innerHTML = ""
                //console.log(t.inputs[i].value)
            }
    
            if (t.signup_passWord.value !== t.signup_passWord_check.value) {
                t.PassCheckMsg.innerHTML = "Not a match.";
                return;
            }
            t.PassCheckMsg.innerHTML = ""
    
    
            if (VerifyEmail === false) {
                t.signup_email_msg.innerHTML = "*Invalid email";
                console.log(t.signup_email.value);
                console.log(VerifyEmail);
                return;
            }
            else if (VerifyEmail === true) {
                t.signup_email_msg.innerHTML = "";
                console.log(VerifyEmail);
                console.log(t.signup_email.value);
            }
    
            axios.post("https://sedc-rest.firebaseio.com/G2/ivana/SPA/accounts.json", user = {
                firstName: t.signup_firstName.value,
                lastName: t.signup_lastName.value,
                userName: t.signup_userName.value,
                passWord: t.signup_passWord.value,
                email: t.signup_email.value,
            }).then((resp) => {
                console.log(user)
                Router.loadPage('login', c);
            });
    
    
        });
    }

}