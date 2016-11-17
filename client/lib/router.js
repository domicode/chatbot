FlowRouter.route('/chats/:chatId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.chatId);
        BlazeLayout.render("mainlayout", { main: "chat" });
    }
});

FlowRouter.route('/chats', {
    action: function() {
       BlazeLayout.render("mainlayout", { main: "newchat" });
    }
});
