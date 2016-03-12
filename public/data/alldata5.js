//// 不需要同步的数据
//var LEA = {};
//LEA.sPath = "https:\/\/dn-leanote.qbox.me";
//LEA.locale = "en";
//var UrlPrefix = 'http:\/\/leanote.com';
//var GlobalConfigs = {"uploadAttachSize":0,"uploadAvatarSize":0,"uploadBlogLogoSize":0,"uploadImageSize":0};
//var tinyMCEPreInit = {base: 'https:\/\/dn-leanote.qbox.me/tinymce_4.1.9/js/tinymce', suffix: '.min'};
//var curNoteId = "";
//var curNotebookId = "";
//var curSharedNoteNotebookId = "";
//var curSharedUserId = "";
//var noteContentJson = [];
//
////需要同步的初始数据
//var UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"me@nottingham.edu.cn","Verified":false,"Username":"me@nottingham.edu.cn","UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":""};
//
//var notebooks = [{"NotebookId":"0","UserId":"56a82c7bab64417776002a5c","Title":"Newest","UrlTitle":"","NumberNotes":1,"CreatedTime":"0001-01-01T00:00:00Z", "drop":!1, "drag":!1},
//{"NotebookId":"56a82c7bab64417776002a5d","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"life","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},        {"NotebookId":"56a82c7bab64417776002a5e","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"study","UrlTitle":"","NumberNotes":0,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},
//
//{"NotebookId":"56a82c7bab64417776002a5f","UserId":"56a82c7bab64417776002a5c","ParentNotebookId":"","Seq":-1,"Title":"work","UrlTitle":"","NumberNotes":1,"IsTrash":false,"IsBlog":false,"CreatedTime":"0001-01-01T00:00:00Z","UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"Subs":[]},
//
//{"NotebookId":"-1","UserId":"56a82c7bab64417776002a5c","Title":"Trash","UrlTitle":"","NumberNotes":0,"CreatedTime":"0001-01-01T00:00:00Z","drop":!1, "drag":!1}];
//
//var shareNotebooks = {"52d26b4e99c37b609a000001":[{"ParentNotebookId":"","Title":"Leanote suggestion","UrlTitle":"","NumberNotes":149,"IsTrash":false,"IsBlog":false,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bd","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":1,"Subs":null,"Seq":0,"NotebookId":"52d270c7bcbf214cfa000000","IsDefault":false},{"ParentNotebookId":"","Title":"Latest","UrlTitle":"","NumberNotes":25,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62c1","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52d270d3bcbf214cfa000002","IsDefault":false},{"ParentNotebookId":"","Title":"Leantote manual","UrlTitle":"","NumberNotes":29,"IsTrash":false,"IsBlog":true,"UpdatedTime":"0001-01-01T00:00:00Z","Usn":0,"IsDeleted":false,"ShareNotebookId":"56a82c7b0431099237ea62bf","ToUserId":"56a82c7bab64417776002a5c","ToGroupId":"","ToGroup":{"GroupId":"","UserId":"","Title":"","UserCount":0,"CreatedTime":"0001-01-01T00:00:00Z","Users":null},"Perm":0,"Subs":null,"Seq":0,"NotebookId":"52db8460e01c530ef8000000","IsDefault":false}]};
//
//var sharedUserInfos = [];
//
//var notes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"Default note","Desc":"Default note","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"}];
//
//var latestNotes = [{"NoteId":"56a831ae03f3314265000003","UserId":"56a82c7bab64417776002a5c","CreatedUserId":"","NotebookId":"56a82c7bab64417776002a5f","Title":"Default note","Desc":"Default note","ImgSrc":"","Tags":[""],"IsTrash":false,"IsBlog":false,"UrlTitle":"2d7a82199fb9","IsRecommend":false,"IsTop":false,"HasSelfDefined":false,"ReadNum":0,"LikeNum":0,"CommentNum":0,"IsMarkdown":false,"AttachNum":0,"CreatedTime":"2016-01-27T10:55:38.656+08:00","UpdatedTime":"2016-01-27T17:40:20.762+08:00","RecommendTime":"0001-01-01T00:00:00Z","PublicTime":"2016-01-27T10:55:38.656+08:00","UpdatedUserId":"56a82c7bab64417776002a5c","Usn":10,"IsDeleted":false, "Content":"9"}];
//
//var tagsJson = [];
//
//var trackingLog = [];
//var allAppData = {};



