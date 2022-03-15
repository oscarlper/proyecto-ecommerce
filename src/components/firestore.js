import React, { useEffect } from "react";
import { collection, getDocs } from '../data/firebase';
import { db } from '../data/firebase';

export const FireStore = ()=>{
    
    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'item');
            const response = await getDocs(query);
            console.log('response',response);
        }
        getData();
    },[])
    return(
        <p>cart</p>
    )
} 

export default FireStore;