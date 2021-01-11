var Router = {
    //the base api url on your computer
    baseUrl: "http://127.0.0.1:5501/index.html",
    
    //store the last loaded page
    currentPage: "",
    
    //get browser location
    getLocation(){
        return window.location; 
    },

    //get hash from location object
    getHash(){
        //console.log(this.getLocation().hash.substr(1))
        return this.getLocation().hash.substr(1);
    },
    navigate(page){
        window.location.assign(`${this.getLocation.baseUrl}#${page}`);
    },

    togglePreloader: function (show) {
        var preloader = document.querySelector('div.preloader');
        if (typeof show !== 'undefined' && show) {
            preloader.style.display = 'block';
        } else {
            preloader.style.display = 'none';
        }
    },

    loadPage(pageTemplate, container){
        this.togglePreloader(true);
        axios.get(`http://127.0.0.1:5501/pages/${pageTemplate}.html`).then((resp)=>{
            if(pageTemplate === Router.currentPage){
                return;
            }
            if (resp.data){
                container.innerHTML = resp.data;
            }
            
            var scripts = container.getElementsByTagName('script');
            for (var i = 0; i < scripts.length; i++) {
                eval(scripts[i].innerText);
            }
            Router.togglePreloader();
            Router.currentPage = pageTemplate;
        });
      
    },

    watchHashChange(container){
        window.addEventListener('hashchange', ()=>{
            var c = container;
            var pageContainer = document.querySelector("div#main-container");
            var page = Router.getHash();
            if(pageContainer){
                c = pageContainer;
            }
            Router.loadPage(page, c);
        });
    }


    
}