define('order_wizard_cartitems_pickup_in_store_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <section class=\"order-wizard-cartitems-pickup-in-store-details-container\"><div class=\"order-wizard-cartitems-pickup-in-store-details-body\"><h4 class=\"order-wizard-cartitems-pickup-in-store-details-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Pick Up at $(0)", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"location") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </h4><div class=\"order-wizard-cartitems-pickup-in-store-details-address\"><div class=\"order-wizard-cartitems-pickup-in-store-details-address-container\" data-view=\"PickupInStore.StoreLocationInfo\"></div></div><div class=\"order-wizard-cartitems-pickup-in-store-details-item-list\"><div data-view=\"Items.Collection\"></div></div></div></section> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLocation") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'order_wizard_cartitems_pickup_in_store_details'; return template;});