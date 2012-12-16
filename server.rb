#!/usr/bin/env ruby

require 'sinatra'

set :public_folder, File.dirname(__FILE__)

get '/' do
  @id = 1
  erb :index
end

get '/:id' do
  @id = params[:id]
  erb :index
end

__END__
@@ index
<!DOCTYPE html>
<html>
  <head>
  <script type="text/javascript" charset="utf-8" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script>
  $(function() {
    $('button').bind('click', function() {
(function (d) { window.open(d, 'TB', 'width=320,height=150,menubar=no,toolbar=no,scrollbars=yes'); })('toolbox.html');
    });
  });
  var value = {
    id: <%= @id %>,
    val1: 100,
    val2: 120
  };
  function func1() {
    return value['val1'];
  }
  </script>
  </head>
  <body>
  <h3>Helloworld: <%= @id %></h3>

  <div><button type='button'>Start</button></div>
  <div><a href="/">1</a></div>
  <div><a href="/100">100</a></div>
  <div><input type="text" name="input001" value="100" /></div>
  </body>
</html>

