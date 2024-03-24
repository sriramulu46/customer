import React from 'react'


function List({ eresource, handleEditResource, handleDelete }) {

    // const formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //     minimumFractionDigits: null
    // });

    return (
        <div className='contain-table'>

            <table className='striped-table'>
                {/* <thead>
                    <tr>

                        <th>No.</th>
                        <th>Resource_Name</th>
                        <th>Instance</th>
                        <th>Total_Monthly_Efforts_Hrs</th>
                        <th>Final_Monthly_Estimate_Euro</th>
                        <th>Individual_Monthly_Efforts_Hrs</th>
                        <th>Individual_Monthly_Efforts_per</th>
                        <th>Efforts_Pending_per</th>


                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead> */}

                <thead>
                    <tr>

                        {/* <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            
                        </tr> */}

                        <th>No.</th>
                        <th>Resource_Name</th>
                        <th>Instance</th>
                        <th>Total_Monthly_Efforts_Hrs</th>
                        <th>Final_Monthly_Estimate_Euro</th>
                        <th>Individual_Monthly_Efforts_Hrs</th>
                        <th>Individual_Monthly_Efforts_per</th>
                        <th>Efforts_Pending_per</th>


                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {eresource.length > 0 ? (
                        eresource.map((resource, i) => (
                            <tr key={resource.id}>
                                <td>{i + 1}</td>

                                <td>{resource.Resource_Name}</td>
                                <td>{resource.Instance}</td>
                                <td>{resource.Total_Monthly_Efforts_Hrs}</td>
                                <td>{resource.Final_Monthly_Estimate_Euro}</td>
                                <td>{resource.Individual_Monthly_Efforts_Hrs}</td>
                                <td>{resource.Individual_Monthly_Efforts_per}</td>
                                <td>{resource.Efforts_Pending_per}</td>

                                <td className="text-right">
                                    <button
                                        onClick={() => handleEditResource(resource.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(resource.id)}
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