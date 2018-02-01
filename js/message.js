!function(){


    let view = View("div.message-section")

    let controller = {
        view: null,
        model: null,
        messageNameContent:null,  //①
        messagContent: null,  //①
        init: function(view, model){
            this.view = view
            this.model = model
            this.form = view.querySelector("#messageForm")
            this.initAV()
            this.loadInformation()
            this.bindEvents()
        },
        initAV: function(){
            let APP_ID = 'b4xlq4PrN138uAccOJx7L18f-gzGzoHsz';
            let APP_KEY = '6E49lAMIi8JNy5Y1G66GaB7n';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        showInformation: function(messageNameContent,messagContent){    //④
            let liTag1 = document.createElement("li")
            liTag1.innerHTML = messageNameContent + ":  " + messagContent
            messageShowPosition.appendChild(liTag1)
        },
        loadInformation: function(){
            //getInformationShowInformation
            this.model.fetch().then(function ( messageFromLeanCloud) {
                for(var i = 0; i < messageFromLeanCloud.length;i++){
                    var name = messageFromLeanCloud[i]["attributes"]["name"]
                    var content = messageFromLeanCloud[i]["attributes"]["content"]
                    //showInformation
                    let liTag1 = document.createElement("li")
                    liTag1.innerHTML = name + ":  " + content
                    messageShowPosition.appendChild(liTag1)
                }
            });
        },
        bindEvents: function(){
            this.form.addEventListener("submit", (e)=>{
                e.preventDefault()
                let nameInput = document.querySelector("#name")
                this.messageNameContent = nameInput.value    //②

                let contentInput = document.querySelector("#content")
                this.messagContent = contentInput.value  //②




                this.model.save(this.messageNameContent,this.messagContent).then(function(object) {  //③
                    alert('保存成功');//保存成功要做的事情
                    nameInput.value = ""
                    contentInput.value = ""
                })

                //showInformation
                this.showInformation(this.messageNameContent, this.messagContent ) //⑤
            })
        }
    }




    let model = Model('messageOnLeanCloud')
    controller.init(view, model)



    //以下是没有封装的代码

    /*
    *

    //initAV
    let APP_ID = 'b4xlq4PrN138uAccOJx7L18f-gzGzoHsz';
    let APP_KEY = '6E49lAMIi8JNy5Y1G66GaB7n';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });




    //getInformationShowInformation
    let query = new AV.Query('messageOnLeanCloud');
    query.find().then(function ( messageFromLeanCloud) {
        for(var i = 0; i < messageFromLeanCloud.length;i++){
            var name = messageFromLeanCloud[i]["attributes"]["name"]
            var content = messageFromLeanCloud[i]["attributes"]["content"]


            //showInformation
            let liTag1 = document.createElement("li")
            liTag1.innerHTML = name + ":  " + content
            messageShowPosition.appendChild(liTag1)

        }
    });







    //bindEventSaveInformationShowInformation
    let form = document.querySelector("#messageForm")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        let nameInput = document.querySelector("#name")
        let messageNameContent = nameInput.value

        let contentInput = document.querySelector("#content")
        let messagContent = contentInput.value




        //saveInformation
        let Message = AV.Object.extend('messageOnLeanCloud');//前面的是构造函数, 后面的是表的名字
        let message = new Message();//前面的是构造函数构造的对象, 对象有增删改查 API
        message.save({
            name: messageNameContent,//保存的内容
            content: messagContent
        }).then(function(object) {
            alert('保存成功');//保存成功要做的事情
            nameInput.value = ""
            contentInput.value = ""
        })

        //showInformation
        let liTag1 = document.createElement("li")
        liTag1.innerHTML = messageNameContent + ":  " + messagContent
        messageShowPosition.appendChild(liTag1)

    })


    */




/*
    //这是mvc的代码

    let view = document.querySelector('div.message-section')

    let model = {
        //获取数据
        fetch: function(){
            let query = new AV.Query('messageOnLeanCloud');
            return query.find()
        },
        save: function(a, b){
            let Message = AV.Object.extend('messageOnLeanCloud');//前面的是构造函数, 后面的是表的名字
            let message = new Message();//前面的是构造函数构造的对象, 对象有增删改查 API
            return message.save({
                name: a,//保存的内容
                content: b
            })
        }
    }
    let controller = {
        view: null,
        init: function(view, model){
            this.view = view
            this.model = model
            this.initAV()
            this.getInformationShowInformation()
            this.form = view.querySelector("#messageForm")
            this.bindEvents()
        },
        messageNameContent: null,
        messagContent: null,
        name: null,
        content:null,

        initAV: function(){
            let APP_ID = 'b4xlq4PrN138uAccOJx7L18f-gzGzoHsz';
            let APP_KEY = '6E49lAMIi8JNy5Y1G66GaB7n';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },

        showInformation: function(a, b){
            let liTag1 = document.createElement("li")
            liTag1.innerHTML = a + ":  " + b
            messageShowPosition.appendChild(liTag1)
        },

        saveInformation: function(){
            let nameInput = document.querySelector("#name")
            this.messageNameContent = nameInput.value

            let contentInput = document.querySelector("#content")
            this.messagContent = contentInput.value


            console.log(this.messagContent)


            //saveInformation
           this.model.save(this.messageNameContent, this.messagContent).then(function(object) {
                alert('保存成功');//保存成功要做的事情
                nameInput.value = ""
                contentInput.value = ""
            })

            //showInformation
            this.showInformation(this.messageNameContent, this.messagContent)

        },

        getInformationShowInformation: function(){
            this.model.fetch().then(function ( messageFromLeanCloud) {
                for(let i = 0; i < messageFromLeanCloud.length;i++){
                    let name = messageFromLeanCloud[i]["attributes"]["name"]
                    let content = messageFromLeanCloud[i]["attributes"]["content"]







                    let liTag1 = document.createElement("li")
                    liTag1.innerHTML = name + ":  " + content
                    messageShowPosition.appendChild(liTag1)
                }
            });
        },



        bindEvents: function(){

            this.form.addEventListener("submit", (e) => {
                e.preventDefault()
                this.saveInformation()
            })
        }
    }
    controller.init(view, model)




*/





}()


