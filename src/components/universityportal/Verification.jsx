import React, { useState } from "react";

const Verification = () => {
    const [searchId, setSearchId] = useState("");
    const [result, setResult] = useState(null);

    const handleVerify = () => {
        // Mock verification
        setResult({
            found: true,
            studentName: "Muhammad Shahis",
            degree: "BS Computer Science",
            issueDate: "2025-06-15",
            blockchainHash: "0x1a2b3c4d...",
            ipfsHash: "QmHash123...",
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">✅ Verify Document</h3>
            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Enter Transaction ID or Student Roll No"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={handleVerify}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                    Verify
                </button>
            </div>
            {result && (
                <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                    <p className="font-bold text-green-700 mb-3">✅ Document Verified!</p>
                    <div className="space-y-2 text-sm text-gray-700">
                        <p><strong>Student:</strong> {result.studentName}</p>
                        <p><strong>Degree:</strong> {result.degree}</p>
                        <p><strong>Issue Date:</strong> {result.issueDate}</p>
                        <p><strong>Blockchain Hash:</strong> {result.blockchainHash}</p>
                        <p><strong>IPFS Hash:</strong> {result.ipfsHash}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Verification;
