/**
 * toolbox
 */
var Toolbox = {};

Toolbox.app = function() {
  this.body = $('body');
  this.opener = window.opener;

  this.setupGui();
  this.refresh();
};

Toolbox.app.prototype = {
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

