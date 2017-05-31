define('cart_add_to_cart_button.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"cart-add-to-cart-button-container\"><input type=\"button\" data-type=\"customadd\" class=\"cart-add-to-cart-button-button\" value = \"Add to Cart\" id=\"customadd\" /><button type=\"submit\" data-type=\"add-to-cart\" style = \"display:none;\" id=\"addtocart\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to Cart", {"name":"translate","hash":{},"data":data})))
    + " </button/></div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isCurrentItemPurchasable") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"cart-add-to-cart-button-container\"><div class=\"cart-add-to-cart-button\"><button type=\"submit\" data-type=\"add-to-cart\" data-action=\"sticky\" class=\"cart-add-to-cart-button-button\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isUpdate") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </button/></div></div> ";
},"5":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Update", {"name":"translate","hash":{},"data":data})));
  },"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to Cart", {"name":"translate","hash":{},"data":data})));
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"itemid") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'cart_add_to_cart_button'; return template;});