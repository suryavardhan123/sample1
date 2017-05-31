define('transaction_line_views_cell_selectable_actionable_navigable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " selected";
  },"3":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <tr class=\"transaction-line-views-cell-selectable-actionable-navigable-row";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-action=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"actionType") || (depth0 != null ? compilerNameLookup(depth0,"actionType") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actionType","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\"><td class=\"transaction-line-views-cell-selectable-actionable-navigable-select\"><input type=\"checkbox\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"select\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-thumbnail\"><img class=\"transaction-line-views-cell-selectable-actionable-navigable-thumbnail-image\" src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-details\"><div class=\"transaction-line-views-cell-selectable-actionable-navigable-name\"><a ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " class=\"\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + " </a></div><div class=\"transaction-line-views-cell-selectable-actionable-navigable-price\"><div data-view=\"Item.Price\"></div></div><div data-view=\"Item.Sku\"></div><div class=\"transaction-line-views-cell-selectable-actionable-navigable-options\"><div data-view=\"Item.SelectedOptions\"></div></div></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-extras\"><div class=\"\" data-view=\"Item.Summary.View\"></div></td><td class=\"transaction-line-views-cell-selectable-actionable-navigable-actions\"><div data-view=\"Item.Actions.View\" class=\"\"></div></td></tr>  ";
},"useData":true}); template.Name = 'transaction_line_views_cell_selectable_actionable_navigable'; return template;});