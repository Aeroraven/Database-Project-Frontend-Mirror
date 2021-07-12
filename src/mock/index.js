
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

//Animal show
let aniShowData={
  data:[
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_id:'13131',show_site:'大熊猫馆',show_date:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_id:'女武神',show_site:'大熊猫馆',show_date:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_id:'女武神',show_site:'大熊猫馆',show_date:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_id:'女武神',show_site:'大熊猫馆',show_date:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_id:'女武神',show_site:'大熊猫馆',show_date:'2012-01-01',show_props:'火圈'},
    {show_id:'123123' , show_name:'钻火圈',amount:'10',animal_id:'A123',principal_id:'女武神',show_site:'大熊猫馆',show_date:'2012-01-01',show_props:'火圈'},
  ],
  code:200
}
Mock.mock('/api/animalShow/getShowData','get',aniShowData)

Mock.mock('/api/animalShow/createShowInfo','get',{data:{stat:'success',statcode:0},code:200})

Mock.mock('/api/animalShow/updateShowInfo','get',{data:{stat:'success',statcode:0},code:200})

//Training
let trainingData={
  data:[
    {ID:'123123' , animal_id:'钻火圈',training_date:'10',skill:'A123',trainer_id:'女武神',train_site:'大熊猫馆',props:'2012-01-01',remarks:'火圈'},
    {ID:'123123' , animal_id:'钻火圈',training_date:'10',skill:'A123',trainer_id:'女武神',train_site:'大熊猫馆',props:'2012-01-01',remarks:'火圈'},
    {ID:'123123' , animal_id:'钻火圈',training_date:'10',skill:'A123',trainer_id:'女武神',train_site:'大熊猫馆',props:'2012-01-01',remarks:'火圈'},
    {ID:'123123' , animal_id:'钻火圈',training_date:'10',skill:'A123',trainer_id:'女武神',train_site:'大熊猫馆',props:'2012-01-01',remarks:'火圈'},
    {ID:'123123' , animal_id:'钻火圈',training_date:'10',skill:'A123',trainer_id:'女武神',train_site:'大熊猫馆',props:'2012-01-01',remarks:'火圈'},
  ],
  code:200
}
Mock.mock('/api/Training/getTrainingData','get',trainingData)

Mock.mock('/api/Training/createTrainingInfo','get',{data:{stat:'success',statcode:0},code:200})

Mock.mock('/api/Training/updateTrainingInfo','get',{data:{stat:'success',statcode:0},code:200})

//Show Ticket Management
let showTicketFlowInfo={
  data:[
    {ID:'1313',show_id:'131313',tour_id:'2133100',Ticket_type:'儿童票'},
    {ID:'1313',show_id:'131313',tour_id:'2133100',Ticket_type:'儿童票'},
    {ID:'1313',show_id:'131313',tour_id:'2133100',Ticket_type:'儿童票'},
    {ID:'1313',show_id:'131313',tour_id:'2133100',Ticket_type:'儿童票'},
    {ID:'1313',show_id:'131313',tour_id:'2133100',Ticket_type:'儿童票'},
    {ID:'1313',show_id:'131313',tour_id:'2133100',Ticket_type:'儿童票'},

  ],
  code:200
}
Mock.mock('/api/showTicketManagement/getShowTicketFlowInfo','get',showTicketFlowInfo)

Mock.mock('/api/showTicketManagement/deleteShowTicketFlowInfoInfo','get',{data:{stat:'success',statcode:1},code:200})

let showTicketData={
  data:[
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
    {show_id:'131313',Price:'200',Ticket_type:'儿童票',Amount:'131'},
  ],
  code:200
}
Mock.mock('/api/showTicketManagement/getShowTicketData','get',showTicketData)

Mock.mock( '/api/showTicketManagement/updateShowTicketInfo','get',{data:{stat:'success',statcode:0},code:200})

//Vehicle Management
let vehicleManagementData={
  data:[
    {ID:'123123',vehicle_category:'131313',departure_interval:'1234',trans_duration:'200',price:'大象馆',boarding_location:'儿童票'},
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
  data:[
    {ID:'123123' ,vehicle_category:'1234',price:'200',ticket_type:'大象馆',deposit:'儿童票',age_limit:'12',weight_limit:'80kg',rental_duration:'2h'},
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

Mock.mock( '/api/gettingAroundZoo/updateGettingAroundZooInfo','get',{data:{stat:'success',statcode:0},code:200})

//Convenience Service
let convenienceServiceData={
  data:[
    {ID:'123123' ,name:'ATM' ,position:'At the gate of the zoo',intro:'1234'},
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
    {item_id:'1956100',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
    {item_id:'1956101',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
    {item_id:'1956102',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
    {item_id:'1956103',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
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
