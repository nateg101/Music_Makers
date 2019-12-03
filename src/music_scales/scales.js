const KEYS = {
  'maj': {
    'C': [
      {letter: "C", value: 12},
      {letter: "D", value: 14},
      {letter: "E", value: 16},
      {letter: "F", value: 17},
      {letter: "G", value: 19},
      {letter: "A", value: 21},
      {letter: "B", value: 23}
    ],
    'C#': [
      {letter: "C#", value: 13},
      {letter: "D#", value: 15},
      {letter: "F", value: 17},
      {letter: "F#", value: 18},
      {letter: "G#", value: 20},
      {letter: "A", value: 21},
      {letter: "C", value: 23}
    ],
    'D': [
      {letter: "D", value: 14},
      {letter: "E", value: 16},
      {letter: "F#", value: 18},
      {letter: "G", value: 19},
      {letter: "A", value: 21},
      {letter: "B", value: 23},
      {letter: "C#", value: 25}
    ],
    'D#': [
      {letter: "D#", value: 15},
      {letter: "F", value: 17},
      {letter: "G", value: 19},
      {letter: "G#", value: 20},
      {letter: "A#", value: 22},
      {letter: "C", value: 24},
      {letter: "D", value: 26}
    ],
    'E': [
      {letter: "E", value: 16},
      {letter: "F#", value: 18},
      {letter: "G#", value: 20},
      {letter: "A", value: 21},
      {letter: "B", value: 23},
      {letter: "C#", value: 25},
      {letter: "D#", value: 27}
    ],
    'F': [
      {letter: "F", value: 17},
      {letter: "G", value: 19},
      {letter: "A", value: 21},
      {letter: "A#", value: 22},
      {letter: "C", value: 24},
      {letter: "D", value: 26},
      {letter: "E", value: 28}
    ],
    'F#': [
      {letter: "F#", value: 18},
      {letter: "G#", value: 20},
      {letter: "A#", value: 22},
      {letter: "B", value: 23},
      {letter: "C#", value: 25},
      {letter: "D#", value: 27},
      {letter: "F", value: 29}
    ],
    'G': [
      {letter: "G", value: 19},
      {letter: "A", value: 21},
      {letter: "B", value: 23},
      {letter: "C", value: 24},
      {letter: "D", value: 26},
      {letter: "E", value: 28},
      {letter: "F#", value: 30}
    ],
    'G#': [
      {letter: "G#", value: 20},
      {letter: "A#", value: 22},
      {letter: "C", value: 24},
      {letter: "C#", value: 25},
      {letter: "D#", value: 27},
      {letter: "F", value: 29},
      {letter: "G", value: 31}
    ],
    'A': [
      {letter: "A", value: 21},
      {letter: "B", value: 23},
      {letter: "C#", value: 25},
      {letter: "D", value: 26},
      {letter: "E", value: 28},
      {letter: "F#", value: 30},
      {letter: "G#", value: 32}
    ],
    'A#': [
    {letter: "A#", value: 22},
    {letter: "C", value: 24},
    {letter: "D", value: 26},
    {letter: "D#", value: 27},
    {letter: "F", value: 29},
    {letter: "G", value: 31},
    {letter: "A", value: 32}
    ],
    'B': [
      {letter: "B", value: 23},
      {letter: "C#", value: 25},
      {letter: "D#", value: 27},
      {letter: "E", value: 28},
      {letter: "F#", value: 30},
      {letter: "G#", value: 32},
      {letter: "A#", value: 34}
    ]
  },
  'min':{
    'C': [
      {letter: 'C', value: 12},
      {letter: 'D', value: 14},
      {letter: 'Eb', value: 15},
      {letter: 'F', value: 17},
      {letter: 'G', value: 19},
      {letter: 'Ab', value: 20},
      {letter: 'Bb', value: 22},
    ],
    'C#': [
      {letter: 'C#', value: 13},
      {letter: 'D#', value: 15},
      {letter: 'E', value: 16},
      {letter: 'F#', value: 18},
      {letter: 'G#', value: 20},
      {letter: 'A', value: 21},
      {letter: 'B', value: 23},
    ],
    'D': [
      {letter: 'D', value: 14},
      {letter: 'E', value: 16},
      {letter: 'F', value: 17},
      {letter: 'G', value: 19},
      {letter: 'A', value: 21},
      {letter: 'Bb', value: 22},
      {letter: 'C', value: 24},
    ],
    'D#': [
      {letter: 'D#', value: 15},
      {letter: 'F', value: 17},
      {letter: 'Gb', value: 18},
      {letter: 'G#', value: 20},
      {letter: 'A#', value: 22},
      {letter: 'B', value: 23},
      {letter: 'Db', value: 25},
    ],
    'E': [
      {letter: 'E', value: 16},
      {letter: 'F#', value: 18},
      {letter: 'G', value: 19},
      {letter: 'A', value: 21},
      {letter: 'B', value: 23},
      {letter: 'C', value: 24},
      {letter: 'D', value: 25},
    ],
    'F': [
      {letter: 'F', value: 17},
      {letter: 'G', value: 19},
      {letter: 'Ab', value: 20},
      {letter: 'A#', value: 22},
      {letter: 'C', value: 24},
      {letter: 'Db', value: 25},
      {letter: 'Eb', value: 27},
    ],
    'F#': [
      {letter: 'F#', value: 18},
      {letter: 'G#', value: 20},
      {letter: 'A', value: 21},
      {letter: 'B', value: 23},
      {letter: 'C#', value: 25},
      {letter: 'D', value: 26},
      {letter: 'E', value: 28},
    ],
    'G': [
      {letter: 'G', value: 19},
      {letter: 'A', value: 21},
      {letter: 'Bb', value: 22},
      {letter: 'C', value: 24},
      {letter: 'D', value: 26},
      {letter: 'Eb', value: 27},
      {letter: 'F', value: 29},
    ],
    'G#': [
      {letter: 'G#', value: 20},
      {letter: 'A#', value: 22},
      {letter: 'B', value: 23},
      {letter: 'C#', value: 25},
      {letter: 'D#', value: 27},
      {letter: 'E', value: 28},
      {letter: 'Gb', value: 30},
    ],
    'A': [
      {letter: 'A', value: 21},
      {letter: 'B', value: 23},
      {letter: 'C', value: 24},
      {letter: 'D', value: 26},
      {letter: 'E', value: 28},
      {letter: 'F', value: 29},
      {letter: 'G', value: 31},
    ],
    'A#': [
      {letter: 'A#', value: 22},
      {letter: 'C', value: 24},
      {letter: 'Db', value: 25},
      {letter: 'D#', value: 27},
      {letter: 'F', value: 29},
      {letter: 'Gb', value: 30},
      {letter: 'Ab', value: 32},
    ],
    'B': [
      {letter: 'B', value: 23},
      {letter: 'C#', value: 25},
      {letter: 'D', value: 26},
      {letter: 'E', value: 28},
      {letter: 'F#', value: 30},
      {letter: 'G', value: 31},
      {letter: 'A', value: 33},
    ]
  }
}

export default KEYS;
