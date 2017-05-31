define('product_views_option_text.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"product-views-option-text-label\" for=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </label> ";
},"2":function(depth0,helpers,partials,data) {
  return "<span class=\"product-views-option-text-label-required\">*</span>";
  },"4":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " <textarea\n					name=\""
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\"\n					id=\""
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\"\n					class=\"product-views-option-text-area\"\n					data-toggle=\"text-option\"\n					data-available=\"true\"\n					data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemOptionId","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedValue") : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</textarea> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"internalId") : stack1), depth0));
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " <input\n					name=\""
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\"\n					type=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmail") : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.program(10, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"\n					id=\""
    + escapeExpression(lambda((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\"\n					class=\"product-views-option-text-input\"\n					value=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedValue") : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"\n					data-toggle=\"text-option\"\n					data-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemOptionId","hash":{},"data":data}) : helper)))
    + "\"\n					data-available=\"true\"> ";
},"8":function(depth0,helpers,partials,data) {
  return "email";
  },"10":function(depth0,helpers,partials,data) {
  return "text";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-container\" class=\"product-views-option-text\" data-type=\"option\" data-cart-option-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\" data-item-option-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemOptionId","hash":{},"data":data}) : helper)))
    + "\"><div class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-controls-group\" data-validation=\"control-group\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div data-validation=\"control\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isTextArea") : depth0), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.program(7, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div>  ";
},"useData":true,"useDepths":true}); template.Name = 'product_views_option_text'; return template;});