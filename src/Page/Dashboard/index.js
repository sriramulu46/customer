import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';


// import { employeesData } from '../../data';



function Dashboardw() {

    console.log("Dashboard values")

    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // useEffect(() => {
    //     loadUser();
    // }, []);

    

    useEffect(() => {
        debugger;
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error loading employee data:', error);
            }
        };

        fetchData();
    }, []);
    
    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }



    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/employee/${id}`);
            setEmployees(employees.filter(emp => emp.id !== id));
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Employee data has been deleted.',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error deleting employee:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete employee data.',
                showConfirmButton: true
            });
        }
    };


    // const handleDelete = (id) => {
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, delete it!',
    //         cancelButtonText: 'No, cancel!',
    //     }).then(result => {
    //         if (result.value) {
    //             const [employee] = employees.filter(employee => employee.id === id);

    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Deleted!',
    //                 text: ` ${employee.Customer_Name} 
    //                         ${employee.emp_Name}
    //                         ${employee.role_Maturity}
    //                         ${employee.Skill_Profile}
    //                         ${employee.Bill_Rate}
    //                         ${employee.DB_Estimate}
    //                         ${employee.G_Level}
    //                         ${employee.Instance_Count}
    //                         ${employee.Monthly_Efforts}
    //                         ${employee.FTE_Count}
    //                         ${employee.Rate_Card}
    //                         ${employee.Efforts}
    //                         ${employee.Efforts_Hrs}
    //                         ${employee.Rate_Ero}
    //                         ${employee.SDE}
    //                         ${employee.Efforts_Pending}
    //                         's data has been deleted.`,
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             });

    //             setEmployees(employees.filter(employee => employee.id !== id));
    //         }
    //     });
    // };


    return (

        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        // setEmployees={setEmployees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>



    )
}

export default Dashboardw;