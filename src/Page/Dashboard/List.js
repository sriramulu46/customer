import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    // const formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //     minimumFractionDigits: null
    // });

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Emp_Name</th>
                        <th>Role_Maturity</th>
                        <th>Skill_Profile</th>
                        <th>Bill_Rate</th>
                        <th>DB_Estimate</th>
                        <th>G_Level</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.Emp_Name}</td>
                                <td>{employee.Role_Maturity}</td>
                                <td>{employee.Skill_Profile}</td>
                                <td>{employee.Bill_Rate}</td>
                                <td>{employee.DB_Estimate}</td>
                                <td>{employee.G_Level} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List