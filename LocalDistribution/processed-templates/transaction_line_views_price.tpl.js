define('transaction_line_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"transaction-line-views-price\"><span class=\"transaction-line-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\"><meta itemprop=\"priceCurrency\" content=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currencyCode","hash":{},"data":data}) : helper)))
    + "\"/><span class=\"transaction-line-views-price-lead\" itemprop=\"price\" data-rate=\""
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"rateFormatted") || (depth0 != null ? compilerNameLookup(depth0,"rateFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rateFormatted","hash":{},"data":data}) : helper)))
    + " </span> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <link itemprop=\"availability\" href=\"";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"/></span></div> ";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <small class=\"transaction-line-views-price-old\"> "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comparePriceFormatted","hash":{},"data":data}) : helper)))
    + " </small> ";
},"4":function(depth0,helpers,partials,data) {
  return "https://schema.org/InStock";
  },"6":function(depth0,helpers,partials,data) {
  return "https://schema.org/OutOfStock";
  },"8":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"transaction-line-views-price-login-to-see-prices\"><p class=\"transaction-line-views-price-message\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<a href=\"$(0)\">Log in</a> to see price", (depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  ";
},"useData":true}); template.Name = 'transaction_line_views_price'; return template;});