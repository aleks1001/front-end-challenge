import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setFilter: function(filter){
            this.sendAction('action', filter);
        }
    }
});
