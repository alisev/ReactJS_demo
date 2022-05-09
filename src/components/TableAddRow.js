import React from 'react'
import { useState } from 'react'

import Button from './Button';
import TextInput from './TextInput';

const TableAddRow = ({ onAdd }) => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [postal, setPostal] = useState('')
    const [capital, setCapital] = useState(false)

    const clearForm = () => {
        setCountry('')
        setCity('')
        setPostal('')
        setCapital(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!country || !city) {
            alert("Ievadiet valsts un pilsētas nosaukumu.")
            return
        }

        onAdd({ country, city, postal, capital })
        clearForm()
    }

    return (
        <form onSubmit={ onSubmit }>
            <h2>Pievienot jaunu ierakstu</h2>
            <div className="row">
                <div className="col s4">
                    <TextInput id="add-country" name="country" value={ country } onChange={ (e) => setCountry(e.target.value) }/>
                    <label htmlFor="add-country">Valsts</label>
                </div>
                <div className="col s4">
                    <TextInput id="add-city" name="city" value={ city } onChange={ (e) => setCity(e.target.value) }/>
                    <label htmlFor="add-city">Pilsēta</label>
                </div>
                <div className="col s4">
                    <TextInput id="add-postal" name="postal" value={ postal } onChange={ (e) => setPostal(e.target.value) }/>
                    <label htmlFor="add-postal">Pasta indekss</label>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <label htmlFor="add-capital">
                        <TextInput id="add-capital" name="capital" type="checkbox" value={ capital } checked={ capital } onChange={ (e) => setCapital(e.currentTarget.checked) }/>
                        <span>Galvaspilsēta</span>
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <Button title="Apstiprināt" type="submit" />
                </div>
            </div>
        </form>
      );
}

export default TableAddRow;