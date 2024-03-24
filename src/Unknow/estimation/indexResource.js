import React, { useState } from 'react'
import Swal from 'sweetalert2';


import Header from './ResourceHead';
import List from './List';
import Add from './Add';
import Edit from './Edit';


import { resourceData } from '../../esdata/indexres';

function EResources() {

    const [eresource, setEResource] = useState(resourceData);
    const [selectedResource, setselectedResource] = useState(null);
    const [IsAddingResource, setIsAddingResource] = useState(false);
    const [isEditing, setIsEditing] = useState(false);


    const handleEditResource = (id) => {
        const [resource] = eresource.filter(resource => resource.id === id);

        // // Assuming you have setters for each attribute of the resource
        // setInstance(resource.instance);
        // setMEH(resource.totalMonthlyEffortsHrs);
        // setMEsE(resource.finalMonthlyEstimateEuro);
        // setIMEE(resource.individualMonthlyEffortsHrs);
        // setIMEEper(resource.individualMonthlyEffortsPercentage);

        // setIsEditing(true);

        setselectedResource(resource);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [resource] = eresource.filter(resource => resource.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${resource.firstName} ${resource.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEResource(eresource.filter(resource => resource.id !== id));
            }
        });
    }

    return (
        <div className='container'>
            {/* List */}
            {!IsAddingResource && !isEditing && (
                <>
                    <Header
                        setIsAddingResource={setIsAddingResource}
                    />
                    <List
                        eresource={eresource}
                        handleEditResource={handleEditResource}
                        handleDelete={handleDelete}
                    />
                </>
            )}

            {/* Add */}
            {IsAddingResource && (
                <Add
                    eresource={eresource}
                    setEResource={setEResource}
                    setIsAddingResource={setIsAddingResource}
                />
            )}

            {/* Edit */}
            {isEditing && (
                <Edit
                    eresource={eresource}
                    selectedResource={selectedResource}
                    setEResource={setEResource}
                    setIsEditing={setIsEditing}
                />
            )}

        </div>
    )


}
export default EResources;
//index.js page