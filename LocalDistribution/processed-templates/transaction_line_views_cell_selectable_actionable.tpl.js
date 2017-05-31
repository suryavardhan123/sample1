define('transaction_line_views_cell_selectable_actionable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"transaction-line-views-cell-selectable-actionable-alert-placeholder\" data-type=\"alert-placeholder\"><div class=\"alert alert-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"customAlertType") || (depth0 != null ? compilerNameLookup(depth0,"customAlertType") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"customAlertType","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"alertText") || (depth0 != null ? compilerNameLookup(depth0,"alertText") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"alertText","hash":{},"data":data}) : helper)))
    + " </div></div> ";
},"3":function(depth0,helpers,partials,data) {
  return "checked";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <a ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></a> ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " <img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"> ";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " class=\"transaction-line-views-cell-selectable-actionable-name-link\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + " </a> ";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + " ";
},"13":function(depth0,helpers,partials,data) {
  return " <div class=\"transaction-line-views-cell-selectable-actionable-summary\" data-view=\"Item.Summary.View\"></div> ";
  },"15":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Item.Actions.View\" class=\"transaction-line-views-cell-selectable-actionable-actions\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <article data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\" class=\"transaction-line-views-cell-selectable-actionable "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCustomAlert") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"transaction-line-views-cell-selectable-actionable-item\"><div class=\"transaction-line-views-cell-selectable-actionable-input-checkbox\"><input type=\"checkbox\" name=\"\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "></div><div class=\"transaction-line-views-cell-selectable-actionable-image\"><div class=\"transaction-line-views-cell-selectable-actionable-thumbnail\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div><div class=\"transaction-line-views-cell-selectable-actionable-details\"><div  class=\"transaction-line-views-cell-selectable-actionable-name\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"transaction-line-views-cell-selectable-actionable-price\"><div data-view=\"Item.Price\"></div></div><div data-view=\"Item.Sku\"></div><div class=\"transaction-line-views-cell-selectable-actionable-options\"><div data-view=\"Item.SelectedOptions\"></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSummaryView") : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showActionsView") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </article>  ";
},"useData":true}); template.Name = 'transaction_line_views_cell_selectable_actionable'; return template;});