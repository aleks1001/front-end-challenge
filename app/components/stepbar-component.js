import Ember from 'ember';

export default Ember.Component.extend({
    percent: function(){
        var percent = this.get('value');
        return new Ember.Handlebars.SafeString('width: ' + percent + '%;');
    }.property('value')
});
