define('quantity_pricing.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "quantity-pricing-hidden";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"quantity-pricing-expander-head\"><a class=\"quantity-pricing-expander-head-toggle ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-toggle=\"collapse\" data-target=\"#expander-body-container-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemKey") || (depth0 != null ? compilerNameLookup(depth0,"itemKey") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemKey","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"expander-body\" data-action=\"toggle\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity discounts available", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quantity-pricing-expander-toggle-icon\"></i></a></div><div class=\"quantity-pricing-expander-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" data-nonprefix='true' id=\"expander-body-container-"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemKey") || (depth0 != null ? compilerNameLookup(depth0,"itemKey") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemKey","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\"> ";
},"4":function(depth0,helpers,partials,data) {
  return "collapsed";
  },"6":function(depth0,helpers,partials,data) {
  return "in";
  },"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a class=\"quantity-pricing-flyout-head-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity discounts available", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quantity-pricing-flyout-toggle-icon\"></i></a><div class=\"quantity-pricing-flyout-content collapsed\"> ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <tr> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"maximumquantity") : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </tr> ";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <td class=\"quantity-pricing-table-body-quantity\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minimumquantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumquantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minimumquantity","hash":{},"data":data}) : helper)))
    + " – "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maximumquantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumquantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maximumquantity","hash":{},"data":data}) : helper)))
    + "</td> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"is_range") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " <td class=\"quantity-pricing-table-body-price\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price_range") : depth0)) != null ? compilerNameLookup(stack1,"min_formatted") : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price_range") : depth0)) != null ? compilerNameLookup(stack1,"max_formatted") : stack1), depth0))
    + "</td> ";
},"14":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <td class=\"quantity-pricing-table-body-price\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"price_formatted") || (depth0 != null ? compilerNameLookup(depth0,"price_formatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price_formatted","hash":{},"data":data}) : helper)))
    + "</td> ";
},"16":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <td class=\"quantity-pricing-table-body-quantity\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minimumquantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumquantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minimumquantity","hash":{},"data":data}) : helper)))
    + " +</td> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"is_range") : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"quantity-pricing ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showContent") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><div class=\"quantity-pricing-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"quantity-pricing-expander-body-container\"><table><thead><tr><th class=\"quantity-pricing-table-header-quantity\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity", {"name":"translate","hash":{},"data":data})))
    + "</th><th class=\"quantity-pricing-table-header-price\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Price", {"name":"translate","hash":{},"data":data})))
    + "</th></tr></thead><tbody> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"priceSchedule") : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </tbody></table></div></div></div></div>  ";
},"useData":true}); template.Name = 'quantity_pricing'; return template;});