import React from "react";
import "./faq.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * Composant permettant d'afficher la FAQ
 */
const Faq = () => {
  return (
    <div className="body">

      <div className="bannerBoxFaq">

        <h1 className="h1Faq">Bienvenue dans notre FAQ !</h1>
        <h1 className="h1Faq">En quoi pouvons-nous vous aider ?</h1>

      </div>
      <div className="sidebar">
        <ul className="ul">
          <li style={{ border: "none", boxShadow: "none" }} className="liFaq"><a className="selected" href="#Base">Base</a></li>
          <li style={{ border: "none", boxShadow: "none" }} className="liFaq"><a href="#Compte">Compte</a></li>
          <li style={{ border: "none", boxShadow: "none" }} className="liFaq"><a href="#Monitoring">Surveillance</a></li>
          <li style={{ border: "none", boxShadow: "none" }} className="liFaq"><a href="#Confidentialité">Confidentialité</a></li>
        </ul>

      </div>
      <section className="faq">


        {/* SECTION BASE */}

        <ul style={{ paddingTop: "0.1em" }} id="Base" className="faq-group">

          <li className="faq-title"><h2 className="h2Faq">Base</h2></li>
          <li className="liFaq">
            <div className="trigger" href="#0">Comment puis-je m'inscrire ?</div>
            <div className="faq-content">
              <p>Pour vous inscrire, cliquez sur le bouton «<NavLink style={{ textDecorationLine: "none" }} id="linkToLogin" className="btn-Faq" exact to="/register">INSCRIPTION</NavLink>» situé en haut à droite sur la barre de navigation de notre application et remplissez le formulaire d'inscription.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment puis-je me connecter ?</div>
            <div className="faq-content">
              <p>Pour vous connecter, cliquez sur le bouton «<NavLink style={{ textDecorationLine: "none" }} id="linkToLogin" className="btn-Faq" exact to="/login">CONNEXION</NavLink>» situé en haut à droite sur la barre de navigation de notre application et remplissez le formulaire de connexion. Si vous n'êtes pas dépositaire d'un compte, <NavLink style={{ color: "red" }} className="under" id="linkToRegister" exact to="/register">
                Inscrivez-vous d'abord.</NavLink></p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment puis-je accéder à la page d'accueil ?</div>
            <div className="faq-content">
              <p>Vous pouvez accéder à tout moment à la page d'accueil en cliquant sur le logo
          «<NavLink className="logoFaq" style={{ textDecorationLine: "none" }}
                  id="linkToHome" exact to="/home"> W E B M O N </NavLink>» situé sur la barre de navigation de notre application.</p>
            </div>
          </li>

        </ul>


        {/* SECTION COMPTE*/}


        <ul style={{ paddingTop: "0.1em" }} id="Compte" className="faq-group">

          <li className="faq-title"><h2 className="h2Faq">Compte</h2></li>
          <li className="liFaq">
            <div className="trigger" href="#0">Pourquoi n'arrivé-je pas à m'inscrire ?</div>
            <div className="faq-content">
              <p>Vérifiez que l'adresse e-mail entrée existe et qu'elle ne soit pas déjà utilisée sur notre application. De même, vérifiez que le mot de passe défini respecte les contraintes et que sa confirmation soit également conforme.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Pourquoi n'arrivé-je pas à me connecter ?</div>
            <div className="faq-content">
              <p>Vérifiez que vous avez entré la bonne adresse e-mail ainsi que le bon mot de passe associé. Si vous n'êtes pas dépositaire d'un compte, <NavLink style={{ color: "red" }} id="linkToRegister" className="under" exact to="/register">
                Inscrivez-vous d'abord.</NavLink></p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Que faire si j'ai oublié mon mot de passe ?</div>
            <div className="faq-content">
              <p>Si vous avez oublié votre mot de passe, cliquez sur <Link id="linkToPassLost" className="linkDesignLogin under" to="/passlost">Mot de passe oublié ?</Link> et entrez
          l'adresse e-mail de votre compte sur le formulaire de réinitialisation du mot de passe pour que nous puissions vous envoyer un mail contenant les instructions sur comment réinitialiser votre mot de passe.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment accéder aux paramètres de mon compte ?</div>
            <div className="faq-content">
              <p><NavLink style={{ color: "red" }} id="linkToLogin" className="under" exact to="/login">Connectez-vous</NavLink> d'abord si cela n'a pas été fait puis rendez-vous sur la page <NavLink style={{ color: "red" }} className="under" exact to="/Settings">Paramètres du compte</NavLink> accessible via le menu déroulant situé sur la barre de navigation de notre application. Cette rubrique permet le changement du mot de passe actuel, de l'adresse e-mail actuelle ainsi que la suppression du compte.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment changer mon adresse e-mail ?</div>
            <div className="faq-content">
              <p>Pour changer votre adresse e-mail, rendez-vous sur la page <NavLink style={{ color: "red" }} className="under" exact to="/Settings">Paramètres du compte</NavLink> puis cliquez sur le bouton «<span className="btn-Faq2">MODIFIER</span>». Remplissez le formulaire pour que nous puissions vous envoyer un mail contenant les instructions sur comment changer votre adresse e-mail.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment changer mon mot de passe ?</div>
            <div className="faq-content">
              <p>Pour changer votre mot de passe, rendez-vous sur la page <NavLink style={{ color: "red" }} className="under" exact to="/Settings">Paramètres du compte</NavLink> puis  puis cliquez sur le bouton «<span className="btn-Faq2">MODIFIER</span>».Remplissez le formulaire pour que nous puissions vous envoyer un mail contenant les instructions sur comment changer votre mot de passe.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment supprimer mon compte ?</div>
            <div className="faq-content">
              <p>Pour supprimer votre compte, rendez-vous sur la page <NavLink style={{ color: "red" }} className="under" exact to="/Settings">Paramètres du compte</NavLink> puis cliquez sur le bouton «<span className="btn-Faq2">SUPPRIMER LE COMPTE</span>». Attention, après confirmation de votre part, cette action sera définitive et irréversible.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Je me suis inscrit(e) mais je n'ai pas reçu de mail de confirmation.</div>
            <div className="faq-content">
              <p>Vérifiez que le mail de confirmation n’ait pas été placé dans votre dossier spam/courriers indésirables dans votre boîte mail. Sinon, recommencez la procédure d’inscription.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Je n'arrive pas à me connecter après avoir réinitialisé mon mot de passe.</div>
            <div className="faq-content">
              <p>Vérifiez que vous utilisez la même adresse e-mail que lors de la procédure de réinitialisation du mot de passe et que le nouveau mot de passe soit correct.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Mon adresse e-mail et/ou mon mot de passe n'ont pas été reconnus.</div>
            <div className="faq-content">
              <p>Vérifiez que l’adresse e-mail et que le mot de passe associé soient corrects mais également que le compte soit déjà existant dans notre application. Si ce n’est pas le cas, <NavLink style={{ color: "red" }} className="under" id="linkToRegister" exact to="/register">
                Inscrivez-vous</NavLink> ou <Link style={{ color: "red" }} id="linkToPassLost" className="linkDesignLogin under" to="/passlost">Réinitialisez votre mot de passe.</Link></p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment puis-je me déconnecter ?</div>
            <div className="faq-content">
              <p>Pour vous déconnecter, cliquez sur <span style={{ color: "red", marginLeft: "0em" }} className="btn-logOut" onClick={() => this.LogOut()}>Déconnexion</span> situé dans le menu déroulant de la barre de navigation de notre application.</p>
            </div>
          </li>

        </ul>


        {/*MONITORING*/}



        <ul style={{ paddingTop: "0.1em" }} id="Monitoring" className="faq-group">



          <li className="faq-title"><h2 className="h2Faq">Surveillance</h2></li>
          <li className="liFaq">
            <div className="trigger" href="#0">Comment accéder et/ou où puis-je voir mes pages monitorées ?</div>
            <div className="faq-content">
              <p><NavLink style={{ color: "red" }} id="linkToLogin" exact to="/login">Connectez-vous</NavLink> d’abord si cela n'a pas été fait puis rendez-vous sur la page <NavLink style={{ color: "red" }} className="under" exact to="/monitoredPages">Mes pages monitorées</NavLink> accessible via le menu déroulant situé sur la barre de navigation de notre application.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Quelle méthode de détection de changements utilise W E B M O N ?</div>
            <div className="faq-content">
              <p>Nous utilisons la méthode de la comparaison visuelle : <br /><br />Lorsqu'un utilisateur entre une URL valide, nous prenons une capture d'écran de celle-ci et en supprimons les publicités et les trackers possiblement présents.
              Ensuite, à intervalle régulier, notre programme reprend une capture d'écran avant de la comparer à la précédente. Si une modification est détectée, l'utilisateur est alerté par mail.
            </p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Où et comment entrer le lien d'une page web ?</div>
            <div className="faq-content">
              <p>Après vous être connecté(e), rendez-vous sur <NavLink style={{ color: "red" }} className="under" exact to="/monitoredPages">Mes pages monitorées</NavLink>. Entrez l’URL de la page voulue en respectant la forme « https:// » ou « http:// » (Copiez son lien directement depuis la barre de recherche d’un navigateur web puis collez le dans notre barre de recherche pour éviter quelconque erreur) puis cliquez sur le bouton «
            <span className="btn-Faq2">AJOUTER</span>».</p>
            </div>
          </li>


          <li className="liFaq">
            <div className="trigger" href="#0">Pourquoi n’arrivé-je pas à entrer une URL ?</div>
            <div className="faq-content">
              <p>Vérifiez que l’URL entrée existe et respecte le format « https://exemple.com » ou « http://exemple2.com ». Nous vous recommandons de copier le lien de la page désirée depuis un navigateur web puis de le coller dans notre barre de recherche pour éviter cette erreur. </p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment supprimer une page web / arrêter de faire monitorer une page web ?</div>
            <div className="faq-content">
              <p>Dans les deux cas, cliquez sur l’icône  « <i style={{ marginRight: "0.5em", float: "none" }} className="fa fa-trash faImage"></i>» placé sur la même ligne que le lien de la page concernée pour la supprimer ou arrêter de la faire monitorer.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Puis-je avoir un aperçu de la capture d'écran de la page web à faire monitorer ?</div>
            <div className="faq-content">
              <p>Pour avoir un aperçu de la capture d'écran de la page web à faire monitorer, il faut d'abord entrer son URL dans notre barre de recherche. Une fois validée, cliquez sur l'icône  « <i style={{ marginRight: "0.5em", float: "none" }} className="fa fa-image faImage"></i>» placé sur la même ligne que le lien de la page concernée.</p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Comment maximiser les performances du service ?</div>
            <div className="faq-content">
              <p> Pour maximiser les performances de W E B M O N, il est conseillée de faire monitorer des pages web pertinentes, c'est-à-dire des pages qui ne changent que peu souvent et qui sont peu dynamiques telles que des blogs.
             </p>
            </div>
          </li>

          <li className="liFaq">
            <div className="trigger" href="#0">Pourquoi n'ai-je pas reçu de notification de modifications sur une de mes pages monitorées ?</div>
            <div className="faq-content">
              <p>Vérifiez que le mail de notification de modifications n’ait pas été placé dans votre dossier spam/courriers indésirables dans votre boîte mail. De même, vérifiez que l'URL de la page concernée existe puis corresponde à celle de la page que vous souhaitiez faire monitorer en premier lieu.</p>
            </div>
          </li>

        </ul>

        {/*Confidentialité*/}

        <ul style={{ paddingTop: "0.1em" }} id="Confidentialité" className="faq-group">

          <li className="faq-title"><h2 className="h2Faq">Confidentialité</h2></li>
          <li className="liFaq">
            <div className="trigger" href="#0">Quelles données stockez-vous sur moi ?</div>
            <div className="faq-content">
              <p>Nous ne conservons que le strict minimum : votre adresse e-mail, votre mot de passe ainsi que les pages web que vous faîtes monitorer !</p>
            </div>
          </li>

        </ul>

      </section>


      <footer className="footer">
        <div style={{ justifyContent: "space-between", paddingTop: "1em", paddingBottom: "1em" }}>
          <li className="liHome">
            <NavLink id="linkToFaq" activeClassName="current" className="btn-nav" exact to="/faq">
              FAQ
            </NavLink>
            <span className="spanHome">Nous contacter :
              <i style={{ marginLeft: "1em" }} className="fa fa-envelope">
              </i> webmontest11@gmail.com
            </span>
          </li>
        </div>
      </footer>
    </div>

  );
};

export default Faq;
