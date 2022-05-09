import React from 'react'
import Materialicon from './Materialicon'

const Description = () => {
    return (
      <>
        <div id="desc-react">
          <h1>Par ReactJS</h1>
          <p>ReactJS ir klienta puses Javascript bibliotēka, kas paredzēta interaktīvu tīmekļa aplikāciju izstrādei. Ar tā palīdzību ir iespējams izveidot komponentes un skatus, kas tiek atjaunināti attiecīgi pēc pieprasījuma. Šī prezentācija ir izstrādāta izmantojot ReactJS ar Node.js serveri un Materialize CSS un tās mērķis ir parādīt ReactJS iespējas.</p>
          <p>Lai izveidotu jaunu ReactJS projektu, komandu uzvednē ir jāievada sekojošās komandas:</p>
          <ul>
            <ol>npx create-react-app (( projekta nosaukums ))</ol>
            <ol>cd (( projekta nosaukums ))</ol>
            <ol>code .</ol>
          </ul>
          <p>Komponentes apraksta HTML dokumenta daļas, no kurām pēc tam veidot skatus vai citas, sarežģītākas komponentes. Bez ReactJS var nākties katru HTML elementu aprakstīt atsevišķi. Gadījumā, ja būtu nepieciešams mainīt kāda elementa stilu, būtu manuāli jāmaina katrai elementa instancei.</p>
          <img src={require("../img/komponente_HTML.PNG")} alt="Pogas elementa apraksts HTML valodā"/>
          <p>Ar ReactJS var atsevišķi aprakstīt komponentes HTML kodu .js datnē un pēc tam ievietot tos vajadzīgajos skatos. Jaunas vērtības tiek norādītas tikai tad, ja tās atšķiras no noklusētajām.</p>
          <img src={require("../img/komponente_code.PNG")} alt="Pogas elementa apraksts ReactJS"/>
          <img src={require("../img/komponente_jsx.PNG")} alt="Pogas komponentes piemērs"/>
        </div>

        <div id="desc-jsx">
          <h1>Par JSX</h1>
          <p>JSX jeb Javascript Syntax Extension ir Javascript paveids, kas ļauj aprakstīt HTML dokumenta elementus HTML valodā. Lai attēlotu JSX koda rezultātu pārlūkprogrammā, ir nepieciešams to kompilēt ar Babel vai Webpack.</p>
          <p>Ir jāņem vērā, ka daži atslēgas vārdi, ko izmanto HTML sintaksē, ir jau rezervēti Javascript valodai un līdz ar to nav izmantojami JSX vidē kā piemēram 'class' un 'for'. Tie ir aizstājami kā":</p>
          <ul>
            <ol>class <Materialicon title="keyboard_arrow_right" /> className</ol>
            <ol>for <Materialicon title="keyboard_arrow_right" /> HTMLFor</ol>
          </ul>
          <p>Citas JSX īpatnības:</p>
          <ul>
            <ol>Ar funkcijām tiek atgriezts tikai viens vecāka elements ar bērniem. Ja ir nepieciešami vairāki, tos var ietvert &lt;div&gt; elementā, bet var arī izmantot tukšo elementu - &lt;&gt;.</ol>
            <ol>Javascript kodu iekš HTML elementiem apraksta izmantojot figūriekavas &#123;&#125;.</ol>
            <ol>Visi elementi ir noslēgti, tai skaitā arī &lt;br&gt;, kas ir pierakstāms kā &lt;br /&gt;</ol>
            <ol>Visi elementu atribūti izmanto camelCase pierakstu. Piemēram, atribūts 'onmouseover' kļūst par 'onMouseOver'.</ol>
          </ul>
        </div>
      </>
      );
}

export default Description;