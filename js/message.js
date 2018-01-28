!function(){


    let view = document.querySelector('div.message-section')


    let controller = {
        view: null,
        init: function(view){
            this.view = view
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




            //saveInformation
            let Message = AV.Object.extend('messageOnLeanCloud');//前面的是构造函数, 后面的是表的名字
            let message = new Message();//前面的是构造函数构造的对象, 对象有增删改查 API
            message.save({
                name: this.messageNameContent,//保存的内容
                content: this.messagContent
            }).then(function(object) {
                alert('保存成功');//保存成功要做的事情
                nameInput.value = ""
                contentInput.value = ""
            })

            //showInformation
            this.showInformation(this.messageNameContent, this.messagContent)

        },

        getInformationShowInformation: function(){
            let query = new AV.Query('messageOnLeanCloud');
            query.find().then(function ( messageFromLeanCloud) {
                for(let i = 0; i < messageFromLeanCloud.length;i++){
                    let name = messageFromLeanCloud[i]["attributes"]["name"]
                    let content = messageFromLeanCloud[i]["attributes"]["content"]

                    console.log(this.name)
                    console.log(this.content)





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
    controller.init(view)



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










}()


