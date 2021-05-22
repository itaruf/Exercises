import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/button';

/**
 * Composant qui permet l'affichage de la page home et de l'intéraction avec celle-ci 
 */
const Home = () => {
  return (
    <div className ="body">

    <div className="bannerHome">

      
      <div className="bannerBoxAccueil">
        <h1 className="h1Home">W E B M O N </h1>
        <h3 className="h3Home">Détecteur de modifications de pages web</h3>
      </div>

    </div>

{/* COMMENCEZ DES MAINTENANT */}

    <div id="divHome">
      
      <div className="bannerSectionHome">
        <section className = "sectionHome3">
          <div className="row">

            <div className="col-1">
            <h2 className="h1-responsive"><span style ={{color : "rgb(18, 216, 250)",fontSize : "1.3em"}}>C</span>ommencez dès maintenant !</h2>
              
              <p className="grey-text">
              Pour profiter de nos services, inscrivez-vous gratuitement sur notre application !
              <br></br>
                
                <br/>Pour en savoir plus, consultez notre F.A.Q !
                
                <br></br>

                <NavLink style = {{marginTop : "3em",textDecoration :"none"}} id="linkToFaq" exact to="/faq">
                <Button style = {{marginTop : "3em",textDecoration :"none"}} variant="contained" color="primary"> 
                En savoir plus
                </Button>
                 </NavLink>
                 
              </p>
            </div>

            <div className="col-1b">
            <img className = "img" src="https://i.ibb.co/fpWHY6p/submit.png" alt="submit" border="0"/>
            </div>


          </div>


        </section>
      </div>
    </div>

    <main className ="main1">
      
      <div className = "middle1">

        <p className ="text1">

          Explication du fonctionnement général de W E B M O N
        </p>
      </div>


    </main>

{/* ENTREZ UNE URL */}

    <div id="divHome2">
     
   
      <div className="bannerSectionHome2">
       
        
        <section className = "sectionHome2">

          <div className="row">

              <div className="col-2">
              <img className = "img2" src="https://i.ibb.co/fd8N6WL/url.png" alt="url" border="0"/>
                <p className="grey-text2">
                </p>
              </div>

              <div className="col-2b">
              <h2 className="h1-responsive2"><span style = 
              {{color : "rgb(108, 59, 255)",fontSize : "1.3em"}}>E</span>ntrez l'URL de la page</h2>

                <p className="grey-text2">Que vous souhaitez faire monitorer depuis la section "Mes pages monitorées"
                en respectant le format "https://exemple.com" ou "http://exemple2.com"
                <br></br>
                
                <br/>Pour en savoir plus, consultez notre F.A.Q !
                
                <br></br>

                <NavLink style = {{marginTop : "3em",textDecoration :"none"}} id="linkToFaq" exact to="/faq">
                <Button style = {{marginTop : "3em",textDecoration :"none"}} variant="contained" color="primary"> 
                En savoir plus
                </Button>
                 </NavLink>
                

                 </p>
              </div>

          </div>
          
        </section>
        
      </div>
    </div>

    <main className = "cut"></main>

{/* METHODE UTILISEE */}

    <div id="divHome3">
      
      <div className="bannerSectionHome3">

        <section className = "sectionHome3">
          <div className="row">

            <div className="col-3">
            <h2 className="h1-responsive3"><span style ={{color : "rgb(18, 216, 250)",fontSize : "1.3em"}}>O</span>util de surveillance utilisé</h2>
              
              <p className="grey-text3">
               W E B M O N adopte la méthode de la comparaison visuelle. Une fois l'URL validée et enregistrée, 
               une capture d'écran de l'ensemble de la page est prise. La surveillance dure jusqu'à ce qu'un changement
               sur la page soit détecté et continue de subsister jusqu'à ce qu'elle soit stoppée par l'utilisateur.
             
              <br></br>
              <br/>Pour en savoir plus, consultez notre F.A.Q !
                
                <br></br>

                <NavLink style = {{marginTop : "3em",textDecoration :"none"}} id="linkToFaq" exact to="/faq">
                <Button style = {{marginTop : "3em",textDecoration :"none"}} variant="contained" color="primary"> 
                En savoir plus
                </Button>
                 </NavLink>
              </p>
            </div>

            <div className="col-3b">
            <img className = "img3"src="https://i.ibb.co/qk694H9/website.png" alt="website" border="0"/>
            <img className = "img3"src="https://i.ibb.co/cg5C96S/webchange.png" alt="webchange" border="0"/>
            </div>
            
          </div>
        </section>
      </div>
    </div>

    <main className = "cut"></main>


{/* PUBS ET COOKIES */}

    <div id="divHome4">
     
     <div className="bannerSectionHome4">
      
       <section className = "sectionHome4">

         <div className="row">

             <div className="col-4">
             <img className = "img4"src="https://i.ibb.co/7QMbwGX/stop.png" alt="stop" border="0"/>
               <p className="grey-text">
               </p>
             </div>

             <div className="col-4b">
             <h2 className="h1-responsive4"><span style ={{color : "rgb(108, 59, 255)",fontSize : "1.3em"}}>P</span>ublicités et trackers bloqués</h2>

               <p className="grey-text4"> L'outil de comparaison visuelle de W E B M O N ne prend pas en compte les modifications liées aux publicités et 
               aux trackers.
               
               <br></br>
                
                <br/>Pour en savoir plus, consultez notre F.A.Q !
                
                <br></br>

                <NavLink style = {{marginTop : "3em",textDecoration :"none"}} id="linkToFaq" exact to="/faq">
                <Button style = {{marginTop : "3em",textDecoration :"none"}} variant="contained" color="primary"> 
                En savoir plus
                </Button>
                 </NavLink>

               </p>
             </div>

         </div>

       </section>

     </div>
   </div>

   <main className = "cut"></main>

   {/* RECEVEZ UN MAIL */}

    <div id="divHome3">
      
      <div className="bannerSectionHome3">

        <section className = "sectionHome3">
          <div className="row">

            <div className="col-5">
            <h2 className="h1-responsive5"><span style ={{color : "rgb(18, 216, 250)",fontSize : "1.3em"}}>R</span>ecevez une notification mail</h2>
              
              <p className="grey-text5">
              Sur votre boîte mail dès qu'un changement visuel aura été observé sur une de vos pages monitorées. 
              Vous pourrez alors directement vous rendre sur la ou les pages concernées pour y constater le(s) changement(s) !
             
              <br></br>
              <br/>Pour en savoir plus, consultez notre F.A.Q !
                
                <br></br>

                <NavLink style = {{marginTop : "3em",textDecoration :"none"}} id="linkToFaq" exact to="/faq">
                <Button style = {{marginTop : "3em",textDecoration :"none"}} variant="contained" color="primary"> 
                En savoir plus
                </Button>
                 </NavLink>
                 
              </p>
            </div>

            <div className="col-5b">
            <img className = "img5" src="https://i.ibb.co/wySC3Nc/email.png" alt="email" border="0"/>
            </div>
            
          </div>
        </section>
      </div>
    </div>

    <main className = "cut"></main>

{/* PARAMETREZ VOTRE COMPTE */}

    <div id="divHome4">
     
     <div className="bannerSectionHome4">
      
       <section className = "sectionHome4">

         <div className="row">

             <div className="col-6">
             <img className = "img6" src="https://i.ibb.co/5jtxVkC/setts.png" alt="setts" border="0"/>
               <p className="grey-text">
               </p>
             </div>

             <div className="col-6b">
             <h2 className="h1-responsive6"><span style ={{color : "rgb(108, 59, 255)",fontSize : "1.3em"}}>P</span>aramétrez votre compte</h2>

               <p className="grey-text6">À tout moment, changez votre adresse e-mail ou votre mot de passe depuis la section "Paramètres du compte".
               
               <br></br>
                
                <br/>Pour en savoir plus, consultez notre F.A.Q !
                
                <br></br>

                <NavLink style = {{marginTop : "3em",textDecoration :"none"}} id="linkToFaq" exact to="/faq#Compte">
                <Button style = {{marginTop : "3em",textDecoration :"none"}} variant="contained" color="primary"> 
                En savoir plus
                </Button>
                 </NavLink>

               </p>
             </div>

         </div>

       </section>

     </div>
   </div>
   
   <main className ="main1">
      
      <div className = "middle1">

        <p className ="text1">

          W E B M O N et ses atouts...
        </p>
      </div>

    </main>
    
    <div id="divHome7">
     
     <div className="bannerSectionHome7">
      
       <section className = "sectionHome7">

         <div className="row2">

             <div className="col-7">
             <h2 className="h1-responsive7"><span style ={{color : "rgb(18, 216, 250)",fontSize : "1.3em"}}>S</span>ervice gratuit</h2>

               <p className="grey-text7"> Aucune contrainte financière n'est chargée sur l'utilisateur.
               
               <br></br>
                
                <br/>

               </p>
             </div>

             <div className="col-7b">
             <h2 className="h1-responsive7"><span style ={{color : "rgb(108, 59, 255)",fontSize : "1.3em"}}>G</span>ain de temps</h2>

               <p className="grey-text7">Notre détecteur de modifications vous permet de suivre les changements sur vos pages préférées
               sans constamment vérifier si celles-ci ont été mises à jour.
               
               <br></br>
                
                <br/>

               </p>
             </div>

             <div className="col-7c">
             <h2 className="h1-responsive7"><span style ={{color : "rgb(18, 216, 250)",fontSize : "1.3em"}}>D</span>onnées protégées</h2>

               <p className="grey-text7">Aucune donnée personnelle n'est exploitée en dehors du service que nous proposons.
               
               <br></br>
               <br/>

               </p>
             </div>


         </div>

       </section>

     </div>
   </div>

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

export default Home;
