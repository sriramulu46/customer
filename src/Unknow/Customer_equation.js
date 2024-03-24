// import React from 'react';
import React, { useState, useEffect } from 'react';


function Equations({DB_Estimate, Instance_Count, Bill_Rate }) {

    console.log("fuction calcuation created")

    //=================Efforts=================
    const [Efforts, setEfforts] = useState();
    // const [Efforts_result, setEfforts_result] = useState('');

    useEffect(() => {
        setEfforts(DB_Estimate * 230);
    }, [DB_Estimate]);

    // const efforts_multiply = () => {
    //     setEfforts(Efforts);
    // };

    // const hadleChange = (e) = {
    //     setEfforts_result ({...Efforts, [e.Efforts_result.Efforts]: e.target.value});

    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(Efforts_result);
    //   };

    //====================% Efforts Hrs ===============
    const [Efforts_Hrs, setEfforts_Hrs] = useState();

    useEffect(() => {
        if (Efforts && Instance_Count) {
            setEfforts_Hrs((Efforts) / Instance_Count / 160 * 100);
        }
    }, [Efforts, Instance_Count]);


    // const [Efforts_Hrs_Reslut, setEfforts_Hrsresults] = useState();

    // const efforts_hrs = () => {
    //     setEfforts_Hrsresults((Efforts) / (Instance_Count) / 160 * 100);
    // };


    //===================Rate [Euro]===================
    const [Rate_Ero, setRate_Ero] = useState();
    
    useEffect(() => {
        if (Bill_Rate && Efforts_Hrs) {
            setRate_Ero((Bill_Rate * Efforts_Hrs) / 91);
        }
    }, [Bill_Rate, Efforts_Hrs]);
    
    
    // const [Rate_Ero_Res, setRate_Ero_Res] = useState('');

    // const rate_Ero = () => {
    //     setRate_Ero_Res((Bill_Rate * Efforts_Hrs) / 91);
    // }


    //====================SDE======================
    const [SDE, setSDE] = useState();

    useEffect(() => {
        if (Efforts_Hrs) {
            setSDE(3 * Efforts_Hrs);
        }
    }, [Efforts_Hrs]);
    // const [SDE_Res, setSDE_Res] = useState();

    // const sde_res = () => {
    //     setSDE_Res(3 * Efforts_Hrs);
    // }



    return (
        <div className='container'>
            <h2 className='title'> Efforts </h2>
            <label className='Efforts'>Efforts</label>
            <input
                type="number"
                placeholder='DB_Estimation*230'
                value={Efforts}
                onChange={(e) => setEfforts(parseFloat(e.target.value))}
                className='input'
            />

            <label className='Efforts_Hrs'>Efforts_Hrs</label>
            <input
                type="number"
                
                value={Efforts_Hrs}
                onChange={(e) => setEfforts_Hrs(parseFloat(e.target.value))}
                className='input'
            />

            <label className='Rate_Ero'>Rate_Ero</label>
            <input
                type="number"
                
                value={Rate_Ero}
                onChange={(e) => setRate_Ero(parseFloat(e.target.value))}
                className='input'
            />



            <label className='SDE'>SDE</label>
            <input
                type="number"
                
                value={SDE}
                onChange={(e) => setSDE(parseFloat(e.target.value))}
                className='input'
            />


            {/* <button onClick={efforts_multiply} className='button'>Efforts</button>
            <p className='Efforts_multiply'>Efforts: {efforts_multiply}</p>

            <button onClick={efforts_hrs} className='button'>Efforts_Hrs</button>
            <p className='efforts_hrs'>Efforts_Hrs: {Efforts_Hrs_Reslut}</p>


            <button onClick={rate_Ero} className='button'>Rate_Ero</button>
            <p className='rate_Ero'>Rate_Ero: {Rate_Ero_Res}</p>


            <button onClick={sde_res} className='button'>SDE</button>
            <p className='rate_Ero'>SDE: {SDE_Res}</p> */}

        </div>

    );
}

export default Equations;