FlowRouter.route('/post', {
    action: function() {
        BlazeLayout.render('layout', {main:'post'});
    }
})

Template.post.events({
    'click #save': function(event) {
        //#save버튼 클릭시 실행됨
        //1. #title인 input에서 제목을 가져옴
        const title = $('#title').val();
        // const title = document.getElementById('title').value;
        
        //2. # content인 textarea에서 컨텐츠 가져옴
        const content = $('#content').val();
        // const title = document.getElementById('content').value;

        //3. 가져온 데이터를 json으로 DB에 저장
        if(title.length <= 0 || content.length <=0)
            return alert('제목/내용을 입력해 주세요')
        // if(title.length <= 0) {
        //     return alert('제목을 입력해 주세요.')
        // }
        // if(content.length <= 0) {
        //     return alert('내용을 입력해 주세요.')
        // }

        const json = {
            title: title,
            content: content,
            createdAT: new Date()
        }
        Posts.insert(json);
        //4. 다시 홈 화면으로
        FlowRouter.go('/')

        //4가지 기능을 구현한다
    }
})