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
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu'
//                                      去除掉“paste”，DD时正常（不会多余复制）
      ],
      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
    });
}

initEditor();