import { Subject } from './../models/subject';

let primarySubjectGeneratedId = 100;

const rawPrimarySubjects: Array<Partial<Subject>> = [
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

export const primarySubjects: Subject[] = rawPrimarySubjects.map((rawSubject) => {
  return {
    ...rawSubject,
    id: primarySubjectGeneratedId++,
  } as Subject;
});

let secondarySubjectGeneratedId = 200;

const rawSecondarySubjects: Array<Partial<Subject>> = [
  {
    name: 'Bahasa Melayu',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Inggeris',
    level: [11, 12, 13],
  },
  {
    name: 'Sejarah',
    level: [11, 12, 13],
  },
  {
    name: 'Geografi',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Arab',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Cina',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Tamil',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Punjabi',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Iban',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Kadazandusun',
    level: [11, 12, 13],
  },
  {
    name: 'Bahasa Semai',
    level: [11, 12, 13],
  },
  {
    name: 'Pendidikan Islam',
    level: [11, 12, 13],
  },
  {
    name: 'Matematik',
    level: [11, 12, 13],
  },
  {
    name: 'Sains',
    level: [11, 12, 13],
  },
  {
    name: 'Seni Visual',
    level: [11, 12, 13],
  },
  {
    name: 'Seni Tari',
    level: [11, 12, 13],
  },
  {
    name: 'Seni Muzik',
    level: [11, 12, 13],
  },
  {
    name: 'Seni Teater',
    level: [11, 12, 13],
  },
  {
    name: 'Literature in English',
    level: [14, 15],
  },
  {
    name: 'Kesusasteraan Melayu',
    level: [14, 15],
  },
  {
    name: 'Bahasa Arab',
    level: [14, 15],
  },
  {
    name: 'Bahasa Cina',
    level: [14, 15],
  },
  {
    name: 'Bahasa Tamil',
    level: [14, 15],
  },
  {
    name: 'English for Science and Technology',
    level: [14, 15],
  },
  {
    name: 'Bahasa Iban',
    level: [14, 15],
  },
  {
    name: 'Bahasa Kadazandusun',
    level: [14, 15],
  },
  {
    name: 'Kesusasteraan Cina',
    level: [14, 15],
  },
  {
    name: 'Kesusasteraan Tamil',
    level: [14, 15],
  },
  {
    name: 'Bahasa Perancis',
    level: [14, 15],
  },
  {
    name: 'Bahasa Punjabi',
    level: [14, 15],
  },
  {
    name: 'Additional Mathematics',
    level: [14, 15],
  },
  {
    name: 'Physics',
    level: [14, 15],
  },
  {
    name: 'Chemistry',
    level: [14, 15],
  },
  {
    name: 'Biology',
    level: [14, 15],
  },
  {
    name: 'Additional Science',
    level: [14, 15],
  },
  {
    name: 'Information and Communication Technology',
    level: [14, 15],
  },
  {
    name: 'Pengajian Keusahawanan',
    level: [14, 15],
  },
  {
    name: 'Perdagangan',
    level: [14, 15],
  },
  {
    name: 'Prinsip Perakaunan',
    level: [14, 15],
  },
  {
    name: 'Ekonomi',
    level: [14, 15],
  },
  {
    name: 'Geografi',
    level: [14, 15],
  },
  {
    name: 'Tasawwur Islam',
    level: [14, 15],
  },
  {
    name: 'Pendidikan Al-Quran dan As-Sunnah',
    level: [14, 15],
  },
  {
    name: 'Pendidikan Syariah Islamiah',
    level: [14, 15],
  },
  {
    name: 'Bible Knowledge',
    level: [14, 15],
  },
  {
    name: 'Pendidikan Seni Visual',
    level: [14, 15],
  },
  {
    name: 'Pendidikan Muzik',
    level: [14, 15],
  },
  {
    name: 'Sains Sukan',
    level: [14, 15],
  },
  {
    name: 'Pertanian',
    level: [14, 15],
  },
  { name: 'Sains Rumah Tangga', level: [14, 15] },
  { name: 'Sains Komputer', level: [14, 15] },
  { name: 'Grafik Komunikasi Teknikal', level: [14, 15] },
  { name: 'Pengajian Kejuruteraan Mekanikal', level: [14, 15] },
  { name: 'Pengajian Kejuruteraan Awam', level: [14, 15] },
  { name: 'Pengajian Kejuruteraan Elektrik dan Elektronik', level: [14, 15] },
  { name: 'Reka Cipta', level: [14, 15] },
  { name: 'Asas Kelestarian', level: [14, 15] },
  { name: 'Pembinaan Domestik', level: [14, 15] },
  { name: 'Membuat Perabot', level: [14, 15] },
  { name: 'Kerja Paip Domestik', level: [14, 15] },
  { name: 'Pendawaian Domestik', level: [14, 15] },
  { name: 'Kimpalan Arka dan Gas', level: [14, 15] },
  { name: 'Menservis Automobil', level: [14, 15] },
  { name: 'Menservis Motosikal', level: [14, 15] },
  { name: 'Menservis Peralatan Penyejukan dan Penyamanan Udara', level: [14, 15] },
  { name: 'Menservis Peralatan Elektrik Domestik', level: [14, 15] },
  { name: 'Rekaan dan Jahitan Pakaian', level: [14, 15] },
  { name: 'Katering dan Penyajian', level: [14, 15] },
  { name: 'Pemprosesan Makanan', level: [14, 15] },
  { name: 'Penjagaan Muka dan Dandanan Rambut', level: [14, 15] },
  { name: 'Asuhan dan Pendidikan Awal Kanak-Kanak', level: [14, 15] },
  { name: 'Gerontologi Asas dan Perkhidmatan Geriatrik', level: [14, 15] },
  { name: 'Landskap dan Nurseri', level: [14, 15] },
  { name: 'Akuakultur dan Haiwan Rekreasi', level: [14, 15] },
  { name: 'Tanaman Makanan', level: [14, 15] },
  { name: 'Seni Reka Tanda', level: [14, 15] },
  { name: 'Hiasan Dalaman Asas', level: [14, 15] },
  { name: 'Produksi Multimedia', level: [14, 15] },
  { name: 'Grafik Berkomputer', level: [14, 15] },
];


export const secondarySubjects: Subject[] = rawSecondarySubjects.map((rawSubject) => {
  return {
    ...rawSubject,
    id: secondarySubjectGeneratedId++,
  } as Subject;
});


export const subjects: Subject[] = primarySubjects.concat(secondarySubjects);
