import React from 'react'

const AboutNavigation = () => {
    return (
        <div>
            <h1>Par skatu veidošanu</h1>
            <p>Definīcijas:</p>
            <ul>
                <ol>Komponente - JSX datne, kas satur informāciju par kaut kādu HTML dokumenta elementu vai elementu kopumu un tiek izmantots, lai būvētu skatus.</ol>
                <ol>Skats - JSX datne, kas sastāv no komponentēm un tiek izmantota kā tīmekļa vietnes lapa vai lapas daļa.</ol>
            </ul>
            <p>Lai nodrošinātu tīmekļa lapā vairākus skatus, kas tiek ielādēti pēc lietotāja pieprasījuma, var izmantot React DOM pakotni. To uzinstalē, izmantojot komandu:</p>
            <ul>
                <ol>npm install react-router-dom</ol>
            </ul>
            <p>Pēc tam ir veicamas sekojošās darbības:</p>
            <ul>
                <ol>Izveido atsevišķus skatus, ko mājaslapa ielādēs.</ol>
                <ol>Datnē index.js: Elementu App (un pēc vajadzības arī citus elementus) ievieto BrowserRouter elementā. BrowserRouter elementā ievieto elementu Routes, kas sastāv no Route elementiem. Route elementi apraksta saites adresi un atveramo skatu.</ol>
                <ol>Datnē, kas satur navigācijas saites ievieto elementus Link, kas norāda, kuras lapas tiek atvērtas noklikšķinot uz saites.</ol>
                <ol>Datnē App.js vai jebkurā citā skatā, kas tiks izmantots kā ietvars citu skatu attēlošanai, ievieto elementu Outlet. Outlet attēlos tā skata saturu, kuras saite tika atvērta.</ol>
            </ul>
        </div>
    );
}

export default AboutNavigation;