define('cart_confirmation_modal.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <div class=\"cart-confirmation-modal-quantity\"><span class=\"cart-confirmation-modal-quantity-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity: ", {"name":"translate","hash":{},"data":data})))
    + "</span><span class=\"cart-confirmation-modal-quantity-value\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "</span></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, functionType="function", buffer = " <div class=\"cart-confirmation-modal\"><div class=\"cart-confirmation-modal-img\"><img data-loader=\"false\" src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1), "main", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div><div class=\"cart-confirmation-modal-details\" itemscope itemtype=\"https://schema.org/Product\"><a href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_url") : stack1), depth0))
    + "\" class=\"cart-confirmation-modal-item-name\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + "</a><div class=\"cart-confirmation-modal-price\"><div data-view=\"Line.Price\"></div></div><div data-view=\"Line.Sku\" class=\"cart-confirmation-modal-sku\"></div><div class=\"cart-confirmation-modal-options\"><div data-view=\"Line.SelectedOptions\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"cart-confirmation-modal-actions\"><div class=\"cart-confirmation-modal-view-cart\"><a href=\"/cart\" class=\"cart-confirmation-modal-view-cart-button\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "View Cart &amp; Checkout", {"name":"translate","hash":{},"data":data})))
    + "</a></div><div class=\"cart-confirmation-modal-continue-shopping\"><button class=\"cart-confirmation-modal-continue-shopping-button\" data-dismiss=\"modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Continue Shopping", {"name":"translate","hash":{},"data":data})))
    + "</button></div></div></div></div>  ";
},"useData":true}); template.Name = 'cart_confirmation_modal'; return template;});