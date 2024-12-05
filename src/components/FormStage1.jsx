import { useEffect, useState } from "react";
import { formRegex } from "../hooks/useFormRegex";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormStage1 = ({ formData, handleFormChange }) => {
  // Validation and focus states
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [validNationality, setValidNationality] = useState(false);
  const [nationalityFocus, setNationalityFocus] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  // Validation states
  const [validDOB, setValidDOB] = useState(false);

  // Input validation checks
  useEffect(() => {
    setValidFirstName(formRegex.full_name.test(formData.full_name));
  }, [formData.full_name]);

  useEffect(() => {
    setValidDOB(formRegex.date.test(formData.DOB));
  }, [formData.DOB]);

  useEffect(() => {
    setValidNationality(formRegex.nationality.test(formData.nationality));
  }, [formData.nationality]);

  useEffect(() => {
    setValidEmail(formRegex.email.test(formData.email));
  }, [formData.email]);

  useEffect(() => {
    setValidPhone(formRegex.phone.test(formData.phone));
  }, [formData.phone]);

  return (
    <>
      {/* Full Name */}
      <label htmlFor="full_name" className="input-label">
        Full Name:
        <FontAwesomeIcon
          icon={validFirstName ? faCheck : faTimes}
          color={validFirstName ? 'green' : 'red'}
          size="lg"
          className="ml-2"
        />
      </label>
      <input
        type="text"
        className="input-text"
        placeholder="Enter your full name"
        id="full_name"
        name="full_name"
        value={formData.full_name}
        onChange={handleFormChange}
        onFocus={() => setFirstNameFocus(true)}
        onBlur={() => setFirstNameFocus(false)}
      />
      {firstNameFocus && !validFirstName && (
        <p className="input-details">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="mr-1"
            size="lg"
          />
          Letters, spaces, commas, periods, apostrophes, and hyphens allowed.
        </p>
      )}

      {/* Date of Birth */}
      <label htmlFor="DOB" className="input-label">
        Date of Birth:
        <FontAwesomeIcon
          icon={validDOB ? faCheck : faTimes}
          color={validDOB ? 'green' : 'red'}
          size="lg"
          className="ml-2"
        />
      </label>
      <input
        type="date"
        className="input-text"
        id="DOB"
        name="DOB"
        value={formData.DOB}
        onChange={handleFormChange}
      />

      {/* Nationality */}
      <label htmlFor="nationality" className="input-label">
        Nationality:
        <FontAwesomeIcon
          icon={validNationality ? faCheck : faTimes}
          color={validNationality ? 'green' : 'red'}
          size="lg"
          className="ml-2"
        />
      </label>
      <input
        type="text"
        className="input-text"
        placeholder="Enter your nationality"
        id="nationality"
        name="nationality"
        value={formData.nationality}
        onChange={handleFormChange}
        onFocus={() => setNationalityFocus(true)}
        onBlur={() => setNationalityFocus(false)}
      />
      {nationalityFocus && !validNationality && (
        <p className="input-details">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="mr-1"
            size="lg"
          />
          Letters, spaces, and hyphens allowed.
        </p>
      )}

      {/* Email */}
      <label htmlFor="email" className="input-label">
        Email:
        <FontAwesomeIcon
          icon={validEmail ? faCheck : faTimes}
          color={validEmail ? 'green' : 'red'}
          size="lg"
          className="ml-2"
        />
      </label>
      <input
        type="email"
        className="input-text"
        placeholder="Enter your email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />
      {emailFocus && !validEmail && (
        <p className="input-details">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="mr-1"
            size="lg"
          />
          Your email address should follow the format: username@domain.com.
        </p>
      )}

      {/* Phone */}
      <label htmlFor="phone" className="input-label">
        Phone:
        <FontAwesomeIcon
          icon={validPhone ? faCheck : faTimes}
          color={validPhone ? 'green' : 'red'}
          size="lg"
          className="ml-2"
        />
      </label>
      <input
        type="phone"
        className="input-text"
        placeholder="Enter your phone number"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleFormChange}
        onFocus={() => setPhoneFocus(true)}
        onBlur={() => setPhoneFocus(false)}
      />
      {phoneFocus && !validPhone && (
        <p className="input-details">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="mr-1"
            size="lg"
          />
          Your phone number should follow the format: (xxx) xxx-xxxx.
        </p>
      )}
    </>
  );
};

export default FormStage1;