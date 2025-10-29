

import React, { useState } from "react";
import StudentNavbar from "../components/studentportal/StudentNavbar";
import StudentHero from "../components/studentportal/StudentHero";
import DashboardStats from "../components/studentportal/DashboardStats";
import AttestationRequestForm from "../components/studentportal/AttestationRequestForm";
import JobRecommendations from "../components/studentportal/JobRecommendations";
import MyDocuments from "../components/studentportal/MyDocuments";
import ProfileSection from "../components/studentportal/ProfileSection";

const StudentPortal = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    // Mock data
    const stats = { documents: 5, verified: 3, pending: 2, jobs: 12 };
    const profile = {
        name: "Muhammad Shahis",
        rollNo: "BCS-F22-E02",
        cnic: "12345-1234567-1",
        university: "University of Mianwali",
        degree: "BS Computer Science"
    };
    const documents = [
        { name: "Degree Certificate", status: "Verified", date: "2025-01-15", hash: "QmHash123abc..." },
        { name: "Transcript", status: "Pending", date: "2025-01-20", hash: null },
    ];
    const jobs = [
        { title: "Full Stack Developer", company: "Tech Corp", location: "Lahore", matchScore: 92 },
        { title: "Backend Engineer", company: "Innovate Ltd", location: "Islamabad", matchScore: 88 },
        { title: "AI Engineer", company: "DataWorks", location: "Karachi", matchScore: 85 },
    ];

    const handleNavigate = (section) => {
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    const handleAttestationSubmit = (data) => {
        alert("Attestation request submitted!");
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
            <StudentNavbar activeSection={activeSection} onNavigate={handleNavigate} />

            <div className="container mx-auto px-4 py-8">
                <div id="dashboard">
                    <StudentHero studentName={profile.name} />
                    <DashboardStats stats={stats} />
                </div>

                <AttestationRequestForm onSubmit={handleAttestationSubmit} />
                <JobRecommendations jobs={jobs} />
                <MyDocuments documents={documents} />
                <ProfileSection profile={profile} />
            </div>

            <footer className="py-6 text-center text-gray-500 text-sm border-t mt-16">
                © 2025 CareerKey – All Rights Reserved.
            </footer>
        </div>
    );
};

export default StudentPortal;
