import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.get('store').findAll('client');
  },
  renderTemplate: function() {
    this.render('main');

    this.render('tasks-list', {
      outlet: 'tasks-list',
      into: 'main'
    });
  }
});
