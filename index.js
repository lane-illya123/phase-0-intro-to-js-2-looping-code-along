const gifts = ["teddy bear", "drone", "doll"];
const cards = [ 'Guadalupe', 'Ollie', 'Aki' ];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(names, birth){
    const newcards = [];  
  for (let i = 0; i < names.length; i++){
    newcards.push(`Thank you, ${names[i]}, for the wonderful ${birth} gift!`);
      console.log(newcards);    
        
}
    return newcards;
}

function countDown(){
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown--);
  }
}

wrapGifts(gifts);
writeCards(cards , 'suprise')
countDown();