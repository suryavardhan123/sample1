define('order_wizard_msr_removed_promocodes.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"code") || (depth0 != null ? compilerNameLookup(depth0,"code") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"code","hash":{},"data":data}) : helper)))
    + "&nbsp; ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-wizard-msr-removed-promocodes\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Sorry, we don't currently support the following promotions and will be removed when shipping to multiple addresses:", {"name":"translate","hash":{},"data":data})))
    + " <br /><span class=\"order-wizard-msr-removed-promocodes-list\"> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"invalidPromocodes") : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span><br /><br /><span class=\"order-wizard-msr-removed-promocodes-question\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "How would you like to proceed?", {"name":"translate","hash":{},"data":data})))
    + "</span></div>  ";
},"useData":true}); template.Name = 'order_wizard_msr_removed_promocodes'; return template;});