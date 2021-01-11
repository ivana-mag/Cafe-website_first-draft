ValidateLogin = {
    userName: null,
    passWord: null,
    blank_err: null,
    baseUrl: "https://sedc-rest.firebaseio.com/G2/ivana/SPA/accounts.json",
    loginBtn: null,
    c: null,

    init() {
        this.loginClick();
    },

    loginClick() {
        this.loginBtn.addEventListener('click', () => {
            axios.get(this.baseUrl).then((resp) => {

                var keys = Object.keys(resp.data);

                for (let i = 0; i <keys.length; i++) {

                   var username = resp.data[keys[i]].userName;
                   var password = resp.data[keys[i]].passWord;
                    if(!this.userName.value || !this.passWord.value){
                        this.blank_err.innerHTML = "Please login";
                        return;
                    }
                    else if(username !== this.userName.value || password !== this.passWord.value){
                        this.blank_err.innerHTML = "Invalid login";
                        
                    }
                    else if (username === this.userName.value && password === this.passWord.value){
                        
                        localStorage.setItem('loggedIn', 1);
                        Router.loadPage('dashboard', c);
                        console.log(username)
                        console.log(password)
                        console.log('logged-in');
                        this.blank_err.innerHTML = ""
                        
                    }
                    
                }
            });
        });
    },


}