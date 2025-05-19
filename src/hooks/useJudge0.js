import { useState } from 'react';
import axios from 'axios';

export const useJudge0 = () => {
    const [output, setOutput] = useState("");
    const [error, setError] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const JUDGE0_API_URL = import.meta.env.VITE_JUDGE0_API_URL;
    const JUDGE0_API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;
    const JUDGE0_API_HOST = import.meta.env.VITE_JUDGE0_API_HOST;

    const languageIds = {
        cpp: 54,
        java: 62,
        csharp: 51,
        javascript: 63,
        python: 71,
        ruby: 72
    };

    const encodeBase64 = str => {
        try {
            return btoa(unescape(encodeURIComponent(str || "")));
        } catch (e) {
            console.error("Base64 encoding error:", e);
            return "";
        }
    };

    const decodeBase64 = str => {
        if (!str) return "";
        
        try {
            // First, check if the string is valid base64
            const isBase64 = /^[A-Za-z0-9+/=]+$/.test(str.replace(/\s/g, ''));
            
            if (!isBase64) {
                return str; // Return as is if not valid base64
            }
            
            return decodeURIComponent(escape(atob(str)));
        } catch (e) {
            console.error("Base64 decoding error:", e);
            // If there's an error in decoding, return the original string
            return str;
        }
    };

    const handleJudge0Result = (result, statusId, onResult, onSuccess) => {
        const statusMap = {
            3: "Accepted",
            4: "Wrong Answer",
            5: "Time Limit Exceeded",
            6: "Compilation Error",
            7: "Runtime Error (SIGSEGV)",
            8: "Runtime Error (SIGXFSZ)",
            9: "Runtime Error (SIGFPE)",
            10: "Runtime Error (SIGABRT)",
            11: "Runtime Error (NZEC)",
            12: "Runtime Error (Other)",
            13: "Internal Error",
            14: "Exec Format Error"
        };

        let outputText = "";
        let errorText = null;
        let resultStatus = "";

        // Handle stdout - could be base64 encoded or plain text
        if (result.stdout) {
            outputText = decodeBase64(result.stdout);
            setOutput(outputText);
        } else {
            outputText = "Code executed successfully (no output)";
            setOutput(outputText);
        }

        if (statusId === 3) {
            resultStatus = "accepted";
        } else if (statusId === 6) {
            errorText = `Compilation Error: ${decodeBase64(result.compile_output || "")}`;
            setError(errorText);
            resultStatus = "rejected";
        } else if (statusId >= 7 && statusId <= 12) {
            errorText = `Runtime Error (${statusMap[statusId]}): ${
                decodeBase64(result.stderr || "")
            }`;
            if (result.message) {
                errorText += `\n${
                    typeof result.message === "string"
                        ? decodeBase64(result.message)
                        : JSON.stringify(result.message)
                }`;
            }
            setError(errorText);
            resultStatus = "rejected";
        } else {
            errorText = `Execution Error: ${statusMap[statusId] || "Unknown error"}`;
            setError(errorText);
            resultStatus = "rejected";
        }

        // Call the onResult callback if provided
        if (typeof onResult === 'function') {
            onResult(resultStatus, outputText, errorText);
        }

        // Call the onSuccess callback if result was successful
        if (statusId === 3 && typeof onSuccess === 'function') {
            onSuccess();
        }
    };

    const runCode = async ({ 
        code, 
        language, 
        input, 
        expectedOutput, 
        onSuccess, 
        onResult 
    }) => {
        setIsRunning(true);
        setError(null);
        setOutput("");
        
        try {
            const options = {
                method: "POST",
                url: `${JUDGE0_API_URL}/submissions`,
                params: { base64_encoded: "true", wait: "false" },
                headers: {
                    "content-type": "application/json",
                    "X-RapidAPI-Key": JUDGE0_API_KEY,
                    "X-RapidAPI-Host": JUDGE0_API_HOST
                },
                data: {
                    source_code: encodeBase64(code),
                    language_id: languageIds[language?.toLowerCase()],
                    stdin: input ? encodeBase64(input) : "",
                    expected_output: expectedOutput ? encodeBase64(expectedOutput) : null,
                    cpu_time_limit: 2,
                    memory_limit: 128000
                }
            };

            const submissionResponse = await axios.request(options);
            const token = submissionResponse.data.token;
            
            if (!token) {
                throw new Error("No submission token received from Judge0 API");
            }

            let result;
            let statusId = 1;
            
            while (statusId <= 2) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const getResultOptions = {
                    method: "GET",
                    url: `${JUDGE0_API_URL}/submissions/${token}`,
                    params: { base64_encoded: "true" },
                    headers: {
                        "X-RapidAPI-Key": JUDGE0_API_KEY,
                        "X-RapidAPI-Host": JUDGE0_API_HOST
                    }
                };
                
                const resultResponse = await axios.request(getResultOptions);
                result = resultResponse.data;
                statusId = result.status?.id;
            }

            handleJudge0Result(result, statusId, onResult, onSuccess);
            
            // Check if output matches expected output for test cases
            if (statusId === 3 && expectedOutput) {
                const actualOutput = decodeBase64(result.stdout || "").trim();
                const expected = decodeBase64(expectedOutput || "").trim();
                
                if (actualOutput !== expected) {
                    setError(`Output doesn't match expected result.
Actual: ${actualOutput}
Expected: ${expected}`);
                    
                    if (typeof onResult === 'function') {
                        onResult("wrong_answer", actualOutput, null);
                    }
                }
            }
        } catch (err) {
            console.error("Judge0 API error:", err);
            const errorMsg = `API Error: ${err.response?.data?.error || err.message}`;
            setError(errorMsg);
            
            if (typeof onResult === 'function') {
                onResult("error", "", errorMsg);
            }
        } finally {
            setIsRunning(false);
        }
    };

    return {
        output,
        error,
        isRunning,
        runCode
    };
};