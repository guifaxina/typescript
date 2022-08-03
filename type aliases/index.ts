// type alias
type Uid = number | string

function logDetails(uid: Uid | string, item: string){
    console.log(`Your item ${item} has a id ${uid}.`)
}; // this bar '|' lets you assign two possible types to the same thing 

function logInfo(uid: Uid, user: string){
    console.log(`An user with ${uid} has a name ${user}.`)
}

type Platform = "Windows" | "Linux" | "Mac"

function renderPlatform(platform: Platform) {
    return platform + "foo bar"
}

logDetails(123, "Banana");
logInfo("123", "Faxina");