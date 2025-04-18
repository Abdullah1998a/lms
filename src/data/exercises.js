export const exercises = [
    {
        id: 1,
        lessonId: 1,
        title: "جمع رقمين",
        description:
            "اكتب تابعًا (function) يجمع رقمين ويعيد الناتج. سيتم استدعاء التابع من الدالة الرئيسية واستخدام نتيجته.",
        difficultyId: 1,
        difficulty: "سهل",
        language: "cpp",
        category: "functions",
        startingCode: `
#include <iostream>
using namespace std;

// اكتب التابع sum هنا

int main() {
    cout << "3 + 5 = " << sum(3, 5) << endl;
    cout << "10 + 7 = " << sum(10, 7) << endl;
    return 0;
}
`,
        solution: `
\`\`\`cpp
int sum(int a, int b) {
    return a + b;
}
\`\`\``,
        hints: [
            "تذكر أن التابع يحتاج إلى نوع البيانات المُرجع (return type)",
            "التابع يحتاج إلى معاملين (parameters) من نوع int",
            "استخدم عامل الجمع (+) للحصول على مجموع المعاملين"
        ],
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 2,
        lessonId: 1,
        title: "طباعة الاسم",
        description:
            "اكتب تابعًا (function) يطبع اسمك 3 مرات باستخدام حلقة تكرار. لاحظ أن الدالة لا تُرجع أي قيمة.",
        language: "cpp",
        difficultyId: 1,
        difficulty: "سهل",
        category: "functions",
        startingCode: `
#include <iostream>
using namespace std;

// اكتب التابع printName هنا

int main() {
    printName(); // سيطبع اسمك 3 مرات
    return 0;
}
`,
        solution: `
\`\`\`cpp
void printName() {
    for (int i = 0; i < 3; i++) {
        cout << "Your name" << endl;
    }
} 
\`\`\``,
        hints: [
            "استخدم كلمة void للتوابع التي لا ترجع قيمة",
            "يمكنك استخدام حلقة for للتكرار ثلاث مرات",
            "لا تنس استخدام endl في نهاية كل سطر لطباعة اسمك في سطر جديد"
        ],
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 3,
        lessonId: 1,
        title: "حساب مساحة المستطيل",
        description:
            "اكتب تابعًا يحسب مساحة المستطيل باستخدام الطول والعرض ويرجع النتيجة.",
        difficultyId: 1,
        difficulty: "سهل",
        language: "cpp",
        category: "functions",
        startingCode: `
#include <iostream>
using namespace std;

// اكتب التابع calculateArea هنا

int main() {
    cout << "مساحة المستطيل 3×5 = " << calculateArea(3, 5) << endl; // يجب أن تكون النتيجة 15
    cout << "مساحة المستطيل 2.5×4.0 = " << calculateArea(2.5, 4.0) << endl; // يجب أن تكون النتيجة 10.0
    return 0;
}
`,
        solution: `
\`\`\`cpp
double calculateArea(double length, double width) {
    return length * width;
}
\`\`\``,
        hints: [
            "استخدم نوع البيانات double للتعامل مع الأرقام العشرية",
            "للحصول على المساحة، قم بضرب الطول في العرض",
            "تأكد من استخدام معاملين في التابع: الطول والعرض"
        ],
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 4,
        lessonId: 1,
        title: "التحقق من الرقم الزوجي",
        description:
            "اكتب تابعًا يتحقق إذا كان الرقم زوجيًا ويرجع قيمة منطقية (true إذا كان زوجيًا، false إذا كان فرديًا).",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        category: "functions",
        startingCode: `
#include <iostream>
using namespace std;

// اكتب التابع isEven هنا

int main() {
    int number;
    cout << "أدخل رقمًا: ";
    cin >> number;
    
    if (isEven(number)) {
        cout << "الرقم " << number << " زوجي" << endl;
    } else {
        cout << "الرقم " << number << " فردي" << endl;
    }
    
    return 0;
}
`,
        solution: `
\`\`\`cpp
bool isEven(int number) {
    return number % 2 == 0;
}
\`\`\``,
        hints: [
            "استخدم نوع البيانات bool للتوابع التي ترجع قيمة منطقية (true/false)",
            "يمكنك استخدام عامل باقي القسمة (%) للتحقق من الزوجية",
            "الرقم يكون زوجيًا إذا كان باقي قسمته على 2 يساوي صفر"
        ],
        requiresInput: true,
        sampleInput: 4,
        inputDescription: "أدخل رقم بدون مسافات"
    },
    {
        id: 5,
        lessonId: 1,
        title: "حساب المتوسط الحسابي",
        description: "اكتب تابعًا يحسب المتوسط الحسابي لثلاثة أرقام.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        category: "functions",
        startingCode: `
#include <iostream>
using namespace std;

// اكتب التابع average هنا

int main() {
    cout << "المتوسط الحسابي للأرقام 10, 20, 30 هو: " << average(10, 20, 30) << endl; // يجب أن تكون النتيجة 20
    cout << "المتوسط الحسابي للأرقام 5.5, 10.5, 15.5 هو: " << average(5.5, 10.5, 15.5) << endl; // يجب أن تكون النتيجة 10.5
    return 0;
}
`,
        solution: `
\`\`\`cpp
double average(double a, double b, double c) {
    return (a + b + c) / 3;
}
\`\`\``,
        hints: [
            "استخدم نوع البيانات double للتعامل مع الأرقام العشرية",
            "المتوسط الحسابي يُحسب بجمع الأرقام وقسمة المجموع على عددها",
            "تأكد من إجراء القسمة على الرقم 3 (عدد الأرقام)"
        ],
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    }
];
