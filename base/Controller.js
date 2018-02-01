window.Controller = function(options){
    let init = options.init         //B

    let object = {
        view: null,
        init: function(view, model){     //A
            this.view = view
            this.model = model
            init.call(this, view, model)    //this指的是谁
        }
    }
    for(let key in options){
        if(key !== "init"){
            object[key] = options[key]
        }
    }
    return object
}