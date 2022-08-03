// accountInfo
// charInfo
type AccountInfo = {
    id: number,
    name: string,
    email?: string // question mark makes it optional
}

const account: AccountInfo = {
    id: 287381,
    name: "Faxina",
    email: "gui.sfax@gmail.com"
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: "FaxinaSlayer23",
    level: 98
}
// intersection

type PlayerInfo = AccountInfo & CharInfo;

const player1: PlayerInfo = {
    id: 82711, 
    name: "Faxina",
    nickname: "FaxinaKnight57",
    level: 372
}