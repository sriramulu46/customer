import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ eresource, setEResource, selectedResource,  setIsEditing }) {

    const id = selectedResource.id;

    const [Resource_Name, setResourceName] = useState(selectedResource.Resource_Name);
    const [Instance, setInstance] = useState(selectedResource.Instance);
    const [Total_Monthly_Efforts_Hrs, setMEH] = useState(selectedResource.Total_Monthly_Efforts_Hrs);
    const [Final_Monthly_Estimate_Euro, setMEsE] = useState(selectedResource.Final_Monthly_Estimate_Euro);
    const [Individual_Monthly_Efforts_Hrs, setIMEE] = useState(selectedResource.Individual_Monthly_Efforts_Hrs);
    const [Individual_Monthly_Efforts_per, setIMEEper] = useState(selectedResource.Individual_Monthly_Efforts_per);
    const [Efforts_Pending_per, setEPper] = useState(selectedResource.Efforts_Pending_per);


    const handleUpdate = e => {
        e.preventDefault();

        if (!Resource_Name || !Instance || !Total_Monthly_Efforts_Hrs || !Final_Monthly_Estimate_Euro || !Individual_Monthly_Efforts_Hrs || 
            !Individual_Monthly_Efforts_per || !Efforts_Pending_per) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        // const id = eresource.length + 1;
        const resource = {
            id,
            Resource_Name,
            Instance,
            Total_Monthly_Efforts_Hrs,
            Final_Monthly_Estimate_Euro,
            Individual_Monthly_Efforts_Hrs,
            Individual_Monthly_Efforts_per,
            Efforts_Pending_per
        }

        for (let i = 0; i < eresource.length; i++) {
            if (eresource[i].id === id) {
                eresource.splice(i, 1, resource);
                break;
            }
        }

        
        setEResource(eresource);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `
                    ${Resource_Name} 
                    ${Instance} 
                    ${Total_Monthly_Efforts_Hrs} 
                    ${Final_Monthly_Estimate_Euro} 
                    ${Individual_Monthly_Efforts_Hrs} 
                    ${Individual_Monthly_Efforts_per}
                    ${Efforts_Pending_per}
       
            's data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
            <h1>Edit Resource</h1>
            <label htmlFor="Resource_Name">Resource_Name</label>
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
                   
                    name="Total_Monthly_Efforts_Hrs"
                    value={Total_Monthly_Efforts_Hrs}
                    onChange={e => setMEH(e.target.value)}
                />
                <label htmlFor="Final_Monthly_Estimate_Euro">Final_Monthly_Estimate_Euro</label>
                <input
                    id="Final_Monthly_Estimate_Euro"
                    type="text"
                    
                    name="Final_Monthly_Estimate_Euro"
                    value={Final_Monthly_Estimate_Euro}
                    onChange={e => setMEsE(e.target.value)}
                />
                <label htmlFor="Individual_Monthly_Efforts_Hrs">Individual_Monthly_Efforts_Hrs</label>
                <input
                    id="Individual_Monthly_Efforts_Hrs"
                    type="text"
                    
                    name="Individual_Monthly_Efforts_Hrs"
                    value={Individual_Monthly_Efforts_Hrs}
                    onChange={e => setIMEE(e.target.value)}
                />
                <label htmlFor="Individual_Monthly_Efforts_per">Individual_Monthly_Efforts_per</label>
                <input
                    id="Individual_Monthly_Efforts_per"
                    type="text"
                    
                    name="Individual_Monthly_Efforts_per"
                    value={Individual_Monthly_Efforts_per}
                    onChange={e => setIMEEper(e.target.value)}
                />

                <label htmlFor="Efforts_Pending_per">Efforts_Pending_per</label>
                <input
                    id="Efforts_Pending_per"
                    type="text"
                    
                    name="Efforts_Pending_per"
                    value={Efforts_Pending_per}
                    onChange={e => setEPper(e.target.value)}
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