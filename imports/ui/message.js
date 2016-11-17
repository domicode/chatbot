import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './message.html';

Template.message.helpers({

});

Template.message.events({
  'click .delete'() {
    Meteor.call('messages.remove', this._id);
  }
});
