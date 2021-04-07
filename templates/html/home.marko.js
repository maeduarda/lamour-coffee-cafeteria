// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/templates/html/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=../css/home.css> <link href=../../Static/Default.css rel=stylesheet type=text/css><title>Home</title></head><body><section><header><a href class=logo><img src=/icons/logo.png></a><ul><li><a href=/aboutUs>Sobre nós</a></li><li><a href=/singIn>Cadastre-se aqui</a></li><li><a href=/login>Produtos</a></li><li><a href=/contacts>Contatos</a></li></ul></header><div class=content><div class=textBox><h3>Viva desperto</h3><br><h1>L'amour Coffee</h1><p>O café é uma bebida fermentada preparada a partir de grãos de café torrados, as sementes de frutas vermelhas de certas espécies de Coffea. Quando os grãos de café se afastam.</p> <br><h4>Principais produtos</h4></div></div><ul class=products><li><img src=/icons/IcedCoffee.png></li><li><img src=/icons/DoubleEspresso.png></li><li><img src=/icons/CaramelFrappe.png></li><li><img src=/icons/MochaLate02.png></li></ul></section>");

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
    id: "/crud$1.0.0/templates/html/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
