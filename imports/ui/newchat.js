import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './newchat.html';
import './chat.html';

Template.newchat.helpers({

});

Template.newchat.events({
  'click #newchat'() {
    Meteor.call('chats.insert', function (error, result) {
      FlowRouter.go('/chats/' + result);
    });
  }
});
