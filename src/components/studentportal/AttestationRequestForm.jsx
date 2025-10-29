import React, { useState } from "react";

const AttestationRequestForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        rollNo: "",
        name: "",
        cnic: "",
        degree: "",
        university: "",
        document: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, document: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <section id="attestation" className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-10">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">📝 Request Attestation</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                    <input
                        type="text"
                        name="rollNo"
                        placeholder="Roll Number"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <input
                    type="text"
                    name="cnic"
                    placeholder="CNIC (e.g., 12345-1234567-1)"
                    value={formData.cnic}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="grid md:grid-cols-2 gap-5">
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree Title (e.g., BS Computer Science)"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        name="university"
                        placeholder="University Name"
                        value={formData.university}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document (PDF/Image)</label>
                    <input
                        type="file"
                        accept="application/pdf,image/*"
                        onChange={handleFileChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform"
                >
                    Submit Request
                </button>
            </form>
        </section>
    );
};

export default AttestationRequestForm;
