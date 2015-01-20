import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.resource('clients', function () {
    this.resource('clients.projects', {
      path: ':client_id'
    }, function () {
      this.resource('clients.projects.tasks', {
        path: 'projects/:project_id/tasks'
      }, function () {
        this.route('view', {
          path: ':task_id'
        });
        this.route('new');
      });
    });
  });
  this.resource('main', function () {
    this.route('client', {
      path: 'client/:client_id'
    });
    this.route('project', {
      path: 'project/:project_id'
    });
    this.route('task', {
      path: 'task/:task_id'
    });
    this.route('new');
  });
});

export default Router;
