define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return " <div class=\"facets-browse-category-heading-main-image\"><img src=\""
    + escapeExpression(((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || helperMissing).call(depth0, (depth0 != null ? compilerNameLookup(depth0,"banner") : depth0), "categorybanner", {"name":"resizeImage","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" /></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <section class=\"facets-browse-category-heading-list-header\"><div class=\"facets-browse-category-heading-main-description\"><h1>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1><p>";
  stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</p></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </section>  ";
},"useData":true}); template.Name = 'facets_browse_category_heading'; return template;});