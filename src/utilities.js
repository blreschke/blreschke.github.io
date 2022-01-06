const dice = [["Qu","B","Z","J","X","K"],
["T","O","U","O","T","O"],
["O","V","W","R","G","R"],
["H","H","L","R","D","O"],
["N","H","D","T","H","O"],
["T","E","L","P","C","I"],
["T","T","O","T","E","M"],
["A","E","A","E","E","E"],
["A","A","A","F","S","R"],
["S","S","N","S","E","U"],
["S","C","T","I","E","P"],
["Y","I","F","P","S","R"],
["L","H","N","R","O","D"],
["R","I","Y","P","R","H"],
["E","A","N","D","N","N"],
["E","E","E","E","M","A"],
["A","F","A","I","S","R"],
["D","O","R","D","L","N"],
["M","N","N","E","A","G"],
["I","T","I","T","I","E"],
["A","U","M","E","E","G"],
["Y","I","F","A","S","R"],
["C","C","W","N","S","T"],
["U","O","T","O","W","N"],
["E","T","I","L","I","C"]]

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function random5x5() {
    let indexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    var spots = ["","","","","","","","","","","","","","","","","","","","","","","","",""]
    dice.forEach(function(die, array) {
        let position = randomInt(indexes.length)
        let index = indexes[position]
        spots[index] = die[randomInt(die.length)]
        indexes.splice(position, 1)
    })
    console.log(spots)
    return spots
}

export default random5x5