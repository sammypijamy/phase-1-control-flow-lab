function scuberGreetingForFeet(someValue){
  let message
  if (someValue <= 400) {
    message =  "This one is on me!" }
  else if (someValue >= 400, someValue <= 2000 ) {
    message =  "That will be twenty bucks." }
  else if (someValue >= 2000, someValue <= 2500) {
    message = "I will gladly take your thirty bucks." }
  else if (someValue > 2500 ) {
    message = "No can do."  }
    return message
} 

function ternaryCheckCity(city) {
      return (city === "NYC") ?  "Ok, sounds good."
    : "No go." 
} 
   
 
function switchOnCharmFromTip(tip){
let message
if (tip == "generous") {
  message = "Thank you so much."
} 
else if (tip == "not as generous") {
  message = "Thank you."
}
else message = "Bye."
  return message
    }
  