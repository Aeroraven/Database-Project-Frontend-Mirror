
/*
import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据


//Homepage Notice
let homepageNoticeData={
  data:[
    { id:'100',time:'2020-01-05',initiator:'admin',level:'top',title:'园区员工考核将在2021年6月25日展开',content:'工作考核将在201年6月25日展开'  },
    { id:'101',time:'2020-01-05',initiator:'admin',level:'notice',title:'动物园即将迎来新的成员Panpan',content:'动物园即将迎来新的成员Panpan'  },
    { id:'102',time:'2020-01-05',initiator:'admin',level:'activity',title:'园区员工团建活动即将展开',content:'没有附加信息'  },
    { id:'103',time:'2020-01-05',initiator:'admin',level:'important',title:'工作考核安排确认已经发布',content:'没有附加信息'  },
    { id:'104',time:'2020-01-05',initiator:'admin',level:'notice',title:'这是一条新的通知',content:'没有附加信息'  },
    { id:'105',time:'2020-01-05',initiator:'admin',level:'notice',title:'青年大学习优秀表彰',content:'没有附加信息'  },
    { id:'106',time:'2020-01-05',initiator:'admin',level:'notice',title:'2021届毕业生上学信网最后一次核对学籍信息和毕业照片的通知',content:'没有附加信息'  },
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

Mock.mock('/api/animalCare/createCareInfo','get',{data:{stat:'success',statcode:0},code:200})

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


let staffList={
  data:[
    {id:'124',position:'Guard Dog',name:'Biden',gender:'Hermaphrodite',age:'17',wage:123,park:'Texas',employment_year:'2021'},
    {id:'125',position:'Guard Dog',name:'Abe',gender:'Hermaphrodite',age:'17',wage:123,park:'Texas',employment_year:'2021'},
    {id:'126',position:'Guard Dog',name:'Obama',gender:'Hermaphrodite',age:'17',wage:123,park:'Texas',employment_year:'2021'},
    {id:'127',position:'Guard Dog',name:'Trump',gender:'Asexual',age:'17',wage:123,park:'Texas',employment_year:'2021'},
    {id:'128',position:'Guard Dog',name:'Bush',gender:'Asexual',age:'17',wage:123,park:'Texas',employment_year:'2021'},
    {id:'129',position:'Guard Dog',name:'Josh',gender:'Asexual',age:'17',wage:123,park:'Texas',employment_year:'2021'},
  ],
  code:200
}

Mock.mock('/api/staffManagement/getStaffList','get',staffList)




//Animal show
let aniShowData={
  data:[
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈',price:'30元'},
  ],
  code:200
}
Mock.mock('/api/animalShow/getShowData','get',aniShowData)

Mock.mock('/api/animalShow/createShowInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/animalShow/updateShowInfo','get',{data:{stat:'success',statcode:0},code:200})

//Training
let trainingData={
  data:[
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_name:'女武神',show_site:'大熊猫馆',show_time:'2012-01-01',show_props:'火圈'},
  ],
  code:200
}
Mock.mock('/api/Training/getTrainingData','get',trainingData)

Mock.mock('/api/Training/createTrainingInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/Training/updateTrainingInfo','get',{data:{stat:'success',statcode:0},code:200})

//Fund
let accountIncOv={
  data:[
    {name:'A',value:4400},
    {name:'B',value:5400},
    {name:'C',value:6400},
    {name:'D',value:7400},
    {name:'E',value:8400},
    {name:'F',value:9400},
  ],
  code:200
}
Mock.mock('/api/fundManagement/getAccountIncomesOverview','get',accountIncOv);
Mock.mock('/api/fundManagement/getAccountExpenseOverview','get',accountIncOv);

let accountIncOv2={
  data:[
    {name:'AX',value:1400},
    {name:'BX',value:5400},
    {name:'CX',value:6400},
    {name:'DX',value:7400},
    {name:'EX',value:8400},
    {name:'FX',value:9400},
  ],
  code:200
}
Mock.mock('/api/fundManagement/getCategoryIncomesOverview','get',accountIncOv2);
Mock.mock('/api/fundManagement/getCategoryExpenseOverview','get',accountIncOv2);


let accountBalOv={
  data:{
    values:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
    date:['1','2','3','4','5','6','7','8','9','10','11']
  },
  code:200
}
Mock.mock('/api/fundManagement/getOverallBalanceShift','get',accountBalOv);

let accountBalOv2={
  data:{
    date:['1','2','3','4','5','6','7','8','9','10','11'],
    values:[
      {name:'A',data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],type:'line'},
      {name:'B',data:[0, 2900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],type:'line'},
      {name:'C',data:[0, 3900, 1245, 1530, 4400,4176, 4111, 1689, 1856, 1495, 3333],type:'line'},
      {name:'D',data:[0, 4900, 3400, 3400, 4400, 1376, 1511, 1689, 1856, 1495, 1292],type:'line'},
    ]
  },
  code:200
}
Mock.mock('/api/fundManagement/getAccountBalanceShift','get',accountBalOv2);

let accountListData={
  data:[
    {id:'1',name:'A',balance:4400,owner:'1ACF'},
    {id:'3',name:'B',balance:7344,owner:'1ACF'},
    {id:'2',name:'C',balance:5422,owner:'1ACF'},
    {id:'4',name:'D',balance:1222,owner:'1ACF'},
    {id:'5',name:'E',balance:9399,owner:'1ACF'},
  ],
  code:200
}
Mock.mock('/api/fundManagement/getAccountList','get',accountListData);

Mock.mock('/api/fundManagement/deleteFlowEntry','get',{data:{stat:'success',statcode:0},code:200})
Mock.mock('/api/fundManagement/updateFlowEntry','get',{data:{stat:'success',statcode:0},code:200})

let flowList={
  data:[
    {fund_acc_id:'192ACFB7',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
    {fund_acc_id:'192ACFB8',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
    {fund_acc_id:'192ACFB9',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
    {fund_acc_id:'192ACFBA',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
    {fund_acc_id:'192ACFBB',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
    {fund_acc_id:'192ACFBC',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'}
  ],
  code:200
}
Mock.mock('/api/fundManagement/getFlowEntries','get',flowList);
Mock.mock('/api/fundManagement/addBankAccount','get',flowList);
Mock.mock('/api/fundManagement/getAuthList','get',staffList)
Mock.mock('/api/fundManagement/revokeBankAccAuth','get',{data:{stat:'success',statcode:1},code:200})
Mock.mock('/api/fundManagement/grantBankAccAuth','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/procManagement/createNewProc','get',{data:{stat:'success',statcode:1},code:200})

let procOverviewX={
  data:[
    {
      id:'123',
      name:'abcde',
      content:[
        {
          name:'kkp',
          price:2,
          qty:4,
        },
        {
          name:'frp',
          price:2,
          qty:4,
        }
      ],
      stat:'Pending',
      initiator:'Flora',
      inittime:'2020-12-33',
      totalprice:16
    },
    {
      id:'124',
      name:'abcde',
      content:[
        {
          name:'kkp',
          price:2,
          qty:4,
        },
        {
          name:'frp',
          price:2,
          qty:4,
        }
      ],
      stat:'Pending',
      initiator:'Flora',
      inittime:'2020-12-33',
      totalprice:16
    },
  ],
  code:200
}

Mock.mock('/api/procManagement/getPendingRequests','get',procOverviewX)
Mock.mock('/api/procManagement/changeProcStatus','get',{data:{stat:'success',statcode:1},code:200})

let animalInfo={
  code:200,
  data:[
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
  {ani_id:'1959001',species:'xxx',ani_name:'李四',ani_gender:'雌性',birth_date:'2020-02-22',ani_age:'7',body_length:'1.2',weight:'120',physical_condition:'健康',breed_situation:'无',photo:'123rfdsd'},
]
}
Mock.mock('/api/animalInfo/getinformation','get',animalInfo)

//LXQ
Mock.mock('/api/animalShow/createShowInfo','get',{data:{stat:'success',statcode:0},code:200})

Mock.mock('/api/animalShow/updateShowInfo','get',{data:{stat:'success',statcode:0},code:200})
Mock.mock('/api/Training/getTrainingData','get',trainingData)
Mock.mock('/api/Training/updateTrainingInfo','get',{data:{stat:'success',statcode:0},code:200})
Mock.mock('/api/showTicketManagement/deleteShowTicketFlowInfoInfo','get',{data:{stat:'success',statcode:1},code:200})

let showTicketData={
  data:[ {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
  ],
  code:200
}
Mock.mock('/api/showTicketManagement/getShowTicketData','get',showTicketData)
Mock.mock( '/api/showTicketManagement/updateShowTicketInfo','get',{data:{stat:'success',statcode:0},code:200})

let vehicleManagementData={
  data:[{ID:'123123',vehicle_category:'131313',departure_interval:'1234',trans_duration:'200',price:'大象馆',boarding_location:'儿童票'},
    {ID:'123123',vehicle_category:'131313',departure_interval:'1234',trans_duration:'200',price:'大象馆',boarding_location:'儿童票'},
    {ID:'123123',vehicle_category:'131313',departure_interval:'1234',trans_duration:'200',price:'大象馆',boarding_location:'儿童票'},
    {ID:'123123',vehicle_category:'131313',departure_interval:'1234',trans_duration:'200',price:'大象馆',boarding_location:'儿童票'},
    {ID:'123123',vehicle_category:'131313',departure_interval:'1234',trans_duration:'200',price:'大象馆',boarding_location:'儿童票'},
  ],
  code:200
}
Mock.mock('/api/vehicleManagement/getVehicleManagementData','get',vehicleManagementData)
Mock.mock('/api/vehicleManagement/createVehicleManagementInfo','get',{data:{stat:'success',statcode:0},code:200})
Mock.mock('/api/vehicleManagement/updateVehicleManagementInfo','get',{data:{stat:'success',statcode:0},code:200})
//GettingAroundZoo 
let gettingAroundZooData={
  data:[{ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
    {ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
    {ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
    {ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
    {ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
    {ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
  ],
  code:200
}
Mock.mock('/api/gettingAroundZoo/getGettingAroundZooData','get',gettingAroundZooData)
Mock.mock('/api/gettingAroundZoo/createGettingAroundZooInfo','get',{data:{stat:'success',statcode:1},code:200})

let convenienceServiceData={
  data:[{ID:'123123' ,name:'ATM' ,position:'At the gate of the zoo',intro:'1234'},
    {ID:'123123' ,name:'ATM' ,position:'At the gate of the zoo',intro:'1234'},
    {ID:'123123' ,name:'ATM' ,position:'At the gate of the zoo',intro:'1234'},
    {ID:'123123' ,name:'ATM' ,position:'At the gate of the zoo',intro:'1234'},
    {ID:'123123' ,name:'ATM' ,position:'At the gate of the zoo',intro:'1234'},

  ],
  code:200
}
Mock.mock('/api/convenienceService/getConvenienceServiceData','get',convenienceServiceData)

Mock.mock('/api/convenienceService/createConvenienceServiceInfo','get',{data:{stat:'success',statcode:0},code:200})
Mock.mock( '/api/convenienceService/updateConvenienceServiceInfo','get',{data:{stat:'success',statcode:0},code:200})

//门票模块

let aniAdmissData={
  data:[
    {admis_id:'123123' , admistour_id:'12313',admis_type:'儿童票',admis_price:'100',admis_starttime:'9:00',admis_endtime:'21:00',admis_date:'2012-01-01'},
    
  ],
  code:200
}
Mock.mock('/api/TicketsAdmiss/getAdmissData','get',aniAdmissData)

Mock.mock('/api/TicketsAdmiss/createAdmissInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/TicketsAdmiss/updateAdmissInfo','get',{data:{stat:'success',statcode:0},code:200})

//场馆模块

let venueData={
  data:[
    {area_id:'123123' , name:'海洋馆',instruction:'无',zone:'飞禽走兽区',location:'东南方',additional_fee:'30',current_tourist_cnt:'0',telephone:'15812123232',price:'30元',capacity:'123',status:'开放'},
    
  ],
  code:200
}
Mock.mock('/api/venueRequest/getvenueItemInfo','get',venueData)

Mock.mock('/api/venueRequest/creatvenueItemInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/venueRequest/updatevenueItemInfo','get',{data:{stat:'success',statcode:0},code:200})

let venueInfoData={
  data:[
    {alterItem_id:'1144444',alterItem_name:'飞禽馆',alterItem_location:'黄渡理工大学 F楼213'},
    {id:'1144445',storage_name:'猛禽馆',storage_location:'黄渡理工大学 创业谷2345'},
    {id:'1144446',storage_name:'灵长类馆',storage_location:'黄渡理工大学 D楼102'},
    {id:'1144447',storage_name:'海洋区',storage_location:'黄渡理工大学 G楼207'},
    {id:'1144448',storage_name:'草食动物馆',storage_location:'黄渡理工大学 G楼209'},
  ],
  code:200
}
Mock.mock('/api/VenueRequest/getVenueInfo','get',venueInfoData)

Mock.mock('/api/VenueRequest/createVenueInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/VenueRequest/updateVenueInfo','get',{data:{stat:'success',statcode:0},code:200})




//员工模块
let employeeinfoData={
  data:[
    {id:'123123' , name:'张三',gender:'女',age:'12',wage:'100',position:'馆长',park:'海洋馆',year:'2019',password:'1231nhgj'},
   
  ],
  code:200
}
Mock.mock('/api/employeeRequest/getemployeeItemInfo','get',employeeinfoData)

Mock.mock('/api/employeeRequest/createemployeeItemInfo','get',{data:{stat:'success',statcode:0},code:200})

Mock.mock('/api/employeeRequest/updateemployeeItemInfo','get',{data:{stat:'success',statcode:0},code:200})

let employeeData={
  data:[
    {id:'1144444',storage_name:'飞禽馆',storage_location:'黄渡理工大学 F楼213'},
    {id:'1144445',storage_name:'猛禽馆',storage_location:'黄渡理工大学 创业谷2345'},
    {id:'1144446',storage_name:'灵长类馆',storage_location:'黄渡理工大学 D楼102'},
    {id:'1144447',storage_name:'海洋区',storage_location:'黄渡理工大学 G楼207'},
    {id:'1144448',storage_name:'草食动物馆',storage_location:'黄渡理工大学 G楼209'},
  ],
  code:200
}

Mock.mock('/api/employeeRequest/getEmployeeInfo','get',employeeData)
Mock.mock('/api/employeeRequest/updateEmployeeInfo','get',{data:{stat:'success',statcode:1},code:200})


//员工考核模块
let employeecheckData={
  data:[
    {employee_id:'123123' , manager_id:'127361',assessment_time:'2019-10-02',assessment_grade:'10',remarks:'表现良好',position:'馆长',park:'海洋馆',year:'2019',price:'30元'},
   
  ],
  code:200
}
Mock.mock('/api/employeeCheckRequest/getEmployeeCheckInfo','get',employeecheckData)

Mock.mock('/api/employeeCheckRequest/creatsEmployeeCheckInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/employeeCheckRequest/updateEmployeeCheckInfo','get',{data:{stat:'success',statcode:0},code:200})

//导游模块
let guideData={
  data:[
    {id:'123123' , tour_id:'00012',guide_id:'00001',name:'张三',mark:'4.8',price:'100',service_type:'讲解服务',year:'2019'},
    
  ],
  code:200
}


Mock.mock('/api/guideRequest/getGuideInfo','get',guideData)

Mock.mock('/api/guideRequest/creatsGuideInfo','get',{data:{stat:'success',statcode:1},code:200})

Mock.mock('/api/guideRequest/updateGuideInfo','get',{data:{stat:'success',statcode:0},code:200})

let guideitemDada={
data: [
  {
   // name: 'Frozen Yogurt',
    id: 19128812,
    tour_id: 1212,
    guide_id: 32332,
    name: '张三',
    mark: 87,
    price: '100元',
    service_type: '汉语',
  },
],
code:200
}

Mock.mock('/api/guideRequest/getGuideInfo','get',guideitemDada)*/