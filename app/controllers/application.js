import Ember from 'ember';

export default Ember.Controller.extend({
    isLogin: false,

    LOG_TRANSITIONS: true,
    visibility: [
        'private',
        'public'
    ],

    /*     ***local storage***     */
    grantsValue: JSON.parse(localStorage["grantsValue"] ? localStorage["grantsValue"] : "[\" \"]"),

    company: localStorage['company'],
    token: localStorage['token'],
    companyType: localStorage['companyType'],
    userId: localStorage['userId'],
    username: localStorage['username'],  //univoco per un utente
    userProfile: localStorage['userProfile'],
    companyProfile: localStorage['companyProfile'],
    selectedDepot: localStorage['selectedDepot'],
    isAdmin: localStorage['isAdmin'],

    companyChanged: function() { localStorage.company = this.company; }.observes('company'),
    tokenChanged: function() {
        localStorage.token = this.token;
        this.globals.set('token', this.token);
    }.observes('token'),

    companyTypeChanged: function() { localStorage.companyType = this.companyType; }.observes('companyType'),
    userIdChanged: function() { localStorage.userId = this.userId; }.observes('userId'),
    usernameChanged: function() { localStorage.username = this.username; }.observes('username'),
    userProfileChanged: function() { localStorage.userProfile = this.userProfile; }.observes('userProfile'),
    companyProfileChanged: function() { localStorage.companyProfile = this.companyProfile; }.observes('companyProfile'),

    selectedDepotChanged: function() { localStorage.selectedDepot = this.selectedDepot; }.observes('selectedDepot'),
    isAdminChanged: function() { localStorage.isAdmin = this.isAdmin; }.observes('isAdmin'),


    currencyClassification: [
        'EUR',
        'USD'
    ],

    /*     ***auto complete***     */
    autocompleteUser: Ember.A(),
    autocompleteCompany: Ember.A(),
    autocompletePoiPort: Ember.A(),
    autocompleteEqClassification: Ember.A(),
    autocompleteVoyage: Ember.A(),
    autocompleteBooking: Ember.A(),

    autocompleteStamp: Ember.A(),
    autocompleteSegment: Ember.A(),
    autocompleteVessel: Ember.A(),
    autocompleteTemplate: Ember.A(),

    /*     ***infinite scroll***     */
//    firstIndex: 0,
//    perPage: 25,
//    queryExpressResults: null,
//    queryExpressResults_length: null,
//    isAll: false,
//    items: Ember.A(),

    actions:{
//        /*     ***infinite scroll***     */
//        getMore: function() {
//            if (this.get('loadingMore')) { return; } // don't load new data if we already are
//            this.set('loadingMore', true);
//
//            this.get('target').send('getMore'); // pass this action up the chain to the events hash on the route
//        },
//
//        gotMore: function(items, page) {
//            this.set('loadingMore', false);
//            this.set('page', page);
//            this.pushObjects(items);
//        },

        /*     ***logout***     */
        logout: function(){
            this.set('grantsValue', null);
            this.set('userId', null);
            this.set('token', null);
            this.globals.set('token', this.token);
            this.set('username', null);
            this.set('selectedDepot', null);
            this.set('userProfile', null);
            this.set('company', null);
            this.set('companyType', null);
            this.set('isAdmin', null);


            localStorage.removeItem('grantsValue');
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('selectedDepot');
            localStorage.removeItem('userProfile');
            localStorage.removeItem('company');
            localStorage.removeItem('companyType');
            localStorage.removeItem('isAdmin');

            localStorage.clear();

            this.transitionToRoute('login/main');
        }
    }
});
