import Ember from 'ember';

export default Ember.Object.extend({
    startDate: function(){
        return moment.unix(this.get('start_date')).format('ll');
    }.property('start_date'),
    endDate: function(){
        return moment.unix(this.get('end_date')).format('ll');
    }.property('end_date'),
    percent: function(){
        var total = this.get('total_steps');
        var current = this.get('current_step');
        return current*100/total;
    }.property('total_steps', 'current_step'),
    init: function(){
        this._super();
        this.set('owner', Ember.Object.create(this.get('owner')));
    }
});
