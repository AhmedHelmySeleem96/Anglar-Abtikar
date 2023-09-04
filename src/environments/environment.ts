// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //url:" http://xtra.ddns.me:9101",
  url:"https://localhost:7500",
  signalrUrl:"https://localhost:7500",
  //signalrUrl:"http://xtra.ddns.me:9101/",
  host:"http://xtra.ddns.me:9101/",
  facebookUrl :'https://www.facebook.com/sharer.php?u=',
  twitterUrl:'https://twitter.com/intent/tweet?text=',
  whatsappUrl:'https://api.whatsapp.com/send?text=',
  gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&su=salmanMajed&body=',
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
