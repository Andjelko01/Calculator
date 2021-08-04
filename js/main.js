function izracunajTip(tips)
{   
   var bill=document.getElementById("billVal").value;
   var people=document.getElementById("peopleVal").value;
   var test=tips.value;

   var tip=Number(tips.value.replace('%',''));
   console.log(tip);

    if(!(isNaN(bill) && isNaN(people)))
    {
      document.getElementById("tipamount").innerHTML=("$"+((((bill*tip)/100)/people).toFixed(2).toString()));
      document.getElementById("total").innerHTML=("$"+((((parseInt(((bill*tip)/100)))+parseInt(bill))/people).toFixed(2).toString()));
    } 
}

function resetbutton()
{
  document.getElementById("tipamount").innerHTML="$0,00";
  document.getElementById("total").innerHTML="$0,00";
}
