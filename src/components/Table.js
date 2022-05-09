import React from 'react'
import { useState } from 'react'

import Tablerows from './Tablerows';
import TableAddRow from './TableAddRow';

import postalCodes from '../data/example';

const Table = () => {
    const [rows, updateRows] = useState(postalCodes)

    const addRow = (row) => {
        const id = rows[rows.length - 1] > 0 ? rows[rows.length - 1].id + 1 : 0 // jauniem elemntiem id vienmēr ir nulle. key arī visticamāk.
        const newRow = { id, ...row}
        updateRows([...rows, newRow])
    }

    const deleteRow = (id) => {
        updateRows(rows.filter((row) => row.id !== id))
    }

    return (
        <div id="table">
            <h1>Tabula</h1>
            <p>Piemērs, kas demonstrē datu attēlošanu tabulā, nosacītu komponentes attēlošanu, tabulas rindiņu nodzēšanu, rindiņu pievienošanu ar formu un formas validēšanu.</p>
            {
                rows.length > 0 ? (
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Valsts</th>
                                <th>Pilsēta</th>
                                <th>Pasta Indekss</th>
                                <th>Galvaspilsēta</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Tablerows rows = { rows } onDelete = { deleteRow }/>
                        </tbody>
                    </table>
                ) : "Tabula ir tukša."
            }
            <div>
                <TableAddRow onAdd={ addRow }/>
            </div>
        </div>
      );
}

export default Table;