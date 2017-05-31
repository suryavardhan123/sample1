define('cart_detailed.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h1 class=\"cart-detailed-title\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + " <small class=\"cart-detailed-title-details-count\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productsAndItemsCount") || (depth0 != null ? compilerNameLookup(depth0,"productsAndItemsCount") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"productsAndItemsCount","hash":{},"data":data}) : helper)))
    + " </small></h1> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h2 class=\"cart-detailed-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Your Shopping Cart is empty", {"name":"translate","hash":{},"data":data})))
    + "</h2> ";
},"5":function(depth0,helpers,partials,data) {
  return "cart-detailed-left ";
  },"7":function(depth0,helpers,partials,data) {
  return "cart-detailed-empty";
  },"9":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div data-view=\"Quick.Order.EmptyCart\"><p class=\"cart-detailed-body-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Continue Shopping on our <a href=\"/\" data-touchpoint=\"home\">Home Page</a>.", {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"cart-detailed-proceed-to-checkout-container\"><a class=\"cart-detailed-proceed-to-checkout\" data-action=\"sticky\" href=\"#\" data-touchpoint=\"checkout\" data-hashtag=\"#\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Proceed to Checkout", {"name":"translate","hash":{},"data":data})))
    + " </a></div><div data-confirm-message class=\"cart-detailed-confirm-message\"></div><table class=\"cart-detailed-item-view-cell-actionable-table cart-detailed-table-row-with-border\"><tbody data-view=\"Item.ListNavigable\"></tbody></table> ";
},"13":function(depth0,helpers,partials,data) {
  return " <section class=\"cart-detailed-right\"><div data-view=\"Cart.Summary\"></div></section> ";
  },"15":function(depth0,helpers,partials,data) {
  return " <div data-view=\"SavedForLater\" class=\"cart-detailed-savedforlater\"></div><div data-view=\"RecentlyViewed.Items\" class=\"cart-detailed-recently-viewed\"></div><div data-view=\"Related.Items\" class=\"cart-detailed-related\"></div><div data-view=\"Correlated.Items\" class=\"cart-detailed-correlated\"></div> ";
  },"17":function(depth0,helpers,partials,data) {
  return " <div data-view=\"SavedForLater\" class=\"cart-detailed-savedforlater\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"cart-detailed\"><div class=\"cart-detailed-view-header\"><header class=\"cart-detailed-header\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </header></div><div class=\"cart-detailed-body\"><section class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-view=\"Quick.Order\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </section> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"cart-detailed-footer\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div>  ";
},"useData":true}); template.Name = 'cart_detailed'; return template;});