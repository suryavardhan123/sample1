define('transaction_line_views_cell_selectable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "transaction-line-views-cell-selectable-multishipto-line-selected";
  },"3":function(depth0,helpers,partials,data) {
  return "checked";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURLAttributes") || (depth0 != null ? compilerNameLookup(depth0,"itemURLAttributes") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemURLAttributes","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + "</a> ";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"transaction-line-views-cell-selectable-item-displayname-viewonly\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemName","hash":{},"data":data}) : helper)))
    + "</span> ";
},"9":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Item.Options\"></div> ";
  },"11":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Detail1.View\"></div> ";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDetail1Title") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail1") || (depth0 != null ? compilerNameLookup(depth0,"detail1") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail1","hash":{},"data":data}) : helper)))
    + " ";
},"14":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"transaction-line-views-cell-selectable-visible-phone\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail1Title") || (depth0 != null ? compilerNameLookup(depth0,"detail1Title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail1Title","hash":{},"data":data}) : helper)))
    + "</span> ";
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"transaction-line-views-cell-selectable-item-unit-price-label\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2Title") || (depth0 != null ? compilerNameLookup(depth0,"detail2Title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail2Title","hash":{},"data":data}) : helper)))
    + "</span> ";
},"18":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"transaction-line-views-cell-selectable-item-amount-label\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail3Title") || (depth0 != null ? compilerNameLookup(depth0,"detail3Title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail3Title","hash":{},"data":data}) : helper)))
    + "</span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <tr class=\"item-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLineSelected") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-item-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemId","hash":{},"data":data}) : helper)))
    + "\" data-type=\"row\" data-line-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\"  data-action=\"select-unselected-item\"><td class=\"transaction-line-views-cell-selectable-item-selector\"><input data-type=\"checkbox-item-selector\" type=\"checkbox\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isLineSelected") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " /></td><td class=\"transaction-line-views-cell-selectable-item-image\"><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1), "thumbnail", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></td><td class=\"transaction-line-views-cell-selectable-item-details\"><p class=\"transaction-line-views-cell-selectable-item-displayname\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </p><div data-view=\"Item.Sku\"></div><p class=\"transaction-line-views-cell-selectable-stock\" data-view=\"ItemViews.Stock.View\"></p><div data-view=\"StockDescription\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOptions") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </td><td class=\"transaction-line-views-cell-selectable-item-qty\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isDetail1Composite") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </td><td class=\"transaction-line-views-cell-selectable-item-unit-price\"><p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDetail2Title") : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <span class=\"transaction-line-views-cell-selectable-item-unit-price-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2") || (depth0 != null ? compilerNameLookup(depth0,"detail2") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail2","hash":{},"data":data}) : helper)))
    + " </span></p></td><td class=\"transaction-line-views-cell-selectable-item-amount\"><p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDetail3Title") : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <span class=\"transaction-line-views-cell-selectable-item-amount-value\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail3") || (depth0 != null ? compilerNameLookup(depth0,"detail3") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"detail3","hash":{},"data":data}) : helper)))
    + " </span></p></td></tr>  ";
},"useData":true}); template.Name = 'transaction_line_views_cell_selectable'; return template;});