import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        var app_controller = this.controllerFor('application');

        /** se non è presente in memoria il token l'utente viene ri-direzionato alla pagina di login **/
        if ( !app_controller.token ){
            this.redirectToLogin();
        }
    },

    redirectToLogin: function() {
        this.transitionTo('login/main');
    },

    redirectToDashboard: function() {
        this.transitionToRoute('dashboard/main');
    },

    actions: {
        error: function(reason) {
            if (reason.status === 401) {
                this.redirectToLogin();
            } else {
                new PNotify({
                    title: 'Attention!',
                    text: 'Something went wrong.',
                    type: 'error'
                });
                this.redirectToDashboard();
            }
        }
    }
});
