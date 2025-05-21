import { Link } from "react-router-dom";
import { Info } from "lucide-react";

const NoQuestions = ({ lessonId }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 p-5 rounded-md text-center">
                <Info className="h-12 w-12 mx-auto mb-4 text-red-600" />
                <h2 className="text-3xl text-red-600 font-bold mb-3">
                    لا يوجد أسئلة
                </h2>
                <p className="text-gray-500">لم يتم إضافة أسئلة لهذا الدرس.</p>
                <Link
                    to={`/lessons/${lessonId}`}
                    className="mt-6 bg-white inline-block px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-md w-full max-w-md hover:bg-blue-600 hover:text-white transition duration-200"
                >
                    الرجوع للدرس
                </Link>
            </div>
        </div>
    );
};

export default NoQuestions;
