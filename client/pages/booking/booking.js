app.controller('booking', function ($scope, $stateParams) {

    var date = $scope.date = new Date();
    $scope.$on('$stateChangeSuccess', function () {
        if ($stateParams.date.length == 8) {
            var year = $stateParams.date.substr(0, 4);
            var month = $stateParams.date.substr(4, 2) - 1;
            var day = $stateParams.date.substr(6, 2);
            date = $scope.date = new Date(year, month, day);
        }
    });

    var games = $scope.games = [];
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 45)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 5)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 25)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 45)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 5)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 25)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 45)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 5)));

    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 0)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 20)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 40)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15, 0)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 20)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 40)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 0)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 20)));
    games.push(new Stalker(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 21, 40)));

    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 0)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 20)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 40)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15, 0)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 20)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 40)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 0)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 20)));
    games.push(new Classified(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 21, 40)));

    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 30)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 50)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 10)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15, 30)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 50)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 10)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 30)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 50)));
    games.push(new Collector(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 22, 10)));

    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 30)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 50)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 10)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15, 30)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 50)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 10)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 30)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 50)));
    games.push(new Terrorist(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 22, 10)));


    $scope.filter = {};
    $scope.name = {};
    $scope.name.terrorist = "테러리스트(Terrorist)";
    $scope.name.collector = "콜렉터 (Collector)";
    $scope.name.classified = "작전명 Classified";
    $scope.name.stalker = "스토커 (Stalker)";
    $scope.name.treasure = "해적 : Treasure Map";
    $scope.diff = {};
    $scope.diff.terrorist = [0, 1, 2];
    $scope.diff.collector = [0, 1, 2, 3, 4];
    $scope.diff.classified = [0, 1, 2, 3];
    $scope.diff.stalker = [0, 1, 2, 3, 4];
    $scope.diff.treasure = [0, 1, 2];
    $scope.size = 2;

    $scope.price = [0, 44000, 44000, 51000, 68000, 85000];

    function Terrorist(date) {
        this.type = 'terrorist';
        this.date = date;
    }

    function Collector(date) {
        this.type = 'collector';
        this.date = date;
    }

    function Classified(date) {
        this.type = 'classified';
        this.date = date;
    }

    function Stalker(date) {
        this.type = 'stalker';
        this.date = date;
    }

    function Treasure(date) {
        this.type = 'treasure';
        this.date = date;
    }

});

