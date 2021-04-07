// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/templates/html/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><script src=https://kit.fontawesome.com/1ab94d0eba.js crossorigin=anonymous></script><title>Login</title><link rel=stylesheet href=../css/login.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css></head><body><header><a href=/home>Volte à página inicial</a></header><main class=container><h3>Faça o login para ver nossos produtos. <i class=\"fas fa-mug-hot\"></i></h3><br><h2>Login</h2><form action=/login method=POST><div class=input-field><input type=email name=email id=email placeholder=\"Insira seu email\"><div class=underline></div></div><div class=input-field><input type=password name=password id=password placeholder=\"Insira sua senha\"><div class=underline></div></div><input type=submit value=Continue></form></main><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  marko_forOf(data.success_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \n              classes: '#b71c1c green darken-4'\n        })") +
      "</script> ");
  });

  marko_forOf(data.error_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \n            classes: '#b71c1c red darken-4'\n      })") +
      "</script> ");
  });

  out.w(" ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud$1.0.0/templates/html/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
