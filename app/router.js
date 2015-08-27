import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.route('projects', {path: '/'});
    this.route('project', {path: "project/:project_id"});
});

export default Router;
