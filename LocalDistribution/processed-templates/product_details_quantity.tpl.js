define('product_details_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div class=\"product-details-quantity-options\" data-validation=\"control-group\"><label for=\"quantity\" class=\"product-details-quantity-options-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity", {"name":"translate","hash":{},"data":data})))
    + " </label><div data-validation=\"control\"><div><button type=\"button\" class=\"product-details-quantity-remove\" data-action=\"updateQuantity\" data-type=\"product-details-quantity-remove\" data-value=\"-1\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMinusButtonDisabled") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">-</button><input type=\"number\" name=\"quantity\" id=\"quantity\" data-action=\"changeQuantity\" class=\"product-details-quantity-value\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\" min=\"1\"><button  type=\"button\" class=\"product-details-quantity-add\" data-action=\"updateQuantity\" data-value=\"+1\">+</button></div></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  return "disabled=\"disabled\"";
  },"4":function(depth0,helpers,partials,data) {
  return " <input type=\"hidden\" name=\"quantity\" id=\"quantity\" value=\"1\"> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>  ";
},"useData":true}); template.Name = 'product_details_quantity'; return template;});