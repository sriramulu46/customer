import React, { useEffect } from 'react';
import axios from 'axios';
import "../../list.css"

function List({ id, employees, setEmployees, handleEdit, handleDelete }) {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/employees');
                // const response = await axios.get(`http://localhost:8080/employees/${id}`);
                setEmployees(response.data);
            } catch (error) {
                console.error('Error loading employee data:', error);
            }
        };
    
        fetchData();
    }, [id, employees]);

    const fetchEmployeeById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/employees/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching employee by ID:', error);
            throw error;
        }
    };

    


    return (
        <div className='contain-table'>
            {/* Apply striped-table-small class for smaller table */}
            <table className='striped-table striped-table-small'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Customer_Name</th>
                        <th>Emp_Name</th>
                        <th>Role_Maturity</th>
                        <th>Skill_Profile</th>
                        <th>Bill_Rate</th>
                        <th>DB_Estimate</th>
                        <th>G_Level</th>
                        <th>Instance_Count</th>
                        <th>Monthly_Efforts</th>
                        <th>FTE_Count</th>
                        <th>Rate_Card</th>
                        <th>Individual Monthly Efforts [Hrs]</th>
                        <th>Individual Monthly Efforts [%]</th>
                        <th>Individual Monthly Rate [Euro]</th>
                        <th>Efforts Consumed [%]</th>
                        <th>Efforts Pending [%]</th>
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
                                <td>{employee.customer_Name}</td>
                                <td>{employee.emp_Name}</td>
                                <td>{employee.role_Maturity}</td>
                                <td>{employee.skill_Profile}</td>
                                <td>{employee.bill_Rate}</td>
                                <td>{employee.db_Estimate}</td>
                                <td>{employee.g_Level}</td>
                                <td>{employee.instance_Count}</td>
                                <td>{employee.monthly_Efforts}</td>
                                <td>{employee.fte_count}</td>
                                <td>{employee.rate_Card}</td>
                                <td>{parseFloat(employee.efforts).toFixed(2)}</td>
                                <td>{parseFloat(employee.efforts_Hrs).toFixed(2)}</td>
                                <td>{parseFloat(employee.rate_Ero).toFixed(2)}</td>
                                <td>{parseFloat(employee.sde).toFixed(2)}</td>
                                <td>{parseFloat(employee.efforts_Pending).toFixed(2)}</td>
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
                            <td colSpan={13}>No Employees</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );

    // return (
    //     <div className='contain-table'>
    //         {/* Apply striped-table-small class for smaller table */}
    //         <table className='striped-table striped-table-small'>
    //             <thead>
    //                 <tr>
    //                     <th>No.</th>
    //                     <th>Customer_Name</th>
    //                     <th>Emp_Name</th>
    //                     <th>Role_Maturity</th>
    //                     <th>Skill_Profile</th>
    //                     <th>Bill_Rate</th>
    //                     <th>DB_Estimate</th>
    //                     <th>G_Level</th>
    //                     <th>Instance_Count</th>
    //                     <th>Monthly_Efforts</th>
    //                     <th>FTE_Count</th>
    //                     <th>Rate_Card</th>
    //                     <th colSpan={2} className="text-center">
    //                         Actions
    //                     </th>
    //                 </tr>
    //             </thead>

    //             <tbody>
    //                 {employees.length > 0 ? (
    //                     employees.map((employee, i) => (
    //                         <tr key={employee.id}>
    //                             <td>{i + 1}</td>
    //                             <td>{employee.customer_Name}</td>
    //                             <td>{employee.emp_Name}</td>
    //                             <td>{employee.role_Maturity}</td>
    //                             <td>{employee.skill_Profile}</td>
    //                             <td>{employee.bill_Rate}</td>
    //                             <td>{employee.db_Estimate}</td>
    //                             <td>{employee.g_Level}</td>
    //                             <td>{employee.instance_Count}</td>
    //                             <td>{employee.monthly_Efforts}</td>
    //                             <td>{employee.fte_count}</td>
    //                             <td>{employee.rate_Card}</td>
    //                             <td className="text-right">
    //                                 <button
    //                                     onClick={() => handleEdit(employee.id)}
    //                                     className="button muted-button"
    //                                 >
    //                                     Edit
    //                                 </button>
    //                             </td>
    //                             <td className="text-left">
    //                                 <button
    //                                     onClick={() => handleDelete(employee.id)}
    //                                     className="button muted-button"
    //                                 >
    //                                     Delete
    //                                 </button>
    //                             </td>
    //                         </tr>
    //                     ))
    //                 ) : (
    //                     <tr>
    //                         <td colSpan={13}>No Employees</td>
    //                     </tr>
    //                 )}
    //             </tbody>

    //         </table>

    //         {/* Second table */}
    //         <table className='striped-table striped-table-small'>
    //             <thead>
    //                 <tr>
    //                     <th>No.</th>
    //                     <th>Individual Monthly Efforts [Hrs]</th>
    //                     <th>Individual Monthly Efforts [%]</th>
    //                     <th>Individual Monthly Rate [Euro]</th>
    //                     <th>Efforts Consumed [%]</th>
    //                     <th>Efforts Pending [%]</th>
    //                     <th colSpan={2} className="text-center">
    //                         Actions
    //                     </th>
    //                 </tr>
    //             </thead>

    //             <tbody>
    //                 {employees.length > 0 ? (
    //                     employees.map((employee, i) => (
    //                         <tr key={employee.id}>
    //                             <td>{i + 1}</td>
    //                             <td>{parseFloat(employee.efforts).toFixed(2)}</td>
    //                             <td>{parseFloat(employee.efforts_Hrs).toFixed(2)}</td>
    //                             <td>{parseFloat(employee.rate_Ero).toFixed(2)}</td>
    //                             <td>{parseFloat(employee.sde).toFixed(2)}</td>
    //                             <td>{parseFloat(employee.efforts_Pending).toFixed(2)}</td>
    //                             <td className="text-right">
    //                                 {/* <button
    //                                     onClick={() => handleEdit(employee.id)}
    //                                     className="button muted-button"
    //                                 >
    //                                     Edit
    //                                 </button> */}
    //                             </td>
    //                             <td className="text-left">
    //                                 {/* <button
    //                                     onClick={() => handleDelete(employee.id)}
    //                                     className="button muted-button"
    //                                 >
    //                                     Delete
    //                                 </button> */}
    //                             </td>
    //                         </tr>
    //                     ))
    //                 ) : (
    //                     <tr>
    //                         <td colSpan={7}>No Employees</td>
    //                     </tr>
    //                 )}
    //             </tbody>
    //         </table>
    //     </div>
    // );
}


export default List;
