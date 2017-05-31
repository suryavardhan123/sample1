define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <li class=\"header-subheader-settings\"><a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Settings", {"name":"translate","hash":{},"data":data})))
    + "\"><i class=\"header-menu-settings-icon\"></i><i class=\"header-menu-settings-carret\"></i></a><div class=\"header-menu-settings-dropdown\"><h5 class=\"header-menu-settings-dropdown-title\">"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Site Settings", {"name":"translate","hash":{},"data":data})))
    + "</h5> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </div></li> ";
},"2":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Global.HostSelector\"></div> ";
  },"4":function(depth0,helpers,partials,data) {
  return " <div data-view=\"Global.CurrencySelector\"></div> ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"header-message\" data-view=\"Message.Placeholder\"></div><div class=\"header-main-wrapper\"><div class=\"header-subheader\"><div class=\"header-subheader-container\"><ul class=\"header-subheader-options\"> ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <li data-view=\"StoreLocatorHeaderLink\"></li><li data-view=\"RequestQuoteWizardHeaderLink\"></li><li data-view=\"QuickOrderHeaderLink\"></li></ul></div></div><nav class=\"header-main-nav\"><div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\" data-cms-area-filters=\"global\"></div><div class=\"header-sidebar-toggle-wrapper\"><button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\"><i class=\"header-sidebar-toggle-icon\"></i></button></div><div class=\"header-content\"><div class=\"header-logo-wrapper\"><div data-view=\"Header.Logo\"></div></div><div class=\"header-right-menu\"><div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div><div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div><div class=\"header-menu-searchmobile\"><button class=\"header-menu-searchmobile-link\" data-action=\"show-sitesearch\" title=\""
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Search", {"name":"translate","hash":{},"data":data})))
    + "\"><i class=\"header-menu-searchmobile-icon\"></i></button></div><div class=\"header-menu-cart\"><div class=\"header-menu-cart-dropdown\" ><div data-view=\"Header.MiniCart\"></div></div></div></div></div><div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\" data-cms-area-filters=\"global\"></div></nav></div><div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div><div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div><div class=\"header-site-search\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>  ";
},"useData":true}); template.Name = 'header'; return template;});