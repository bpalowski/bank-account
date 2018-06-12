function Account(name, initialDeposit, depositAmount, withdrawAmount,total){
this.name = name;
this.initialDeposit = initialDeposit;
this.depositAmount = depositAmount;
this.withdrawAmount = withdrawAmount;
this.total = total;
}

//Account.prototype.total = function(){
  //return
//}


$(document).ready(function() {
  $("form#account").submit(function(event) {
    event.preventDefault();
var inputedName = $("input#name-input").val();
var inputedInitial = parseInt($("input#input-deposit").val());
console.log(inputedName ,inputedInitial);
})
$("form#account-info").submit(function(event) {
  event.preventDefault();
var inputedDeposit = parseInt($("input#deposit-info").val());
var inputedWithdraw = parseInt($("input#withdraw-info").val());
console.log(inputedDeposit,inputedWithdraw);

  })
})
