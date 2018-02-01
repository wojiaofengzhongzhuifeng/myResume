window.Model = function(SQLname){
    return {
        fetch: function() {
            let query = new AV.Query(SQLname);
            return query.find()
        },
        save: function(messageNameContent, messagContent){
            //saveInformation
            let Message = AV.Object.extend(SQLname);//前面的是构造函数, 后面的是表的名字
            let message = new Message();//前面的是构造函数构造的对象, 对象有增删改查 API
            return message.save({
                name: messageNameContent,//保存的内容
                content: messagContent
            })
        }
    }
}