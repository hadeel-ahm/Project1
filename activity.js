async function GetAct(){
  let data = await fetch ("http://www.boredapi.com/api/activity/").then(
      (res)=> res.json());
  //  console.log(data);
  // return data;
  let act=data.activity;
  document.getElementById("box").innerText="what do you think if you";
  document.getElementById("activity").innerHTML=act;
  document.getElementById("activity").style.display="inline";
  document.getElementById("feedback").style.display="none";
  document.getElementById("End").style.display="inline";
  document.getElementById("Tb").style.display="inline";
}


function thanks(){
  document.getElementById("box").innerText="Happy to help you\n Have a nice time!";
  document.getElementById("End").style.display="none";
  document.getElementById("Tb").style.display="none";
  document.getElementById("activity").style.display="none";
  document.getElementById("feedback").style.display="inline";

  setTimeout(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    GetAct();
  }, 3000);
}