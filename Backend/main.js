const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Generative AI
const genAI = new GoogleGenerativeAI("AIzaSyAr6KT_yxWLcazNZB_6TIb7GrVnq82VGfw");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const main = async () => {
    try {
        const prompt = "Analyze the blood report details give the detailed explanation Hemoglobin: 13.5, RBC: 4.7 millions/uL, WBC: 6.2 cells/uL";
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
};

// Call the async function
main();
