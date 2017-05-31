define('product_views_option_checkbox.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <label class=\"product-views-option-checkbox-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " </label> ";
},"3":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-container\" class=\"product-views-option-checkbox\" data-type=\"option\" data-cart-option-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\" data-item-option-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemOptionId","hash":{},"data":data}) : helper)))
    + "\"><div class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-controls-group\" data-validation=\"control-group\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-validation=\"control\"><input\n				name=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\"\n				type=\"checkbox\"\n				id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\"\n				class=\"product-views-option-checkbox-input\"\n				value=\"T\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ></div></div></div>  ";
},"useData":true}); template.Name = 'product_views_option_checkbox'; return template;});