
function problem1() {
    const input = `1|1101|0 Oloo1i00 1100011! Θ!1010IO i0@I@000 θl10|I0θ O10001II 000θ11/1 0010101Θ 1I110θi1 !1000000 |//i|I@0 1|010011 0θI11011 101Θ1100 001o0010 i000100! Θ!101001 1lθ00011 o001i01/ 111111Θ0 000000@0 I1o0@|11 @0/|01l0 101101O1 11Θ0Θ@1l 011θ0011 l!010O11 00I01111 |01Θ01/1 @011|Θ11 l1l0Oi1| 100/1θ0| 00110110 0@1101I| 11l0O110 IO/0/101 10001I01 0o10110I 0101o01i 1@O0iIl1 111oo001 !000i|11 lI10I01@ @θ@lΘ00l 0lθ0!Θ0@ 1I0@000/ 0111111@ !1θ0@l1O 010111@0 1Θθ|@0l0 011i|10l 10111I@0 11|1ii0I @0@|0|11 101000Θ0 lo010I01 1|01|l1θ 1i|0111l 0!I110θ0 !110i110 0011i110 I01110|1 01@0|0Θ0 000O00I0 0|!@001@ 110i0|00 0O01II!1 1i010001 0100/θ0θ |00l0|11 1IlO001l 10001000 O0/1Ii00 I0O01o11 I0110θΘ0 Θ1!l0000 I010oθIl 1I1/1/10 I@00I0I0 1i@0/Θ10 0!100!1l 1!O1θ100 /Θ11I0i1 @ΘO01010 1oo|1|Oθ 0l!001/1 oo|01lO0 001|0l11 0!O0ooθi 1I110000 OI110000 o1001Θ1I I/0/I0!| 01|θO1!θ 0!1l00/0 I!00!00! 00@i!θ10 O/110θ1O 1OΘi00/i`;
    let output = input.replace(/[0OoθΘ@]/g,'0').replace(/[1Ii!l\/\|]/g,'1'); 

    console.log(output);
}


function problem2() {
    const input = "00010000 00100100 11111011 11101011 01100000 10101100 01001110 10111001 10111100 11110110 10101111 10000110 10011111 10011010 10010100 11011111 10001000 10101100 10001001 10001010 00111110 10010000 11101010 10111011 10101010 11010001 00100010 10000111 11101000 01000000 00110110 01001110 11010011 01010001 11001010 11011011 00111000 01000111 00010101 11111011 00011111 01001001 00101100 00000000 01101001 01010101 01110101 00011111 11010101 11011110 11001001 00001000 01100110 00100011 01111100 10001101 01101110 00001010 01000111 10000110 11001101 00000110 01101111 00110011 10100001 01100000 10101001 11100010 00011011 01011011 01110110 00110000 01001110 01001101 01010000 10011100 00010101 11001110 00110010 01010100 10111010 11100110 00001100 01000110 11011010 00011110 11010101 00000000 11110101 00010010 11110100 00001010 00011011 00110111 11110110 10110101 10110110 11011101 01001110 10101111";
    let solution = "";
    const inputSplit = input.trim().split(/\s+/);

    for (let i of inputSplit) {
        const match = i.match(/1/);
        const index = match ? match.index + 1 : 0;
        solution += index + " ";
    }
    console.log(solution);
}


function problem3(){
    const input = "10111101 00111111 10100101 11110010 11000011 01111000 10111111 11010110 01100010 00010110 00100010 11110101 01010100 11110111 00100101 00010110 00101000 00010101 00001110 01001101 00101000 11011000 01000000 01010000 10101011 11100001 11010001 10100100 00001000 11101111 00010101 10110111 10010101 11111011 00101100 01101001 10000100 10101101 01101011 10101111 10011111 10011010 10110001 11110111 11111101 11010000 00110101 11110101 00101011 00001100 11000010 11001011 11110011 10111110 10010100 01000101 01010010 10000100 00010100 01101110 10000001 11010110 00100111 11011110 10010111 11111011 11110000 01001100 11100011 01101000 00101001 11001100 01011001 11101111 11000010 10100011 01101111 00100111 00011001 10100111 00101101 11001100 10010001 01001100 00101111 00000110 11111110 11010111 00100001 10010111 10001011 00010111 01010100 01000001 10000000 00111101 11010110 01000000 10111111 01100010";
    const solution = input.trim().split(/\s+/).map(item => {
        const match = item.match(/1(?!0*1)/);
        return (match ? match.index : -1) + 1;
    }).join(" ");
    console.log(solution);
}

function problem4(){
    const input = "10111101 00111111 10100101 11110010 11000011 01111000 10111111 11010110 01100010 00010110 00100010 11110101 01010100 11110111 00100101 00010110 00101000 00010101 00001110 01001101 00101000 11011000 01000000 01010000 10101011 11100001 11010001 10100100 00001000 11101111 00010101 10110111 10010101 11111011 00101100 01101001 10000100 10101101 01101011 10101111 10011111 10011010 10110001 11110111 11111101 11010000 00110101 11110101 00101011 00001100 11000010 11001011 11110011 10111110 10010100 01000101 01010010 10000100 00010100 01101110 10000001 11010110 00100111 11011110 10010111 11111011 11110000 01001100 11100011 01101000 00101001 11001100 01011001 11101111 11000010 10100011 01101111 00100111 00011001 10100111 00101101 11001100 10010001 01001100 00101111 00000110 11111110 11010111 00100001 10010111 10001011 00010111 01010100 01000001 10000000 00111101 11010110 01000000 10111111 01100010";
    const array = input.trim().split(/\s+/);
    const solution = [];
    for (let i of array){
        if (/1$/.test(i)){
            solution.push(i);
        }
    }

    console.log(solution.join(" "));
}

