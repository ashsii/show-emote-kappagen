const twi = Twi.factory();

twi.useCommands("");
twi.useChat();
twi.useEmotes();

let showing = false;

function moveRandom(obj) {
  let window_Height = window.innerHeight;
  let window_Width = window.innerWidth;

  let availSpace_V = window_Height - 256;
  let availSpace_H = window_Width - 256;

  var randNum_V = Math.round(Math.random() * availSpace_V);
  var randNum_H = Math.round(Math.random() * availSpace_H);

  obj.style.top = randNum_V + "px";
  obj.style.left = randNum_H + "px";
}

function spawnEmote(emote) {
  const sprite = document.createElement("img");

  sprite.src = emote.cdn.high;
  sprite.style.display = "block";
  sprite.style.position = "fixed";
  sprite.classList.add("emote");
  sprite.classList.add("fade-in");

  moveRandom(sprite);
  document.getElementById("app").appendChild(sprite);
  
  setTimeout(() => {
          document.getElementById("app").removeChild(sprite);
   }, 1000 * 5);
}

twi.addCommand("", (message, _args) => {
//   const nodelay = window.location.search.includes('sosat');
//   console.log("hello " + nodelay)
//   message.emotes.some(emote => {
  
//     if (emote && (!showing || nodelay)) {
//       spawnEmote(emote);
//       showing = true;
//       setTimeout(() => {
//         showing = false;
//         document.getElementById("app").innerHTML = "";
//       }, 1000 * 4);
//     }
    
//     return !nodelay;
  
//   })
    return false
});
