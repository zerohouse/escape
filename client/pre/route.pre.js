app.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('main', {
            url: "/",
            controller: "main",
            templateUrl: "/dist/pages/main/main.html"
        })
        .state('booking', {
            url: "/",
            controller: "booking",
            templateUrl: "/dist/pages/booking/booking.html"
        })
        .state('room', {
            url: "/",
            controller: "room",
            templateUrl: "/dist/pages/room/room.html"
        })
        .state('faq', {
            url: "/faq",
            controller: "faq",
            templateUrl: "/dist/pages/faq/faq.html"
        })
        .state('contact', {
            url: "/",
            controller: "contact",
            templateUrl: "/dist/pages/contact/contact.html"
        });

});
