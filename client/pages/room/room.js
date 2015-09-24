app.controller('room', function ($scope) {
    $scope.noWrapSlides = true;
    var slides = $scope.slides = [
        {
            image: '/dist/lib/01.jpg',
            head: "작전명 Classified",
            sub: "임무를 완수하라",
            body: ""
        },
        {
            image: '/dist/lib/02.jpg',
            head: "해적",
            sub: "보물지도의 행방을 찾아라",
            body: ""
        },
        {
            image: '/dist/lib/03.jpg',
            head: "콜렉터 : Collector",
            sub: "특이한 수집광"
        },
        {
            image: '/dist/lib/04.jpg',
            head: "스토커",
            sub: "게임을 시작하지"
        },
        {
            image: '/dist/lib/05.jpg',
            head: "테러리스트",
            sub: "목숨을 건 두뇌게임"
        }
    ];


    $scope.index = function (index) {
        console.log(index)
    };


});