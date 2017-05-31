define('store_locator_results.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " <div class=\"store-locator-results-map\" data-id=\"map-view\" data-type=\"map-view\" data-view=\"ResultStoreLocatorMap\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = " <div class=\"store-locator-results\"><div class=\"store-locator-results-nav-back\" data-action=\"refine-search\" data-type=\"sc-pusher-header\"><a data-action=\"sc-pusher-dismiss\" class=\"store-locator-results-nav-back-link\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Refine Search", {"name":"translate","hash":{},"data":data})))
    + "</a></div><div class=\"store-locator-results-nav-button-container\"><div class=\"store-locator-results-nav-button-container-grid\"><button class=\"store-locator-results-nav-button-list active\" data-action=\"show-list\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "List View", {"name":"translate","hash":{},"data":data})))
    + " </button></div><div class=\"store-locator-results-nav-button-container-grid\"><button class=\"store-locator-results-nav-button-map\" data-action=\"show-map\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Map View", {"name":"translate","hash":{},"data":data})))
    + " </button></div></div><div class=\"store-locator-results-nav-description\"><span class=\"store-locator-results-nav-description-highlight\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"totalStores") || (depth0 != null ? compilerNameLookup(depth0,"totalStores") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalStores","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "stores", {"name":"translate","hash":{},"data":data})))
    + "</span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "near", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"store-locator-results-nav-description-geolocation\">\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"myposition") || (depth0 != null ? compilerNameLookup(depth0,"myposition") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myposition","hash":{},"data":data}) : helper)))
    + "\"</span></div><div data-id=\"list-view\" data-type=\"list-view\"><div class=\"store-locator-results-list active\" ><ul class=\"store-locator-results-list-container\" data-view=\"LocatorList\"></ul></div><div class=\"store-locator-results-see-all-stores\"><a data-touchpoint=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"touchpoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"stores/all\" href=\"stores/all\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "See complete list of stores", {"name":"translate","hash":{},"data":data})))
    + "</a></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showMap") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div>  ";
},"useData":true}); template.Name = 'store_locator_results'; return template;});