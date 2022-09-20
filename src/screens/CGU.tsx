import React from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {withTheme, Text} from 'react-native-paper';

const CGU: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.tinyLogo}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <Text style={styles.desc}>
          MOZAH INVEST, SARL UNIPERSONNELLE situé à Abidjan COCODY Riviera
          Palmeraie 27 BP 032 Abidjan 27 et au capital de 1 000 000 FCFA. N°RCCM
          du siège : CI-ABJ-2016-B-17004
        </Text>
        <Text style={styles.desc}>
          Mozah Invest est une plateforme innovante de financement de projets
          participatif en Afrique de l'Ouest précisément en Côte d'Ivoire dédiée
          à divers projets et adossée un Jeton.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST exploite un site internet (ci-après « le Site ») aussi
          dénommé mozah-invest.com, dont l’adresse est la suivante :
          https://www.mozah-invest.com
        </Text>
        <Text style={styles.desc}>
          Les internautes accédant à ce Site et intéressés par le financement
          participatif dédié aux projets peuvent devenir « MEMBRE(S) » sous
          réserve de la validation de leur profil induisant la validation de
          leurs documents d’identités fournis, afin de bénéficier notamment des
          services proposés suivants (ci- après les « Services ») : - accès à la
          page d’accueil - newsletters- création d’un espace personnel - accès
          aux pages des projets en cours de financement - accès à la marketplace
          - et plus généralement au contenu édité sur le site
        </Text>
        <Text style={styles.desc}>
          Les présentes Conditions Générales d’Utilisation (ci-après les «
          Conditions Générales » ou « CGU ») ont pour objet de définir les
          conditions selon lesquelles un utilisateur peut devenir MEMBRE et
          accéder aux Services.
        </Text>
        <Text style={styles.desc}>
          Le présent contrat (ci-après le « Contrat ») est constitué des
          Conditions Générales régies par la loi française.
        </Text>
        <Text style={styles.desc}>
          Avant de devenir « MEMBRE » l’internaute est invité à prendre
          connaissance des Conditions Générales de notre Prestataire de Services
          de Paiement et/ou de Monnaie Électronique ou tout intermédiaire
          mandaté par la Plateforme figurant sur le Site, disponibles ici, qui
          décrivent le fonctionnement des opérations de versement et de
          remboursement qui pourraient être réalisées sur votre compte.
        </Text>
        <Text style={styles.desc}>
          En cochant la case « J’accepte les Conditions Générales d’Utilisation
          » et en cliquant sur la case « J’accepte », le MEMBRE déclare accepter
          irrévocablement l’ensemble des Conditions Générales ainsi que les
          Conditions Générales du Prestataire de Services de Paiement et/ou de
          Monnaie Électronique ou tout intermédiaire mandaté par la Plateforme
          figurant sur le Site en cochant la case prévue à cet effet.
        </Text>
        <Text style={styles.desc}>‍Compte membre – Inscription</Text>
        <Text style={styles.desc}>
          1.Conditions d’accès au Site ‍La navigation sur ce site est soumise à
          la réglementation en vigueur. L’internaute est invité à consulter
          cette page régulièrement, des mises à jour pouvant avoir été
          effectuées depuis sa dernière visite. L’accès au site peut faire
          l’objet de restrictions à l’égard de certaines personnes ou de
          certains pays, soit en vertu d’interdictions générales, soit en vertu
          de règles de commercialisation spécifiques.
        </Text>
        <Text style={styles.desc}>
          2.Conditions d’accès aux Services ‍Les Services sont réservés aux
          personnes juridiquement capables de souscrire des contrats en droit
          français ; elles doivent expressément s’assurer qu’elles sont
          juridiquement autorisées à se connecter au présent site dans le pays
          duquel la connexion est établie et de déclarer leur pays de résidence,
          sous leur propre responsabilité. Les Services ne sont donc pas
          accessibles ni destinés aux mineurs. Aucune commercialisation active,
          ni démarchage, n’est réalisé par MOZAH INVEST. Les internautes
          résidant en dehors de la France doivent s’assurer des règles qui leur
          sont applicables. En particulier, l’accès au Site ne constitue en
          aucun cas un quelconque démarchage ou conseil au Royaume-Uni ou aux
          Etats-Unis, aucun des Services proposés sur le Site n’est donc destiné
          à une personne résidant dans ces États.
        </Text>
        <Text style={styles.desc}>
          3.Conditions Renseignements fournis par le MEMBRE au Site ‍Lors de son
          inscription en ligne, le MEMBRE s’engage à compléter le formulaire
          d’inscription avec exactitude et sincérité, en fournissant des
          informations exactes, complètes et actualisées. Le MEMBRE devra
          remplir l’ensemble des champs obligatoires figurant dans les
          formulaires d’inscription. En cas de changement de l’un des éléments
          obligatoires figurant dans le formulaire d’inscription dans sa
          situation, le MEMBRE s’engage à mettre à jour immédiatement à jour ces
          informations le concernant via le Site sur son espace MEMBRE. MOZAH
          INVEST ne saurait être tenue responsable au cas où elle n’aurait pas
          été avisée d’un changement de situation du MEMBRE. Le MEMBRE reconnaît
          que créer une fausse identité est passible de sanctions et s’engage à
          ne pas induire les tiers en erreur et à tenir à jour sans délai les
          données personnelles qu’il a communiquées lors de son inscription en
          ligne. Dans l’hypothèse où le MEMBRE fournirait des informations
          fausses, inexactes, périmées, incomplètes ou en violation avec les
          dispositions du présent article, MOZAH INVEST sera en droit de
          suspendre ou de supprimer le compte du MEMBRE sans délai et de lui
          refuser immédiatement, et pour le futur, l’accès à tout ou partie des
          Services.
        </Text>
        <Text style={styles.desc}>
          ‍4. Création et utilisation du compte ‍Pour créer un compte, le MEMBRE
          doit choisir un identifiant et un mot de passe qui lui permettront
          d’accéder aux Services et de gérer son compte de façon à ce que le
          MEMBRE seul puisse bénéficier d’un accès à ses informations
          personnelles. Ce compte est strictement personnel et le MEMBRE
          s’interdit de le partager ou le céder à qui que ce soit. L’identifiant
          et le mot de passe valent preuve de l’identité du MEMBRE et
          l’engagement sur toute utilisation faite des Services par son
          intermédiaire. Le MEMBRE peut modifier les informations relatives à
          son compte à l’aide de son identifiant et de son mot de passe. Le
          MEMBRE est entièrement responsable de la conservation et de
          l’utilisation de son identifiant et de son mot de passe. Il doit
          prendre toutes les mesures pour empêcher une utilisation non autorisée
          ou frauduleuse de son espace personnel. À cet effet, il doit modifier
          régulièrement son mot de passe dans le respect des critères de
          sécurité qui lui sont imposés par le Site. Si le MEMBRE constate ou
          suspecte une utilisation non autorisée ou frauduleuse de son
          identifiant et/ou mot de passe ou toute brèche dans la sécurité, il
          doit alerter immédiatement MOZAH INVEST par téléphone ou par courrier
          électronique adressé à contact@mozahinvest.com .
        </Text>
        <Text style={styles.desc}>
          5.Emails En validant son inscription, le MEMBRE accepte de recevoir
          les emails nécessaires à la bonne utilisation de la plateforme, comme
          par exemple dès qu’un nouveau bien arrive sur le marché primaire. Le
          MEMBRE peut également s’abonner à la newsletter afin de recevoir
          d’autres types de mails, tels que des articles, des actualités etc.
          Dans une démarche responsable, MOZAH INVEST fait ses meilleurs efforts
          pour limiter son envoi de mails.
        </Text>
        <Text style={styles.desc}>
          ‍Le service proposé ‍Le MEMBRE peut souscrire à des contrats de
          cession de revenus futurs adossés à des opérations de financement de
          biens immobiliers de rapport qui sont présentées sur la plateforme
          MOZAH INVEST en suivant le processus d’investissement sur le site
          www.mozah-invest.com. La procédure de versement des fonds est définie
          dans le contrat que le MEMBRE qui souhaite investir peut télécharger
          directement depuis la page de chaque projet. L’investissement ne sera
          effectué et les fonds ne seront totalement encaissés par la société
          porteuse du projet qu’une fois le montant recherché par l’entreprise
          est atteint. Si l’opération n’est pas réalisée, les fonds souscrits
          par le MEMBRE lui seront intégralement remboursés, dans un délai
          raisonnable, sans frais. Ce remboursement ne pourra donner lieu à
          aucun dédommagement complémentaire du MEMBRE. Aucune information
          présentée sur le Site ne constitue un conseil juridique, fiscal ou un
          conseil dans tout autre domaine.
        </Text>
        <Text style={styles.desc}>
          Certaines informations présentées sur le Site peuvent contenir des
          prévisions ou autres déclarations prospectives concernant des
          événements futurs ou la performance financière des projets.
        </Text>
        <Text style={styles.desc}>
          Ces déclarations ne sont que des prévisions, des opinions ou des
          estimations et la réalité peut se révéler très différente. A
          l’inscription à mozah invest sur nouveau projet, les investisseurs
          recevront des tokens selon la valeur de leur souscription et qu’ils
          devront épargner dans un portefeuille Metamask pour ensuite obtenir
          12% de la valeur du Token selon le cout du marché en USDT .
        </Text>
        <Text style={styles.desc}>
          Données du membre ‍En utilisant le Site et en s’inscrivant, le MEMBRE
          reconnaît avoir pris connaissance et accepter le traitement de ses
          données personnelles par MOZAH INVEST conformément à la loi applicable
          et aux dispositions de la Politique de Confidentialité.
        </Text>
        <Text style={styles.desc}>
          ‍Sécurité ‍MOZAH INVEST ne garantit pas que le Site soit accessible
          sans interruption. MOZAH INVEST pourra interrompre l’accès au Site
          pour des raisons de maintenance et en cas d’urgence notamment.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST s’engage à faire ses meilleurs efforts pour sécuriser
          l’accès, la consultation et l’utilisation des Services conformément
          aux règles d’usages de l’Internet.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST n’est pas responsable de l’altération, la perte ou la
          transmission accidentelle de données ou de l’envoi de virus via les
          contenus postés sur le Site par le MEMBRE.
        </Text>
        <Text style={styles.desc}>
          En conséquence, la responsabilité de MOZAH INVEST ne saurait être
          engagée notamment dans les cas suivants : - interruptions momentanées
          d’une durée de quelques minutes, ou quelques heures, pour la mise à
          jour du Site- Difficultés de fonctionnement ou interruption momentanée
          des Services indépendamment de la volonté de MOZAH INVEST notamment en
          cas d’interruption des services d’électricité ou de communications
          électroniques - Interruptions momentanées des Services nécessaires aux
          évolutions ou maintenance - Défaillance ou dysfonctionnements du
          réseau Internet dans la transmission de messages ou documents.
        </Text>
        <Text style={styles.desc}>
          Le MEMBRE s’engage à ne pas utiliser de dispositifs ou logiciels de
          toutes sortes afin de perturber ou tenter de perturber le bon
          fonctionnement du Site. Le MEMBRE s’engage à ne pas engager d’action
          qui imposerait une charge disproportionnée sur les infrastructures de
          MOZAH INVEST.
        </Text>
        <Text style={styles.desc}>
          ‍Propriété intellectuelle ‍Le Site, son contenu, ses textes et
          illustrations, ses photographies et images sont la propriété de MOZAH
          INVEST et/ou de tiers contractuellement liés à MOZAH INVEST,
          titulaires des droits de propriété intellectuelle du Site. Il est
          interdit de copier et/ou de télécharger tout ou partie du Site, de son
          contenu, de son catalogue, de ses textes et illustrations, de ses
          photographies et images. Les photos comme les informations présentées
          sur le site internet n’ont aucune valeur contractuelle.
        </Text>
        <Text style={styles.desc}>
          ‍Le MEMBRE s’engage en conséquence à : - Ne télécharger sur son
          ordinateur le contenu du Site que pour un usage personnel et limité
          dans le temps - N’imprimer sur support papier les pages du Site
          téléchargées qu’à la condition que lesdites copies soient strictement
          limitées à un usage personnel - Ne pas diffuser sur les réseaux
          sociaux et de manière générale à des tiers des informations
          disponibles sur accès restreint pour les MEMBRES du site
        </Text>
        <Text style={styles.desc}>
          Le MEMBRE s’interdit notamment de modifier, copier, reproduire,
          télécharger, diffuser, transmettre, exploiter commercialement et/ou
          distribuer de quelque façon que ce soit les Services, les pages du
          Site, ou les codes informatiques des éléments composant les Services
          et le Site.
        </Text>
        <Text style={styles.desc}>
          Le MEMBRE reconnaît que la violation de l’un des droits d’auteur de
          MOZAH INVEST constitue un délit de contrefaçon puni en France par
          l’article L 335-2 du Code de la Propriété Intellectuelle et passible
          de trois ans d’emprisonnement et de 300 000 euros d’amende. En outre,
          il est rappelé qu’aucun lien hypertexte ne peut renvoyer sur le Site
          sans l’autorisation préalable et expresse de MOZAH INVEST. A défaut
          d’autorisation, un tel lien est considéré comme constitutif du délit
          de contrefaçon, délit dont les peines ont d’ores et déjà été rappelées
          ci-dessus.
        </Text>
        <Text style={styles.desc}>Atteinte aux droits de tiers</Text>
        <Text style={styles.desc}>
          Le MEMBRE garantit et indemnisera à première demande MOZAH INVEST
          contre tout dommage subi par MOZAH INVEST et contre toute action en
          responsabilité qui serait engagée à l’encontre de MOZAH INVEST sur le
          fondement de la violation d’un droit quelconque d’un tiers résultant
          de l’utilisation des Services.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST est propriétaire et/ou dispose de l’autorisation
          d’utiliser l’ensemble des droits portant sur les logos, marques,
          signes distinctifs ainsi que les bases de données et logiciels
          utilisés dans le cadre de l’exploitation du Site.
        </Text>
        <Text style={styles.desc}>
          Toute représentation ou reproduction totale ou partielle des logos,
          marques, signes distinctifs ainsi que les bases de données utilisées
          sur le Site par quelque procédé que ce soit sans l’autorisation
          expresse et préalable de MOZAH INVEST est interdite et constituerait
          une contrefaçon.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST se réserve le droit de prendre toutes les mesures qu’elle
          jugerait adéquates afin d’empêcher ou de mettre un terme à l’atteinte
          à ses droits d’auteur ou aux droits d’auteur de tiers, sans qu’aucune
          responsabilité ne puisse lui être imputée de ce fait.
        </Text>
        <Text style={styles.desc}>‍Garantie / Responsabilité</Text>
        <Text style={styles.desc}>
          ‍Dans le cas où la responsabilité de MOZAH INVEST serait
          judiciairement recherchée à raison d’un manquement par un MEMBRE aux
          obligations qui lui incombent aux termes du Contrat, MOZAH INVEST
          pourra appeler ce dernier en garantie. Par conséquent, le MEMBRE
          garantit MOZAH INVEST à l’occasion de tout trouble de droit ou de
          fait, et notamment de toute action dirigée contre ce dernier en
          relation avec les présentes, et en supporterait tous les frais, y
          compris les frais de procédure, dommages et intérêts y afférent.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST s’engage à mettre en œuvre tous les moyens nécessaires
          afin d’assurer au mieux la fourniture des Services qu’elle propose au
          MEMBRE.
        </Text>
        <Text style={styles.desc}>
          Néanmoins, MOZAH INVEST ne garantit pas que les Services proposés
          répondent aux besoins et exigences du MEMBRE.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST décline toute responsabilité en cas d’erreur,
          d’inexactitude ou d’omission contenue dans les informations mise à la
          disposition des MEMBRES.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST décline toute responsabilité en cas d’annulation ou de
          report d’une opération de financement présentée sur le Site.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST décline également toute responsabilité en cas de perte de
          données, altération, destruction ou tout dommage affectant le matériel
          ou le système informatique du MEMBRE ou d’un tiers et qui résulterait
          de la navigation sur le Site ou de l’utilisation des Services.
        </Text>
        <Text style={styles.desc}>
          Sa responsabilité ne saurait enfin être engagée en cas de force
          majeure ou de fait indépendant de sa volonté, notamment en cas
          d’interruption ou de dysfonctionnement des Services résultant d’une
          défaillance du réseau téléphonique ou du fournisseur d’accès à
          Internet du MEMBRE.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST n’est pas responsable de l’utilisation qui pourra être
          faite par le MEMBRE des informations qu’il pourra trouver sur le Site.
        </Text>
        <Text style={styles.desc}>Non-garantie des investissements</Text>
        <Text style={styles.desc}>
          Le MEMBRE reconnaît être conscient du fait que le financement
          participatif en royalties présente un risque de perte en capital et de
          non-liquidité. Il appartient au MEMBRE de gérer son patrimoine
          conformément à sa situation financière, ses objectifs et son aversion
          aux risques. Il est donc pleinement conscient et responsable des
          décisions d’investissement ou de désinvestissement qu’il prend et
          déclare comprendre et accepter les risques inhérents aux
          investissements qu’il réaliserait par l’intermédiaire de MOZAH INVEST.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST ne sera donc pas tenue responsable des conséquences
          financières et fiscales des investissements dont le MEMBRE conserve
          l’entière initiative et la responsabilité quant à ses choix faits sur
          le Site, la mission de conseil de MOZAH INVEST n’emportant pas mandat
          de gestion.
        </Text>
        <Text style={styles.desc}>
          Le MEMBRE est invité à prendre le temps de la réflexion et à lire
          attentivement la documentation mise à sa disposition sur le Site et à
          vérifier toutes les informations qu’il jugera utile avant de prendre
          toute décision d’investissement.
        </Text>
        <Text style={styles.desc}>
          Le MEMBRE s’engage donc expressément et irrévocablement à ne pas
          investir dans des projets présentés sur le Site, dans les cas où : -
          Il jugerait que les informations dont il dispose sont insuffisantes
          pour apprécier pleinement l’opportunité d’investissement et ses
          risques - Sa situation personnelle, familiale, patrimoniale,
          financière et/ou fiscale ne lui permettait pas d’investir au regard
          des risques présentés par le produit financier dans lequel il envisage
          d’investir.
        </Text>
        <Text style={styles.desc}>‍Durée et fin du contrat</Text>
        <Text style={styles.desc}>
          ‍Le Contrat est conclu entre MOZAH INVEST et le MEMBRE pour toute la
          durée d’utilisation par le MEMBRE du Site et des Services. Le MEMBRE
          peut résilier le présent contrat à tout moment et sans préavis, en
          adressant un email à : contact@mozahinvest.com
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST s’engage pour sa part à respecter un préavis de 5 jours
          avant toute résiliation.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST pourra résilier le Contrat sans préavis en cas d’abus de
          comportement illicite ou frauduleux du MEMBRE ou plus généralement en
          cas de non-respect de l’une quelconque des conditions du Contrat.
        </Text>
        <Text style={styles.desc}>
          MOZAH INVEST décline toute responsabilité envers le MEMBRE ou tout
          tiers en raison de l’interruption, de la suspension ou de la
          résiliation, pour quelque cause que ce soit, du Contrat.
        </Text>
        <Text style={styles.desc}>Modification du contrat ou des services</Text>
        <Text style={styles.desc}>
          ‍MOZAH INVEST se réserve la possibilité de modifier tout ou partie du
          Contrat afin de l’adapter aux évolutions de son exploitation, et/ou à
          l’évolution de la législation et/ou aux évolutions des Services
          proposés.
        </Text>
        <Text style={styles.desc}>
          ‍Informations relatives aux offres de parrainage
        </Text>
        <Text style={styles.desc}>‍Définitions</Text>
        <Text style={styles.desc}>
          « Filleul » : désigne le Membre qui s’est inscrit sur Site à l’aide du
          lien d’inscription du Parrain. « Parrain » : désigne le Membre ayant
          un profil investisseur validé, personne physique, dont le lien
          d’inscription a été utilisé par le Filleul pour créer son Compte sur
          le Site. « Site » : désigne le site internet accessible en ligne à
          l’adresse www.mozah-invest.com « Lien d’inscription » : désigne l’URL
          unique qui permet à un nouveau Membre d’être identifié au moment de la
          création de son Compte sur le Site comme étant le filleul d’un autre
          Membre.
        </Text>
        <Text style={styles.desc}>
          Le parrainage n’est pas limité dans l’investissement d’un nouveau
          projet. La souscription à un autre projet pendant que l’on est déjà
          membre est éligible à la commission de parrainage.
        </Text>
        <Text style={styles.desc}>‍Objet</Text>
        <Text style={styles.desc}>
          Le site propose une offre de parrainage qui rémunère de 1% le parrain
          et 1% le filleul sur la souscription a un projet effectué par le
          filleul, durant les 3 premiers mois qui suivent son inscription. MOZAH
          INVEST pourra mettre fin à toute offre de parrainage en cours sans
          préavis et sans notification au Membre.
        </Text>
        <Text style={styles.desc}>
          Conditions à respecter par le Parrain pour bénéficier des offres de
          parrainage :
        </Text>
        <Text style={styles.desc}>
          Le Parrain ne doit pas être un investisseur qualifié (un investisseur
          qualifié est une personne définie au point e de l’article 2 du
          règlement (UE) no 2017/1129 du 14 juin 2017) ou exercer une activité
          de conseil en investissement.
        </Text>
        <Text style={styles.desc}>
          Le parrain s’engage à ne pas diffuser de publicité payante (tous
          canaux confondus) ayant pour but d&#39;exposer leur code de
          parrainage.
        </Text>
        <Text style={styles.desc}>
          Si le Parrain dispose de plusieurs Comptes, il ne peut bénéficier de
          l’offre de parrainage que par l’intermédiaire d’un seul de ses
          Comptes.
        </Text>
        <Text style={styles.desc}>
          Dans le cas où le parrain serait amené à renseigner les coordonnées de
          ses filleuls, le parrain atteste qu’il a obtenu l’accord de chacun de
          ses filleuls pour être contactés par MOZAH INVEST dans le cadre de
          l’offre de parrainage.
        </Text>
        <Text style={styles.desc}>
          Conditions à respecter par le Filleul pour bénéficier des offres de
          parrainage :
        </Text>
        <Text style={styles.desc}>
          Le Filleul ne doit pas être un Membre du Site avant de s’être inscrit
          à l’aide du lien d’inscription de son Parrain.
        </Text>
        <Text style={styles.desc}>Versement de la prime de parrainage :</Text>
        <Text style={styles.desc}>
          La prime de parrainage pourra être invalidée si le Parrain et/ou le
          Filleul n’a pas respecté les conditions du programme de parrainage.
          Conditions de versement le bonus de parrainage s&#39;applique sur les
          investissements effectués dans la période des 3 mois suivant
          l’inscription du filleul.
        </Text>
        <Text style={styles.desc}>
          La prime de parrainage est versée aux conditions cumulatives suivantes
          : L’argent a bien été investi dans un nouveau projet A partir du
          moment ou le projet est définitivement financé. Le bonus de parrainage
          ne s’applique pas dans le cadre d’un investissement sur un projet
          secondaire.
        </Text>
        <Text style={styles.desc}>
          Les primes de parrainage versées en numéraire, sont à déclarer en
          bénéfices non commerciaux (art. 92 du code des impôts).
        </Text>
        <Text style={styles.desc}>
          Cependant, il est régulièrement constaté par l’administration fiscale
          une tolérance à hauteur de 1500€ par an par personne.
        </Text>
        <Text style={styles.desc}>
          C’est la raison pour laquelle MOZAH INVEST ne s’occupe pas pour le
          moment de faire cette déclaration aux impôts et laisse chaque
          contribuable le soin d’y procéder respectivement.
        </Text>
        <Text style={styles.desc}>
          Cependant, au-delà de 1500€/an/personne de primes de parrainage, nous
          demanderons soit une facture, soit un justificatif de déclaration aux
          impôts.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tinyLogo: {
    height: 100,
    marginVertical: 10,
    width: 'auto',
  },
  desc: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#000',
  },
  email: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});

export default withTheme(CGU);
