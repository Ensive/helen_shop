require('babel-register');

var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
app.use(bodyParser.json());

function renderToString(component, props, callback) {
  var componentToRender = require(`./components/${component}.react`);
  callback(ReactDOMServer.renderToString(React.createElement(componentToRender, props)));
}

app.post('/', (req, res) => {
  renderToString(req.body.component, req.body.props, function (str) {
    res.end(str);
  });
});

app.listen(3001);
