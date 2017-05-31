/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

define(
	'HandlebarsExtras'
,	[
		'SC.Configuration'
	,	'Utils'

	,	'Handlebars'
	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	]
,	function (
		Configuration
	,	Utils

	,	Handlebars
	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	Handlebars.registerHelper('translate', function ()
	{
		//NOTE: translate returns a safe string
		return new Handlebars.SafeString(_.translate.apply(_, arguments));
	});
	
	Handlebars.registerHelper('formatCurrency', function(amount, symbol)
	{
		//Handlebars sets an object as the last arguement. If formatCurrency was called with one argument, second argument won't be the expected string symbol
		if(typeof symbol === 'string')
		{
			return Utils.formatCurrency(amount, symbol);
		}
		else
		{
			return Utils.formatCurrency(amount);
		}
	});

	Handlebars.registerHelper('highlightKeyword', function (text, keyword)
	{
		//NOTE: highlightKeyword returns a safe string
		return new Handlebars.SafeString(Utils.highlightKeyword(text, keyword));
	});

	Handlebars.registerHelper('objectToAtrributes', function()
	{
		//Note: object to attributes
		return new Handlebars.SafeString(Utils.objectToAtrributes(this, ''));
	});

	//define our own each helper with support for backbone collections
	Handlebars.registerHelper('each', function (context, options)
	{
		var ret = ''
		,	iterable = context instanceof Backbone.Collection ? context.models : context
		,	length = iterable && iterable.length || 0;

		for (var i = 0, j = length; i < j; i++)
		{
			ret = ret + options.fn(iterable[i], {
				data: {
					first: i ===0
				,	last: i === iterable.length - 1
				,	index: i
				,	indexPlusOne: i + 1
				}
			});
		}
		return ret;
	});

	Handlebars.registerHelper('resizeImage', function (url, size)
	{
		url = url ||  _.getAbsoluteUrlOfNonManagedResources(Configuration.get('imageNotAvailable'));
		var mapped_size = Configuration['imageSizeMapping.'+ size] || size;
		return Utils.resizeImage(SC.ENVIRONMENT.siteSettings.imagesizes || [], url, mapped_size);
	});

	Handlebars.registerHelper('trimHtml', function (htmlString, length)
	{
		var htmlStringSelector;

		try
		{
			htmlStringSelector = jQuery(htmlString);
		}
		catch (e) {}

		var trimmedString = (htmlStringSelector && htmlStringSelector.length > 0) ? jQuery.trim(htmlStringSelector.text()) : jQuery.trim(htmlString)
		,	moreContent = '';

		if (trimmedString.length > length)
		{
			moreContent = '...';
		}

		return trimmedString.substring(0, length) + moreContent;
	});

	//Helper 'breaklines' places <br/> tags instead of the newlines provided by backend
	//Used in messages in Quotes, Return, Case, Review.
	Handlebars.registerHelper('breaklines', function (text)
	{
		text = Handlebars.Utils.escapeExpression(text || '');
		text = text.replace(/(\r\n|\n|\r|\u0005)/gm, '<br/>');
		return new Handlebars.SafeString(text);
	});

	//Helper 'ifEqual' works like if (v1 == v2) {} else {}
	Handlebars.registerHelper('ifEquals', function(v1, v2, options) 
	{
		/*jslint eqeq: true*/		
		if(v1 == v2) 
		{
			return options.fn(this);
		}
		return options.inverse(this);
	});
});
