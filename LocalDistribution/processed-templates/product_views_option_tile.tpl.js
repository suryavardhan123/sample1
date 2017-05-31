define('product_views_option_tile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <label class=\"product-views-option-tile-label\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showSelectedValue") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </label> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return " : <span data-value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "</span> ";
},"4":function(depth0,helpers,partials,data) {
  return "<span class=\"product-views-option-tile-label-required\">*</span>";
  },"6":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " <label\n					data-label=\"label-"
    + escapeExpression(lambda((depths[2] != null ? compilerNameLookup(depths[2],"cartOptionId") : depths[2]), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalId","hash":{},"data":data}) : helper)))
    + "\"\n					class=\"product-views-option-tile-picker ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depths[2] != null ? compilerNameLookup(depths[2],"showSmall") : depths[2]), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><input\n							class=\"product-views-option-tile-input-picker\"\n							type=\"radio\"\n							name=\""
    + escapeExpression(lambda((depths[2] != null ? compilerNameLookup(depths[2],"cartOptionId") : depths[2]), depth0))
    + "\"\n							data-action=\"changeOption\"\n							value=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"internalId","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0), {"name":"if","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " data-toggle=\"set-option\"\n							data-active=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"isActive") || (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"isActive","hash":{},"data":data}) : helper)))
    + "\"\n							data-available=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"isAvailable") || (depth0 != null ? compilerNameLookup(depth0,"isAvailable") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"isAvailable","hash":{},"data":data}) : helper)))
    + "\" /> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " </label> ";
},"8":function(depth0,helpers,partials,data) {
  return "active";
  },"10":function(depth0,helpers,partials,data) {
  return "product-views-option-tile-picker-small";
  },"12":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-container\" class=\"product-views-option-tile\" data-type=\"option\" data-cart-option-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "\" data-item-option-id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemOptionId","hash":{},"data":data}) : helper)))
    + "\"><div class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-controls-group\" data-validation=\"control-group\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartOptionId","hash":{},"data":data}) : helper)))
    + "-controls product-views-option-tile-container\" data-validation=\"control\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"values") : depth0), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div></div>  ";
},"useData":true,"useDepths":true}); template.Name = 'product_views_option_tile'; return template;});