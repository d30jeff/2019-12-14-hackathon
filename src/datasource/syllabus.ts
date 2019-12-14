export interface Syllabus {
  [key: number]: {
    [key: string]: string[];
  };
}

let syllabusGeneratedId = 400;

export const syllabus: {
  [key: number]: any
} = {
  100: {
    'Tahun 1': [
      { title: 'Keluarga Penyayang' },
      { title: 'Masyarakat Muhibah' },
      { title: 'Pentingkan Kebersihan dan Kesihatan' },
      { title: 'Keselamatan' },
      { title: 'Negaraku Tercinta' },
      { title: 'Sains, Teknologi dan Inovasi' },
      { title: 'Lindungi Alam' },
      { title: 'Ekonomi, Keusahawanan dan Pengurusan Kewangan' },
    ],
    'Tahun 2': [
      { title: 'Kekeluargaan' },
      { title: 'Perpaduan' },
      { title: 'Kebersihan dan Kesihatan' },
      { title: 'Kebudayaan Kita' },
      { title: 'Jati Diri, Patriotisme dan Kewarganegaraan' },
      { title: 'Alam Sekitar dan Teknologu Hijau' },
      { title: 'Pertanian dan Penternakan' },
      { title: 'Integriti' },
    ],
    'Tahun 3': [
      { title: 'Kekeluargaan' },
      { title: 'Kebersihan dan Kesihatan' },
      { title: 'Keselamatan' },
      { title: 'Perpaduan' },
      { title: 'Kebudayaan, Kesenian dan Estetika' },
      { title: 'Kelestarian Alam' },
      { title: 'Pertanian dan Penternakan' },
      { title: 'Ekonomi, Keusahawanan dan Pengurusan Kewangan' },
    ],
    'Tahun 4': [
      { title: 'Aktiviti Keluarga' },
      { title: 'Amalan Kesihatan dan Kebersihan' },
      { title: 'Sentiasa Selamat' },
      { title: 'Masyarakat Penyayang' },
      { title: 'Kenali Warisan Bangsa' },
      { title: 'Pertanian dan Penternakan' },
      { title: 'Potret Malaysia' },
      { title: 'Ekonomi Berwawasan' },
      { title: 'Bumi Indah Rakyat Bertuah' },
      { title: 'Meneroka Sains dan Teknologi' },
    ],
  },
};