function getAllAppData(UserId) {
    //             var stringifiedJson = JSON.stringify(jsonData);
    $.ajax({
        type: 'GET', // added,
        url: 'http://cs-linux.nottingham.edu.cn:8000/getAll',
        data: "UserId=" + UserId ,
    //                dataType: "json",
    //                contentType: "application/json; charset=UTF-8",
        //dataType: 'jsonp' - removed
        //jsonpCallback: 'callback' - removed
        contentType: "text/plain", 
        async:false, 
        success: function (data) {
            var parsedData = jQuery.parseJSON(data);
    //                    $('#lblResponse').html(ret.msg);
            // var parsedData = JSON.parse(data);
            console.log(parsedData.UserInfo.UserId);
            return parsedData;
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
            $('#lblResponse').html('Error connecting to the server.');
        }
    });
}


// 使用series
//var isAtLocal = false;
//var isConnected = true;
//
//async.series([
//    function(callback) {
//        localforage.getItem('allAppData', function(err, value) {
//            console.log("check");
//            if(value != null) { // at local
//                isAtLocal = true;
//                allAppData = value;
//            }
//            callback();
//        });
//    },
//    
//    function(callback) {
//        console.log(isAtLocal);
//        if(isAtLocal) {
//            console.log("loading data from local");
//            UserInfo = allAppData.UserInfo;
//            console.log("UserInfo updated");
//            notebooks = allAppData.notebooks;
//            console.log("notebooks updated");
//            shareNotebooks = allAppData.shareNotebooks;
//            console.log("shareNotebooks updated");
//            sharedUserInfos = allAppData.sharedUserInfos;
//            console.log("sharedUserInfos updated");
//            notes = allAppData.notes;
//            console.log("notes updated");
//            latestNotes = allAppData.latestNotes;
//            console.log("latestNotes updated");
//            tagsJson = allAppData.tagsJson;
//            console.log("tagsJson updated");
//            trackingLog = allAppData.trackingLog;
//            console.log("trackingLog updated");
//            callback();
//        }
//    },
//    
//    function(callback) {
//        console.log("Test");
//        if(!isAtLocal && isConnected) {
//            console.log("loading from the server");
//            $.ajax({
//                type: 'GET', // added,
//                url: 'http://cs-linux.nottingham.edu.cn:8000/getAll',
//                data: "UserId=" + UserInfo.UserId ,
//            //                dataType: "json",
//            //                contentType: "application/json; charset=UTF-8",
//                //dataType: 'jsonp' - removed
//                //jsonpCallback: 'callback' - removed
//                contentType: "text/plain", 
//                async:false, 
//                success: function (data) {
//                    console.log("Retrieved data from server");
//                    var parsedData = jQuery.parseJSON(data);
//            //                    $('#lblResponse').html(ret.msg);
//                    // var parsedData = JSON.parse(data);
//                    console.log(parsedData.UserInfo.UserId);
//                    allAppData = parsedData;
//                    callback();
//                },
//                error: function (xhr, status, error) {
//                    console.log('Error: ' + error.message);
//                    $('#lblResponse').html('Error connecting to the server.');
//                    callback();
//                }
//            });
//        }
//    },
//    
//    function(callback) {
//        if(!isAtLocal && isConnected) {
//            UserInfo = allAppData.UserInfo;
//            console.log("UserInfo updated");
//            notebooks = allAppData.notebooks;
//            console.log("notebooks updated");
//            shareNotebooks = allAppData.shareNotebooks;
//            console.log("shareNotebooks updated");
//            sharedUserInfos = allAppData.sharedUserInfos;
//            console.log("sharedUserInfos updated");
//            notes = allAppData.notes;
//            console.log("notes updated");
//            latestNotes = allAppData.latestNotes;
//            console.log("latestNotes updated");
//            tagsJson = allAppData.tagsJson;
//            console.log("tagsJson updated");
//            trackingLog = allAppData.trackingLog;
//            console.log("trackingLog updated");
//        }
//        else if(!isAtLocal && !isConnected) {
//            //initial data    
//            allAppData.UserInfo = UserInfo;
//            allAppData.notebooks = notebooks;
//            allAppData.shareNotebooks = shareNotebooks;
//            allAppData.sharedUserInfos = sharedUserInfos;
//            allAppData.notes = notes;
//            allAppData.latestNotes = latestNotes;
//            allAppData.tagsJson = tagsJson;
//            allAppData.trackingLog = trackingLog;
//            console.log("using initial data");
//        }
//
//        localforage.setItem("allAppData", allAppData, function(err, value) {
//            console.log("allAppData saved");
//            callback();
//        }); 
//    },
//    
//    function(callback) {
//        console.log("running initPage");
//        initPage();
//        callback();
//    }
//]);

