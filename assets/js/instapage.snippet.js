var domainEnv = 'dev';
var paramAdSource = getUrlParameter('utm_source');
var paramAdMedium = getUrlParameter('utm_medium');
var paramAdGclid = getUrlParameter('gclid');

window.popinPricing = {
  onFirstButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
    }
  },

  onSecondButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_signature&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_signature&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_dept&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_dept&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
    }
  },

  onThirdButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_premium&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_premium&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_corp&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_corp&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
    }
  },

  onFourthButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('N/A');
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_ela&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_ela&c=live&t=dashboard&source='+paramAdSource+'&medium='+paramAdMedium+'&gclid='+paramAdGclid);
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