FlowRouter.route('/edit/:postId', {
    action: function() {
        BlazeLayout.render('layout', {main: 'edit'});
    }
})

Template.edit.helpers({
    post() {
        const postId = FlowRouter.getParam('postId');
        return Posts.findOne(postId);
    }
    
})

Template.edit.events({
    'click #save': function(event) {
        // #save button 클릭 시 실행 됨.
        // 1. #title인 input에서 제목을 가져옴
        const postId = FlowRouter.getParam('postId');
        const title = $('#title').val();
        // 2. #content인 textarea에서 컨텐츠 가져옴
        const content = $('#content').val();
        // 3. 가져온 데이터를 json으로 DB에 업데이트
        if (title.length <= 0 || content.length <= 0) {
            return alert('제목/내용을 입력 해 주세요.');
        }
                
        const json = {
            title: title,
            content: content,
        }
        Posts.update(postId, {
            $set: {
                title,
                content
            }
        });
        // 4. 다시 목록화면(home)으로 돌아감
        FlowRouter.go('/');



        
    }
})