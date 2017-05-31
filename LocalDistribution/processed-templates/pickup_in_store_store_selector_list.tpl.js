define('pickup_in_store_store_selector_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Store", {"name":"translate","hash":{},"data":data})))
    + " ";
},"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Stores", {"name":"translate","hash":{},"data":data})))
    + " ";
},"5":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalMessageStoresUnavailable\"></div> ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"unless").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"stockPickup") : depth0), {"name":"unless","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"8":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalMessageStoresStockUnavailable\"></div> ";
  },"10":function(depth0,helpers,partials,data) {
  return " overflow: visible;";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"pickup-in-store-store-selector-list-divider\"></div><div class=\"pickup-in-store-store-selector-list-result\"><div class=\"pickup-in-store-store-selector-list-result-item-selected-detail-mobile\" data-view=\"Line.Item.Information\"></div><h4 class=\"pickup-in-store-store-selector-list-result-title\"><span>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storesLength") || (depth0 != null ? compilerNameLookup(depth0,"storesLength") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"storesLength","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOneStore") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "near", {"name":"translate","hash":{},"data":data})))
    + " "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"myPosition") || (depth0 != null ? compilerNameLookup(depth0,"myPosition") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myPosition","hash":{},"data":data}) : helper)))
    + " </h4> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isEmptyStores") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <a href=\"#\" class=\"pickup-in-store-store-selector-list-refine-search\" data-action=\"refine-search\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Refine Search", {"name":"translate","hash":{},"data":data})))
    + "</a><div class=\"pickup-in-store-store-selector-list-result-rows\" data-type=\"store-row\" style=\"max-height: "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxHeight") || (depth0 != null ? compilerNameLookup(depth0,"maxHeight") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxHeight","hash":{},"data":data}) : helper)))
    + "px; ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isOneStore") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"><div data-view=\"StoresList.Rows\"></div></div><div class=\"pickup-in-store-store-selector-list-result-item-selected-detail-desktop\" data-view=\"Line.Item.Information\"></div></div>  ";
},"useData":true}); template.Name = 'pickup_in_store_store_selector_list'; return template;});