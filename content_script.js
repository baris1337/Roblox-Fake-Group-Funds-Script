var amount = "102,158,916";
//Robux amount you can customize it

//localStorage.setItem('robuxAmount', amount);// <~~ Run this command once to reset robux amount!

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function checkInputValue() {


if (localStorage.getItem('robuxAmount') != null)
  amount = localStorage.getItem('robuxAmount');
else
localStorage.setItem('robuxAmount', amount);   


    //robux funds thing
    while(true){     
try{
  document.querySelector("#configure-group > configure-group-page > div > div.container-header > div.ng-scope > span > span.text-robux.ng-binding").innerHTML=`<span class="text-robux ng-binding" ng-bind="$ctrl.groupFunds | number:0">${amount}</span>`
  for (let i = 1; i <= 100; i++) {
    document.querySelector("#configure-group > configure-group-page > div > div.container-header > div.ng-scope > span > span.text-robux.ng-binding").innerHTML=`<span class="text-robux ng-binding" ng-bind="$ctrl.groupFunds | number:0">${amount}</span>`
    await new Promise(resolve => setTimeout(resolve, 10));
  }

  break;
}
catch{}
await new Promise(resolve => setTimeout(resolve, 10));

    }
  
//robux funds thing

//alert success btn once
while (true){
try{
  document.querySelector("#configure-group > configure-group-page > system-feedback > div > div > div").innerHTML=`<div class="alert  alert-success" ng-class="{ on: $ctrl.params.showBanner }"> <!-- ngIf: !$ctrl.params.isHtmlAllowed --><span class="alert-content ng-binding ng-scope" ng-bind="$ctrl.params.bannerText" ng-if="!$ctrl.params.isHtmlAllowed">${document.querySelector("#configure-group > configure-group-page > div > div.col-xs-12.ng-scope > div > div > configure-group-payouts > div > configure-group-one-time-payout > div.section > div.one-time-payout > table > tbody > tr.ng-scope > td.amount > div > span > input").value} Robux were paid out to users from the group</span><!-- end ngIf: !$ctrl.params.isHtmlAllowed --><!-- ngIf: $ctrl.params.isHtmlAllowed --> <!-- ngIf: $ctrl.params.showCloseButton --> </div>`
break;
}
catch{}
await new Promise(resolve => setTimeout(resolve, 10));
}
//alert success btn once

  
  async function buttonClickHandler() {

    nig =  parseInt(document.querySelector("#configure-group > configure-group-page > div > div.container-header > div.ng-scope > span > span.text-robux.ng-binding").textContent.replace(/,/g, '')) - document.querySelector("#configure-group > configure-group-page > div > div.col-xs-12.ng-scope > div > div > configure-group-payouts > div > configure-group-one-time-payout > div.section > div.one-time-payout > table > tbody > tr.ng-scope > td.amount > div > span > input").value;
    document.querySelector("#configure-group > configure-group-page > div > div.container-header > div.ng-scope > span > span.text-robux.ng-binding").textContent = nig.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //remaining group funds


    document.querySelector("#configure-group > configure-group-page > system-feedback > div > div > div > div > span").innerHTML=`<span class="alert-content ng-binding ng-scope" ng-bind="$ctrl.params.bannerText" ng-if="!$ctrl.params.isHtmlAllowed">${document.querySelector("#configure-group > configure-group-page > div > div.col-xs-12.ng-scope > div > div > configure-group-payouts > div > configure-group-one-time-payout > div.section > div.one-time-payout > table > tbody > tr.ng-scope > td.amount > div > span > input").value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Robux were paid out to users from the group</span>`
    //checking robux amount

    document.querySelector("#configure-group > configure-group-page > system-feedback > div > div > div > div").className='alert  alert-success on'
  //alert success on

  localStorage.setItem("robuxAmount",  document.querySelector("#configure-group > configure-group-page > div > div.container-header > div.ng-scope > span > span.text-robux.ng-binding").textContent);   
console.log('amount set to: ' + localStorage.getItem('robuxAmount'));
  //it saves last robux amount value to database

  document.querySelector("#configure-group > configure-group-page > div > div.col-xs-12.ng-scope > div > div > configure-group-payouts > div > configure-group-one-time-payout > div.section > div.one-time-payout > table > tbody > tr.ng-scope > td.delete > button > span").click();

  document.querySelector("#configure-group > configure-group-page > div > div.col-xs-12.ng-scope > div > div > configure-group-payouts > div > configure-group-one-time-payout > div.section > div.one-time-payout > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > div:nth-child(2) > span:nth-child(3)").textContent = document.querySelector("#configure-group > configure-group-page > div > div.container-header > div.ng-scope > span > span.text-robux.ng-binding").textContent
  //closing the panel
  await wait(5000); 

  document.querySelector("#configure-group > configure-group-page > system-feedback > div > div > div > div").className='alert  alert-success'
  document.querySelector("#configure-group > configure-group-page > system-feedback > div > div > div").className='alert  alert-success'
  //alert success off
  }


  var button = document.querySelector("#configure-group > configure-group-page > div > div.col-xs-12.ng-scope > div > div > configure-group-payouts > div > configure-group-one-time-payout > div.section > div.one-time-payout > div.input-group-btn > button")
    //cashout button

  if (button){
    button.addEventListener("click", buttonClickHandler);
    await new Promise(resolve => setTimeout(resolve, 10));
  }


  }//checkout button


  checkInputValue();

  

  