import React, { useState } from "react";
import { FaFileUpload, FaChartBar, FaInfoCircle } from "react-icons/fa";
import ReportUpload from "./ReportUpload"; // Import the ReportUpload component

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("dashboard");

    const handleUploadClick = () => {
        setActiveComponent("upload");
    };

    const handleBackToDashboard = () => {
        setActiveComponent("dashboard");
    };

    const reports = [
        { id: 1, name: "Blood Report Jan 2024", date: "2024-01-15", status: "Analyzed" },
        { id: 2, name: "Blood Report Feb 2024", date: "2024-02-18", status: "Pending" },
        { id: 3, name: "Blood Report Mar 2024", date: "2024-03-22", status: "Analyzed" },
    ];

    if (activeComponent === "upload") {
        return <ReportUpload onBack={handleBackToDashboard} />;
    }

    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
            {/* Header */}
            <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
                <p className="text-gray-600 mt-2">
                    Get a quick overview of your blood report analysis and health trends.
                </p>
            </div>

            {/* Cards Section */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Upload Report Card */}
                <div
                    className="bg-white shadow-md rounded-md p-6 flex items-center cursor-pointer hover:bg-gray-100"
                    onClick={handleUploadClick}
                >
                    <FaFileUpload className="text-4xl text-red-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Upload New Report</h2>
                        <p className="text-sm text-gray-600">Upload and analyze your latest blood report.</p>
                    </div>
                </div>

                {/* Health Insights Card */}
                <div className="bg-white shadow-md rounded-md p-6 flex items-center">
                    <FaChartBar className="text-4xl text-blue-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Health Insights</h2>
                        <p className="text-sm text-gray-600">Track trends in your health parameters.</p>
                    </div>
                </div>

                {/* Tips Card */}
                <div className="bg-white shadow-md rounded-md p-6 flex items-center">
                    <FaInfoCircle className="text-4xl text-green-500 mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Health Tips</h2>
                        <p className="text-sm text-gray-600">Get personalized health recommendations.</p>
                    </div>
                </div>
            </div>

            {/* Recent Reports Section */}
            <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-left text-sm">
                                <th className="border border-gray-300 p-2">Report Name</th>
                                <th className="border border-gray-300 p-2">Upload Date</th>
                                <th className="border border-gray-300 p-2">Status</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr key={report.id} className="text-sm">
                                    <td className="border border-gray-300 p-2">{report.name}</td>
                                    <td className="border border-gray-300 p-2">{report.date}</td>
                                    <td
                                        className={`border border-gray-300 p-2 ${
                                            report.status === "Analyzed"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {report.status}
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <button className="text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