function problem5(){
    const input = "01000011 10011110 11101011 11000000";
    const input2 = "10111101 00111111 10100101 11110010 11000011 01111000 10111111 11010110 01100010 00010110 00100010 11110101 01010100 11110111 00100101 00010110 00101000 00010101 00001110 01001101 00101000 11011000 01000000 01010000 10101011 11100001 11010001 10100100 00001000 11101111 00010101 10110111 10010101 11111011 00101100 01101001 10000100 10101101 01101011 10101111 10011111 10011010 10110001 11110111 11111101 11010000 00110101 11110101 00101011 00001100 11000010 11001011 11110011 10111110 10010100 01000101 01010010 10000100 00010100 01101110 10000001 11010110 00100111 11011110 10010111 11111011 11110000 01001100 11100011 01101000 00101001 11001100 01011001 11101111 11000010 10100011 01101111 00100111 00011001 10100111 00101101 11001100 10010001 01001100 00101111 00000110 11111110 11010111 00100001 10010111 10001011 00010111 01010100 01000001 10000000 00111101 11010110 01000000 10111111 01100010"
    const array = input2.trim().split(/\s+/);
    const solution = []

    for (let a of array) {
        if (/^0/.test(a)){
            solution.push(a);
        }
        else if (a === "10000000") {
            solution.push("00000000");
        }
        else {
            const { groups: { prefix, suffix } } = a.match(/^(?<prefix>[01]*)1(?<suffix>0*)$/);
            const flipped = prefix.replace(/[01]/g, b => b === '0' ? '1' : '0');
            solution.push(flipped + "1" + suffix);
        }
    }
    console.log(solution.join(' '));
}

function arrowQA(){
    const validArrow = /^>>-{3,5}>$/;
    const input = `
    >>---->
    >>>--->
    >>====>
    >>--->
    >>-----D
    >>===>
    >>----->
    >>-------->
    `;
    const arrows = input.trim().split(/\n/).map(s => s.trim())
    .filter(Boolean);

    const bad = arrows.map((a, i) => validArrow.test(a) ? null : i + 1)
    .filter(Boolean);

    console.log(bad.join(' '));  // should give out "2 3 5 6 8"
}


function arrowQAfile(input){
    const validArrow = /^>>-{3,5}>$/;
    const arrows = input.trim().split(/\n/).map(s => s.trim())
    .filter(Boolean);

    return arrows
    .map((a, i) => validArrow.test(a) ? null : i + 1)
    .filter(Boolean)
    .join(' ');
}
/*
const fs = require('fs');
const input = fs.readFileSync('./arrows.txt', 'utf8');
const result = arrowQAfile(input);

fs.writeFileSync('bad_arrows.txt', result, 'utf8');   
console.log('Saved bad arrow indices to bad_arrows.txt');
*/



function arrowSmith(arrows){
    // sharp arrowhead ">" && "(>>) double fletching" && total length between 6 and 8 units && uniform shaft
    const goodArrow = (/^(>{2,})([=-]+)(>)$/);
    const kept = [];
    for (const arrow of arrows){
        const match = arrow.match(goodArrow);
        
        if(!match) continue; // it needs fletch-shaft-head
        
        let [, fletch, shaft, head] = match;
        if (head !== '>') continue; // 1st check arrowhead
        
        //  clip fletchings
        if (fletch.length < 2) continue;
        fletch = '>>'; 

        // 1) Mixed? discard everything that isn’t purely = or purely -
        if (!/^(?:=+|-+)$/.test(shaft)) {
            continue;
        }
        // 2) All '='? repair → change to all '-'
        if (shaft[0] === '=') {
            shaft = '-'.repeat(shaft.length);
        }
        // 3) Otherwise it's all '-'
        // 4) Reassemble and validate total length
        const newArrow = fletch + shaft + head
        if (newArrow.length >= 6 && newArrow.length <= 8) {
            kept.push(newArrow);
        
        }
    }
    return kept.join("\n");
}

/*
const fs = require('fs');
const inputPath = 'arrowSmith.txt';
const testPath = 'arrowSmith2.txt';
const outputPath = 'repaired_arrows.txt';
const arrows = fs.readFileSync(inputPath, 'utf8')
  .split(/\n/)
  .map(line => line.trim())      // remove any stray spaces
  .filter(line => line.length > 0);  // drop blank lines
const repaired = arrowSmith(arrows);
fs.writeFileSync(outputPath, repaired, 'utf8');
console.log(`Repaired arrows saved to ${outputPath}`);
*/

function identifyUsers(inputPath, outputPath){

    const text = fs.readFileSync(inputPath, 'utf8');
    
    const events = text.split(/\[\d{1,2}\/\d{1,2}\/\d{4},.*?\]/).filter(Boolean);

    const solution = events.map(event => {
        const username = event.match(/^(?!0x)(?![a-f0-9-]{36}$)[a-zA-Z][\w\.-]{2,}$/m);
        const email = event.match(/([a-zA-Z0-9_%+-]+(?:[._+][a-zA-Z0-9%+-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/);
        return username ? username[0] : email ? email[1] : null;
    }).filter(Boolean);
    
    fs.writeFileSync(outputPath, solution.join('\n'), 'utf8');
}

/*
const fs = require('fs');
identifyUsers('email_log.txt', 'filtered_emails.txt');
*/

