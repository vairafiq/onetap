const wpPot = require('wp-pot');
 
wpPot({
  destFile: './languages/onetap.pot',
  domain: 'onetap',
  package: 'Simple Todo',
  src: './**/*.php'
});