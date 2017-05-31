define('product_line_stock.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class='product-line-stock-msg-not-available'>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "This item is no longer available", {"name":"translate","hash":{},"data":data})))
    + "</div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOutOfStockMessage") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInStockMessage") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <p class=\"product-line-stock-msg-out\"><span class=\"product-line-stock-icon-out\"><i></i></span><span class=\"product-line-stock-msg-out-text\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"stockInfo") : depth0)) != null ? compilerNameLookup(stack1,"outOfStockMessage") : stack1), depth0))
    + "</span></p> ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <p class=\"product-line-stock-msg-in\"><span class=\"product-line-stock-icon-in\"><i></i></span> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"stockInfo") : depth0)) != null ? compilerNameLookup(stack1,"inStockMessage") : stack1), depth0))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"product-line-stock\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isNotAvailableInStore") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>  ";
},"useData":true}); template.Name = 'product_line_stock'; return template;});