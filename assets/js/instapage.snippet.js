const domainEnv = 'dev';

window.popinPricing = {
  onFirstButtonClicked: function (isOneTime) {
    if (isOneTime) {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free');
    } else {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=free');
    }
  },

  onSecondButtonClicked: function (isOneTime) {
    if (isOneTime) {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_signature');
    } else {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_dept');
    }
  },

  onThirdButtonClicked: function (isOneTime) {
    if (isOneTime) {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=one_time_premium');
    } else {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_corp');
    }
  },

  onFourthButtonClicked: function (isOneTime) {
    if (isOneTime) {
      console.log('N/A');
    } else {
      window.location.replace('https://'+domainEnv+'.popinnow.com/#/account/create?payment=annual_ela');
    }
  }

}