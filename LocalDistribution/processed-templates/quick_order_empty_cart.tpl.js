define('quick_order_empty_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"quick-order-empty-cart\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Continue Shopping on our <a href=\"/\" data-touchpoint=\"home\">Home Page</a> or use the Quick Add below to add items to your cart.", {"name":"translate","hash":{},"data":data})))
    + " </p>  ";
},"useData":true}); template.Name = 'quick_order_empty_cart'; return template;});