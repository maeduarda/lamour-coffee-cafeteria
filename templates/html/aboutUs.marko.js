// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/templates/html/aboutUs.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=../css/aboutUs.css><title>Sobre nós</title></head><body><header><a href=/  class=logo><img src=/icons/logo.png></a><ul><li><a href=/aboutUs>Sobre nós</a></li><li><a href=/singIn>Cadastre-se aqui</a></li><li><a href=/login>Produtos</a></li><li><a href=/contacts>Contatos</a></li><li><a href=/home>Volte à página inicial</a></li></ul></header><section><h1>L'amour Coffee</h1><p>A L’amour Coffee foi fundada em 2021, e trouxe para capital pernambucana os melhores sabores de café, com muita variedade e qualidade. Sempre presando a satisfação do cliente, nós oferecemos um grande suporte de atentimento. Por enquanto nossos pedidos são feitos apenas na loja virtual. Para mais informações de valores e produtos, acesse as demais abas do nosso site.</p></section>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud$1.0.0/templates/html/aboutUs.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
