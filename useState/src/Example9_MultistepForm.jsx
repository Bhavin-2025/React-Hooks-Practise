import { useState } from "react";


function MultistepForm(){

    const[step,setStep] =useState(1);

    const prevStep = ()=>{
        setStep(prevStep=>prevStep - 1);
    }

    const nextStep = ()=>{
        setStep(nextStep=>nextStep + 1);
    }

    return(
        <div className="p-6 max-w-md mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Step {step}</h2>

        {step === 1 && (
            <div>
                <label className="block mb-2 font-medium" >Enter Your Name</label>
                <input className="border w-full p-2 rounded" type="text" placeholder="your name"  />
            </div>
        )}

        {step === 2 &&(
            <div>
                <label className="block mb-2 font-medium" >Enter Your Email</label>
                <input className="border w-full p-2 rounded" type="email" placeholder="your email" />
            </div>
        )}

        {step === 3 && (
            <div>
                <label className="text-green-600 font-semibold">✅ All steps complete</label>
                <p className="mt-2 text-gray-600">you can submit the form now</p>
            </div>
        )}

        {/* Buttons */}

        <div className="mt-6 flex gap-4">
            {step > 1 && (
                <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={prevStep}> Back</button>
            )}

            {step < 3 && (
                <button  className="bg-blue-600 text-white px-4 py-2 rounded" onClick={nextStep}> Next</button>
            )}
        </div>
        </div>

    )
}

export default MultistepForm;