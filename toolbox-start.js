(function(s) {
  var htmlText='<body>' +
'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>' +
'<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/jquery-ui.min.js"></script>' +
'<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/themes/base/jquery-ui.css">' +
'<script type="text/javascript" charset="utf-8" src="'+s+'"></script>' +
'<script>var app; setTimeout(function() {app = new Toolbox.app()},100); </script>' +
'</body>';
var win = window.open('about:blank', 'TB',
  'width=320,height=150,menubar=no,toolbar=no,scrollbars=yes');
win.document.write(htmlText);
})('http://localhost:4567/toolbox.js');
