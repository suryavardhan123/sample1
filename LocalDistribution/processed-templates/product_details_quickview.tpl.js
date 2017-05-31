define('product_details_quickview.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <form id=\"product-details-quickview-form\" data-action=\"submit-form\" method=\"POST\"><section class=\"product-details-quickview-info\"><div id=\"banner-summary-bottom\" class=\"product-details-quickview-banner-summary-bottom\"></div></section><section data-view=\"Product.Options\"></section><div data-view=\"Product.Stock.Info\"></div><div data-view=\"Product.Sku\"></div><div data-view=\"Product.Price\"></div><div data-view=\"Quantity.Pricing\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div data-view=\"StockDescription\"></div><div class=\"product-details-quickview-main-bottom-banner\"><div id=\"banner-summary-bottom\" class=\"product-details-quickview-banner-summary-bottom\"></div></div></form> ";
},"2":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Quantity\"></div><section class=\"product-details-quickview-actions\"><div class=\"product-details-quickview-actions-container\"><div data-view=\"MainActionView\"></div></div><div class=\"product-details-quickview-actions-container\"><div data-view=\"AddToProductList\" class=\"product-details-quickview-actions-container-add-to-wishlist\"></div><div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-quickview-actions-container-add-to-quote\"></div></div></section> ";
  },"4":function(depth0,helpers,partials,data) {
  return " <div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"product-details-quickview\"><div class=\"product-details-quickview-img\"><div data-view=\"Product.ImageGallery\"></div></div><div class=\"product-details-quickview-details\"><h1 class=\"product-details-quickview-item-name\" itemprop=\"name\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1><a class=\"product-details-quickview-full-details\" data-action=\"go-to-fullview\" data-touchpoint=\"home\" data-name=\"view-full-details\" data-hashtag=\"#"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "View full details", {"name":"translate","hash":{},"data":data})))
    + " </a><div class=\"product-details-quickview-main\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <div id=\"banner-details-bottom\" class=\"product-details-quickview-banner-details-bottom\" data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div></div></div></div>  ";
},"useData":true}); template.Name = 'product_details_quickview'; return template;});