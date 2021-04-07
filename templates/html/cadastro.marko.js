// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/templates/html/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
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

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro</title><link rel=stylesheet href=../css/cadastro.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css></head><body><section><header><a href class=logo><img src=/icons/logo.png></a><ul><li><a href=/aboutUs>Sobre nós</a></li><li><a href=/singIn>Cadastre-se aqui</a></li><li><a href=/login>Produtos</a></li><li><a href=/contacts>Contatos</a></li></ul></header></section><main><h1>Criar conta</h1><form action=/singin method=POST><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><label for=name><span>Nome</span><input type=text id=name name=nome" +
    marko_attr("value", data.nome) +
    "></label><label for=email><span>E-mail</span><input type=email id=email name=email" +
    marko_attr("value", data.email) +
    "></label><label for=password><span>Senha</span><input type=password id=password name=password" +
    marko_attr("value", data.password) +
    "></label><input type=submit value=Cadastrar id=button></form></main><section class=images><img src=/icons/xicara.png alt=Xicara><div class=circle></div></section><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  marko_forOf(data.error_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \n            classes: '#b71c1c red darken-4'\n      })") +
      "</script> ");
  });

  marko_forOf(data.success_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \n              classes: '#b71c1c green darken-4'\n        })") +
      "</script> ");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud$1.0.0/templates/html/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
