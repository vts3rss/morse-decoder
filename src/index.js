const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
}

function decode(expr) {
  let array = expr.match(/.{1,10}/g)
  let new_dict = {}
  for ([k, v] of Object.entries(MORSE_TABLE)) {
    let key = k.replace(/[.]/g, "10").replace(/[\-]/g, "11")
    key = key.padStart(10, "0")
    new_dict[key] = v
  }
  array = array.map((i) => new_dict[i]).join("")
  return array
}

module.exports = {
  decode,
}
