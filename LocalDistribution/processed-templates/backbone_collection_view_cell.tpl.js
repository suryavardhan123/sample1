define('backbone_collection_view_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"backbone-collection-view-cell-span"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"spanSize") || (depth0 != null ? compilerNameLookup(depth0,"spanSize") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"spanSize","hash":{},"data":data}) : helper)))
    + "\"><div data-type=\"backbone.collection.view.cell\" ></div></div>  ";
},"useData":true}); template.Name = 'backbone_collection_view_cell'; return template;});