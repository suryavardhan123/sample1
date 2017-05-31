define('product_list_details_later.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "No products yet", {"name":"translate","hash":{},"data":data})))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasMoreThanOneItem") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Products", (depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"6":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "$(0) Product", (depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0), {"name":"translate","hash":{},"data":data})))
    + " ";
},"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"product-list-details-later-explanation\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "To buy an item now, click \"Move to Cart\"", {"name":"translate","hash":{},"data":data})))
    + " </div><div class=\"product-list-details-later-list-items\" data-type=\"product-list-items\"><div data-view=\"ProductList.DetailsLater.Collection\"></div></div> ";
},"10":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"product-list-details-later-header-no-items\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You don't have items in this list yet.", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-list-details-later\"><button class=\"product-list-details-later-button-saveforlater-pusher\" data-type=\"sc-pusher\" data-target=\"cart-save-for-later\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Saved for Later", {"name":"translate","hash":{},"data":data})))
    + " <i></i></button><div class=\"product-list-details-later-row\" data-action=\"pushable\" data-id=\"cart-save-for-later\"><div class=\"product-list-details-later-col\"><h3 class=\"product-list-details-later-list-header-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Saved for Later", {"name":"translate","hash":{},"data":data})))
    + " <small class=\"product-list-details-later-shopping-cart-title-details-count\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </small></h3><div data-confirm-message class=\"product-list-details-later-confirm-message\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div>  ";
},"useData":true}); template.Name = 'product_list_details_later'; return template;});