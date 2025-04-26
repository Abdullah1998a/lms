import { useState, useEffect } from "react";
import { UserPlus, Send, Phone, ExternalLink } from "lucide-react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "+963",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    const whatsappGroupLink =
        "https://chat.whatsapp.com/ECBQVOweDf81EmiSoaGMQg";
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({
                    name: "",
                    phoneNumber: "",
                    message: ""
                });
            }, 3000);
        }, 1000);
    };

    return (
        <div className="flex flex-col justify-center gap-6">
            <div className="bg-neutral-100 rounded-md sm:mx-auto sm:w-full sm:max-w-md py-12 px-4">
                <div className="flex justify-center">
                    <UserPlus className="h-12 w-12 text-blue-500" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                    التسجيل على مجموعة واتساب
                </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white sm:px-10">
                    {submitSuccess ? (
                        <div className="rounded-md bg-green-50 p-4 mb-4">
                            <div className="grid gap-4 justify-center">
                                <div>
                                    <svg
                                        className="h-16 w-16 text-green-400 mx-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">
                                        تم التسجيل بنجاح!
                                    </h3>
                                    <p className="text-gray-800 mt-4">
                                        سيتم إضافتك إلى مجموعة واتساب قريباً.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    الاسم الكامل
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="ادخل اسمك الكامل"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    رقم الواتساب
                                </label>
                                <div className="mt-2 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        required
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="+963 912 345 678"
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    يجب تضمين رمز الدولة
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    رسالة (اختياري)
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="p-3 resize-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="اخبرنا لماذا تريد أن تنضم إلينا"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center items-center py-3 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                        isSubmitting
                                            ? "opacity-70 cursor-not-allowed"
                                            : ""
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin  ml-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            يتم المعالجة...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 ml-2" />
                                            تسجيل
                                        </>
                                    )}
                                </button>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                            أو
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={whatsappGroupLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex justify-center items-center py-3 px-2 border border-green-600 rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <ExternalLink className="h-5 w-5 ml-2" />
                                    انضم إلى المجموعة مباشرة
                                </a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
