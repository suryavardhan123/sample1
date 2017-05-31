define('product_line_sku.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"product-line-sku-container\"><span class=\"product-line-sku-label\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "SKU:", {"name":"translate","hash":{},"data":data})))
    + " </span><span class=\"product-line-sku-value\" itemprop=\"sku\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sku","hash":{},"data":data}) : helper)))
    + " </span></div>  ";
},"useData":true}); template.Name = 'product_line_sku'; return template;});