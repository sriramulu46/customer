import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { employeesData } from '../../data';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
    const id = selectedEmployee.id;

    const [customer_Name, setcustomer_Name] = useState(selectedEmployee.customer_Name);
    const [emp_Name, setEmp_Name] = useState(selectedEmployee.emp_Name);
    const [role_Maturity, setRole_Maturity] = useState(selectedEmployee.role_Maturity);
    const [skill_Profile, setSkill_Profile] = useState(selectedEmployee.skill_Profile);
    const [bill_Rate, setBill_Rate] = useState(selectedEmployee.bill_Rate);
    const [db_Estimate, setDB_Estimate] = useState(selectedEmployee.db_Estimate);
    const [g_Level, setG_Level] = useState(selectedEmployee.g_Level);

    const [instance_Count, setInstance_Count] = useState(selectedEmployee.instance_Count);
    const [monthly_Efforts, setMonthly_Efforts] = useState(selectedEmployee.monthly_Efforts);
    const [fte_count, setFTE_Count] = useState(selectedEmployee.fte_count);
    const [rate_Card, setRate_Card] = useState(selectedEmployee.rate_Card);

    const [efforts_Hrs, setEfforts_Hrs] = useState(selectedEmployee.efforts_Hrs);
    const [efforts, setEfforts] = useState(selectedEmployee.efforts);
    const [rate_Ero, setRate_Ero] = useState(selectedEmployee.rate_Ero);
    const [sde, setSDE] = useState(selectedEmployee.sde);
    const [efforts_Pending, setEfforts_Pending] = useState(selectedEmployee.efforts_Pending);

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
        setFTE_Count(employeesData.length + 1);
    }, []);

    useEffect(() => {
        if (instance_Count !== '') {
            const monthlyEfforts = parseFloat(instance_Count) * 0.85;
            setMonthly_Efforts(monthlyEfforts);
        } else {
            setMonthly_Efforts('');
        }
    }, [instance_Count]);

    useEffect(() => {
        if (monthly_Efforts && fte_count) {
            setEfforts_Hrs((monthly_Efforts / fte_count) / 160 * 100);
        }
    }, [monthly_Efforts, fte_count]);

    useEffect(() => {
        setEfforts(160 * efforts_Hrs / 100);
    }, [efforts_Hrs]);

    useEffect(() => {
        if (bill_Rate && efforts_Hrs) {
            setRate_Ero((bill_Rate * efforts_Hrs / 100) / 91);
        }
    }, [bill_Rate, efforts_Hrs]);

    useEffect(() => {
        if (efforts_Hrs) {
            setSDE((160 * efforts_Hrs / 100));
        }
    }, [efforts_Hrs]);

    useEffect(() => {
        if (sde !== undefined) {
            const pending = 100 - sde;
            setEfforts_Pending(pending);
        }
    }, [sde]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const userId = parseInt(id);

        if (!customer_Name || !emp_Name || !role_Maturity || !skill_Profile || !bill_Rate || !db_Estimate || !g_Level ||
            !instance_Count || !monthly_Efforts || !fte_count || !rate_Card || !efforts || !efforts_Hrs || !rate_Ero || !sde || !efforts_Pending) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const userData = {
            id: userId,
            customer_Name,
            emp_Name,
            role_Maturity,
            skill_Profile,
            bill_Rate,
            db_Estimate,
            g_Level,
            instance_Count,
            monthly_Efforts,
            fte_count,
            rate_Card,
            efforts,
            efforts_Hrs,
            rate_Ero,
            sde,
            efforts_Pending
        };

        try {
            await axios.put(`http://localhost:8080/employees/${id}`, userData);
            // Assuming the update was successful, update the local state with the updated employee data
            setEmployees(employees.map(emp => (emp.id === id ? userData : emp)));
            setIsEditing(false);
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Employee data has been updated.',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // Handle the case where the employee with the specified ID was not found
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Employee not found. Please refresh the page and try again.',
                    showConfirmButton: true
                });
            } else {
                // Handle other errors
                console.error('Error updating employee data:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update employee data. Please try again later.',
                    showConfirmButton: true
                });
            }
        }
    };


    // useEffect(() => {
    //     loadUser();
    //   }, []);

    //   const handleUpdated = async (e) => {
    //     e.preventDefault();
    //     await axios.put(`http://localhost:8080/employees/${id}`, user);
    //     navigate("/");
    //   };

    //   const loadUser = async () => {
    //     const result = await axios.get(`http://localhost:8080/employees/${id}`);
    //     employees(result.data);
    //   };

    return (
        <div className="small-container">
            <form onSubmit={(handleUpdate) }>
                <h1>Edit Employee</h1>
                <label htmlFor="customer_Name">Customer_Name</label>
                <select
                    id="customer_Name"
                    name="customer_Name"
                    value={customer_Name}
                    onChange={(e) => setcustomer_Name(e.target.value)}
                >
                    <option value="">Select Customer_Name</option>
                    <option value="ALL">ALL</option>
                    <option value="Athora">Athora</option>
                    <option value="Austria">Austria</option>
                    <option value="TDK/TEG">TDK/TEG</option>
                    <option value="Zeullig Pharma">Zeullig Pharma</option>
                </select>
                <label htmlFor="emp_Name">Emp_Name</label>
                <input
                    id="emp_Name"
                    type="text"
                    ref={textInput}
                    name="emp_Name"
                    value={emp_Name}
                    onChange={e => setEmp_Name(e.target.value)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        setFTE_Count(employeesData.length + 1); // Set the desired value for fte_count
                    }}
                    onBlur={() => {
                        // Set the desired value for fte_count onBlur if needed
                        setFTE_Count(employeesData.length + 1);
                    }}
                />
                <label htmlFor="role_Maturity">Role_Maturity</label>
                <select
                    id="role_Maturity"
                    name="role_Maturity"
                    value={role_Maturity}
                    onChange={(e) => setRole_Maturity(e.target.value)}
                >
                    <option value="">Select Role Maturity</option>
                    <option value="Junior">Junior</option>
                    <option value="Experienced">Experienced</option>
                    <option value="Expert">Expert</option>
                </select>


                <label htmlFor="skill_Profile">Skill_Profile</label>
                <select
                    id="skill_Profile"
                    name="skill_Profile"
                    value={skill_Profile}
                    onChange={(e) => setSkill_Profile(e.target.value)}
                >
                    <option value="">Skill_Profile</option>
                    <option value="Application Administrator">Application Administrator</option>

                </select>


                <label htmlFor="bill_Rate">Bill_Rate ($)</label>
                <input
                    id="bill_Rate"
                    type="number"
                    name="bill_Rate"
                    value={bill_Rate}
                    onChange={e => setBill_Rate(e.target.value)}
                />
                <label htmlFor="db_Estimate">DB_Estimate</label>
                <input
                    id="db_Estimate"
                    type="number"
                    name="db_Estimate"
                    value={db_Estimate}
                    onChange={e => setDB_Estimate(e.target.value)}
                    min ="0"
                    step="0.01"
                />
                <label htmlFor="g_Level">G_Level</label>
                <input
                    id="g_Level"
                    type="text"
                    name="g_Level"
                    value={g_Level}
                    onChange={e => setG_Level(e.target.value)}
                />

