function initEditor() {
//    tinymce.init({
//      selector: '#editor h1',
//      inline: true,
//      toolbar: 'undo redo',
//      menubar: false
//    });

    tinymce.init({
        selector: '#editor',
        inline: true,
        theme: 'modern',
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu imagetools'
    //                                      去除掉“paste”，DD时正常（不会多余复制）
      ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
//        content_css: [
////            'http://fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
//            '/public/css/tinymce/codepen.min.css'
//          ]
    });
}

initEditor();