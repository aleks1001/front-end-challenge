import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.modelFor('application').findBy('id', parseInt(params.project_id));
    }
});
