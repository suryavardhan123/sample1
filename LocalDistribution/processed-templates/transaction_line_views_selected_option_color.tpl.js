define('transaction_line_views_selected_option_color.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <img\n						src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1)) != null ? compilerNameLookup(stack1,"src") : stack1), depth0))
    + "\"\n						alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "\"\n						width=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + "\"\n						height=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + "\"> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = " <span class=\"transaction-line-views-selected-option-color-tile-color ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"isLightColor") : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "\" style=\"background: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"color") : stack1), depth0))
    + "\"></span> ";
},"4":function(depth0,helpers,partials,data) {
  return "white-border";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div class=\"transaction-line-views-selected-option-color\" name=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "\"><ul class=\"transaction-line-views-selected-option-color-tiles-container\"><li class=\"transaction-line-views-selected-option-color-label\"><label class=\"transaction-line-views-selected-option-color-label-text\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + ":</label></li><li><span class=\"transaction-line-views-selected-option-color-tile\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"isImageTile") : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span></li><li class=\"transaction-line-views-selected-option-color-text\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + " </li></ul></div>  ";
},"useData":true}); template.Name = 'transaction_line_views_selected_option_color'; return template;});