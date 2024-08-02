// 디비에 데이터가 하나도 없으면 3개를 넣어라.
// if 디비에 데이터가 하나도 없으면
// 그러면 3개의 데이터를 넣어라.
// .find() .insert() .remove() .update()

Users = new Mongo.Collection('users');

if (Users.find().count() == 0) {
  console.log('데이터가 생성중!!!!');
  const data = [
    {
        name: '진정원',
        age: 44,
        address: '어쩌고시 어쩌고동'
    }, {
        name: '홍길동',
        age: 3000,
        address: '한양'
    }, {
        name: '철수',
        age: 20,
        address: '서울시 강남구'
    }
  ];

  data.forEach(function(item) {
    Users.insert(item);
  });
}
