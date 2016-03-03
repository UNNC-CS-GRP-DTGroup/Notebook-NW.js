<html>
    <p id='lblResponse'></p>
    <body>
        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
        <script>
            window.require = {
                baseUrl: 'http:\/\/cs-linux.nottingham.edu.cn\/~grp-dt\/git\/Notebook-NW.js',
            };        

            var UserInfo = {"UserId":"56a82c7bab64417776002a5c","Email":"me@nottingham.edu.cn","Verified":false,"Username":"me@nottingham.edu.cn","UsernameRaw":"","CreatedTime":"0001-01-01T00:00:00Z","Logo":"http://leanote.com/images/blog/default_avatar.png","Theme":"","NotebookWidth":0,"NoteListWidth":0,"MdEditorWidth":0,"LeftIsMin":false,"ThirdUserId":"","ThirdUsername":"","ThirdType":0,"FromUserId":"","NoteCnt":0,"Usn":10,"FullSyncBefore":"0001-01-01T00:00:00Z","BlogUrl":"","PostUrl":undefined};

    //        var object = {}

            function transfer(jsonData) {
                var stringifiedJson = JSON.stringify(jsonData);
                $.ajax({
                    type: 'POST', // added,
                    url: '/test',
                    data: stringifiedJson,
    //                dataType: "json",
    //                contentType: "application/json; charset=UTF-8",
                    //dataType: 'jsonp' - removed
                    //jsonpCallback: 'callback' - removed
                    contentType: "text/plain",
                    success: function (data) {
    //                    var ret = jQuery.parseJSON(data);
    //                    $('#lblResponse').html(ret.msg);
                        console(JSON.parse(data).msg);
                    },
                    error: function (xhr, status, error) {
                        console.log('Error: ' + error.message);
                        $('#lblResponse').html('Error connecting to the server.');
                    }
                });
            }

               transfer(UserInfo); 
        </script>
    </body>
</html>
