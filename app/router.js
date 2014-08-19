import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BasicCliAppENV.locationType
});

Router.map(function() {
    this.route('application');
    this.route('login/main', {path: 'login'});
    this.route('dashboard/main', {path: 'dashboard'});
});

export default Router;
