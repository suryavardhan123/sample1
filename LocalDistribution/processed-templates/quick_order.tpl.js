define('quick_order.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "collapsed";
  },"3":function(depth0,helpers,partials,data) {
  return "in";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"quick-order\"><div class=\"quick-order-divider\"><div class=\"quick-order-expander-head\"><a class=\"quick-order-expander-head-toggle ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-toggle=\"collapse\" data-target=\"#quick-order\" aria-expanded=\"true\" aria-controls=\"quick-order\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quick Add", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"quick-order-expander-toggle-icon\"></i></a></div><div class=\"quick-order-expander-body collapse ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" id=\"quick-order\" data-target=\"#quick-order\"><div class=\"quick-order-expander-container\"><div data-view=\"QuickAddView\"></div></div></div></div></div>  ";
},"useData":true}); template.Name = 'quick_order'; return template;});