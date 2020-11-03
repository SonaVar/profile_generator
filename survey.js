const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  rl["name"] = answer;
  console.log(rl.name);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    rl["activity"] = answer;
    console.log(rl.activity);

    rl.question('What do you listen to while doing that? ', (answer) => {
      rl["song"] = answer;
      console.log(rl.song);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        rl["meal"] = answer;
        console.log(rl.meal);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          rl["food"] = answer;
          console.log(rl.food);
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            rl["sport"] = answer;
            console.log(rl.sport);
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              rl["power"] = answer;
              console.log(rl.power);
              
              console.log(
                `${rl.name} loves listening to ${rl.song} while ${rl.activity}, devouring ${rl.food} for ${rl.meal}, prefers ${rl.sport} over any other sport, and is amazing at ${rl.power}.`
              );

              rl.close();
            });
          });
        });
      });
    });
  });
});