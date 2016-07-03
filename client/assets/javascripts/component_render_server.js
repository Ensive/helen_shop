require('babel-core/register')({experimental: true});

var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var React = require('react');
app.use(bodyParser.json());

function renderToString(component, props, callback) {
  var componentToRender = require(`./components/${component}.react`);
  callback(React.renderToString(React.createElement(componentToRender, props)));
}

app.post('/', (req, res) => {
  renderToString(req.body.component, req.body.props, function (str) {
    res.end(str);
  });
});

app.listen(3001);