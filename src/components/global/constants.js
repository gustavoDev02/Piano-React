const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

const NOTES =[
    'c',  'df', 'd', 'ef',  
    'e',  'f', 'gf',  'g', 
    'af',  'a',  'bf',  'b',
   
];

const KEY_TO_NOTE = {
    z: 'c',
    s: 'df',
    x: 'd',
    d: 'ef',
    c: 'e',
    v: 'f',
    g: 'gf',
    b: 'g',
    h: 'af',
    n: 'a',
    j: 'bf',
    m: 'b'
};

const NOTE_TO_KEY = {
    c : 'z',
    df : 's',
    d : 'x',
    ef : 'd',
    e : 'c',
    f : 'v',
    gf : 'g',
    g : 'b',
    af : 'h',
    a : 'n',
    bf : 'j',
    b : 'm',
};

export {NOTES};
export {NOTE_TO_KEY};
export {KEY_TO_NOTE};
export {VALID_KEYS};