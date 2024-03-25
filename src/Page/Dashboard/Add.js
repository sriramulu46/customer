import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

import { employeesData } from '../../data';

function Add({ employees, setEmployees, setIsAdding }) {

    

    const [customer_Name, setCustomer_Name] = useState('');
    const [emp_Name, setEmp_Name] = useState('');
    const [role_Maturity, setRole_Maturity] = useState('');
    const [skill_Profile, setSkill_Profile] = useState('');
    const [bill_Rate, setBill_Rate] = useState('');
    const [db_Estimate, setDB_Estimate] = useState('');
    const [g_Level, setG_Level] = useState('');

    const [instance_Count, setInstance_Count] = useState('');
    const [monthly_Efforts, setMonthly_Efforts] = useState('');
    // const [fte_count, setFTE_Count] = useState(employees.length + 1);
    const [ftecount, setFtecount] = useState(employees.length + 1);
    const [rate_Card, setRate_Card] = useState('');


    const [efforts_Hrs, setEfforts_Hrs] = useState('');
    const [efforts, setEfforts] = useState();
    const [rate_Ero, setRate_Ero] = useState('');
    const [sde, setSDE] = useState('');
    const [efforts_Pending, setEfforts_Pending] = useState(0);

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
        setFtecount(employees.length + 1);
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
        if (monthly_Efforts && ftecount) {
            setEfforts_Hrs((monthly_Efforts / ftecount) / 160 * 100);
        }
    }, [monthly_Efforts, ftecount]);

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



    const handleAdd = async (e) => {
        e.preventDefault();
        const userData = {
            customer_Name,
            emp_Name,
            role_Maturity,
            skill_Profile,
            bill_Rate: parseInt(bill_Rate),
            db_Estimate: parseFloat(db_Estimate),
            g_Level,
            instance_Count: parseInt(instance_Count),
            monthly_Efforts: parseInt(monthly_Efforts),
            // ftecount:12,
            ftecount,
            rate_Card: parseInt(rate_Card),
            efforts: parseFloat(efforts),
            efforts_Hrs: parseFloat(efforts_Hrs),
            rate_Ero: parseFloat(rate_Ero),
            sde: parseFloat(sde),
            efforts_Pending: parseFloat(efforts_Pending)
        };
        console.log("Employee Name:", userData);

        debugger;

        try {
            await axios.post("http://localhost:8080/newemployee", userData);
            const id = employees.length + 1;
            const newEmployee = { id, ...userData };
            setEmployees([...employees, newEmployee]);
            setIsAdding(false);
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `${customer_Name}'s data has been Added.`,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to add employee data.',
                showConfirmButton: true
            });
        }
    };

    console.log("Added code")

    
    return (

        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="customer_Name">Customer_Name</label>
                <select
                    id="customer_Name"
                    name="customer_Name"
                    value={customer_Name}
                    onChange={(e) => setCustomer_Name(e.target.value)}
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
                    onBlur={() =>{
                        setFtecount(employees.length + 1);
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
                    <option value="">skill_Profile</option>
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

                <label htmlFor="ftecount">FTECount</label>
                <input
                    id="ftecount"
                    type="number"
                    name="ftecount"
                    value={ftecount}
                    onChange={e => setFtecount(e.target.value)}
                />


                <label htmlFor="rate_Card">Rate_Card</label>

                <select
                    id="rate_Card"
                    type="number"
                    name="rate_Card"
                    value={rate_Card}
                    onChange={e => setRate_Card(e.target.value)}
                >
                    <option value="">Years</option>
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
                    
                    value={efforts}
                    onChange={(e) => setEfforts(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />

                <label className='efforts_Hrs'>Individual Monthly Efforts [%]</label>
                <input
                    type="number"

                    value={efforts_Hrs}
                    onChange={(e) => setEfforts_Hrs(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />


                <label className='rate_Ero'>Individual Monthly Rate [Euro]</label>
                <input
                    type="number"

                    value={rate_Ero}
                    onChange={(e) => setRate_Ero(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />

                <label className='sde'>Efforts Consumed [%]</label>
                <input
                    type="number"

                    value={sde}
                    onChange={(e) => setSDE(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />


                <label className='efforts_Pending'>Efforts_Pending</label>
                <input
                    type="number"

                    value={efforts_Pending}
                    onChange={(e) => setEfforts_Pending(parseFloat(e.target.value).toFixed(2))}
                    className='input'
                />



                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add





