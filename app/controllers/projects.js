/**
 * Created by alexey.kozyachiy on 8/26/15.
 */

import Ember from 'ember';
import ProjectModel from '../models/projectModel';

export default Ember.ArrayController.extend({
    init: function(){
        this._super();
        this.set('newProject', ProjectModel.create({
            start_date: moment().format('X'),
            end_date: moment().format('X'),
            active: true,
            total_steps: 30,
            current_step: 11
        }));
    },
    actionName: 'addProject',
    title: 'Add New Project',
    itemController: 'projectItem',
    sortProperties: ['id'],
    sortAscending: false,
    sortedModel: Ember.computed.sort('model', 'sortProperties'),
    filteredContent: function () {
        var filter = this.get('filter');
        var model = this.get('sortedModel');
        if (filter === 'active') {
            return model.filter(function (m) {
                return m.get('active') === true;
            });
        } else if (filter === 'inactive') {
            return model.filter(function (m) {
                return m.get('active') === false;
            });
        } else {
            return model;
        }
    }.property('@each', 'filter', 'sortProperties'),
    actions: {
        addProject: function () {
            var n = this.get('newProject');
            this.get('model').pushObject(n);
        },
        applyFilter: function (filter) {
            this.set('filter', filter);
        },
        sortBy: function (prop) {
            if (this.get('sortAscending')) {
                this.set('sortProperties', [prop + ':asc']);
            } else {
                this.set('sortProperties', [prop + ':desc']);
            }
            this.set('sortAscending', !this.get('sortAscending'));
        }
    }
});
