import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <h1 className="text-4xl text-blue-600 font-bold mb-4">
                محاضرات مكثفة وتمارين عمليّة في لغات برمجية متعددة
            </h1>
            <p className="leading-relaxed text-gray-500">
                مزيجٌ من المحاضرات المُحكمة والمنظمة والتدريبات العملية لتعزيز
                خبرة المتعلمين، مع تركيز مكثف على التطبيق العملي لضمان اكتساب
                مهارات قابلة للتنفيذ.
            </p>
            <Link
                to="/lessons"
                className="mt-6 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
            >
                الدروس
            </Link>
        </div>
    );
};

export default Home;
