define('cookie_warning_banner_view.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div class=\"cookie-warning-banner-view alert\" role=\"alert\"><div> ";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"cookieMessage") || (depth0 != null ? compilerNameLookup(depth0,"cookieMessage") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cookieMessage","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"closable") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"https://system.netsuite.com"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkHref") || (depth0 != null ? compilerNameLookup(depth0,"linkHref") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkHref","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"show-in-modal\" data-page-header=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkContent") || (depth0 != null ? compilerNameLookup(depth0,"linkContent") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkContent","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"linkContent") || (depth0 != null ? compilerNameLookup(depth0,"linkContent") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkContent","hash":{},"data":data}) : helper)))
    + "</a> ";
},"4":function(depth0,helpers,partials,data) {
  return " <button class=\"cookie-warning-banner-view-close-button\" data-action=\"close-message\" type=\"button\" data-dismiss=\"alert\">&times;</button> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBanner") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'cookie_warning_banner_view'; return template;});