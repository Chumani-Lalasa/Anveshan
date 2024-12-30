import React, {useState} from "react";

function ReportUpload({onBack}) {
    const [formData, setFormData] = useState({
        patientName: "",
        age: "",
        gender: "",
        hemoglobin: "",
        cholesterol: "",
        bloodSugar: "",
        whiteBloodCell: "",
        redBloodCell: "",
        creatinine: "",
        urea: "",
        albumin: "",
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate the form data 
        const emptyFields = Object.values(formData).some((field) => field === "");
        if(emptyFields){
            setMessage("Please fill in all fields before submitting");
            return;
        }

        setTimeout(() => {
            setMessage("Blood report details submitted successfully!");
        }, 1000);
    };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Enter Blood Report Details
        </h2>

        <form action="" onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Patient Information */}
            <div className="flex flex-col">
                <label htmlFor="patientName" className="text-gray-700 mb-1">
                    Patient Name:
                </label>
                <input 
                    type="text" 
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className="borer border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="age" className="text-gray-700 mb-1">Age:</label>
                <input 
                    type="number" 
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="gender" className="text-gray-700 mb-1">Gender:</label>
                <select 
                    name="gender" 
                    id="gender" 
                    value={formData.gender} 
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required
                >    
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            {/* Blood Parameters */}
            <div className="flex flex-col">
                <label htmlFor="hemoglobin" className="text-gray-700 mb-1">Hemoglobin (g/dL):</label>
                <input 
                    type="number"
                    id="hemoglobin"
                    name="hemoglobin"
                    value={formData.hemoglobin}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required 
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="cholesterol" className="text-gray-700 mb-1">
                    Cholesterol (mg/dL):
                </label>
                <input 
                    type="text" 
                    id="cholesterol"
                    name="cholesterol"
                    value={formData.cholesterol}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="bloodSugar" className="text-gray-700 mb-1">Blood Sugar (mg/dL):</label>
                <input 
                    type="number" 
                    id="bloodSugar"
                    name="bloodSugar"
                    value={formData.bloodSugar}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="whiteBloodCell" className="text-gray-700 mb-1">White Blood Cell (cells/μL):</label>
                <input 
                    type="text" 
                    id="whiteBloodCell"
                    name="whiteBloodCell"
                    value={formData.whiteBloodCell}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="redBloodCell" className="text-gray-700 mb-1">Red Blood Cells (million/μL):</label>
                <input 
                    type="text" 
                    id="redBloodCell"
                    name="redBloodCell"
                    value={formData.redBloodCell}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="creatinine" className="text-gray-700 mb-1">Creatinine (mg/dL):</label>
                <input 
                    type="number"
                    id="creatinine"
                    name="creatinine"
                    value={formData.creatinine}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required 
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="urea" className="text-gray-700 mb-1">Urea (mg/dL):</label>
                <input 
                    type="number" 
                    id="urea"
                    name="urea"
                    value={formData.urea}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="albumin" className="text-gray-700 mb-1">Albumin (g/dL):</label>
                <input 
                    type="number" 
                    id="albumin"
                    name="albumin"
                    value={formData.albumin}
                    onChange={handleChange}
                    className="borer border-gray-300 p-2 rounded-md"
                    required
                />
            </div>

            {/* Submission Message */}
            {message && (
                <div
                    className={`text-sm text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}
                >
                    {message}
                </div>
            )}

            {/* Submit Button */}
            <button 
                type="submit"
                className="bg-blue-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-gray-600"
            >
                Submit Report
            </button>
        </form>

        {/* Back to Dashboard Button */}
        <div className="mt-4 text-center">
            <button 
                onClick={onBack}
                className="text-blue-gray-500 hover:underline"
            ></button>
        </div>
      </div>
    </div>
  )
}

export default ReportUpload
