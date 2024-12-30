import React, { useState } from 'react'

function ReportUpload({onBackToDashboard}) {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setMessage('');
    }

    const handleUpload = (e) => {
        e.prevenDefault();
        if(!file){
            setMessage('Please select a file before uploading.');
            return;
        }

        setTimeout(() => {
            setMessage('Report uploaded successfully!');
        }, 1000);
    }
  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-white shadow-md rounded-md p-6'>
        <h2 className='text-2xl font-semibold text-gray-800 text-center mb-4'>
            Upload New Report
        </h2>

        <form action="" onSubmit={handleUpload} className='flex flex-col space-y-4'>
            <div className='flex flex-col'>
                <label htmlFor="reportFile" className='text-gray-700 mb-1'>
                    Select a Blood Report File:
                </label>
                <input 
                    type="file"
                    id='reportFile'
                    accept='.pdf,.jpg,.jpeg,.png'
                    className='border border-gray-300 p-2 rounded-md'
                    onChange={handleFileChange} 
                />
            </div>

            {/* Feedback Message */}
            {message && (
                <div className={`text-sm text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {message}
                </div>
            )}

            {/* Upload Button */}
            <button type='submit' className='bg-blue-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-gray-600'>
                Upload Report
            </button>
        </form>

        {/* Back to Dashboard Button */}
        <div className='mt-4 text-center'>
            <button onClick={onBackToDashboard} className='text-blue-500 hover:underline'>
                Back to Dashboard
            </button>
        </div>
      </div>
    </div>
  )
}

export default ReportUpload
