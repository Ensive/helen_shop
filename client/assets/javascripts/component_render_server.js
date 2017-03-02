// require('babel-register');
require('babel-core/register')({ experimental: true });

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

app.use(bodyParser.json());

function renderToString(component, props, callback) {
  const componentToRender = require(`./components/${component}.react`);
  callback(ReactDOMServer.renderToString(React.createElement(componentToRender, props)));
}

app.post('/', (req, res) => {
  renderToString(req.body.component, req.body.props, function (str) {
    res.end(str);
  });
});

app.listen(3001);
