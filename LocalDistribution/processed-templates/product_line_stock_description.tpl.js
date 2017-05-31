define('product_line_stock_description.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <p class=\"product-line-stock-description-msg-description "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"stockInfo") : depth0)) != null ? compilerNameLookup(stack1,"stockDescriptionClass") : stack1), depth0))
    + "\"><i class=\"product-line-stock-description-icon-description\"></i> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"stockInfo") : depth0)) != null ? compilerNameLookup(stack1,"stockDescription") : stack1), depth0))
    + " </p> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showStockDescription") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'product_line_stock_description'; return template;});