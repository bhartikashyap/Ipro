// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   baseurl: 'https://bitbusinesstest.de/mobile/api/',
//  baseurl: 'https://myipro.family/mobile/api/',        //live url
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
    initPlayer: "A4HAcLOLOO68!A4MDJ1lNmnjV",
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
      link: 'http://myipro.family/legals/english/RigthOfWithdrawal.html'
    },
    {
      title: 'Legalnotice',
      link: 'https://myipro.family/legals/english/Legal-Notice.html'
    },
    {
      title: 'privacypolicy',
      link: 'http://myipro.family/legals/english/Privacy-Policy.html'
    },
    {
      title: 'tnc',
      link: 'http://myipro.family/legals/english/Terms-and-conditions.html'
    },
    {
      title: 'partner',
      link: 'http://myipro.family/legals/english/PartnerAgreement.html'
    }
  ],

 

  germanyPdfs: [
    {
      title: 'agb',
      link: 'http://myipro.family/legals/german/Widerrufsrecht.html'
    },
    {
      title: 'Legalnotice',
      link: 'https://myipro.family/legals/german/Impressum.html'
    },
    {
      title: 'privacypolicy',
      link: 'http://myipro.family/legals/german/Datenschutz.html'
    },
    {
      title: 'tnc',
      link: ' http://myipro.family/legals/german/AGB.html'
    },
    {
      title: 'partner',
      link: 'http://myipro.family/legals/german/PartnerVereinbarung.html'
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
