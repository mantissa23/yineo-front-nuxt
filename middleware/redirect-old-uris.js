export default function (context) {
  oldUris.find((element) => {
    if (context.route.path === element) {
      const slug = element.substring(12)
      context.redirect(301, '/blog/' + slug)
    }
  })
}

/**
 * Uris when the blog was displayed by wordpress
 */
const oldUris = [
  '/2016/04/19/jsonp-avec-apache-solr-et-angular-js/',
  '/2016/05/03/apprendre-git-en-samusant/',
  '/2016/05/05/drupalcamp-de-nantes/',
  '/2017/07/25/une-reference-pour-devenir-un-ninja-du-javascript-funfunfunction/',
  '/2016/12/04/freelance-en-prestation-de-service-combien-facturer-vos-prestations-retour-dexperience/',
  '/2016/12/05/drupal-meetup-a-nantes-le-6-decembre/',
  '/2017/01/07/vue-js-angular-2-et-react-sont-dans-un-bateau/',
  '/2017/01/09/13-choses-que-vous-devez-savoir-a-propos-de-react/',
  '/2017/01/14/yineo-participe-a-la-traduction-de-vue-js/',
  '/2017/01/21/lancer-automatiquement-vos-tests-unitaires-javascript-lors-dun-git-push/',
  '/2017/02/03/react-versus-vuejs-premieres-impressions/',
  '/2017/02/10/nantes-drink-drupal/',
  '/2017/03/07/equite-parole-github-io-le-temps-de-paroles-des-candidats-a-la-presidentielles-en-json/',
  '/2017/03/18/manifeste-du-salariat-agile/',
  '/2017/03/21/equite-de-temps-de-parole-et-dantenne-a-la-presidentielle/',
  '/2017/03/23/javascript-get-params-from-url-obtenir-les-parametres-de-lurl-en-javascript/',
  '/2017/03/31/le-start-up-palace-a-nantes/',
  '/2017/04/03/lentreprise-liberee-ce-truc-de-bisounours-partie-1/',
  '/2017/04/20/lopendata-du-csa-la-fin-du-projet-equite-temps-de-parole/',
  '/2017/05/02/donnees-ouvertes-et-graphique-sur-levolution-du-vote-front-national-depuis-1988/',
  '/2017/05/09/cms-headless-et-drupal-8-headless-et-dynamisation-de-sites-statiques/',
  '/2017/06/07/nodejs-vscode/',
  '/2017/06/10/node-js-module-exports-vs-exports/',
  '/2017/06/10/la-portee-des-variables-en-ecma-script-6/',
  '/2017/06/14/drupal-8-headless-et-graphql/',
  '/2017/06/28/le-monde-de-drupal-headless-en-effervescence/',
  '/2017/07/10/creer-un-blog-de-cuisine-en-drupal-headless-avec-contenta-cms-et-vue-js-nuxt-js/',
  '/2017/07/13/generation-rechauffement-climatique/',
  '/2017/07/25/une-reference-pour-devenir-un-ninja-du-javascript-funfunfunction/',
  '/2016/05/25/drupal-commerce-declencher-order-first-paid-in-full-avec-le-paiement-dexemple/',
  '/2016/07/08/gerer-ses-mails-sans-galerer-pendant-le-developpement/',
  '/2016/07/29/error-the-server-quit-without-updating-pid-file-mac-os-mavericks/',
  '/2016/07/29/12-astuces-pour-mieux-teletravailler/',
  '/2016/11/14/npm-versus-bower/'
]
