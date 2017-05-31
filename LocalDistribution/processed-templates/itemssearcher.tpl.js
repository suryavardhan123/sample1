define('itemssearcher.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " id=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " name=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <input data-type=\"search-input\" class=\"itemssearcher-input typeahead\"\n	placeholder=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"placeholderLabel") || (depth0 != null ? compilerNameLookup(depth0,"placeholderLabel") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholderLabel","hash":{},"data":data}) : helper)))
    + "\"\n	type=\"search\" autocomplete=\"off\" ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showId") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showName") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " maxlength=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxLength","hash":{},"data":data}) : helper)))
    + "\"/>  ";
},"useData":true}); template.Name = 'itemssearcher'; return template;});