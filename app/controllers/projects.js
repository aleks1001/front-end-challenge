/**
 * Created by alexey.kozyachiy on 8/26/15.
 */

import Ember from 'ember';
import ProjectModel from '../models/projectModel';

export default Ember.ArrayController.extend({
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
        addProject: function (callback) {
            var project = this.get('newProject');
            if (project.get('isValid')) {
                this.get('model').pushObject(project.serialize());
                callback();
            }
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
        },
        removeModal: function () {
            return true;
        },
        openModal: function () {
            this.set('newProject', ProjectModel.create({
                id: this.get('length') + 1
            }));
            return true;
        }
    }
});
