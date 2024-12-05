import { useState, useEffect } from "react";
import { formRegex } from "../hooks/useFormRegex";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormStage2 = ({ formData, handleFormChange }) => {
    // Validation and focus states
    const [validSpecialRequest, setValidSpecialRequest] = useState(false);
    const [specialRequestFocus, setSpecialRequestFocus] = useState(false);

    // Validation states
    const [validDepartureDate, setValidDepartureDate] = useState(false);
    const [validReturnDate, setValidReturnDate] = useState(false);
    const [validAccommodation, setValidAccommodation] = useState(false);

    // Input validation checks
    useEffect(() => {
        setValidDepartureDate(formRegex.date.test(formData.departure_date));
    }, [formData.departure_date]);

    useEffect(() => {
        setValidReturnDate(formRegex.date.test(formData.return_date));
    }, [formData.return_date]);

    useEffect(() => {
        setValidAccommodation(formRegex.accommodation_preference.test(formData.accommodation_preference));
    }, [formData.accommodation_preference]);

    useEffect(() => {
        setValidSpecialRequest(formRegex.special_requests.test(formData.special_requests));
    }, [formData.special_requests]);

    return (
        <>
            {/* Departure Date */}
            <label htmlFor="departure_date" className="input-label">
                Departure Date:
                <FontAwesomeIcon
                    icon={validDepartureDate ? faCheck : faTimes}
                    color={validDepartureDate ? 'green' : 'red'}
                    size="lg"
                    className="ml-2"
                />
            </label>
            <input
                type="date"
                className="input-text"
                id="departure_date"
                name="departure_date"
                value={formData.departure_date}
                onChange={handleFormChange}
            />

            {/* Return Date */}
            <label htmlFor="return_date" className="input-label">
                Return Date:
                <FontAwesomeIcon
                    icon={validReturnDate ? faCheck : faTimes}
                    color={validReturnDate ? 'green' : 'red'}
                    size="lg"
                    className="ml-2"
                />
            </label>
            <input
                type="date"
                className="input-text"
                id="return_date"
                name="return_date"
                value={formData.return_date}
                onChange={handleFormChange}
            />

            {/* Accommodation Preference */}
            <label htmlFor="accommodation_preference" className="input-label">
                Accommodation Preference:
                <FontAwesomeIcon
                    icon={validAccommodation ? faCheck : faTimes}
                    color={validAccommodation ? 'green' : 'red'}
                    size="lg"
                    className="ml-2"
                />
            </label>
            <select
                className="input-text"
                id="accommodation_preference"
                name="accommodation_preference"
                value={formData.accommodation_preference}
                onChange={handleFormChange}
            >
                <option value="">Select</option>
                <option value="Space Hotel">Space Hotel</option>
                <option value="Martian Base">Martian Base</option>
            </select>

            {/* Special Requests or Preferences */}
            <label htmlFor="special_requests" className="input-label">
                Special Requests or Preferences:
            </label>
            <textarea
                className="input-text min-h-10 h-20 max-h-36"
                placeholder="Enter any special requests or preferences"
                id="special_requests"
                name="special_requests"
                value={formData.special_requests}
                onChange={handleFormChange}
                onFocus={() => setSpecialRequestFocus(true)}
                onBlur={() => setSpecialRequestFocus(false)}
            />
            {specialRequestFocus && !validSpecialRequest && (
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

export default FormStage2;