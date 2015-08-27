/**
 * Created by alexey.kozyachiy on 8/27/15.
 */
import ProjectModel from '../models/projectModel';

import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON("challenge.json").then(function (data) {
            return data.projects.map(function (project) {
                return ProjectModel.create(project);
            });
        });
    },
    actions: {
        openModal: function (modalName, ctrlName) {
            return this.render(modalName, {
                into: 'application',
                outlet: 'modal',
                controller: ctrlName
            });
        },
        removeModal: function () {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
