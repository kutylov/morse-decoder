const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const space = '**********'
    const binaryDigits = expr.match(/.{1,10}/g)
    const morseDigits = binaryDigits.map((digit) => {
        let result = ''

        if (digit === space) {
            return ' '
        }

        for (let i = 0; i < 10; i += 2) {
            let ch = digit.slice(i, i + 2)

            if (ch === '10') {
                result += '.'
            }
            if (ch === '11') {
                result += '-'
            }
        }

        return result
    })
    const decoderMessage = morseDigits.map((digit) => {
        if (digit === ' ') {
            return ' '
        }
        return MORSE_TABLE[digit]
    })

    return decoderMessage.join('')
}

module.exports = {
    decode
}