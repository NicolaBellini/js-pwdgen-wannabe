

const name=prompt('Come ti chiami?');


const surname=prompt("qual' è il tuo cognome?")

const completeName=name + ' ' + surname;

const favColor=prompt("qual' è il tuo colore preferito, rosso o blu?");

const number=prompt("qual' è il tuo numero fortunato?");

document.getElementById('output').innerHTML=`
<div class="${favColor}">
  <div>
  Se ho capito bene ti chiami ${completeName},  il tuo colore preferito è il ${favColor} e il tuo numero fortunato è il ${number}
  </div>
</div>
`;

console.log(completeName, favColor);