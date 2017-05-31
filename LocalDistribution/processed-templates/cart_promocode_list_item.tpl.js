define('cart_promocode_list_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"cart-promocode-list-item\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"><div class=\"cart-promocode-list-item-container\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showDiscountRate") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <span class=\"cart-promocode-list-item-code\"> ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEditable") : depth0), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <span class=\"cart-promocode-list-item-code-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"code") || (depth0 != null ? compilerNameLookup(depth0,"code") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"code","hash":{},"data":data}) : helper)))
    + "</span></span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEditable") : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showWarning") : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"cart-promocode-list-item-discount\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"discountRate") || (depth0 != null ? compilerNameLookup(depth0,"discountRate") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"discountRate","hash":{},"data":data}) : helper)))
    + "</span> ";
},"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<span class=\"cart-promocode-list-item-code-label\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Promo: ", {"name":"translate","hash":{},"data":data})))
    + "</span>";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"#\" data-action=\"remove-promocode\" data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"><span class=\"cart-promocode-list-item-remove-action\"><i></i></span></a> ";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <span class=\"cart-promocode-list-item-warning\" ><i data-toggle=\"tooltip\" data-container=\".cart-promocode-list-item-warning\" data-placement=\"bottom\" title=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"errorMessage") || (depth0 != null ? compilerNameLookup(depth0,"errorMessage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\"></i></span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPromo") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'cart_promocode_list_item'; return template;});