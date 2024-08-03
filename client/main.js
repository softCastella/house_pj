FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', { main: 'main' });
    }
});

Template.main.onCreated(function() {  //템플릿생성시 실행코드(초기화작업, 데이터구독)

})

Template.main.onRendered(function() { // 템플릿이 렌더링후 실행

})

Template.main.helpers({
    posts: function() {
        return Posts.find({}, { sort: { createdAt: -1 } });
    } //템플릿 내 사용 가능 데이터 계산값제공
})   //posts 헬퍼는 Posts 컬렉션에서 모든 문서를 찾고(Posts.find({})),
     //createdAt 필드를 기준으로 내림차순으로 정렬하여 반환합니다. 이 데이터는 템플릿에서 {{#each posts}}와 같은 구문으로 접근하여 렌더링할 수 있습니다.

Template.main.events({ //events 객체를 사용하여 템플릿 내에서 발생하는 이벤트를 처리합니다. 
                        //사용자의 입력이나 상호작용에 반응하여 특정 동작을 수행
})