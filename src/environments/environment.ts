// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseurl: 'https://bitbusinesstest.de/mobile/api/',
  fileurl: '',
  plans: {
    bodyAnlaysis: 'body analysis',
    itrade: 'automated trading',
    partnership: 'affiliate program'
  },
  videosEnglish: [{
    type: "register",
    initPlayer: "A4HAcLOLOO68!AkADF107s8tQ",
    id: "cincopa_16381961901703"
  },
  {
    type: "bodyAnlaysis",
    initPlayer: "A4HAcLOLOO68!AgMDkHFzzsRA",
    id: "cincopa_1638196190170"
  },
  {
    type: "partnership",
    initPlayer: "A4HAcLOLOO68!AcODu5kSqv52",
    id: "cincopa_16381961901702"
  },
  {
    type: "itrade",
    initPlayer: "A4HAcLOLOO68!AcKDfHlT5Nbx",
    id: "cincopa_16381961901701"
  },
  ],
  videosGermany: [{
    type: "register",
    initPlayer: "A4HAcLOLOO68!AYLDB_ELPWph",
    id: "cincopa_16381961901703"
  },
  {
    type: "bodyAnlaysis",
    initPlayer: "A4HAcLOLOO68!AcIDg-U_HQmk",
    id: "cincopa_1638196190170"
  },
  {
    type: "partnership",
    initPlayer: "A4HAcLOLOO68!A4FDt5Egq_C3",
    id: "cincopa_16381961901702"
  },
  {
    type: "itrade",
    initPlayer: "A4HAcLOLOO68!A0DDVH1qzACA",
    id: "cincopa_16381961901701"
  },
  ],
  englishPdfs: [
    {
      title: 'agb',
      link: 'https://myipro.family/legals/english/AGB.pdf'
    },
    {
      title: 'Legalnotice',
      link: 'https://myipro.family/legals/english/LegalNotice.pdf'
    },
    {
      title: 'privacypolicy',
      link: 'https://myipro.family/legals/english/PrivacyPolicy.pdf'
    },
    {
      title: 'tnc',
      link: 'https://myipro.family/legals/english/Widerrufsrecht.pdf'
    }
  ],
  germanyPdfs: [
    {
      title: 'agb',
      link: 'https://myipro.family/legals/german/AGB.pdf'
    },
    {
      title: 'Legalnotice',
      link: 'https://myipro.family/legals/german/Impressum.pdf'
    },
    {
      title: 'privacypolicy',
      link: 'https://myipro.family/legals/german/Datenschutz.pdf'
    },
    {
      title: 'tnc',
      link: 'https://myipro.family/legals/german/Widerrufsrecht.pdf'
    }
  ],
  englishErrors:[


  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
