
import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据


//Homepage Notice
let homepageNoticeData={
  data:[
    { id:'100',level:'top',title:'园区员工考核将在2021年6月25日展开',content:'工作考核将在201年6月25日展开'  },
    { id:'101',level:'notice',title:'动物园即将迎来新的成员Panpan',content:'动物园即将迎来新的成员Panpan'  },
    { id:'102',level:'activity',title:'园区员工团建活动即将展开',content:'没有附加信息'  },
    { id:'103',level:'important',title:'工作考核安排确认已经发布',content:'没有附加信息'  },
    { id:'104',level:'notice',title:'这是一条新的通知',content:'没有附加信息'  },
    { id:'105',level:'notice',title:'青年大学习优秀表彰',content:'没有附加信息'  },
    { id:'106',level:'notice',title:'2021届毕业生上学信网最后一次核对学籍信息和毕业照片的通知',content:'没有附加信息'  },
  ]
  ,code:200
}
Mock.mock('/api/homepageRequests/getNotice', 'get', homepageNoticeData)

//Homepage User
let homepageUserData={
  data:{
    userid:'1930124',
    name:'张三李四',
    permission:'系统管理员',
  }
  ,code:200
}
Mock.mock('/api/homepageRequests/getUserInfo', 'get', homepageUserData)


//Tourist Counts
let homepageCurrentTouristCnt={
  data:{
    cnt:Random.integer(1, 100),
  },
  code:200
}
Mock.mock('/api/commonModule/getCurrentTourists','get',homepageCurrentTouristCnt)


//Registered Tourist Counts
let homepageRegisteredTouristCount={
  data:{
    cnt:Random.integer(1000, 2100),
  },
  code:200
}
Mock.mock('/api/commonModule/getRegisterTouristCnt','get',homepageRegisteredTouristCount)

//Registered Worker Counts
let homepageWorkerCnt={
  data:{
    cnt:Random.integer(1000, 2100),
  },
  code:200
}
Mock.mock('/api/commonModule/getStaffCount','get',homepageWorkerCnt)

//Animal Cnt
let homepageAnimalCnt={
  data:{
    cnt:Random.integer(1, 5),
  },
  code:200
}
Mock.mock('/api/commonModule/getAnimalCount','get',homepageAnimalCnt)

//Animal Care
let aniCareData={
  data:[
    {id:'1959001',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1956001',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1958001',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1959011',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1956011',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1958011',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1959021',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1956021',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1958021',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1959031',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1956033',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
    {id:'1958031',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
  ],
  code:200
}
Mock.mock('/api/animalCare/getCareData','get',aniCareData)

Mock.mock('/api/animalCare/createCareInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/animalCare/updateCareInfo','get',{data:{stat:'success',statcode:0},code:200})


//Warehouse Data
let warehouseData={
  data:[
    {id:'1144444',storage_name:'饲料仓库F213',storage_location:'黄渡理工大学 F楼213'},
    {id:'1144445',storage_name:'医疗用具仓库2345',storage_location:'黄渡理工大学 创业谷2345'},
    {id:'1144446',storage_name:'备用仓库D102',storage_location:'黄渡理工大学 D楼102'},
    {id:'1144447',storage_name:'备用仓库G207',storage_location:'黄渡理工大学 G楼207'},
    {id:'1144448',storage_name:'备用仓库G209',storage_location:'黄渡理工大学 G楼209'},
  ],
  code:200
}

Mock.mock('/api/warehouseRequest/getWarehouseInfo','get',warehouseData)
Mock.mock('/api/warehouseRequest/updateWarehouseInfo','get',{data:{stat:'success',statcode:1},code:200})

let warehouseItem={
  data:[
    {item_id:'1956100',type:'Food',name:'Feline Fodder',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12',wareid:'0'},
    {item_id:'1956101',type:'Food',name:'Canine Fodder',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12',wareid:'0'},
    {item_id:'1956102',type:'Food',name:'Amphibious Fodder',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12',wareid:'0'},
    {item_id:'1956103',type:'Specimen',name:'Lizard Specimen',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12',wareid:'0'},
  ],
  code:200
}
Mock.mock('/api/warehouseRequest/getwareItemInfo','get',warehouseItem)
Mock.mock('/api/warehouseRequest/updatewareItemInfo','get',{data:{stat:'success',statcode:1},code:200})


let procOverview={
  data:[
    {id:'123',content:'饲料',stat:'审核中',initiator:'Flora',inittime:'2020-12-33'},
    {id:'125',content:'饲料',stat:'审核中',initiator:'Flora',inittime:'2020-12-33'},
    {id:'124',content:'饲料',stat:'审核中',initiator:'Flora',inittime:'2020-12-33'},
    {id:'121',content:'饲料',stat:'审核中',initiator:'Flora',inittime:'2020-12-33'},
    {id:'122',content:'饲料',stat:'审核中',initiator:'Flora',inittime:'2020-12-33'},
    
  ],
  code:200
}

Mock.mock('/api/procManagement/getProcOverview','get',procOverview)



let animalList={
  data:[
    {id:'122',category:'Snail',name:'Biden',gender:'Hermaphrodite',age:'17',faclId:'12345',status:'died'},
    {id:'123',category:'Lion',name:'Lucida',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'124',category:'Lynx',name:'Kaltsit',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'125',category:'Snow Leopard',name:'Sliverash',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'126',category:'Feline',name:'Vanilla',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'127',category:'Red Fox',name:'Alisa',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'128',category:'Racoon Dog',name:'Sayu',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'129',category:'Giant Panda',name:'Pingping',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'130',category:'Feline',name:'Diona',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'131',category:'Feline',name:'Tio',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'132',category:'Squirrel',name:'Shaw',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'133',category:'Weasel',name:'Yuki',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'134',category:'Horse',name:'Platinum',gender:'Female',age:'17',faclId:'12345',status:'alive'},
    {id:'135',category:'Celine',name:'Trump',gender:'Female',age:'17',faclId:'12345',status:'died'},
  ],
  code:200
}
Mock.mock('/api/animalCore/getAnimalList','get',animalList)

