export interface WeddingStoryItem {
  year: string;
  title: string;
  description: string;
}

export interface WeddingEventDetail {
  label: string;
  value: string;
}

export interface WeddingData {
  couple: {
    groom: string;
    bride: string;
    display: string;
  };
  date: {
    iso: string;
    display: string;
  };
  venue: string;
  city: string;
  quote: string;
  story: WeddingStoryItem[];
  eventDetails: WeddingEventDetail[];
  gallery: {
    src: string;
    alt: string;
  }[];
  youtube: {
    videoId: string;
  };
  localAudio: {
    src: string;
    title: string;
  };
}

export const weddingData: WeddingData = {
  couple: {
    groom: 'Jeremy',
    bride: 'Sylvania',
    display: 'Jeremy & Sylvania',
  },
  date: {
    iso: '2027-02-27T10:00:00+07:00',
    display: '27 Februari 2027',
  },
  venue: 'Grand Ballroom Cendana',
  city: 'Jakarta, Indonesia',
  quote:
    'Dalam setiap langkah, kami menemukan rumah satu sama lain. Kami mengundangmu untuk merayakan hari paling berharga kami.',
  story: [
    {
      year: '2022',
      title: 'Pertama Bertemu',
      description: 'Cerita kami dimulai dari obrolan sederhana yang berubah menjadi rasa nyaman.',
    },
    {
      year: '2024',
      title: 'Semakin Dekat',
      description: 'Kami belajar tumbuh bersama, saling menguatkan dalam setiap musim kehidupan.',
    },
    {
      year: '2026',
      title: 'Lamaran',
      description: 'Dengan doa keluarga, kami memutuskan melangkah menuju perjalanan seumur hidup.',
    },
    {
      year: '2027',
      title: 'Hari Bahagia',
      description: '27 Februari 2027 menjadi saksi janji suci Jeremy & Sylvania.',
    },
  ],
  eventDetails: [
    { label: 'Akad', value: 'Sabtu, 27 Februari 2027 • 10:00 WIB' },
    { label: 'Resepsi', value: 'Sabtu, 27 Februari 2027 • 18:30 WIB' },
    { label: 'Lokasi', value: 'Grand Ballroom Cendana, Jakarta' },
    { label: 'Dresscode', value: 'Earth tone & elegant attire' },
  ],
  gallery: [
    { src: '/assets/images/gallery-1.svg', alt: 'Momen Jeremy dan Sylvania 1' },
    { src: '/assets/images/gallery-2.svg', alt: 'Momen Jeremy dan Sylvania 2' },
    { src: '/assets/images/gallery-3.svg', alt: 'Momen Jeremy dan Sylvania 3' },
  ],
  youtube: {
    videoId: '2Vv-BfVoq4g',
  },
  localAudio: {
    src: '/assets/audio/romantic-placeholder.mp3',
    title: 'Romantic Placeholder Track',
  },
};
