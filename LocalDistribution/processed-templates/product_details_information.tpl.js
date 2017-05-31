define('product_details_information.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"details") : depth0), {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"product-details-information-content-container\"><div id=\"banner-content-top\" class=\"content-banner banner-content-top\"></div><div role=\"tabpanel\">  <ul class=\"product-details-information-content-tabs\" role=\"tablist\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"details") : depth0), {"name":"each","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </ul>  <div class=\"product-details-information-tab-content\" data-type=\"information-content\" data-action=\"tab-content\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"details") : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div class=\"product-details-information-tab-action\" data-type=\"information-content-text-actions\"><a href=\"#\" class=\"product-details-information-tab-action-more\" data-action=\"show-more\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See More", {"name":"translate","hash":{},"data":data})))
    + "</a><a href=\"#\" class=\"product-details-information-tab-action-less\" data-action=\"show-more\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See Less", {"name":"translate","hash":{},"data":data})))
    + "</a></div></div></div><div id=\"banner-content-bottom\" class=\"content-banner banner-content-bottom\"></div></div> ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "  <button class=\"product-details-information-pusher\" data-target=\"product-details-information-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\" data-type=\"sc-pusher\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " <i></i><p class=\"product-details-information-hint\"> ";
  stack1 = ((compilerNameLookup(helpers,"trimHtml") || (depth0 && compilerNameLookup(depth0,"trimHtml")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"content") : depth0), 150, {"name":"trimHtml","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </p></button> ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " <li class=\"product-details-information-tab-title ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (data && compilerNameLookup(data,"first")), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" role=\"presentation\"><a href=\"#\" data-action=\"selected-tab\" data-id=\""
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\" data-target=\"#product-details-information-tab-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\" data-toggle=\"tab\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li> ";
},"5":function(depth0,helpers,partials,data) {
  return " active ";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div role=\"tabpanel\" class=\"product-details-information-tab-content-panel ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (data && compilerNameLookup(data,"first")), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"product-details-information-tab-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\" itemprop=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemprop") || (depth0 != null ? compilerNameLookup(depth0,"itemprop") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemprop","hash":{},"data":data}) : helper)))
    + "\" data-action=\"pushable\" data-id=\"product-details-information-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depths[1] != null ? compilerNameLookup(depths[1],"showHeader") : depths[1]), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div id=\"product-details-information-tab-content-container-"
    + escapeExpression(lambda((data && compilerNameLookup(data,"index")), depth0))
    + "\" class=\"product-details-information-tab-content-container\" data-type=\"information-content-text\">";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"content") || (depth0 != null ? compilerNameLookup(depth0,"content") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div></div> ";
},"8":function(depth0,helpers,partials,data) {
  return "active";
  },"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h2 class=\"product-details-information-tab-content-panel-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = " <div class=\"product-details-information-content\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showInformation") : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>  ";
},"useData":true,"useDepths":true}); template.Name = 'product_details_information'; return template;});