import { useState, useEffect } from "react";
import FormStage1 from "./components/FormStage1";
import FormStage2 from "./components/FormStage2";
import FormStage3 from "./components/FormStage3";
import useFormRegex, { formRegex } from "./hooks/useFormRegex";

const stageNames = {
  1: "Personal Information",
  2: "Travel Preferences",
  3: "Health and Safety"
};

function App() {
  // State for the form fields
  const [formData, setFormData] = useState({
    full_name: "",
    DOB: "",
    nationality: "",
    email: "",
    phone: "",
    departure_date: "",
    return_date: "",
    accommodation_preference: "",
    special_requests: "",
    health_declaration: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
    medical_conditions: ""
  });

  // State for what stage the form is currently on
  const [formStage, setFormStage] = useState(1);

  // State for if the form submission is successful
  const [success, setSuccess] = useState(false);

  // States for form errors
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Resets error message when form changes
  useEffect(() => {
    setErrorMsg('');
    setError(false);
  }, [formData]);

  // Changes fields in the form 
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Validates and submits the form data
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for invalid return date
    const d1 = new Date(formData.departure_date);
    const d2 = new Date(formData.return_date);

    if (d2 < d1) {
      setErrorMsg('Please ensure the return date is after the departure date.');
      setError(true);
      setFormStage(2);
      return;
    }

    // Regex checks for all form fields
    const regexCheck = useFormRegex(formData);

    if (regexCheck[0])

    if (regexCheck[0] !== "None") {
      setErrorMsg(regexCheck[0]);
      setError(true);
      setFormStage(regexCheck[1]);
      return;
    }

    // Submission successful
    console.log(formData);
    setSuccess(true);
  };


  return (
    <main className="flex w-screen h-screen font-openSans text-black bg-[url(/background.jpg)] bg-cover bg-center">
      {success ? (
        <div className="flex flex-col items-center m-auto">
          <h1 className="text-xl font-bold">Success!</h1>
          <hr className="w-full my-3" />
          <h2 className="text-sm text-gray-700">Your form has been successfully submitted.</h2>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="w-full max-w-lg m-auto flex flex-col p-8">
          {/* Stage header */}
          <h1 className="text-xl font-bold mt-3 mx-auto">{stageNames[formStage]}</h1>
          <hr className="w-full my-3" />

          {/* Error message if one occurs */}
          {error && (
            <p className='text-sm bg-red-500 rounded-lg px-2 py-3 mb-5'>
              {errorMsg}
            </p>
          )}

          {/* First stage of form */}
          {formStage === 1 && (
            <FormStage1 formData={formData} handleFormChange={handleFormChange} />
          )}

          {/* Second stage of form */}
          {formStage === 2 && (
            <FormStage2 formData={formData} handleFormChange={handleFormChange} />
          )}

          {/* Third stage of form */}
          {formStage === 3 && (
            <FormStage3 formData={formData} handleFormChange={handleFormChange} />
          )}

          <div className="flex w-full px-2">
            {/* Prev Button */}
            {formStage !== 1 && (
              <button
                type="button"
                className="text-white bg-gray-400 hover:bg-gray-500 p-2 w-1/3 mr-auto"
                onClick={() => setFormStage(prevFormStage => prevFormStage - 1)}
              >
                Prev
              </button>
            )}
            {/* Next Button */}
            {formStage !== 3 && (
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 p-2 w-1/3 ml-auto"
                onClick={() => setFormStage(prevFormStage => prevFormStage + 1)}
              >
                Next
              </button>
            )}
            {/* Submit Button */}
            {formStage === 3 && (
              <button
                className="text-white bg-blue-500 hover:bg-blue-600 p-2 w-1/3 ml-auto"
              >
                Done
              </button>
            )}
          </div>

          {/* Form Slider */}
          <div className="flex justify-center w-full mt-10">
            <button 
              type="button"
              className={`h-3 rounded-full mx-2 hover:scale-105 ${formStage === 1 ? 'bg-blue-500 w-8' : 'bg-gray-400 w-3'}`}
              onClick={() => setFormStage(1)}
            >
            </button>
            <button 
              type="button"
              className={`h-3 rounded-full mx-2 hover:scale-105 ${formStage === 2 ? 'bg-blue-500 w-8' : 'bg-gray-400 w-3'}`}
              onClick={() => setFormStage(2)}
            >
            </button>
            <button 
              type="button"
              className={`h-3 rounded-full mx-2 hover:scale-105 ${formStage === 3 ? 'bg-blue-500 w-8' : 'bg-gray-400 w-3'}`}
              onClick={() => setFormStage(3)}
            >
            </button>
          </div>
        </form>
      )}
    </main>
  );
};

export default App;