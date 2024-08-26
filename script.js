/* .js files add interaction to your website */

var factList = 
[
  "Over the last 50 years, plastic has become a common material in many tampons and pads.",
  "These toxic chemicals can include but not limited to, pesticide residues, dioxins, and furans, all that are linked to cancer and other health risks.",
  "Wood pulp is used to make rayon which is then bleached using chlorine gas, which gives the 'cotton' look.",
  "Research found that non-organic cotton in regular tampons may contain trace amounts of pesticide glyphosat, a herbicide used to kill weeds and rumorede to be carcinogenic.",
  "SAPS (superabsorbent polymers), are commonly used for conventional pads. This seems reasonable, but SAPS are usually comprised of sodium polyacrylate, which is likely to be contaminated with acrylic acid, which is associated with numerous adverse health endpoints.",
  "It's estimated that more than 20 billion period products are sent to the landfill annually, contributing to the single-use plastic pollution problem.",
]

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if(factButton)
{
  factButton.addEventListener("click", displayFact);
}


function displayFact()
  {
    fact.innerHTML = factList[count];
    count++;
    if(count == factList.length)
    {
      count = 0;
    }
  }
