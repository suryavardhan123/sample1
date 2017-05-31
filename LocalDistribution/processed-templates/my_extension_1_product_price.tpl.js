define('my_extension_1_product_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + " IS LESS THAN $100</div>  ";
},"useData":true}); template.Name = 'my_extension_1_product_price'; return template;});