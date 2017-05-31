define('order_history_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-details-message-warning\" data-action=\"go-to-returns\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "You have returns associated with this order. <a href=\"#\">View Details</a>", {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-details-message-warning\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "The checkout process of this purchase was not completed. To place order, please <a data-navigation=\"ignore-click\" href=\"$(0)\" >finalize your payment.</a>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"paymentevent") : stack1)) != null ? compilerNameLookup(stack1,"redirecturl") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </div> ";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"order-history-details-header-purchase-order-number-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-history-details-header-purchase-order-info-purchase-order-number-label\">Purchase Order Number: </span><span class=\"order-history-details-header-purchase-order-number\">$(0)</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasenumber") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"7":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <p class=\"order-history-details-header-quote-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-history-details-header-quote-info-quote-label\">Created from: </span><a href=\"$(0)\" class=\"order-history-details-header-date\">$(1)</a>", (depth0 != null ? compilerNameLookup(depth0,"quoteURL") : depth0), (depth0 != null ? compilerNameLookup(depth0,"quoteName") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </p> ";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = " <div class=\"order-history-details-accordion-divider\"><div class=\"order-history-details-accordion-head\"><a class=\"order-history-details-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#products-not-shipp\" aria-expanded=\"true\" aria-controls=\"products-not-shipp\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"nonShippableItemsLengthGreaterThan1") : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <i class=\"order-history-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"order-history-details-accordion-body collapse\" id=\"products-not-shipp\" role=\"tabpanel\" data-target=\"#products-not-shipp\"><div class=\"order-history-details-accordion-container\" data-content=\"order-items-body\"><table class=\"order-history-details-non-shippable-table\"><tbody data-view=\"NonShippableLines\"></tbody></table></div></div></div> ";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Products that don't require shipping ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"nonShippableLines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product that doesn't require shipping ($(0))", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"nonShippableLines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), {"name":"translate","hash":{},"data":data})))
    + " ";
},"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"order-history-details-payment-info-cards\"><div class=\"order-history-details-info-card\"><h5 class=\"order-history-details-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Method", {"name":"translate","hash":{},"data":data})))
    + " </h5><div class=\"order-history-details-info-card-info\"><div data-view='FormatPaymentMethod'></div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBillAddress") : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div> ";
},"15":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-details-info-card\"><h5 class=\"order-history-details-info-card-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Bill to", {"name":"translate","hash":{},"data":data})))
    + " </h5><div class=\"order-history-details-info-card-info-billing\"><div data-view=\"Billing.Address.View\"></div></div></div> ";
},"17":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"order-history-details-accordion-divider\"><div class=\"order-history-details-accordion-head collapsed\"><a class=\"order-history-details-accordion-head-toggle-secondary\" data-toggle=\"collapse\" data-target=\"#returns-authorizations\" aria-expanded=\"true\" aria-controls=\"returns-authorizations\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span>Returns ($(0))</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"returnAuthorizations") : depth0)) != null ? compilerNameLookup(stack1,"totalLines") : stack1), {"name":"translate","hash":{},"data":data})))
    + " <i class=\"order-history-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"order-history-details-accordion-body collapse\" id=\"returns-authorizations\" role=\"tabpanel\" data-target=\"#returns-authorizations\"><div class=\"order-history-details-accordion-container\" data-content=\"order-items-body\"><div data-view=\"ReturnAutorization\"></div></div></div></div> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", lambda=this.lambda, buffer = " <a href=\"/purchases\" class=\"order-history-details-back-btn\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "&lt; Back to Purchases", {"name":"translate","hash":{},"data":data})))
    + "</a><section><header><h2 class=\"order-history-details-order-title\" data-origin='"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"originName") || (depth0 != null ? compilerNameLookup(depth0,"originName") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"originName","hash":{},"data":data}) : helper)))
    + "'><span class=\"order-history-details-order-title\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " </span><b><span class=\"order-history-details-order-number\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), depth0))
    + "</span></b><span class=\"order-history-details-total-formatted\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span></h2></header><div data-type=\"alert-placeholder\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showReturnAuthorizations") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaymentEventFail") : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"order-history-details-header-information\"><div class=\"order-history-details-header-row\"><div class=\"order-history-details-header-col-left\"><p class=\"order-history-details-header-date-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-history-details-header-date-info-date-label\">Date: </span><span class=\"order-history-details-header-date\">$(0)</span>", ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPurchaseOrderNumber") : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showQuoteDetail") : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </div><div class=\"order-history-details-header-col-right\"><p class=\"order-history-details-header-status-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<strong>Status: </strong><span class=\"order-history-details-header-status\">$(0)</span>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p></div><div class=\"order-history-details-header-amount\"><p class=\"order-history-details-header-amount-info\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "<span class=\"order-history-details-header-amount-info-amount-label\">Amount: </span><span class=\"order-history-details-header-amount-number\">$(0)</span>", ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), {"name":"translate","hash":{},"data":data})))
    + " </p></div></div></div><div class=\"order-history-details-row\"><div class=\"order-history-details-content-col\"><div data-view=\"OrderPackages\"></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showNonShippableLines") : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"order-history-details-accordion-divider\"><div class=\"order-history-details-accordion-head\"><a class=\"order-history-details-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#order-payment-info\" aria-expanded=\"true\" aria-controls=\"order-payment-info\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Payment Information", {"name":"translate","hash":{},"data":data})))
    + " <i class=\"order-history-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"order-history-details-accordion-body collapse\" id=\"order-payment-info\" role=\"tabpanel\" data-target=\"#order-payment-info\"><div class=\"order-history-details-accordion-container\" data-content=\"order-items-body\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <div class=\"order-history-details-payment\" data-view=\"Payments\"></div><div class=\"order-history-details-payment-others\" data-view=\"OtherPayments\"></div></div></div></div> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showReturnAuthorizations") : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div><div class=\"order-history-details-summary\" data-view=\"Summary\"></div></div></section>  ";
},"useData":true}); template.Name = 'order_history_details'; return template;});