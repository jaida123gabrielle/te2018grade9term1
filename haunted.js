const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
    if(enterHouse == "y" || enterHouse == "yes") {
        player.courage++;
             console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
   enterHouse = READLINE.question("Will you walk upstairs towards the creaking noises? (yes or no)");
      if(enterHouse == "y" || enterHouse == "yes")
          player.courage++;
            console.log(`${player.name} walks up the stairs in the darkness towards the undetermined creeking noises ...`);
              console.log(`${player.name} reaches the top of the stairs and hears mumbled voices from behind a door`);
                 let enterHouse = READLINE.question("Will you open the door? (yes or no) ");
                      if(enterHouse = "y" || enterHouse == "yes")
                          player.courage++;

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
