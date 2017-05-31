define('cart_quickaddtocart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <input name=\"quantity\" data-action=\"setquantity\" class=\"cart-quickaddtocart-quantity\" type=\"number\" min=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minimumQuantity","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quantity","hash":{},"data":data}) : helper)))
    + "\"/><div data-view=\"AddToCart\"></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <form class=\"cart-quickaddtocart\" data-action=\"add-to-cart\"><div data-view=\"ProductViewsPrice.Price\" class=\"cart-quickaddtocart-price\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuickAddToCartButton") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </form>  ";
},"useData":true}); template.Name = 'cart_quickaddtocart'; return template;});