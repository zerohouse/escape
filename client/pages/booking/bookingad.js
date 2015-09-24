app.controller('bookingad', function (req, $scope, $document, $timeout, $stateParams) {


    $scope.$watch('date', function (date) {
        if (!date)
            return;
        req.gets('/api/reserve', {date: date.toUTCString(), password: $stateParams.password}).success(function (res) {
            if (!res.result)
                return;
            if (!res.result.forEach)
                return;
            games.forEach(function (game) {
                game.occupied = 'a';
                game.info = undefined;
            });
            res.result.forEach(function (result) {
                $scope.games[result.index].occupied = 'o';
                $scope.games[result.index].info = result.info;
            });
        });
    });


    var date = $scope.date = new Date();

    var games = $scope.games = [];
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 45)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 5)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 25)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 45)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 5)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 25)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 45)));
    games.push(new Treasure(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 21, 25)));
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

    games.forEach(function (game) {
        game.occupied = 'a';
    });

    $scope.filter = {};
    $scope.name = {};
    $scope.name.terrorist = "테러리스트(Terrorist)";
    $scope.name.collector = "콜렉터 (Collector)";
    $scope.name.classified = "작전명 Classified";
    $scope.name.stalker = "스토커 (Stalker)";
    $scope.name.treasure = "해적 : Treasure Map";
    $scope.oname = {o: "예약마감", a: "예약가능"};
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


    $scope.$watch('date', function (date) {
        if (!$scope.game)
            return;
        $scope.game.date.setMonth(date.getMonth());
        $scope.game.date.setDate(date.getDate());
    });

    $scope.reserve = function (game) {
        $scope.game = game;
        $scope.res = true;
        $timeout(function () {
            var el = angular.element(document.getElementById('booking'));
            $document.scrollToElement(el, 30, 500);
        });
    };


});

