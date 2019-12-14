import { Subject } from './../models/subject';

let generatedId = 10;

const rawSubjects: Array<Partial<Subject>> = [
  {
    name: 'Bahasa Malaysia',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Bahasa Inggeris',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Bahasa Cina',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Bahasa Tamil',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Matematik',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Sains',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Pendidikan Moral / Islam',
    level: [1, 2, 3, 4, 5, 6],
  },
  {
    name: 'Pendidikan Kesenian',
    level: [1, 2, 3],
  },
  {
    name: 'Pendidikan Jasmani dan Kesihatan',
    level: [1, 2, 3],
  },
  {
    name: 'Reka Bentuk dan Teknologi',
    level: [4, 5, 6],
  },
  {
    name: 'Teknologi Maklumat dan Komunikasi',
    level: [4, 5, 6],
  },
  {
    name: 'Sejarah',
    level: [4, 5, 6],
  },
  {
    name: 'Pendidikan Seni',
    level: [4, 5, 6],
  },
  {
    name: 'Pendidikan Muzik',
    level: [4, 5, 6],
  },
  {
    name: 'Pendidikan Jasmani',
    level: [4, 5, 6],
  },
  {
    name: 'Pendidikan Kesihatan',
    level: [4, 5, 6],
  },
  {
    name: 'Kemahiran Hidup',
    level: [4, 5, 6],
  },
  {
    name: 'Kajian Tempatan',
    level: [4, 5, 6],
  },
];

export const subjects: Subject[] = rawSubjects.map((rawSubject) => {
  return {
    ...rawSubject,
    id: generatedId++,
  } as Subject;
});
