var tft = {
    title: "Team fight Tactics",
    genre: "Auto Chess",
    platform: ["Windows", "Mac Os", "Ubuntu"],
    getSimilar: function (title) {
        console.log("Similar games to ".concat(title, ": Dota Auto Chess, League of Legends, Chess"));
    }
};
tft.getSimilar(tft.title);
var newSet8 = {
    title: "New TFT 8",
    genre: "Auto Chess",
    platform: ["Windows", "Mac Os", "Ubuntu"],
    newMaps: ["Fire and Frost", "The Observer", "Purple-ish"],
    newChar: "Pingo",
    originalGame: tft,
    getSimilar: function (title) {
        console.log("New DLC \"".concat(newSet8.title, "\" is out!"));
    }
};
newSet8.getSimilar(newSet8.title);
