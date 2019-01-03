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
let enterHouse = READLINE.question("You hear creaking noises coming from upstairs, Will you enter the house? (yes or no) ");
    if(enterHouse == "y" || enterHouse == "yes") {
        player.courage++;
             console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
   enterHouse = READLINE.question("Will you walk upstairs towards the creaking noises? (yes or no)");
      if(enterHouse == "y" || enterHouse == "yes")
          player.courage++;
            console.log(`${player.name} walks up the stairs in the darkness towards the undetermined creeking noises ...`);
              console.log(`${player.name} reaches the top of the stairs and hears mumbled voices from behind a door`);
                  enterHouse = READLINE.question("Will you open the door? (yes or no) ");
                      if(enterHouse = "y" || enterHouse == "yes")
                          player.courage++;
                            console.log(`${player.name} opens the door, to find a room full of hallways`);
                               enterHouse = READLINE.question("Will you open one of the doors? (1) or turn around and go home, refusing to risk your life over being nosy (2)");
                                    if(enterHouse == 1)
                                         player.courage++;
                                            enterHouse = READLINE.question("Which door will you open? (1 2 3 or 4)  ");
                                                 if(enterHouse == 1)
                                                    player.courage--;
                                                        console.log(`${player.name} opens the door to find a room full of R&B cds and a stereo, ${player.name} ends her/his quest to indulge `);

                                                            else {
                                                              if(enterHouse == 2)
                                                               player.courage++;
                                                                    console.log(`${player.name} opens the door and finds a baby all alone crying profusely,${player.name} ends the quest to console the child and care for it, until she (or he) can safely return the baby to its parents`);
                                                                  }
//} else {
  //player.intellect++;
  //console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
