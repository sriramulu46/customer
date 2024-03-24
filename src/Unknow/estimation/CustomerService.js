import axios from 'axios';
import React from 'react';

const Customer_Base_URL = "http://localhost:8080/";

class CustomerService {

    // get all emp list
    getAllEmp(){
        return axios.get(Customer_Base_URL);
    }

    // save emp
    saveEmp(emp){
        return axios.post(Customer_Base_URL, emp);
    }

    // get all count list
    getAllCount(){
        return axios.get(Customer_Base_URL);
    }

    // save emp
    saveCount(){
        return axios.post(Customer_Base_URL);
    }

   
}

const CustomerService = new CustomerService();
export default CustomerService;