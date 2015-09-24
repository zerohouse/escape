app.controller('faq', function ($scope, req) {

    var mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    $scope.error = function () {
        if (!$scope.question)
            return "내용이 없습니다.";
        if (!$scope.question.body)
            return "내용이 없습니다.";
        if (!$scope.question.email)
            return "회신받으실 이메일을 입력해주세요.";
        if (!mail.test($scope.question.email))
            return "이메일 형식이 다릅니다.";
        if (!$scope.question.phone)
            return "회신받으실 연락처를 남겨주세요.";
        return false;
    };

    $scope.send = function () {
        if ($scope.error())
            return;
        var mail = $scope.question.body.replace("\n", "<br>") + "<br> 보낸사람: " + $scope.question.email + " (" + $scope.question.phone + ")";
        req.gets('/api/faq', {body: mail}).success(function () {
            $scope.question = {};
            alert("메시지를 보냈습니다.");
        });
    };

    $scope.questions = [
        {
            question: "1. SIXTY escape 는 무엇입니까?",
            answer: " 모든 문이 잠김 게임룸에서 참가자는 제한시간 60분 안에 주어진 정보와 힌트를 활용하여 룸을 탈출하는 게임입니다."
        },

        {
            question: "2. 게임 참여인원은 몇명인가요?",
            answer: " 게임룸은 2~5인용 으로 제작되었습니다."
        },
        {
            question: "3. 가격은 얼마입니까?",
            answer: " 2인 44,000원<br>" +
            "3인 51,000원<br>" +
            "4인 68,000원<br>" +
            "5인 85,000원<br>" +
            "3인 이상부터는 1인당 17,000원 입니다."
        },

        {
            question: "4. 결제는 어떻게 합니까?",
            answer: " 게임 당일 현장결제 하시면 됩니다."
        },
        {
            question: "5. 소요시간은 얼마나 됩니까?",
            answer: " 시작전 게임설명시간과 게임종료 후 기념촬영시간 20분," +
            "게임룸 플레이시간 60분 으로 총 소요시간은 80분 입니다."
        },
        {
            question: "6. 몇 살부터 출입이 가능합니까?",
            answer: " 고등학생 부터 출입이 가능합니다.<br>" +
            "영/유아는 출입이 제한되고 초등학교 고학년(4학년~6학년)은 법정 대리인의 서면 동의후 동반입장을 하셔야 게임에 참여하실 수 있고<br>" +
            "중학생의 경우 법정 대리인의 서면 동의가 있으면 게임 출입이 가능합니다.<br>" +
            "일부테마에는 자극적인 요소가 포함되어 있으므로 노약자/임산부는 일부 출입의 제한이 있을 수 있습니다."
        }
    ];
});
