export default { 
    'animalCare_SubmitEmptyId':'Animal ID cannot be empty',
    'animalCare_SubmitEmptyType':'Disease type cannot be empty',
    'animalCare_SubmitVetName':'Vet name cannot be empty',
    'animalCare_SubmitDate':'Date cannot be empty',
    'topbar':{
        default:'ZMS System',
        login:'Login',
        mainPage:'ZMS Management System - Home',
        animalCare:'Animal Care Management',
        animalFeed:'Animal Feed Management',
        animalInfo:'Animal Information Management',
        animalRecipe:'Animal Recipe Management',
        animalReproduction:'Animal Reproduction Management',
        warehouseManagement:'Warehouse Management',
        warehouseManagement_item:'Item Information Management',
        warehouseManagement_info:'Warehouse Information Management',
        warehouseManagement_flowRecord:'Warehouse Transactions Management',
        fundManagement:'Fund Management',
        procurement:'Procurement Management',
    },
    'home':{
        'accountOv':'Account Status',
        'faclOv':'Zoo Overview',
        'faclNotice':'Zoo Notice',
        'ql':'Quick Launch',
        'wkOv':'Pending Works',
        'wtTsk':'Scheduled Tasks',
        'greeting':'Welcome to ZMS Management System!',
        'greetinginf':'OpenSSL is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. It is also a general-purpose cryptography library.',
    
    },
    'navbar':{
        'animalManage':'Animal Management',
        'anicareManage':'Animal Care',
        'aniinfoManage':'Animal Information',
        'anirecpManage':'Animal Recipe',
        'anifeedManage':'Animal Feed',
        'anibreedManage':'Animal Reproduction',
        'anishowManage':'Animal Shows',
        'anishowinfManage':'Show Information',
        'anitrainManage':'Training Information',

        'ticketManage':'Ticket Manage',
        'shwtckMan':'Show Ticket',
        'admtckMan':'Admission Ticket',
        'faclMan':'Facility Manage',
        'fundMan':'Finance Manage',
        'assetMan':'Fund Manage',
        'procMan':'Procurement Manage',
        'wareMan':'Warehouse Manage',
        'perMan':'Personnel Manage',
        'perinfMan':'Staff Information',
        'perChkMan':'Staff Examination',
        'guidMan':'Guide Management',
        'trafMan':'Vehicle Management',
        'servMan':'Convenience Service',
    },
    'warehouse':{
        'Info':{
            'queryDone':'Fetched warehouse information',
            'wareid':'Warehouse ID',
            'wareLocation':'Location',
            'wareName':'Name',
            'alter':'Edit',
            'alterDone':'Operation completed',
            'generalError':'Fail to edit information',
            'create':'Add warehouse',
            'new':'Add Warehouse Information',
            'search':'Now searching items stored in the warehouse'
        },
        'item':{
            'type':'Type',
            'name':'Name',
            'id':'ID',
            'guarDate':'Expires at',
            'price':'Price',
            'channel':'Channel',
            'alter':'Edit',
            'delete':'Delete',
            'delete_content':'The delete action cannot be restored'
        }
    },
    'animalCare':{
        'title':'Initiate Succour Request',
        'SubmitComplete':'Record submitted successfully!',
        'SubmitComplete2':'Record has been modified successfully.',
        
        'Submitting':'Now submitting',
        'PleaseWait':'Please Wait',
        'NonexistentAniID':'Invalid animal object',
        'NonexistentTypeID':'Invalid disease',
        'NonexistentVetID':'Invalid vet name',
        'NoNoteTitle':'Missing Description',
        'NoNoteInfo':'Are you sure to leave the description empty?',
        'animalId':'Ani.ID',
        'diseaseName':'Disease',
        'drugName':'Treatment',
        'vetName':'Vet Name',
        'illDate':'Report Date',
        'note':'Description',
        'DateAhead':'We still cannot predict the future!',
        'treatProg':'Treatment Progress',
        'currentStateW':'Already Cured',
        'itemAlter':'Edit Information',
        'emptyInfo':'No corresponding information is found',
    },
    'settings':{
        'title':'Settings',
        'modelSetting':'Model Settings',
        'useL2d':'Use Live2D Models',
        'langSetting':'Language & Region Settings',
    },
    'common':{
        'confirm':'Confirm',
        'cancel':'Cancel',
        'pleaseInput':'Please Input ',
        'report':'Report',
        'error':'Error',
        'save':'Save',
        'homepage':'Home',
        'close':'Close',
        'reload':'Reload',
        'deletefilter':'Remove Filter',
        'filterself':'Filter Items In Charge',
        'finding':'Now Finding',
        'pleasewait':'Please Wait',
        'filter':'Filter',
        'query_result':'Search Result',
        'findSuccess':'Successfully fetched information',
        'action':'Action',
        'return':'Return',
    },
    'procure':{
        'procid':'Proc.ID',
        'proccontent':'Content',
        'procname':'Name',
        'procstat':'Status',
        'procdate':'Date',
        'initiator':'Initiator',
        'inittime':'Initiation Date',
        'emptyinfo':'No matching procurement details can be found',
    },
    'animalselector':{
        'externalUse':'Select Animal',
        'title':'Animal Selection',
        'animalStatus':'OVERVIEW',
        'animalList':'ANIMAL LIST',
        'category':'Category',
        'faclLocation':'Facility ID',
        'age':'Age',
        'sex':'Gender',
        'filter':'FILTER',
        'search':'search',
        'animalId':'ID',
        'name':'Name',
        'facl':'Facility ID',
        'category2':'Category',
        'successSearch':'Information has been fetched successfully',
        'emptyInfo':'No matched items are found',
        'notSelected':'You have not selected any entity yet!',
        'selectDone':'The selection has been done successfully!',
        'emptyTip':'Initiate search request to find items',
        'invalidDeath':'The animal has passed away.',
        'invalidNoPermission':'Only the custodian can perform operations',
        'invalidDeathToast':'Gone entities cannot be chosen'
    },
    'staffselector':{
        'title':'Staff Selection',
        'itemList':'STAFF LIST',
        'position':'Position',
        'gender':'Gender',
        'age':'Age',
        'park':'Park',
        'employYear':'Hire Date',
        'id':'ID',
        'name':'Name',
    },
    'itemselector':{
        'title':'Warehouse Item Selection',
        'itemList':'ITEM LIST',
        'category':'Category',
        'stock':'Current Stock',
        'channel':'Channel',
        'wareid':'Warehouse',
        'staffInCharge':'Custodian',
        'itemid':'ID',
        'name':'Name'
    },
    'pendingProg':{
        'PleaseWait':'The transaction is being processed. Please wait...',
        'Submitting':'Transaction Processing'
    },
    'viewTitles':{
        'animalCareMan':'Animal Medical Care Management'
    },
    'animalCareMain':{
        'infoOverview':'information overview',
        'initiateRequest':'initiate succour'
    },
    'animalCare2':{
        'secondaryTitle':'Detailed Report Options',
        'generateDescription':'Generate Description',
        'symptoms':'Symptoms',
        'severity':'Severity',
        'custSymptoms':'Hint: customize symptoms by pressing enter after inputing each',
        'severityHint':'Choose the severity of the situation.',
        'description':'The forms below are optional. These options are used to assist you construct a comprehensive description of the animal entity\'s situation. After completeing forms below, click on `Generate Description` to get a automatically generated description.',
        'temperature':'Physical Temperature',
        'heartRate':'Heart Rate',
        'reportGenSuccessful':'Successfully generated succour description'
    }
}