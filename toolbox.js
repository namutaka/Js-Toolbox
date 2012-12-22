require([
  'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
  'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/jquery-ui.min.js'
], function(JQuery) {
  var Toolbox = function() {
    this.body = $('body');
    this.opener = window.opener;

    this.setupGui();
    this.onOpenerLoad();
  };

  Toolbox.prototype = {
    setupEvent: function() {
      var self = this;
      $(this.opener).unload(function() {
        var polling;
        polling = function () {
          if (self.opener.document.readyState == "complete") {
            self.onOpenerLoad();
          } else {
            setTimeout(polling, 100);
          }
        };
        setTimeout(polling, 100);
      });
    },

    setupGui: function (){
      var self = this;
      this.body.css('font-size', '12px');

      var $buttons = $('<div/>').buttonset()
        .addClass('ui-widget-header')
        .addClass('ui-corner-all');
      this.body.append($buttons);

      $buttons.append(
        $('<button/>')
          .text('refresh')
          .button({icons: {primary: "ui-icon-refresh"}})
          .click(function() {
            self.refresh();
        })
      );

      $buttons.append(
        $('<button/>')
          .text('Show name')
          .button()
          .click(function() {
            self.showName();
        })
      );

      this.body.append(
        $('<textarea/>').width(300).height(120)
      );
    },

    onOpenerLoad: function() {
      this.refresh();
      this.setupEvent();
    },

    refresh: function() {
      $('textarea').val(
          $.stringify(this.opener.value));
    },

    showName: function() {
      this.opener.$('input').each(function() {
        $(this).after($('<span/>').text($(this).attr('name')));
      });
    }
  };



  jQuery.extend({
      stringify : function stringify(obj) {
          var t = typeof (obj);
          if (t != "object" || obj === null) {
              // simple data type
              if (t == "string") obj = '"' + obj + '"';
              return String(obj);
          } else {
              // recurse array or object
              var n, v, json = [], arr = (obj && obj.constructor == Array);

              for (n in obj) {
                  v = obj[n];
                  t = typeof(v);
                  if (obj.hasOwnProperty(n)) {
                      if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
                      json.push((arr ? "" : '"' + n + '":') + String(v));
                  }
              }
              return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
          }
      }
  });

  new Toolbox();
});

//loadCss
(function (url_list) {
  for(var i = 0; i < url_list.length; i++) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url_list[i];
    document.getElementsByTagName("head")[0].appendChild(link);
  }
})([
  'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/themes/base/jquery-ui.css'
]);

