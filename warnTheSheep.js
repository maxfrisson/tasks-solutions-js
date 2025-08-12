function warnTheSheep(queue) {
  let phraseWolf = "Pls go away and stop eating my sheep";
  let phraseSheep = `Oi! Sheep number ${queue.length - queue.indexOf("wolf") -1}! You are about to be eaten by a wolf!`;
  return queue[queue.length-1] == "wolf" ? phraseWolf : phraseSheep;
}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));

/* SOLUTION 2 */

function warnTheSheep2(queue) {
  let revQueue = queue.reverse();
  let phraseWolf = "Pls go away and stop eating my sheep";
  let phraseSheep = `Oi! Sheep number ${revQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
  return revQueue.indexOf("wolf") == 0 ? phraseWolf : phraseSheep;
}

console.log(warnTheSheep2(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep2(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep2(["sheep", "sheep", "wolf"]));