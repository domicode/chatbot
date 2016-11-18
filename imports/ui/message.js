import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './message.html';

Template.message.helpers({

});

Template.message.events({
  'click .delete'() {
    Meteor.call('messages.remove', this._id);
  },

  'click .js-yes' () {
    const text = 'Ja';
    const chatId = FlowRouter.getParam("chatId");

    // Insert a task into the collection
    Meteor.call('messages.insert', text, chatId);

    // Clear form
    target.text.value = '';
  },

  'click .js-no' () {
    const text = 'Nein';
    const chatId = FlowRouter.getParam("chatId");

    // Insert a task into the collection
    Meteor.call('messages.insert', text, chatId);

    // Clear form
    target.text.value = '';
  }
});
