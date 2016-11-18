import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const apiai = require('apiai');
const app = apiai("");

export const Messages = new Mongo.Collection('message');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('messages', function tasksPublication() {
    return Messages.find({});
  });
}

Meteor.methods({
  'messages.insert'(text, chatId) {
    check(text, String);

    Messages.insert({
      text,
      chatId,
      user: true,
      createdAt: new Date()
    });

    let options = {
      sessionId: chatId
    };

    let request = app.textRequest(text, options);

    request.on('response', Meteor.bindEnvironment(function (response, errror) {
        text = response.result.fulfillment.speech + '<br><br><button class="js-yes">Ja</button><button class="js-no">Nein</nein>';

        Messages.insert({
          text,
          chatId,
          user: false,
          createdAt: new Date()
        });

    }, function (error) {
        console.log(error);
    }));

    request.end();
  },

  'messages.remove'(messageId) {
    check(messageId, String);

    const message = Message.findOne(messageId);
    Messages.remove(taskId);
  },
});