// 老方法
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

//加载用户名：
var Email = localStorage.email;
var UserId = localStorage.UserId;
var Password = localStorage.password;
$("#username").html(Email);
//var UserId = "56a82c7bab64417776002a5c";
//var isConnected = true;
var isConnected = navigator.onLine;

UserInfo = {"UserId": UserId,"Email": Email,"Verified": true, "Username":Email, "UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":"", "Password": Password};



////同步策略二：以server为优
//if(isConnected) { // 如果有网，直接从server拿
//    $.ajax({
//        type: 'GET', // added,
//        url: 'http://cs-linux.nottingham.edu.cn:8000/getAll',
//        data: "UserId=" + UserId ,
//    //                dataType: "json",
//    //                contentType: "application/json; charset=UTF-8",
//        //dataType: 'jsonp' - removed
//        //jsonpCallback: 'callback' - removed
//        contentType: "text/plain", 
//        async:false, 
//        success: function (data) {
//            var parsedData = jQuery.parseJSON(data);
//            if(parsedData.status && parsedData.status == "fail") { // 服务端没有数据：使用初始数据
//                console.log("not found data");
//                //使用初始数据
//                //initial data    
//                allAppData.UserInfo = UserInfo;
//                allAppData.notebooks = notebooks;
//                allAppData.shareNotebooks = shareNotebooks;
//                allAppData.sharedUserInfos = sharedUserInfos;
//                allAppData.notes = notes;
//                allAppData.latestNotes = latestNotes;
//                allAppData.tagsJson = tagsJson;
//                allAppData.trackingLog = trackingLog;
//                console.log("using initial data");
//                console.log("call initPage()");
//                initPage();
//                localforage.setItem("allAppData", allAppData, function(err, value) {
//                    console.log("allAppData saved");
//                });
//                return;
//            } 
//            allAppData = parsedData;    
//            console.log(allAppData.UserInfo.UserId);
//
//            console.log("allAppData loaded from server");
//
//            UserInfo = allAppData.UserInfo;
//            console.log("UserInfo updated from server");
//            notebooks = allAppData.notebooks;
//            console.log("notebooks updated from server");
//            shareNotebooks = allAppData.shareNotebooks;
//            console.log("shareNotebooks updated from server");
//            sharedUserInfos = allAppData.sharedUserInfos;
//            console.log("sharedUserInfos updated from server");
//            notes = allAppData.notes;
//            console.log("notes updated from server");
//            latestNotes = allAppData.latestNotes;
//            console.log("latestNotes updated from server");
//            tagsJson = allAppData.tagsJson;
//            console.log("tagsJson updated from server");
//            trackingLog = allAppData.trackingLog;
//            console.log("trackingLog updated from server");
//            console.log("call initPage()");
//            initPage();
//            localforage.setItem("allAppData", allAppData, function(err, value) {
//                console.log("allAppData saved");
//            });
//        },
//        error: function (xhr, status, error) {
//            console.log('Error: ' + error.message);
//            $('#lblResponse').html('Error connecting to the server.');
//        }
//    });
//}
//else {// 如果没网：1. 从本地拿；2. 本地没有使用初始数据
//    localforage.getItem('allAppData', function(err, value) {
//        console.log("check");
//        if(value != null) { //如果本地有数据，使用本地的
//                allAppData = value;
//                console.log("allAppData loaded from local");
//
//                UserInfo = allAppData.UserInfo;
//                console.log("UserInfo updated from local");
//                notebooks = allAppData.notebooks;
//                console.log("notebooks updated from local");
//                shareNotebooks = allAppData.shareNotebooks;
//                console.log("shareNotebooks updated from local");
//                sharedUserInfos = allAppData.sharedUserInfos;
//                console.log("sharedUserInfos updated from local");
//                notes = allAppData.notes;
//                console.log("notes updated from local");
//                latestNotes = allAppData.latestNotes;
//                console.log("latestNotes updated from local");
//                tagsJson = allAppData.tagsJson;
//                console.log("tagsJson updated from local");
//                trackingLog = allAppData.trackingLog;
//                console.log("trackingLog updated from local");
//                console.log("call initPage() from local");
//                initPage();
//                localforage.setItem("allAppData", allAppData, function(err, value) {
//                    console.log("allAppData saved");
//                });
//        }
//        else { //使用初始数据
//            //initial data    
//            allAppData.UserInfo = UserInfo;
//            allAppData.notebooks = notebooks;
//            allAppData.shareNotebooks = shareNotebooks;
//            allAppData.sharedUserInfos = sharedUserInfos;
//            allAppData.notes = notes;
//            allAppData.latestNotes = latestNotes;
//            allAppData.tagsJson = tagsJson;
//            allAppData.trackingLog = trackingLog;
//            console.log("using initial data");
//            console.log("call initPage()");
//            initPage();
//            localforage.setItem("allAppData", allAppData, function(err, value) {
//                console.log("allAppData saved");
//            });
//        }
//    });
//}






