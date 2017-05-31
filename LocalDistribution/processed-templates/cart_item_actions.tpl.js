define('cart_item_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"editUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"cart-item-actions-item-list-actionable-edit-button-edit\" data-toggle=\"show-in-modal\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Edit", {"name":"translate","hash":{},"data":data})))
    + "</a><a class=\"cart-item-actions-item-list-actionable-edit-content-saveforlater\" data-action=\"save-for-later-item\" data-internalid=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Save for Later", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"cart-item-actions-links\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isAdvanced") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <a class=\"cart-item-actions-item-list-actionable-edit-content-remove\" data-action=\"remove-item\" data-internalid=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lineId","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Remove", {"name":"translate","hash":{},"data":data})))
    + " </a></div>  ";
},"useData":true}); template.Name = 'cart_item_actions'; return template;});