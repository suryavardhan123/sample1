define('my_extension_2.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"my-extension-2\"><button data-action=\"show-alert\" class=\"my-extension-2-button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"text") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </button></div>  ";
},"useData":true}); template.Name = 'my_extension_2'; return template;});