wp_env = null;
is_page = null;
var domainEnv = 'dev';
var paramAdSource = getUrlParameter('utm_source') || undefined;
var paramAdMedium = getUrlParameter('utm_medium') || undefined;
var paramAdGclid = getUrlParameter('gclid') || undefined;
var pricePlanLabel = '';
var pricePlanHref = '';

window.popinPricing = {
  onFirstButtonClicked: function (isOneTime) {
    if (isOneTime) {
      // href
      pricePlanHref = 'https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard&adSource='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'free',
        'pricePlanHref': pricePlanHref
      });
    } else {
      // href
      pricePlanHref = 'https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard&adSource='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'free',
        'pricePlanHref': pricePlanHref
      });
    }
  },

  onSecondButtonClicked: function (isOneTime) {
    if (isOneTime) {
      pricePlanHref = 'https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_signature&c=live&t=dashboard&sadsurce='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'one_time_signature',
        'pricePlanHref': pricePlanHref
      });
    } else {
      pricePlanHref = 'https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_dept&c=live&t=dashboard&adSource='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'annual_dept',
        'pricePlanHref': pricePlanHref
      });
    }
  },

  onThirdButtonClicked: function (isOneTime) {
    if (isOneTime) {
      pricePlanHref = 'https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_premium&c=live&t=dashboard&adSource='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'one_time_premium',
        'pricePlanHref': pricePlanHref
      });
    } else {
      pricePlanHref = 'https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_corp&c=live&t=dashboard&adSource='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'annual_corp',
        'pricePlanHref': pricePlanHref
      });
    }
  },

  onFourthButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('N/A');
    } else {
      pricePlanHref = 'https://'+domainEnv+'.popin.live/contact/?payment=annual_ela&c=live&t=dashboard&adSource='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid;
      // change window location
      window.open(pricePlanHref, '_self');
      // push href to gtm
      dataLayer.push({
        'event': 'pricePlanClicked',
        'pricePlanLabel': 'annual_ela',
        'pricePlanHref': pricePlanHref
      });
    }
  }

}

function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

	for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
	}
}
// Example: https://www.popinlive.com/pricing?foosgonewild=hella
// Usage: getUrlParameter('foosgonewild');
// Results: 'hella'