define('store_locator_search.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "store-locator-search-button-after-find";
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"store-locator-search-buttons-container-or-wrap\"><div class=\"store-locator-search-buttons-container-or\" data-type=\"geolocation-or\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "or", {"name":"translate","hash":{},"data":data})))
    + "</span></div></div><div class=\"store-locator-search-buttons-container-geolocalization\" data-type=\"geolocation-button\"><button type=\"button\" class=\"store-locator-search-button-current\" data-action=\"use-geolocation\"><i class=\"store-locator-search-button-current-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Use Current Location", {"name":"translate","hash":{},"data":data})))
    + " </button></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <form class=\"store-locator-search\"><div class=\"store-locator-search-search-view\"><div class=\"store-locator-search-enter-location\"><div class=\"store-locator-search-group\" data-input=\"city\" data-validation=\"control-group\"><label class=\"store-locator-search-group-label\" for=\"city\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Enter Address, Zip Code or City", {"name":"translate","hash":{},"data":data})))
    + " </label><div class=\"store-locator-search-group-form-controls\" data-validation=\"control\"><input id=\"autocomplete\" name=\"city\" data-type=\"autocomplete-input\" class=\"store-locator-search-input-autocomplete\"/></div><div class=\"store-locator-search-buttons-container\"><div class=\"store-locator-search-buttons-container-find\"><button class=\"store-locator-search-button-find ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showResults") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" type=\"submit\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Find Stores", {"name":"translate","hash":{},"data":data})))
    + "</button></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showUseCurrentLocationButton") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></div><div class=\"store-locator-search-geolocation\" data-type=\"location-geolocation\"><div class=\"store-locator-search-geolocation-message-warning\" data-action=\"message-warning\"></div></div></div></div></form>  ";
},"useData":true}); template.Name = 'store_locator_search'; return template;});