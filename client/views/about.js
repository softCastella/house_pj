//라우팅 설정
FlowRouter.route('/about', { //플로우라우터가 미티어에서 클라이언트쪽 라우팅 관리 패키지
    action: function() {
        BlazeLayout.render('layout', { main: 'about' });//레이아웃에 템플릿 about을 삽입,렌더링
    }
});

//about템플릿정의
Template.about.helpers({    //템플릿 내 사용가능 데이터, 계산값 제공
    //add you helpers here
});

Template.about.events({    //템플릿 내에서 발생하는 사용자 상호작용(예: 클릭, 제출 등)을 처리하는 이벤트 핸들러를 정의
    //add your events here
});

Template.about.onCreated(function () { //템플릿이 생성될 때 실행되는 콜백 함수를 정의
    //add your statement here          템플릿이 DOM에 추가되기 전에 초기화 작업이나 데이터 로드를 수행
});

Template.about.onRendered(function () {  //템플릿이 렌더링된 후 실행되는 콜백 함수를 정의
    //add your statement                   DOM이 완전히 생성된 후에 추가적인 DOM 조작이나 애니메이션 등을 수행
});

Template.about.onDestroyed(function () {  //템플릿이 파괴될 때 실행되는 콜백 함수를 정의
    //add your statement here               템플릿이 DOM에서 제거될 때, 클린업 작업(예: 타이머 정리, 구독 취소 등)을 수행
});

