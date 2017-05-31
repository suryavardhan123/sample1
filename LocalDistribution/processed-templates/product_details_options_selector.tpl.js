define('product_details_options_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Pusher\" data-type=\"sc-pusher\" data-target=\"product-details-options\"></div> ";
  },"3":function(depth0,helpers,partials,data) {
  return " class=\"product-details-options-selector-content\" data-action=\"pushable\" data-id=\"product-details-options\" ";
  },"5":function(depth0,helpers,partials,data) {
  return " <div class=\"product-details-options-selector-content-price\" data-view=\"Item.Price\"></div><div class=\"product-details-options-selector-content-stock\" data-view=\"Item.Stock\"></div><div data-view=\"StockDescription\"></div> ";
  },"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"product-details-options-selector-reference-container\"><small>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Required", {"name":"translate","hash":{},"data":data})))
    + " <span class=\"product-details-options-selector-reference\">*</span></small></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"product-details-options-selector\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div data-view=\"Options.Collection\" class=\"product-details-options-selector-option-container\"></div></div></div>  ";
},"useData":true}); template.Name = 'product_details_options_selector'; return template;});