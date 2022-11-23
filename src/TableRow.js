import React from 'react'

const TableRow = ({ item }) => {

    return (
        <tr>
            {Object.keys(item).map((key, index) => (
                <td key={index}>{JSON.stringify(item[key])}</td>
            ))}
        </tr>
    )
}

export default TableRow
