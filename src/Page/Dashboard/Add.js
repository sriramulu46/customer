import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [Emp_Name, setEmp_Name] = useState('');
    const [Role_Maturity, setRole_Maturity] = useState('');
    const [Skill_Profile, setSkill_Profile] = useState('');
    const [Bill_Rate, setBill_Rate] = useState('');
    const [DB_Estimate, setDB_Estimate] = useState('');
    const [G_Level, setG_Level] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Emp_Name || !Role_Maturity || !Skill_Profile || !Bill_Rate || !DB_Estimate || !G_Level) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            Emp_Name,
            Role_Maturity,
            Skill_Profile,
            Bill_Rate,
            DB_Estimate,
            G_Level
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${Emp_Name} ${Role_Maturity}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="Emp_Name">Emp_Name</label>
                <input
                    id="Emp_Name"
                    type="text"
                    ref={textInput}
                    name="Emp_Name"
                    value={Emp_Name}
                    onChange={e => setEmp_Name(e.target.value)}
                />
                <label htmlFor="Role_Maturity">Role_Maturity</label>
                <select
                    id="Role_Maturity"
                    name="Role_Maturity"
                    value={Role_Maturity}
                    onChange={(e) => setRole_Maturity(e.target.value)}
                >
                    <option value="">Select Role Maturity</option>
                    <option value="Junior">Junior</option>
                    <option value="Experienced">Experienced</option>
                    <option value="Expert">Expert</option>
                </select>
                <label htmlFor="Skill_Profile">Skill_Profile</label>
                <input
                    id="Skill_Profile"
                    type="text"
                    name="Skill_Profile"
                    value={Skill_Profile}
                    onChange={e => setSkill_Profile(e.target.value)}
                />
                <label htmlFor="Bill_Rate">Bill_Rate ($)</label>
                <input
                    id="Bill_Rate"
                    type="number"
                    name="Bill_Rate"
                    value={Bill_Rate}
                    onChange={e => setBill_Rate(e.target.value)}
                />
                <label htmlFor="DB_Estimate">DB_Estimate</label>
                <input
                    id="DB_Estimate"
                    type="number"
                    name="DB_Estimate"
                    value={DB_Estimate}
                    onChange={e => setDB_Estimate(e.target.value)}
                />
                <label htmlFor="G_Level">G_Level</label>
                <input
                    id="G_Level"
                    type="text"
                    name="G_Level"
                    value={G_Level}
                    onChange={e => setG_Level(e.target.value)}
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