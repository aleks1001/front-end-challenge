import Ember from 'ember';

export default Ember.Object.extend({
    id: null,
    name: null,
    description: null,
    start_date: null,
    end_date: null,
    total_steps: 10,
    current_step: 3,
    active: true,
    startDate: function(){
        return moment(this.get('startDatePickerValue')).format('ll');
    }.property('start_date', 'startDatePickerValue'),
    endDate: function(){
        return moment(this.get('endDatePickerValue')).format('ll');
    }.property('end_date', 'endDatePickerValue'),
    startDatePickerValue: function(){
        return moment.unix(this.get('start_date')).toDate();
    }.property('start_date'),
    endDatePickerValue: function(){
        return moment.unix(this.get('end_date')).toDate();
    }.property('end_date'),
    minDatePickerValue: function(){
        return moment().format("L");
    }.property(),
    percent: function(){
        var total = this.get('total_steps');
        var current = this.get('current_step');
        return current*100/total;
    }.property('total_steps', 'current_step'),
    init: function(){
        this._super();
        this.set('owner', Ember.Object.create(this.get('owner')));
    },
    serialize: function () {
        var props = "id name description start_date end_date total_steps current_step active owner".w();
        this.setProperties({
            start_date: moment(this.get('startDatePickerValue')).format('X'),
            end_date: moment(this.get('endDatePickerValue')).format("X")
        });
        return this.constructor.create(this.getProperties(props));
    },
    isValid: function(){
        return (this.get('name.length') > 0 && this.get('owner.name.length') > 1);
    }.property('name', 'owner.name')
});
