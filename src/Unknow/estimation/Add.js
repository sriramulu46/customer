import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';


function Add({ eresource, setEResource, setIsAddingResource }) {
    
    const [Resource_Name, setResourceName] = useState('');
    const [Instance, setInstance] = useState('');
    const [Total_Monthly_Efforts_Hrs, setMEH] = useState('');
    const [Final_Monthly_Estimate_Euro, setMEsE] = useState('');
    const [Individual_Monthly_Efforts_Hrs, setIMEE] = useState('');
    const [Individual_Monthly_Efforts_per, setIMEEper] = useState('');
    const [Efforts_Pending_per, setEPper] = useState('');
    
    
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Resource_Name|| !Instance || !Total_Monthly_Efforts_Hrs || !Final_Monthly_Estimate_Euro || !Individual_Monthly_Efforts_Hrs || 
            !Individual_Monthly_Efforts_per || !Efforts_Pending_per) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = eresource.length + 1;
        const newResource = {
            id,
            Resource_Name,
            Instance,
            Total_Monthly_Efforts_Hrs,
            Final_Monthly_Estimate_Euro,
            Individual_Monthly_Efforts_Hrs,
            Individual_Monthly_Efforts_per,
            Efforts_Pending_per
        }

        eresource.push(newResource);
        setEResource(eresource);
        setIsAddingResource(false)

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `
                    ${Resource_Name} 
                    ${Instance} 
                    ${Total_Monthly_Efforts_Hrs} 
                    ${Final_Monthly_Estimate_Euro} 
                    ${Individual_Monthly_Efforts_Hrs} 
                    ${Individual_Monthly_Efforts_per}
                    ${Efforts_Pending_per}
                    's data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Resource</h1>
                <label htmlFor="Resource_Name">Resource</label>
                <select
                    id="Resource_Name"
                    name="Resource_Name"
                    value={Resource_Name}
                    onChange={(e) => setResourceName(e.target.value)}
                >
                    <option value="">Select Resource</option>
                    <option value="ALL">ALL</option>
                    <option value="Athora">Athora</option>
                    <option value="Austria">Austria</option>
                    <option value="TDK/TEG">TDK/TEG</option>
                    <option value="Signify">Signify</option>
                </select>

                <label htmlFor="Instance">Instance</label>
                <input
                    id="Instance"
                    type="text"
                    
                    name="Instance"
                    value={Instance}
                    onChange={e => setInstance(e.target.value)}
                />
                <label htmlFor="Total_Monthly_Efforts_Hrs">Total_Monthly_Efforts_Hrs</label>
                <input
                    id="Total_Monthly_Efforts_Hrs"
                    type="text"
                    ref={textInput}
                    name="Total_Monthly_Efforts_Hrs"
                    value={Total_Monthly_Efforts_Hrs}
                    onChange={e => setMEH(e.target.value)}
                />
                <label htmlFor="Final_Monthly_Estimate_Euro">Final_Monthly_Estimate_Euro</label>
                <input
                    id="Final_Monthly_Estimate_Euro"
                    type="text"
                    ref={textInput}
                    name="Final_Monthly_Estimate_Euro"
                    value={Final_Monthly_Estimate_Euro}
                    onChange={e => setMEsE(e.target.value)}
                />
                <label htmlFor="Individual_Monthly_Efforts_Hrs">Individual_Monthly_Efforts_Hrs</label>
                <input
                    id="Individual_Monthly_Efforts_Hrs"
                    type="text"
                    ref={textInput}
                    name="Individual_Monthly_Efforts_Hrs"
                    value={Individual_Monthly_Efforts_Hrs}
                    onChange={e => setIMEE(e.target.value)}
                />
                <label htmlFor="Individual_Monthly_Efforts_per">Individual_Monthly_Efforts_per</label>
                <input
                    id="Individual_Monthly_Efforts_per"
                    type="text"
                    ref={textInput}
                    name="Individual_Monthly_Efforts_per"
                    value={Individual_Monthly_Efforts_per}
                    onChange={e => setIMEEper(e.target.value)}
                />
                <label htmlFor="Efforts_Pending_per">Efforts_Pending_per</label>
                <input
                    id="Efforts_Pending_per"
                    type="text"
                    ref={textInput}
                    name="Efforts_Pending_per"
                    value={Efforts_Pending_per}
                    onChange={e => setEPper(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAddingResource(false)}
                    />
                </div>
            </form>
        </div>


    )



}

export default Add