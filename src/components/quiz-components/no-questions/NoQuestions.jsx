import { Link } from "react-router-dom";
import { Info } from "lucide-react";

const NoQuestions = ({ lessonId }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-5 rounded-md text-center">
                <Info className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-2xl font-bold mb-3">
                    لا يوجد أسئلة بعد
                </h2>
                <p className="text-lg">
                    لم يتم إضافة أسئلة لهذا الدرس حتى الآن. يرجى العودة
                    لاحقاً.
                </p>
                <Link
                    to={`/lessons/${lessonId}`}
                    className="mt-6 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
                >
                    الرجوع للدرس
                </Link>
            </div>
        </div>
    );
};

export default NoQuestions;