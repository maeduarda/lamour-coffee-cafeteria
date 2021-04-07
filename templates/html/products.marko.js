// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/templates/html/products.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Produtos</title><link rel=stylesheet href=../css/products.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css></head><body><header><ul><li><a href=/aboutUs>Sobre nós</a></li><li><a href=/singIn>Cadastre-se aqui</a></li><li><a href=/login>Produtos</a></li><li><a href=/contacts>Contatos</a></li><li><a href=/ >Volte à página inicial</a></li></ul></header><section><h1>Produtos</h1></section><div><div class=coffes><div class=iced><img src=../iconesvalor/iced.png alt=\"Iced Coffee\"><h5>Iced Coffee</h5><h6>R$ 25,00</h6><span class=span_iced>Quantidade: " +
    marko_escapeXml(data.results[1].quantidade) +
    "</span><a href=/comprar/2><button> Comprar</button></a></div><div class=caramel><img src=../iconesvalor/caramel.png alt=Caramel><h5>Caramel Frappe</h5><h6>R$ 16,90</h6><span class=span_caramel>Quantidade: " +
    marko_escapeXml(data.results[2].quantidade) +
    "</span><a href=/comprar/3><button> Comprar </button></a></div><div class=mocha><img src=../iconesvalor/mocha.png alt=Mocha><h5>Mocha Late</h5><h6>R$ 14,90</h6><span class=span_mocha>Quantidade: " +
    marko_escapeXml(data.results[0].quantidade) +
    " </span><a href=/comprar/4><button> Comprar </button></a></div><div class=double><img src=../iconesvalor/double.png alt=Double><h5>Double Espresso</h5><h6>R$ 20,90</h6><span class=span_double>Quantidade: " +
    marko_escapeXml(data.results[3].quantidade) +
    "</span><a href=/comprar/5><button> Comprar </button></a></div></div></div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><script src=https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js></script>");

  marko_forOf(data.error_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \n              classes: '#b71c1c red darken-4'\n        })") +
      "</script> ");
  });

  marko_forOf(data.success_message, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({html: '" + message) + "', \n              classes: '#b71c1c green darken-4'\n        })") +
      "</script> ");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud$1.0.0/templates/html/products.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
