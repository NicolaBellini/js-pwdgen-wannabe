

const name=prompt('Come ti chiami?');


const surname=prompt("qual' è il tuo cognome?")

const completeName=name + ' ' + surname;

const favColor=prompt("qual' è il tuo colore preferito, rosso o blu?");

document.getElementById('output').innerHTML=`
<div class="${favColor}">
  <div>
  Se ho capito bene ti chiami ${completeName} e il tuo colore preferito è il ${favColor}!
  </div>
</div>
`;

console.log(completeName, favColor);