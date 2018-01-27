!function(){
    let form = document.querySelector("#messageForm")

    let APP_ID = 'b4xlq4PrN138uAccOJx7L18f-gzGzoHsz';
    let APP_KEY = '6E49lAMIi8JNy5Y1G66GaB7n';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });


    showMessageFromLeanCloud()

    form.addEventListener("submit", function(e){
        e.preventDefault()
        let nameInput = document.querySelector("#name")
        let messageNameContent = nameInput.value

        let contentInput = document.querySelector("#content")
        let messagContent = contentInput.value





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

        createLiAndPutContent(messageNameContent, messagContent)

    })






    function showMessageFromLeanCloud(){
        let query = new AV.Query('messageOnLeanCloud');
        query.find().then(function ( messageFromLeanCloud) {
            for(var i = 0; i < messageFromLeanCloud.length;i++){
                var name = messageFromLeanCloud[i]["attributes"]["name"]
                var content = messageFromLeanCloud[i]["attributes"]["content"]

                createLiAndPutContent(name, content)

            }
        });
    }



    function createLiAndPutContent(a, b){
        let liTag1 = document.createElement("li")
        liTag1.innerHTML = a + ":  " + b
        messageShowPosition.appendChild(liTag1)
    }

}()


