import React from 'react'
import Materialicon from './Materialicon'

const Tablerow = ({ rows, onDelete }) => {
    return (
        <>
            { rows.map (
                (row) => (
                    <tr id={ row.id } key={ row.id }>
                        <td>{ row.country }</td>
                        <td>{ row.city }</td>
                        <td>{ row.postal }</td>
                        <td>{ row.capital === true ? "Jā" : "Nē" }</td>
                        <td><Materialicon title="close" style={{ cursor: "pointer" }} func={ onDelete } args={ row.id }/></td>
                    </tr>
                )
            )}
        </>
      );
}

export default Tablerow;