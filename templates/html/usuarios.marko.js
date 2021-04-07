// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/templates/html/usuarios.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Usuários</title> <link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link rel=stylesheet href=../css/usuarios.css></head><body><section><a href=/ >Volte à página inicial</a></section><div class=container><h1>Usuários</h1><table><thead><th>Id</th><th>Email</th> <th>Senha</th><th>Nome</th></thead>");

  var $for$0 = 0;

  marko_forOf(data.results, function(user, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(user.id) +
      "</td><td>" +
      marko_escapeXml(user.email) +
      "</td><td>" +
      marko_escapeXml(user.password) +
      "</td><td>" +
      marko_escapeXml(user.nome) +
      "</td><td><a style=\"margin-right: 10px;\"" +
      marko_attr("href", "/singIn/" + (user.id == null ? "" : user.id)) +
      " class=\"btn-floating btn-medium waves-effect waves-light linen white\"><i class=material-icons style=color:#EB5757;>edit</i></a><a" +
      marko_attr("href", "/users/delete/" + (user.id == null ? "" : user.id)) +
      " class=\"btn-floating btn-medium waves-effect waves-light white\"><i class=material-icons style=color:#EB5757;;>delete</i></a></td></tr>");
  });

  out.w(" </table> </div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  marko_forOf(data.error_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \r\n              classes: '#b71c1c red darken-4'\r\n        })") +
      "</script> ");
  });

  marko_forOf(data.success_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \r\n              classes: '#b71c1c green darken-4'\r\n        })") +
      "</script> ");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud$1.0.0/templates/html/usuarios.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