//同步策略三
$.ajax({
    type: 'GET', // added,
    url: baseUrl + 'getAll',
    data: "UserId=" + UserId ,
//                dataType: "json",
//                contentType: "application/json; charset=UTF-8",
    //dataType: 'jsonp' - removed
    //jsonpCallback: 'callback' - removed
    contentType: "text/plain", 
    async:false, 
    success: function (data) {
        var parsedData = jQuery.parseJSON(data);
        if(parsedData.status && parsedData.status == "fail") { // 服务端没有数据：使用初始数据
            console.log("not found data");
            //使用初始数据
            //initial data    
            allAppData.UserInfo = UserInfo;
            allAppData.notebooks = notebooks;
            allAppData.shareNotebooks = shareNotebooks;
            allAppData.sharedUserInfos = sharedUserInfos;
            allAppData.notes = notes;
            allAppData.latestNotes = latestNotes;
            allAppData.tagsJson = tagsJson;
            allAppData.trackingLog = trackingLog;
            console.log("using initial data");
            console.log("call initPage()");
            initPage();
            localforage.setItem("allAppData", allAppData, function(err, value) {
                console.log("allAppData saved");
            });
            return;
        } 
        allAppData = parsedData;    
        console.log(allAppData.UserInfo.UserId);

        console.log("allAppData loaded from server");

        UserInfo = allAppData.UserInfo;
        console.log("UserInfo updated from server");
        notebooks = allAppData.notebooks;
        console.log("notebooks updated from server");
        shareNotebooks = allAppData.shareNotebooks;
        console.log("shareNotebooks updated from server");
        sharedUserInfos = allAppData.sharedUserInfos;
        console.log("sharedUserInfos updated from server");
        notes = allAppData.notes;
        console.log("notes updated from server");
        latestNotes = allAppData.latestNotes;
        console.log("latestNotes updated from server");
        tagsJson = allAppData.tagsJson;
        console.log("tagsJson updated from server");
        trackingLog = allAppData.trackingLog;
        console.log("trackingLog updated from server");
        console.log("call initPage()");
        initPage();
        localforage.setItem("allAppData", allAppData, function(err, value) {
            console.log("allAppData saved");
        });
    },
    error: function (xhr, status, error) {
        console.log('Error: ' + error.message);
        
        localforage.getItem('allAppData', function(err, value) {
            console.log("check");
            if(value != null) { //如果本地有数据，使用本地的
                    allAppData = value;
                    console.log("allAppData loaded from local");

                    UserInfo = allAppData.UserInfo;
                    console.log("UserInfo updated from local");
                    notebooks = allAppData.notebooks;
                    console.log("notebooks updated from local");
                    shareNotebooks = allAppData.shareNotebooks;
                    console.log("shareNotebooks updated from local");
                    sharedUserInfos = allAppData.sharedUserInfos;
                    console.log("sharedUserInfos updated from local");
                    notes = allAppData.notes;
                    console.log("notes updated from local");
                    latestNotes = allAppData.latestNotes;
                    console.log("latestNotes updated from local");
                    tagsJson = allAppData.tagsJson;
                    console.log("tagsJson updated from local");
                    trackingLog = allAppData.trackingLog;
                    console.log("trackingLog updated from local");
                    console.log("call initPage() from local");
                    initPage();
                    localforage.setItem("allAppData", allAppData, function(err, value) {
                        console.log("allAppData saved");
                    });
            }
            else { //使用初始数据
                //initial data    
                allAppData.UserInfo = UserInfo;
                allAppData.notebooks = notebooks;
                allAppData.shareNotebooks = shareNotebooks;
                allAppData.sharedUserInfos = sharedUserInfos;
                allAppData.notes = notes;
                allAppData.latestNotes = latestNotes;
                allAppData.tagsJson = tagsJson;
                allAppData.trackingLog = trackingLog;
                console.log("using initial data");
                console.log("call initPage()");
                initPage();
                localforage.setItem("allAppData", allAppData, function(err, value) {
                    console.log("allAppData saved");
                });
            }
        });
    }
});


