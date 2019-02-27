
var paramAdSource = getUrlParameter('utm_source') || 'none';
var paramAdMedium = getUrlParameter('utm_medium') || 'none';
var paramAdCampaign = getUrlParameter('utm_campaign') || 'none';
var paramAdTerm = getUrlParameter('utm_term') || 'none';
var paramAdContent = getUrlParameter('utm_content') || 'none';
var paramAdGclid = getUrlParameter('gclid') || 'none';

var pp = {
  env: 'app',
  payment: {
    oneTime: ['trial', 'one_time_signature', 'one_time_premium'],
    annual: ['trial', 'annual_dept', 'annual_corp', 'annual_ela']
  },
  campaign: 'live',
  target: 'dashboard',
  adSource: paramAdSource,
  adMedium: paramAdMedium,
  adCampaign: paramAdCampaign,
  adTerm: paramAdTerm,
  adContent: paramAdContent,
  gclid: paramAdGclid
}

window.popinPricing = {
  onFirstButtonClicked: function (isOneTime) {
    if (isOneTime) {
      pricePlanHandler(pp.payment.oneTime[0], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, false);
    } else {
      pricePlanHandler(pp.payment.annual[0], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, false);
    }
  },

  onSecondButtonClicked: function (isOneTime) {
    if (isOneTime) {
      pricePlanHandler(pp.payment.oneTime[1], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, false);
    } else {
      pricePlanHandler(pp.payment.annual[1], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, false);
    }
  },

  onThirdButtonClicked: function (isOneTime) {
    if (isOneTime) {
      pricePlanHandler(pp.payment.oneTime[2], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, false);
    } else {
      pricePlanHandler(pp.payment.annual[2], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, false);
    }
  },

  onFourthButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('N/A');
    } else {
      pricePlanHandler(pp.payment.annual[3], pp.campaign, pp.target, pp.adSource, pp.adMedium, pp.gclid, true);
    }
  }
}

var allParams = '&c='+pp.campaign+'&t='+pp.target+'&medium='+pp.adMedium+'&adSource='+pp.adSource+'&utm_campaign='+pp.adCampaign+'&utm_term='+pp.adTerm+'&utm_content='+pp.adContent+'&gclid='+pp.gclid;

$(document).ready(function(){
  function addHrefParams(params, target) {
    $('a[href]').filter(function(){
      var currentLink =  $(this).attr('href');
      console.log('newLink', $(this).attr('href',currentLink+params));
      return $(this).attr('href',currentLink+params);
    });
  }
  addHrefParams(allParams,'_blank');
});

function pricePlanHandler(payment, campaign, target, adSource, adMedium, adCampaign, adTerm, adContent, gclid, isEla) {
  if(isEla) {
    window.open('https://www.popin.live/contact?payment='+payment+'&c='+campaign+'&t='+target+'&medium='+adMedium+'&adSource='+adSource+'&utm_campaign='+adCampaign+'&utm_term='+adTerm+'&utm_content='+adContent+'&gclid='+gclid,'_blank');
  } else {
    // Open Href
    window.open('https://'+pp.env+'.popinnow.com/#/account/create?payment='+payment+'&c='+campaign+'&t='+target+'&medium='+adMedium+'&adSource='+adSource+'&utm_campaign='+adCampaign+'&utm_term='+adTerm+'&utm_content='+adContent+'&gclid='+gclid,'_blank');
  }
  // Push Data Layer to GTM
  dataLayer.push({
    'event': 'pricePlanClicked',
    'payment': payment,
    'campaign': campaign,
    'target': target,
    'adSource': adSource,
    'adMedium': adMedium,
    'adCampaign': adCampaign,
    'adTerm': adTerm,
    'adContent': adContent,
    'gclid': gclid
  });
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
