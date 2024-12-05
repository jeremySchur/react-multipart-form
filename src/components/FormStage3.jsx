import { useState, useEffect } from "react";
import { formRegex } from "../hooks/useFormRegex";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormStage3 = ({ formData, handleFormChange }) => {
    // Validation and focus states
    const [validEmergencyName, setValidEmergencyName] = useState(false);
    const [emergencyNameFocus, setEmergencyNameFocus] = useState(false);

    const [validEmergencyNumber, setValidEmergencyNumber] = useState(false);
    const [emergencyNumberFocus, setEmergencyNumberFocus] = useState(false);

    const [validMedicalConditions, setValidMedicalConditions] = useState(false);
    const [medicalConditionsFocus, setMedicalConditionsFocus] = useState(false);

    // Validation states
    const [validHealthDeclaration, setValidHealthDeclaration] = useState(false);

    // Input validation checks
    useEffect(() => {
        setValidHealthDeclaration(formRegex.health_declaration.test(formData.health_declaration));
    }, [formData.health_declaration]);

    useEffect(() => {
        setValidEmergencyName(formRegex.emergency_contact_name.test(formData.emergency_contact_name));
    }, [formData.emergency_contact_name]);

    useEffect(() => {
        setValidEmergencyNumber(formRegex.phone.test(formData.emergency_contact_number));
    }, [formData.emergency_contact_number]);

    useEffect(() => {
        setValidMedicalConditions(formRegex.medical_conditions.test(formData.medical_conditions));
    }, [formData.medical_conditions]);

    return (
        <>
            {/* Health Declaration */}
            <label htmlFor="health_declaration" className="input-label">
                Health Declaration:
                <FontAwesomeIcon
                    icon={validHealthDeclaration ? faCheck : faTimes}
                    color={validHealthDeclaration ? 'green' : 'red'}
                    size="lg"
                    className="ml-2"
                />
            </label>
            <select
                className="input-text"
                id="health_declaration"
                name="health_declaration"
                value={formData.health_declaration}
                onChange={handleFormChange}
            >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            {/* Emergency Contact Name */}
            <label htmlFor="emergency_contact_name" className="input-label">
                Emergency Contact Name:
                <FontAwesomeIcon
                    icon={validEmergencyName ? faCheck : faTimes}
                    color={validEmergencyName ? 'green' : 'red'}
                    size="lg"
                    className="ml-2"
                />
            </label>
            <input
                type="text"
                className="input-text"
                placeholder="Enter your emergency contacts name"
                id="emergency_contact_name"
                name="emergency_contact_name"
                value={formData.emergency_contact_name}
                onChange={handleFormChange}
                onFocus={() => setEmergencyNameFocus(true)}
                onBlur={() => setEmergencyNameFocus(false)}
            />
            {emergencyNameFocus && !validEmergencyName && (
                <p className="input-details">
                    <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-1"
                        size="lg"
                    />
                    Letters, spaces, commas, periods, apostrophes, and hyphens allowed.
                </p>
            )}

            {/* Emergency Contact Number */}
            <label htmlFor="emergency_contact_number" className="input-label">
                Emergency Contact Number:
                <FontAwesomeIcon
                    icon={validEmergencyNumber ? faCheck : faTimes}
                    color={validEmergencyNumber ? 'green' : 'red'}
                    size="lg"
                    className="ml-2"
                />
            </label>
            <input
                type="text"
                className="input-text"
                placeholder="Enter your emergency contacts number"
                id="emergency_contact_number"
                name="emergency_contact_number"
                value={formData.emergency_contact_number}
                onChange={handleFormChange}
                onFocus={() => setEmergencyNumberFocus(true)}
                onBlur={() => setEmergencyNumberFocus(false)}
            />
            {emergencyNumberFocus && !validEmergencyNumber && (
                <p className="input-details">
                    <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-1"
                        size="lg"
                    />
                    Your phone number should follow the format: (xxx) xxx-xxxx.
                </p>
            )}

            {/* Medical Conditions */}
            <label htmlFor="medical_conditions" className="input-label">
                Medical Conditions:
            </label>
            <textarea
                className="input-text min-h-10 h-20 max-h-36"
                placeholder="Enter any medical conditions (if applicable)"
                id="medical_conditions"
                name="medical_conditions"
                value={formData.medical_conditions}
                onChange={handleFormChange}
                onFocus={() => setMedicalConditionsFocus(true)}
                onBlur={() => setMedicalConditionsFocus(false)}
            />
            {medicalConditionsFocus && !validMedicalConditions && (
                <p className="input-details">
                    <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="mr-1"
                        size="lg"
                    />
                    Invalid characters.
                </p>
            )}
        </>
    );
};

export default FormStage3;