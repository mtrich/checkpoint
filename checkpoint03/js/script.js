var data = {
  totalMoney:0,
  income: 0
};

setInterval(addIncome,1000);

function addIncome() {
  data.totalMoney += data.income;
  updateReport();
}

function updateReport() {
  $("#currentTotal").text('$' + Math.floor(data.totalMoney));
  $("#income").text((data.income/1).toFixed(2));
}


$("#dollar").click(function (){
  data.totalMoney ++;
  updateReport();
})

$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalMoney ) {
    data.totalMoney -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.income += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
})
