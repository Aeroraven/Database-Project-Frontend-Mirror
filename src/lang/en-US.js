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
        'filterself':'Items In Charge',
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
        'reportGenSuccessful':'Successfully generated succour description',
        'alterStep1':'Submit',
        'alterStep2':'Process',
        'alterStep3':'Complete',
        'traceSuccour':'Trace & Update Succour Information',
        'alterProcess':'Update Process Info',
        'processDone':'Treatment Completed',
        'completeWork':'The process has been closed and cannot be edited.',
        'markComplete':'Complete & Abort Request',
        'closeReqWarning':'Contents below will only be saved when you close or complete the request.',
        'closeReqWarning2':'Once the request is aborted or completed, it cannot be edited.',
        'traceProcessDescription2':'If the stages or situations of the treatment shift, you can update the latest information by modifying the information below',
        'closeReqDesc2':'If the animal has been cured or unfortunately bid farewell to the world, you can close the request here. If cure was performed successfully, click `Complete`. In other cases, click `Abort`.',
        'currentStatus':'Current Status',
        'cureDate':'Complete Date',
        'completeType':'Complete Type',
        'emptyCompleteType':'Complete type cannot be empty',
        'chooseByMagnify':'The entry cannot be input via keys.Click the magnifier icon to choose items',
        'emptyCureDate':'The complete date cannot be empty',
        'dateAhead':'We cannot predict the future. Check your date input.',
        'closeReqMsgTitle':'Close Succour Request',
        'closeReqMsgBody':'Are you sure to abort the succour request or mark it completed. Once the operation is done, further alterations to the entry is forbidden, which means it will be readonly. This operation cannot be undone, if you are sure what you are doing, click `Confirm`. Otherwise, click `Cancel`',
        'overviewFirstFind':'Click `Filter` to find succour entries corresponding to your requirement.',
        'traceProcessDescription3':'The information below recorded the treatment success or abortion information.'
    },
    'common2':{
        'abort':'Abort',
        'complete':'Complete',
        'transactionDone':'The transaction has been done.',
        'filter':'Filter',
        'applyChange':'Apply'
    },
    'fund':{
        'selectCond':'Analysis Option',
        'analysisOverview':'Analysis Overview',
        'startDate':'Start Date',
        'endDate':'End Date',
        'selectedAccounts':'Selected Account',
        'byAccounts':'By account',
        'byCategory':'By category',
        'cateIncome':'Income Statistics (by Category)',
        'cateExpense':'Expenditure Statistics (by Category)',
        'accIncome':'Income Statistics (by Account)',
        'accExpense':'Expenditure Statistics (by Account)',
        'inexOverview':'Income & Expenditure Overview',
        'balanceShift':'Overall Balance Shift Trend',
        'balanceShiftPerAccount':'Balance Shift Trends (By Account)',
        'fetchIncomeDataAc':'Fetch Income Data (By Account)',
        'fetchExpenseDataAc':'Fetch Expenditure Data (By Account)',
        'fetchIncExpData':'Fetch Income & Expenditure Data',
        'fetchBalanceShift':'Fetch Balance Shift Data',
        'fetchBalanceShiftAc':'Fetch Balance Shift Data (By Account)',
        'incomeOverview':'Income Chart',
        'expenseOverview':'Expense Chart',
        'category':'Category',
        'balanceShiftChartTitle':'Overall Balance Change',
        'findAccounts':'Find Available Accounts',
        'DateAhead':'We still cannot predict the future!',
        'endDateTooEarly':'Start date should not exceed end date',
        'deleteRecord':'Are you sure to delete the record. Once the transaction is committed, it cannot be rolled back.',
        'deleteRecordTitle':'Entry Deletion',
        'deleteRecordTran':'Commit entry deletion request',
        'modifyEntry':'Entry Details & Modification',
        'operatorMismatch':'Only the operator can perform further alterations on this entry. If you find anything incorrect, contact with the operator to rectify the mistake. Or you can ask the operator to transfer the permission to you.',
        'operatorMismatchTitle':'Permission Denied',
        'permissionTransfer':'Once the operator privilege is transfered to other user, you lose all rights to perform any futher alterations on this entry.',
        'permissionTransferTitle':'Permission Transfer',
        'permissionTransferPref':'The recipient\'s staff id is ',
        'basicInfo':'Basic Information',
        'permissionTransferDetail':'If the actual manage work of the entry has already been handed over to your colleague, you can transfer the permission to him/her.',
        'updateRecordTran':'Commit entry update request',
        'fetchRecordTran':'Fetch fund flow entries',
        'id':'ID',
        'name':'Name',
        'tranTime':'Transaction Time',
        'type':'Type',
        'amount':'Amount',
        'bankaccid':'Bank Account ID',
        'account':'Account',
        'fetchAccountTran':'Fetch account list',
        'searchRelatedTrans':'Now searching related transactions...',
        'newBankAccount':'Create Bank Account',
        'newBankAccountBtn':'New Account',
        'fillInfo':'Provide Necessary Information',
        'initialBalance':'Initial Balance',
        'note':'Note',
        'balance':'Balance',
        'owner':'Owner',
        'initialOwnerTip':'You will be the owner once you create this bank account',
        'newBankAccountTran':'Commit bank account create request',
        'authorization':'Authorization',
        'viewRelatedTransactions':'Related Entries',
        'authorizationStatus':'Authorization Status',
        'authorizedUsers':'Authorized Users',
        'authOps':'Operations',
        'revoke':'Revoke',
        'grant':'Grant',
        'fetchAuthListTran':'Fetch list of authorized users',
        'revokeAuthBoxTitle':'Revoke Authorization',
        'revokeAuthBox':'Revoke the user\'s all privileges on this bank account. If the transaction is done, the recipient cannot create flow entries associated with this bank account, but the history operations will be remained.',
        'alertingAuthListTran':'Commit authorization alteration request',
        'grantAuthBoxTitle':'Grant Authorization',
        'grantAuthBox':'Are you sure to grant privileges to the selected user. After the operation, the recipient can perform any operations on entries associated with this bank account.'
    },
    'lock':{
        'locked':'Locked !',
        'lockedDesc':'Input account\'s password to quit locked status'
    },
    'proc2':{
        'modifyEntry':'View Purchasing Detail',
        'noModifyTip':'To modify entries, please choose `Purchasing Approval` menu',
        'id':'ID',
        'content':'Content',
        'stat':'Status',
        'initiator':'Initiator',
        'inittime':'Initiation Time',
        'addprocContent':'Add Item',
        'procList':'Scheduled Purchasing List',
        'submitOverview':'Purchasing Overview',
        'name':'Name',
        'quantity':'Quantity',
        'price':'Price per Item',
        'addToSchedList':'Add to Schedule',
        'havntSelectAny':'You have not selected any items yet',
        'removeFrSchedList':'Remove from list'
    }
}