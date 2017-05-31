define('product_list_control.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"product-list-control-button-move\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Move", {"name":"translate","hash":{},"data":data})))
    + " </button> ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <button class=\"product-list-control-button-wishlist\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\" type=\"button\" > "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to Wishlist", {"name":"translate","hash":{},"data":data})))
    + " </button> ";
},"5":function(depth0,helpers,partials,data) {
  return "product-list-control-move";
  },"7":function(depth0,helpers,partials,data) {
  return "style=\"display: block\"";
  },"9":function(depth0,helpers,partials,data) {
  return " <div data-confirm-message=\"\"></div> ";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to", {"name":"translate","hash":{},"data":data})))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasProductLists") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ": ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ("
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productListLength") || (depth0 != null ? compilerNameLookup(depth0,"productListLength") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"productListLength","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasOneProductList") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "list", {"name":"translate","hash":{},"data":data})))
    + ") ";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "lists", {"name":"translate","hash":{},"data":data})))
    + ") ";
},"17":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Add to", {"name":"translate","hash":{},"data":data})))
    + " ";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <li class=\"product-list-control-nolists-messages\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </li> ";
},"20":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "There are no other lists", {"name":"translate","hash":{},"data":data})))
    + " ";
},"22":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "There are no lists", {"name":"translate","hash":{},"data":data})))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"product-list-control-flyout ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-type=\"productlist-control\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showControl") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " data-dropdown-content> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <h5 class=\"product-list-control-flyout-title\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </h5><ul class=\"product-list-control-flyout-product-lists\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </ul><h5 class=\"product-list-control-flyout-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Or: ", {"name":"translate","hash":{},"data":data})))
    + "</h5><div class=\"product-list-control-new-product-list-container\" data-type=\"new-item-container\"></div></div>  ";
},"useData":true}); template.Name = 'product_list_control'; return template;});