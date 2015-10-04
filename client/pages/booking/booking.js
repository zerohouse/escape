app.controller('booking', function (req, $scope, $document, $timeout) {

    $scope.booking = function () {
        var err = $scope.err($scope.info);
        if (err) {
            alert(err);
            return;
        }
        var index = $scope.games.indexOf($scope.game);
        req.post('/api/reserve', {
            index: $scope.games.indexOf($scope.game),
            date: $scope.date,
            info: $scope.info
        }).success(function (res) {
            if (res.result)
                if (res.result.n == 1) {
                    alert("예약 되었습니다.");
                    games[index].occupied = 'o';
                    return;
                }
            alert("예약 실패했습니다.");
        });
    };

    $scope.$watch('date', function (date) {
        if (!date)
            return;
        req.gets('/api/reserve', {date: date.toUTCString()}).success(function (res) {
            if (!res.result)
                return;
            if (!res.result.forEach)
                return;
            $scope.games.forEach(function (game) {
                game.occupied = 'a';
            });
            res.result.forEach(function (result) {
                $scope.games[result.index].occupied = 'o';
            });
        });
    });

    $scope.err = function (info) {
        var mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!info)
            return "게임 참여 인원을 선택해주세요.";
        if (!info.size)
            return "게임 참여 인원을 선택해주세요.";
        if (!info.name)
            return "예약자명을 입력해주세요.";
        //if (!info.email)
        //    return "이메일을 입력해주세요.";
        //if (!mail.test(info.email))
        //    return "이메일 형식이 다릅니다.";
        if (!info.phone)
            return "핸드폰 번호를 입력해주세요.";
        return false;
    };

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
    $scope.name.classified = "스파이 : 기밀문서";
    $scope.name.stalker = "스토커 (Stalker)";
    $scope.name.treasure = "해적 : Treasure Map";
    $scope.oname = {o: "예약마감", a: "예약가능"};
    $scope.diff = {};
    $scope.diff.terrorist = 4;
    $scope.diff.collector = 5;
    $scope.diff.classified = 4.5;
    $scope.diff.stalker = 5;
    $scope.diff.treasure = 4;
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
        $timeout(function () {
            var el = angular.element(document.getElementById('booking'));
            $document.scrollToElement(el, 30, 500);
        });
    };
    $scope.toList = function(){
        $timeout(function () {
            var el = angular.element(document.getElementById('list'));
            $document.scrollToElement(el, 30, 500);
        });
    }


});

