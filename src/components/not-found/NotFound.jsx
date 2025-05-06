import { Link } from "react-router-dom";
import { AlertCircle, Home, ArrowRight } from "lucide-react";

const NotFound = () => {
    return (
        <div className="w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <AlertCircle className="h-16 w-16 text-red-500" />
                </div>
                <h2 className="mt-6 text-center text-7xl font-bold text-red-600">
                    404
                </h2>
                <p className="my-2 text-center text-lg">
                    هذه الصفحة غير موجودة
                </p>
                <p className="text-center text-gray-700">
                    الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها.
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                    <div className="text-center">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <Home className="h-4 w-4 ml-2" />
                                العودة للصفحة الرئيسيّة
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <ArrowRight className="h-4 w-4 ml-2" />
                                رجوع
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
