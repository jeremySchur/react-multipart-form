export const formRegex = {
    full_name: /^[a-z ,.'-]+$/i,
    nationality: /^[a-z -]+$/i,
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
    phone: /^\(?\d{3}\)?-?\s?\d{3}\s?-?\s?\d{4}$/,
    accommodation_preference: /^(Space Hotel|Martian Base)$/,
    special_requests: /^[a-z0-9\s.,!?'"()&-]*$/i,
    health_declaration: /^(Yes|No)$/,
    emergency_contact_name: /^[a-z ,.'-]+$/i,
    medical_conditions: /^[a-z0-9\s.,!?'"()&-]*$/i,
    date: /^\d{4}-\d{2}-\d{2}$/
};

const useFormRegex = (formData) => {
    const v1 = formRegex.full_name.test(formData.full_name);
    const v2 = formRegex.date.test(formData.DOB);
    const v3 = formRegex.nationality.test(formData.nationality);
    const v4 = formRegex.email.test(formData.email);
    const v5 = formRegex.phone.test(formData.phone);
    const v6 = formRegex.date.test(formData.departure_date);
    const v7 = formRegex.date.test(formData.return_date);
    const v8 = formRegex.accommodation_preference.test(formData.accommodation_preference);
    const v9 = formRegex.special_requests.test(formData.special_requests);
    const v10 = formRegex.health_declaration.test(formData.health_declaration);
    const v11 = formRegex.emergency_contact_name.test(formData.emergency_contact_name);
    const v12 = formRegex.phone.test(formData.emergency_contact_number);
    const v13 = formRegex.medical_conditions.test(formData.medical_conditions);

    if (!v1) {
        return ["Full Name is missing or invalid.", 1];
    }
    if (!v2) {
        return ["Date of Birth is missing or invalid.", 1];
    }
    if (!v3) {
        return ["Nationality is missing or invalid.", 1];
    }
    if (!v4) {
        return ["Email is missing or invalid.", 1];
    }
    if (!v5) {
        return ["Phone is missing or invalid.", 1];
    }
    if (!v6) {
        return ["Departure Date is missing or invalid.", 2];
    }
    if (!v7) {
        return ["Return Date is missing or invalid.", 2];
    }
    if (!v8) {
        return ["Accommodation Preference is missing or invalid.", 2];
    }
    if (!v9) {
        return ["Special Requests is invalid.", 2];
    }
    if (!v10) {
        return ["Health Declaration is missing or invalid.", 3];
    }
    if (!v11) {
        return ["Emergency Contact Name is missing or invalid.", 3];
    }
    if (!v12) {
        return ["Emergency Contact Number is missing or invalid.", 3];
    }
    if (!v13) {
        return ["Medical Conditions is invalid.", 3];
    }
    return ["None", 3];
};

export default useFormRegex;