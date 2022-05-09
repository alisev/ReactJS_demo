import React from 'react'
import { useState } from 'react'

import Button from './Button';

import postalCodes from '../data/example';

const Options = () => {
    const [renderEl, setRenderEl] = useState(false)

    const toggle_render = () => {
        setRenderEl(!renderEl)
    }

    const handle_event = (e) => {
        e.preventDefault();
        alert("Forma ir iesniegta!")
    }

    return (
        <div>
            <h1>ReactJS piedāvātās iespējas</h1>
            <div id="display-components">
                <h2>Komponenšu izmantošana</h2>
                <p>Katru komponenti var nodefinēt vienreiz, lai to atkārtoti izmantotu mājaslapā. Komponente sastāv no:</p>
                <ul>
                    <ol>komponentes argumentiem (saucās 'props'),</ol>
                    <ol>no HTML koda fragmenta, ko tas atgriezīs,</ol>
                    <ol>argumentu noklusējuma vērtībām un tipiem, ja tādi ir nepieciešami,</ol>
                    <ol>var saturēt arī funkcijas.</ol>
                </ul>
                <p>Kompoentes tiek importētas, citas komponentes vai skata datnes sākumā norādot importa funkciju, piemēram:</p>
                <ul>
                    <ol>import Button from './Button';</ol>
                </ul>
                <img src={ require("../img/komponente_code.PNG") } alt="Pogas elementa apraksts ReactJS"/>
                <img src={ require("../img/komponente_jsx.PNG") } alt="Pogas komponentes piemērs"/>
                <p>Piemēri:</p>
                <Button title="Nosūtīt"/>
                <Button title="Nodzēst" style="btn waves-effect deep-orange accent-3 waves-light"/>
                <Button title="Pieprasīt"/>
            </div>
            <div id="visualize-data">
                <h2>Datu attēlošana</h2>
                <p>Datus var uzglabāt Javascript failā, lai pēc tam attēlotu tā saturu mājaslapā vai izmantotu tās funkcijās. Šiem datiem tiek piešķirts mainīgais un pēc tam tie tiek eksportēti ar komandu 'export default'. Viens šāds faila piemērs ir 'example.js'. Lai to izmantotu kādā komponentē, tas tiek importēts tāpat kā komponentes.</p>
                <img src={ require("../img/example.PNG") } alt="example.js"/>
                <p>Piemērs:</p>
                <ul>
                    { postalCodes.map(
                        (row) => (
                            <ol key={ row.id }>
                                The postal index { row.postal } belongs to { row.city } that is located in { row.country }.
                            </ol>
                        )
                    )}
                </ul>
                <p>Ja importētie dati tiek glabāti masīvā, tad tiem ir jānorāda arī unikāls 'key' atribūts.</p>
            </div>
            <div id="conditional-rendering">
                <h2>Nosacītā komponenšu attēlošana</h2>
                <p>Komponenšu attēlošanu var kontrolēt ar mainīgo palīdzību. Koda piemērs, teksts tiek parādīts tikai tad, ja poga ir nospiesta:</p>
                <img src={ require("../img/conditional_1.PNG") } alt="Funkcijas useState importēšana nosacītai komponenšu attēlošanai."/><br />
                <img src={ require("../img/conditional_2.PNG") } alt="Funckijas, kas pārvalda iesaistītos mainīgos."/><br />
                <img src={ require("../img/conditional_3.PNG") } alt="Elementu kods."/><br />
                <div>
                    <Button title={ renderEl ? "Aizvērt" : "Parādīt" }  onClick={ toggle_render }/>
                    { renderEl? (<h3>Tiek parādīts teksts.</h3>) : (<></>)}
                </div>
            </div>
            <div>
                <h2>Notikumu apstrāde (event handling)</h2>
                <form onSubmit = { handle_event }>
                    <img src={ require("../img/event_handling.PNG") } alt="Formas apstrādes koda piemērs."/><br />
                    <div>Apstrādājot formas iesniegšanu, ir svarīgi, lai onSubmit funkcija iekļautu preventDefault() metodi. Tas ir svarīgi, lai pārlūkprogramma nepastrādātu formu ar noklusējuma darbībām, bet tiktu veikts tikai mūsu funkcijā minētās darbības.</div>
                    <Button title="Piemērs" type="submit" />
                </form>
            </div>
        </div>
      );
}

export default Options;