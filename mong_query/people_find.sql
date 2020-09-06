use test_db
--db 만들기
db.createCollection("emp")
--value insert
db.emp.insertOne({
    emp_id: 100,
    emp_name:"홍길동",
    status:"A"
})
--view the values
db.emp.find({})

db.emp.isCapped()

//create emp2 collection
db.createCollection("emp2", {capped:true,size:10000})
db.emp2.isCapped()
db.emp2.stats()
db.emp.stats()

show collections
//delete emp2 collection
db.emp2.drop()

//db.emp.renameCollection("user")

db.emps.find()
//update emps set hire_date = date where id=100
db.emps.updateMany({},{$set:{hire_date: new Date()}})

db.emps.updateMany({},{$unset:{hire_date:""}})

db.emps.stats()

db.emps.getIndexes()

db.emps.createIndex({emp_id:1})

use mymongo_db
db.createCollection("people")

db.people.insertOne(
{ user_id: "bcd001", age:45, status:'A' }
)
db.people.insertMany([
{ user_id: "bcd002", age:25, status:"B" },
{ user_id: "bcd003", age:50, status:"A" },
{ user_id: "bcd004", age:35, status:"A" },
{ user_id: "abc001", age:28, status:"B" }
])

//select * from people
db.people.find({})
//select user_id, status from people
db.people.find({},{user_id:1, status:1, _id:0})
//select * from people where status= 'A'
db.people.find({status:"A"})
//select user_id,status,age from people where status='A'
db.people.find({status:"A"},{user_id:1,status:1,age:1,_id:0})
db.people.find({status:{$eq: "A"}},{user_id:1,status:1,age:1,_id:0})
//select user_id,status,age from people where status != 'A'
db.people.find({status:{$ne: "A"}},{user_id:1,status:1,age:1,_id:0})
//user_id abc001 아닌 document
//select user_id,status,age from people where user_id != 'abc001'
db.people.find({user_id:{$ne: "abc001"}},{user_id:1,status:1,age:1,_id:0})
//select * from people where status = 'A' and age=50
db.people.find({status:"A", age:50})
//select * from people where status = 'A' or age=50
db.people.find({$or:[{status:"A"},{age:50}]})
//select * from people where status = 'B' or age=25
db.people.find({$or:[{status:"B"},{age:25}]})
//select * from people where age > 25 and age <= 50
db.people.find({age:{$gt:25,$lte:50}})
//select * from people where age in (25,45)
db.people.find({age:{$in:[25,45]}})
//select * from people where age not in (25,45)
db.people.find({age:{$nin:[25,45]}})
//select * from people where user_id like '%cd%'
db.people.find({user_id:{$regex: /cd/}})
//select * from people where user_id like '%bc%' startwith
db.people.find({user_id:{$regex:/^bc/}})
//select * from people where user_id like '%01' endwith
db.people.find({user_id:{$regex:/01$/}})
//select * from people where status = 'A' order by user_id
db.people.find({status:"A"}).sort({user_id:1}) //asc
db.people.find({status:"A"}).sort({user_id:-1}) //desc
//select user_id, age from people where age > 40 and user_id like %cd%
//order by user_id
db.people.find({age:{$gt:40},user_id:{$regex:/cd/}},{user_id:1, age:1,_id:0}).sort({user_id:1})
//select user_id, age, status from people where status in ('A','B')
//and age>=25 and age<=45 order by user-id desc
db.people.find({status:{$in:["A","B"]},age:{$gte:25, $lte:45}}
,{user_id:1, age:1, status:1,_id:0}).sort({user_id:-1})
//select * from where age > 20 limit 1
db.people.findOne({age:{$gt:20}})
//select count(*) from poeple
db.people.count()
//select count(*) from people where age > 30
db.people.count({age:{$gt:30}})
//select count(user_id) from poeple : user_id 컬럼의 값이 존재하는 row count
db.people.count({user_id:{$exists:true}})
//select count(user_id) from poeple : user_id 컬럼의 값이 존재하는 row count
//user_id 필드가 없는 document 추가하기
db.people.insertOne({status:"B", age:25})
db.people.find()
db.people.count({user_id:{$exists:true}})
//select distinct(status) from people
db.people.aggregate([{$group:{_id:"$status"}}])

db.people.find().limit(3).skip(1)

db.people.find()
//update people set status = 'C' where age > 45
db.people.updateMany({age:{$gt:45}},{$set: {status:"C"}})
//update people set status = 'D' where age <= 25
db.people.updateOne({age:{$lte:25}},{$set:{status:"D"}})
//update people set age = age + 3 where status = 'A'
db.people.updateMany({status:"A"},{$inc:{age:3}})
//name 필드가 없지만, 에러없이 추가 되어진다.
db.people.updateMany({age:28},{$set:{name:"홍길동"}})
//name 필드가 있는 document만 선택됨
db.people.find({name:{$exists:true}})

//delete from people where status = 'D'
db.people.deleteMany({status:"D"})

//name 픽드가 있는 document를 삭제합니다.
db.people.deleteMany({name:{$exists:true}})

//query plan 보기
db.people.find().explain()




