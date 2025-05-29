import { useState, useEffect } from "react";
import {
    UserPlus,
    Send,
    Phone,
    ExternalLink,
    CheckCircle2,
    Loader2
} from "lucide-react";

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
        "https://chat.whatsapp.com/CRF0BjA1t9q5HtCf9w747q";
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
        <div className="w-full max-w-4xl mx-auto flex flex-col justify-center gap-6 self-start">
            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-md py-12 px-4">
                <div className="flex justify-center">
                    <UserPlus className="h-12 w-12 text-blue-600 dark:text-blue-500" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-neutral-100">
                    التسجيل على مجموعة الواتساب
                </h2>
            </div>
            <div>
                <div className="sm:px-10">
                    {submitSuccess ? (
                        <div className="rounded-md bg-green-50 p-4 mb-4">
                            <div className="grid gap-4 justify-center">
                                <div>
                                    <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto" />
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
                    ) : false ? (
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
                                            <Loader2 className="animate-spin ml-3 h-5 w-5 text-white" />
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
                            </div>
                        </form>
                    ) : (
                        <a
                            href={whatsappGroupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full  max-w-md mx-auto flex justify-center items-center py-3 px-2 border border-blue-600 rounded-md shadow-sm font-medium text-blue-600 bg-white hover:bg-blue-50 outline-none dark:bg-blue-200 dark:text-black hover:bg-blue-700 dark:hover:bg-blue-300"
                        >
                            <ExternalLink className="h-5 w-5 ml-2 dark:text-blue-600" />
                            انضم إلى المجموعة مباشرة
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
