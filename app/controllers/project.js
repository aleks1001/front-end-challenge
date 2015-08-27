/**
 * Created by alexey.kozyachiy on 8/27/15.
 */
import Ember from "ember";

export default Ember.Controller.extend({
    needs: ['application'],
    projects: Ember.computed.alias('controllers.application.model'),
    newProject: Ember.computed.alias('model'),
    id: Ember.computed.alias('model.id'),
    actionName: 'saveProject',
    title: 'Edit Project',
    projectPeriod: function () {
        return moment(this.get('model.startDate'), 'll').format('L') + ' to ' + moment(this.get('model.endDate'), 'll').format('L');
    }.property('model.startDate', 'model.endDate'),
    progressValue: function () {
        var percent = this.get('model.percent');
        return new Ember.Handlebars.SafeString('width: ' + percent + '%;');
    }.property('model.percent'),
    progressRatio: function () {
        var total = this.get('model.total_steps');
        var current = this.get('model.current_step');
        return current + '/' + total;
    }.property('model.total_steps', 'modal.current_step'),
    isNext: function(){
        var length = this.get('projects.length');
        return this.get('id') < length;
    }.property('projects','id'),
    isPrev: function(){
        return this.get('id') > 1;
    }.property('projects','id'),
    actions: {
        saveProject: function(){
            console.log("Saving...");
        },
        nextProject: function(){
            this.transitionToRoute('project', this.get('projects').findBy('id', this.get('id') + 1));
        },
        prevProject: function(){
            this.transitionToRoute('project', this.get('projects').findBy('id', this.get('id') - 1));
        }
    }
});
