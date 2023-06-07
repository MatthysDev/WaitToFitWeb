import React from 'react';
import Dropdown from "./component/Dropdown/Dropdown";
import chad from './image/GigaChad-removebg-preview1.png'
import './App.css';
import './fonts/Exo-Light.ttf'
import four from './image/four.png'
import reso from './image/reso.png'

function img(state:string) {
// Import result is the URL of your image
switch(state) {
case 'chad':
return <img src={chad}  alt="Logo" />;
case 'four':
return <img className="ajustement" src={four} alt="Logo" height="350px"/>;
case 'reso':
return <img  src={reso} alt="Logo" height="50px" />;
}
}
function App() {
return (
<div className="App">
  <header id="navbar" className="navBar">
    <h1 className="titleNameSite">WaitToFit</h1>
    <div className="NavBarRight">
      <p className="itemNavBar">Nos conseils</p>
      <p className="itemNavBar">Nous connaitre</p>
      <p className="itemNavBar">Télécharger</p>
      <p className="dashBar">|</p>
      <p className="itemNavBar">Inscription</p>
      <button type="button">Connexion</button>
    </div>
  </header>
  <div className="chad">
    <div>
      <p>
        Perdez enfin ces kilos qui vous narguent, le tout, gratuitement.
      </p>
      <button className="">Télécharger l’application</button>
    </div>
    <div></div>
    {img("chad")}
  </div>
  <div id="knowUs">
    <h2>Pourquoi Nous ?</h2>
    <div className="col-3">
      <div>
        <h3>Parce que vos données ne nous intéressent pas</h3>
        <p className="whyUs">Gardez vos données bien au chaud, elles ne se retrouveront jamais entre les mains d’une
          autre personne.</p>
        <br /><br />
        <h3>Parce que votre objectif est aussi le notre</h3>
        <p className="whyUs">Votre objectif, quel qu’il soit, on en fait une affaire personnelle, laissez nous vous
          aider à l’atteindre.</p>

      </div>
      <div>
      

          {img("four")}

      </div>
      <div>
        <h3>Parce que votre coeur vous le demande</h3>
        <p className="whyUs">Vous remettre en forme, c’est votre corps qui vous le demande. Nous, on est là pour y
          arriver, pas pour en profiter.</p>
        <br /><br />
        <h3>Parce que nos conseils sont gratuits et le seront toujours</h3>
        <p className="whyUs">Payer pour être conseillé, ça n’est pas l’image qu’on se fait de l’aide.</p>

      </div>
    </div>
  </div>
  <div className="info">
    <p className="stillHere">Vous êtes encore là ? <br/>
      On vous a déjà dit que nos services sont gratuits ?</p>
  </div>
  <div id="Moreinfo">
    <h2>Pourquoi Nous ?</h2>
    <div className="col-3-bis center">
      <div>
        <Dropdown placeHolder="Comment se faire conseiller"  />
        <Dropdown placeHolder="Comment prendre l’habitude" />
      </div>
      <div>
        <Dropdown placeHolder="CQuels muscles dois-je muscler en priotité" />
        <Dropdown placeHolder="J’ai plus d’inspi"  />
      </div>
    </div>
  </div>
  <div className="objectif">
    <p>Ne plus dire je ferais ça demain, c’est le premier pas vers son objectif !</p>
    <button >Télécharger l’application</button>
  </div>
  <footer className="col-7">
    <h1> WaitToFit</h1>
    <p> Accessibilité</p>
    <p> Protection des données</p>
    <p> Politique cookies</p>
    <p> Politique de confidentialité</p>
    <p>Infos sur les pubs</p>
    
    {img("reso")}
  </footer>
</div>
);
}

export default App;