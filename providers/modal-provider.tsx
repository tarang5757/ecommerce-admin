 "use client";
//local import
import { StoreModal } from "@/components/modals/store.modal";
 //we are going to add this model provider inside of our app, inside layout.tsx but our layout.tsx is a server component.

 //global import
 import {useEffect, useState} from "react";

 export const ModalProvider = () =>  {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
       setIsMounted(true); 
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <>
        <StoreModal/>
        
        </>
    )
 }