// 同步策略一：以本地为优
//localforage.getItem('allAppData', function(err, value) {
//    console.log("check");
//    if(value != null) { //如果本地有数据，使用本地的
//            allAppData = value;
//            console.log("allAppData loaded from local");
//            
//            UserInfo = allAppData.UserInfo;
//            console.log("UserInfo updated from local");
//            notebooks = allAppData.notebooks;
//            console.log("notebooks updated from local");
//            shareNotebooks = allAppData.shareNotebooks;
//            console.log("shareNotebooks updated from local");
//            sharedUserInfos = allAppData.sharedUserInfos;
//            console.log("sharedUserInfos updated from local");
//            notes = allAppData.notes;
//            console.log("notes updated from local");
//            latestNotes = allAppData.latestNotes;
//            console.log("latestNotes updated from local");
//            tagsJson = allAppData.tagsJson;
//            console.log("tagsJson updated from local");
//            trackingLog = allAppData.trackingLog;
//            console.log("trackingLog updated from local");
//            console.log("call initPage() from local");
//            initPage();
//            localforage.setItem("allAppData", allAppData, function(err, value) {
//                console.log("allAppData saved");
//            });
//    }
//    else { //如果没有：1 从server端拿；2 使用初始数据
//        // load initial data
//    
//        if(isConnected) { //从server端拿
//            $.ajax({
//                type: 'GET', // added,
//                url: 'http://cs-linux.nottingham.edu.cn:8000/getAll',
//                data: "UserId=" + UserId ,
//            //                dataType: "json",
//            //                contentType: "application/json; charset=UTF-8",
//                //dataType: 'jsonp' - removed
//                //jsonpCallback: 'callback' - removed
//                contentType: "text/plain", 
//                async:false, 
//                success: function (data) {
//                    var parsedData = jQuery.parseJSON(data);
//                    allAppData = parsedData;    
//                    console.log(allAppData.UserInfo.UserId);
//                
//                    console.log("allAppData loaded from server");
//
//                    UserInfo = allAppData.UserInfo;
//                    console.log("UserInfo updated from server");
//                    notebooks = allAppData.notebooks;
//                    console.log("notebooks updated from server");
//                    shareNotebooks = allAppData.shareNotebooks;
//                    console.log("shareNotebooks updated from server");
//                    sharedUserInfos = allAppData.sharedUserInfos;
//                    console.log("sharedUserInfos updated from server");
//                    notes = allAppData.notes;
//                    console.log("notes updated from server");
//                    latestNotes = allAppData.latestNotes;
//                    console.log("latestNotes updated from server");
//                    tagsJson = allAppData.tagsJson;
//                    console.log("tagsJson updated from server");
//                    trackingLog = allAppData.trackingLog;
//                    console.log("trackingLog updated from server");
//                    console.log("call initPage()");
//                    initPage();
//                    localforage.setItem("allAppData", allAppData, function(err, value) {
//                        console.log("allAppData saved");
//                    });
//                },
//                error: function (xhr, status, error) {
//                    console.log('Error: ' + error.message);
//                    $('#lblResponse').html('Error connecting to the server.');
//                }
//            });
//            
//            //调用函数
////            allAppData = getAllAppData(UserInfo.UserId);
////            console.log(allAppData);
////
////            UserInfo = allAppData.UserInfo;
////            console.log("UserInfo updated");
////            notebooks = allAppData.notebooks;
////            console.log("notebooks updated");
////            shareNotebooks = allAppData.shareNotebooks;
////            console.log("shareNotebooks updated");
////            sharedUserInfos = allAppData.sharedUserInfos;
////            console.log("sharedUserInfos updated");
////            notes = allAppData.notes;
////            console.log("notes updated");
////            latestNotes = allAppData.latestNotes;
////            console.log("latestNotes updated");
////            tagsJson = allAppData.tagsJson;
////            console.log("tagsJson updated");
////            trackingLog = allAppData.trackingLog;
////            console.log("trackingLog updated");
//        }
//        else { //使用初始数据
//            //initial data    
//            allAppData.UserInfo = UserInfo;
//            allAppData.notebooks = notebooks;
//            allAppData.shareNotebooks = shareNotebooks;
//            allAppData.sharedUserInfos = sharedUserInfos;
//            allAppData.notes = notes;
//            allAppData.latestNotes = latestNotes;
//            allAppData.tagsJson = tagsJson;
//            allAppData.trackingLog = trackingLog;
//            console.log("using initial data");
//            console.log("call initPage()");
//            initPage();
//            localforage.setItem("allAppData", allAppData, function(err, value) {
//            console.log("allAppData saved");
//        });
//        }
//    }
//});

//sleep(2000);
