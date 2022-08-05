interface Game {
    title: string;
    description?: string;
    genre: string;
    platform: string[];
    getSimilar: (title: string) => void
}

const tft: Game = {
    title: "Team fight Tactics",
    genre: "Auto Chess",
    platform: ["Windows","Mac Os", "Ubuntu"],
    getSimilar: (title: string) => {
        console.log(`Similar games to ${title}: Dota Auto Chess, League of Legends, Chess`)
    }
}

tft.getSimilar(tft.title); 

interface DLC extends Game {
    originalGame: Game;
    newMaps: string[];
    newChar: string
}

const newSet8: DLC = {
    title: "New TFT 8",
    genre: "Auto Chess",
    platform: ["Windows", "Mac Os", "Ubuntu"],
    newMaps: ["Fire and Frost", "The Observer", "Purple-ish"],
    newChar: "Pingo",
    originalGame: tft,
    getSimilar: (title: string) => {
        console.log(`New DLC "${newSet8.title}" is out!`);
    }
}

newSet8.getSimilar(newSet8.title)