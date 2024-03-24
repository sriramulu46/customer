import React from 'react';

function EffortsTable({ efforts }) {
    return (
        <div>
            <h2>Efforts Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Efforts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{efforts}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EffortsTable;
