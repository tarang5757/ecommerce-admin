"use client";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () =>  {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
  
//with pages we have to export default and same thing with layout
export default SetupPage;