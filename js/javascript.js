//afficher les details
/*
function details(id) {
        
        var div = document.getElementById(id);
        height = div.scrollHeight;
        if (div.style.display === "none") {
        div.style.display = "block";
        fadeIn(div, 3000);
        
        } 
        else {
        div.style.display = "none";
        }
    }

function alterner(id){

    if(id=='moreText1'){
        details('moreText1');
        document.getElementById('moreText2').style.display = 'none';
    }

    else {
        details('moreText2');
        document.getElementById('moreText1').style.display = 'none';
        
    }
}
*/

//afficher tooltip
/*$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
*/


 //Tooltip dynamique
var tooltip = document.querySelectorAll('.coupontooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}



 //affichage des details 
  function getElementBtn(id){
    return document.getElementById(id).getElementsByTagName("i")[0];
  }
  
  function Btn_Toggle(idD,idH,btnD,btnH) {
      var x = document.getElementById(idD);
      var y = document.getElementById(idH);
      var btnd = getElementBtn(btnD)
      var btnh = getElementBtn(btnH)
      y.style.display = "none";
      btnh.className ="fa fa-plus";
      if (x.style.display == "none") {
        x.style.display = "block";
        btnd.className ="fa fa-minus";
        //enhancedElement(x, 30000);
        sizein(x, 3000);
      } else {
        x.style.display = "none";
        btnd.className ="fa fa-plus";
      }
    }

//modifier la taille de l'affichage du texte et sa durée
/*
//affichage
    async function enhancedElement(element, t)  {
        for(let temp = 1; temp < t; temp++){
            element.style.height = temp+"px";
            await delay(30000);
        }
        element.style.height = "auto";

    }
//durée
    const delay = millis => new Promise((resolve, reject) => {
        setTimeout(_=> resolve(), millis)
        });
 */   

//change size texte
function sizein(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function () {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}      
   

function  evaluerConnaissance(){
    let competences = document.querySelectorAll("li.rating");
    try {
        for(let i=0; i < competences.length; i++){
            let r = competences[i].getAttribute("rating");

            if(r!=null){

                let starts = '<span style="color:#eeee6a; " >' 

                for(let j=0; j< r; j++){
                    starts+="★";
                }
                starts += '</span>';

                starts += '<span>';
                for(let j=r; j<5; j++){
                    starts+="★";
                }
                starts += '</span>';

                competences[i].innerHTML += starts;

            }

        }
      } catch (error) {
    }
}
evaluerConnaissance();


//histogramme
mesCompetence={
    "java":5,
    "HTML & CSS":5,
    "PHP":4,
    "Maple & Matlab":4,
    "Merise":5,
    "UML":5,
    "Agile":5,
    "Linux":4,
    "Windows":5
}

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(mesCompetence),
    datasets: [{
      label: 'Competences',
      data: Object.values(mesCompetence),
      backgroundColor: 'rgb(67, 135, 151)',
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: true,
        barPercentage: 1.2, 
     }],
      yAxes: [{
        ticks: {
          max: 5,
          beginAtZero:true,
          stepSize: 1
        },
        stacked: true

      }]
    }
  }
});