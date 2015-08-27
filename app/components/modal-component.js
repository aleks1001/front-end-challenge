/**
 * Created by alexey.kozyachiy on 8/27/15.
 */
import Ember from 'ember';

export default Ember.Component.extend({
    show: function () {
        this._super();
        var self = this,
            modal = self.$('.modal');
        modal.modal('show');
        modal.on("shown.bs.modal", function(){
        }).on('hidden.bs.modal', function () {
            self.sendAction('close');
        });
    }.on('didInsertElement'),
    willDestroyElement: function(){
        this.$('.modal').modal('hide');
    },
    actions: {
        cancel: function(){
            this.$('.modal').modal('hide');
        },
        ok: function(){
            this.sendAction('save');
            this.$('.modal').modal('hide');
        }
    }
});
