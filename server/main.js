// 디비에 데이터가 하나도 없으면 3개를 넣어라.
// if 디비에 데이터가 하나도 없으면
// 그러면 3개의 데이터를 넣어라.
// .find() .insert() .remove() .update()

Posts = new Mongo.Collection('posts');

if (Posts.find().count() == 0) {
  console.log('데이터가 생성중!!!!');
  const data = [
    {
        createdAT: new Date(),
        title: '1번 테스트 제목입니다.',
        content: '이게 게시판 내용입니다'
    },
    {
       createdAT: new Date(),
        title: '2번 테스트 제목입니다.',
        content: '이게 게시판 내용입니다'
    },
    {
      createdAT: new Date(),
      title: '3번 테스트 제목입니다.',
      content: '이게 게시판 내용입니다'
    },

  ];


  data.forEach(function(item) {
    Posts.insert(item);
  });
}
