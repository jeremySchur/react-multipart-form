import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  // State for if the form submission is successful
  const [success, setSuccess] = useState(false);

  return (
    <main className="flex w-screen h-screen font-openSans text-black bg-[url(/background.jpg)] bg-cover bg-center">
      {success ? (
        <Success />
      ) : (
        <Form setSuccessTrue={() => setSuccess(true)} />
      )}
    </main>
  );
};

export default App;