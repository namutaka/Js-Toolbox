(function() {
  var src = $('script[src*="toolbox-start.js"]').attr('src');
  var js_src = src.replace('toolbox-start', 'toolbox');
  var htmlText='<html><head>' +
    '<script type="text/javascript" charset="utf-8"' +
      ' src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.1/require.min.js"' +
      ' data-main="' + js_src+'?v=1"></script>' +
    '</head><body></body></html>';
  var win = window.open('about:blank', 'TB',
    'width=320,height=350,menubar=no,toolbar=no,scrollbars=yes');
  win.document.write(htmlText);
})();
