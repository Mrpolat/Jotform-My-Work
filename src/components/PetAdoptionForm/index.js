import React, { useEffect } from 'react'
import Header from '../Header';


const PetAdoptionForm = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src="https://form.jotform.com/jsform/220803245626047";
        script.async = true;
        document.body.appendChild(script);
        document.writeln()

        return () => {
            document.body.removeChild(script);
          }

      }, []);
      
  return (
    <div>
      <Header/>
    </div>
  )
}

export default PetAdoptionForm