<label htmlFor="instance_Count">Instance_Count</label>
                <input
                    id="instance_Count"
                    type="number"
                    name="instance_Count"
                    value={instance_Count}
                    onChange={e => setInstance_Count(e.target.value)}
                />

                <label htmlFor="monthly_Efforts">Monthly_Efforts</label>
                <input
                    id="monthly_Efforts"
                    type="number"
                    name="monthly_Efforts"
                    value={monthly_Efforts}
                    onChange={e => setMonthly_Efforts(e.target.value)}
                />

                <label htmlFor="fte_count">FTE_Count</label>
                <input
                    id="fte_count"
                    type="number"
                    name="fte_count"
                    value={fte_count}
                    onChange={e => setFTE_Count(e.target.value)}
                />


                <label htmlFor="rate_Card">Rate_Card</label>

                <select
                    id="rate_Card"
                    type="number"
                    name="rate_Card"
                    value={rate_Card}
                    onChange={e => setRate_Card(e.target.value)}
                >
                    <option value="">Rate_Card</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>


                </select>

                <label className='efforts'>Individual Monthly Efforts [Hrs]</label>
                <input
                    type="number"
                    
                    value={efforts ? efforts.toFixed(2) : ''}
                    onChange={(e) => setEfforts(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />

                <label className='efforts_Hrs'>Individual Monthly Efforts [%]</label>
                <input
                    type="number"

                    value={efforts_Hrs ? efforts_Hrs.toFixed(2) : ''}
                    onChange={(e) => setEfforts_Hrs(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />


                <label className='rate_Ero'>Individual Monthly Rate [Euro]</label>
                <input
                    type="number"

                    value={rate_Ero ? rate_Ero.toFixed(2) : ''}
                    onChange={(e) => setRate_Ero(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />

                <label className='sde'>Efforts Consumed [%]</label>
                <input
                    type="number"

                    value={sde ? sde.toFixed(2) : ''}
                    onChange={(e) => setSDE(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />


                <label className='efforts_Pending'>Efforts_Pending</label>
                <input
                    type="number"

                    value={efforts_Pending ? efforts_Pending.toFixed(2) : ''}
                    onChange={(e) => setEfforts_Pending(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />


                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit