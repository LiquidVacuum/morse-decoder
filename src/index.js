const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i+= 10) {
        arr.push(expr.substr(i, 10));
    }
    let text = arr.map(char => char.includes('*') ? ' ' : char)
                  .map(char => char.match(/..?/g))
                  .map(char => char.filter(p => p !== '00')
                                   .map(p => {
                                     if (p === '10') return '.';
                                     if (p === '11') return '-';
                                     return p;
                                   }).join(''))
                  .map(line => line === ' ' ? ' ' : MORSE_TABLE[line])
                  .join('');

    return text;
}

module.exports = {
    decode
}