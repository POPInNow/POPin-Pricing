var domainEnv = 'dev';

window.popinPricing = {
  onFirstButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard');
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free&c=live&t=dashboard');
    }
  },

  onSecondButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_signature&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_signature&c=live&t=dashboard');
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_dept&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_dept&c=live&t=dashboard');
    }
  },

  onThirdButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_premium&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_premium&c=live&t=dashboard');
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_corp&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_corp&c=live&t=dashboard');
    }
  },

  onFourthButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('N/A');
    } else {
      console.log('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_ela&c=live&t=dashboard');
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_ela&c=live&t=dashboard');
    }
  }

}