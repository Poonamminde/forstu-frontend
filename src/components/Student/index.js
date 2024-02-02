import React from "react";
import Login from "./login";
import Form from "./form";
import Scholarship from "./scholarship";
import Thanks from "./thanks";
import { useState } from "react";

const Index = () => {
  const [step, setStep] = useState(1);
  const [studentObject, setStudentObject] = useState({
    email: "",
    category: "",
    gender: "",
    academic_marks: 0,
    annual_income: 0,
    scholarship: "",
  });
  return (
    <div>
      {step === 1 && (
        <Login studentObject={studentObject} step={step} setStep={setStep} />
      )}
      {step === 2 && <Form studentObject={studentObject} setStep={setStep} />}
      {step === 3 && (
        <Scholarship studentObject={studentObject} setStep={setStep} />
      )}
      {step === 4 && <Thanks />}
    </div>
  );
};

export default Index;
