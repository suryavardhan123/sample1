define('order_history_item_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <a \n		class=\"order-history-item-actions-reorder\" \n		data-action=\"add-to-cart\" \n		data-line-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\" \n		data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" \n		data-item-quantity=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\"\n		data-partial-quantity=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"partial_quantity") : stack1), depth0))
    + "\" \n		data-parent-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemParentId") || (depth0 != null ? compilerNameLookup(depth0,"itemParentId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemParentId","hash":{},"data":data}) : helper)))
    + "\" \n		data-item-options=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineFormatOptions") || (depth0 != null ? compilerNameLookup(depth0,"lineFormatOptions") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineFormatOptions","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Reorder", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showActions") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'order_history_item_actions'; return template;});