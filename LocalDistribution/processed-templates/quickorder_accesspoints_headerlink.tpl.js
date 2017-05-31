define('quickorder_accesspoints_headerlink.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"className","hash":{},"data":data}) : helper)))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  return "quickorder-accesspoints-headerlink-link";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <a class=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasClass") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" href=\"#\" data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cartTouchPoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"#cart?openQuickOrder=true\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quick Order", {"name":"translate","hash":{},"data":data})))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quick Order", {"name":"translate","hash":{},"data":data})))
    + " </a>  ";
},"useData":true}); template.Name = 'quickorder_accesspoints_headerlink'; return template;});