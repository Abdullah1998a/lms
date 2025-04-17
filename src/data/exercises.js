export const exercises = [
    {
        id: 1,
        lessonId: 1,
        title: "جمع رقمين",
        description:
            "اكتب تابعًا (function) يجمع رقمين ويعيد الناتج. سيتم استدعاء التابع من الدالة الرئيسية واستخدام نتيجته.",
        difficulty: "سهل",
        language: "cpp",
        category: "functions",
        startingCodeMd: `
\`\`\`cpp
#include <iostream>
using namespace std;

// اكتب التابع sum هنا

int main() {
    cout << "3 + 5 = " << sum(3, 5) << endl; // يجب أن تكون النتيجة 8
    cout << "10 + 7 = " << sum(10, 7) << endl; // يجب أن تكون النتيجة 17
    return 0;
}
\`\`\``,
        startingCode: `
#include <iostream>
using namespace std;

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
        expectedOutput: "3 + 5 = 8\n10 + 7 = 17",
        commonMistakes: [
            {
                pattern: "void sum",
                message: "التابع يجب أن يُرجع قيمة من نوع int وليس void"
            },
            {
                pattern: "cout <<",
                message: "لا تحتاج لطباعة القيمة داخل التابع، بل إرجاعها فقط"
            }
        ],
        nextExercise: 2
    },
    {
        id: 2,
        lessonId: 1,
        title: "طباعة الاسم",
        description:
            "اكتب تابعًا (function) يطبع اسمك 3 مرات باستخدام حلقة تكرار. لاحظ أن الدالة لا تُرجع أي قيمة.",
        language: "cpp",
        difficulty: "سهل",
        category: "loops",
        startingCode: `
\`\`\`cpp
#include <iostream>
using namespace std;

// اكتب التابع printName هنا

int main() {
    printName(); // سيطبع اسمك 3 مرات
    return 0;
}
\`\`\``,
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
        expectedOutput: "Your name\nYour name\nYour name",
        commonMistakes: [
            {
                pattern: "int printName",
                message: "هذا التابع لا يحتاج لإرجاع قيمة، استخدم void"
            },
            {
                pattern: "i <= 3",
                message: "قد تطبع اسمك 4 مرات بدلاً من 3، تأكد من شرط الحلقة"
            }
        ],
        nextExercise: 3
    },
    {
        id: 3,
        lessonId: 2,
        title: "حساب مساحة المستطيل",
        description:
            "اكتب تابعًا يحسب مساحة المستطيل باستخدام الطول والعرض ويرجع النتيجة.",
        difficulty: "سهل",
        category: "functions",
        startingCode: `
\`\`\`cpp
#include <iostream>
using namespace std;

// اكتب التابع calculateArea هنا

int main() {
    cout << "مساحة المستطيل 3×5 = " << calculateArea(3, 5) << endl; // يجب أن تكون النتيجة 15
    cout << "مساحة المستطيل 2.5×4.0 = " << calculateArea(2.5, 4.0) << endl; // يجب أن تكون النتيجة 10.0
    return 0;
}
\`\`\``,
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
        expectedOutput: "مساحة المستطيل 3×5 = 15\nمساحة المستطيل 2.5×4.0 = 10",
        commonMistakes: [
            {
                pattern: "int calculateArea",
                message: "استخدم double بدلاً من int للتعامل مع القيم العشرية"
            },
            {
                pattern: "length + width",
                message: "المساحة تُحسب بضرب الطول والعرض، وليس جمعهما"
            }
        ],
        nextExercise: 4
    },
    {
        id: 4,
        lessonId: 2,
        title: "التحقق من الرقم الزوجي",
        description:
            "اكتب تابعًا يتحقق إذا كان الرقم زوجيًا ويرجع قيمة منطقية (true إذا كان زوجيًا، false إذا كان فرديًا).",
        difficulty: "متوسط",
        category: "conditionals",
        startingCode: `
\`\`\`cpp
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
\`\`\``,
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
        expectedOutput: "أدخل رقمًا: 4\nالرقم 4 زوجي",
        commonMistakes: [
            {
                pattern: "int isEven",
                message:
                    "التابع يجب أن يرجع قيمة منطقية (bool) وليس رقمًا (int)"
            },
            {
                pattern: "if",
                message:
                    "يمكنك إرجاع نتيجة التعبير المنطقي مباشرة بدلاً من استخدام if"
            }
        ],
        nextExercise: 5
    },
    {
        id: 5,
        lessonId: 3,
        title: "حساب المتوسط الحسابي",
        description: "اكتب تابعًا يحسب المتوسط الحسابي لثلاثة أرقام.",
        difficulty: "متوسط",
        category: "functions",
        startingCode: `
\`\`\`cpp
#include <iostream>
using namespace std;

// اكتب التابع average هنا

int main() {
    cout << "المتوسط الحسابي للأرقام 10, 20, 30 هو: " << average(10, 20, 30) << endl; // يجب أن تكون النتيجة 20
    cout << "المتوسط الحسابي للأرقام 5.5, 10.5, 15.5 هو: " << average(5.5, 10.5, 15.5) << endl; // يجب أن تكون النتيجة 10.5
    return 0;
}
\`\`\``,
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
        expectedOutput:
            "المتوسط الحسابي للأرقام 10, 20, 30 هو: 20\nالمتوسط الحسابي للأرقام 5.5, 10.5, 15.5 هو: 10.5",
        commonMistakes: [
            {
                pattern: "int average",
                message: "استخدم double بدلاً من int للتعامل مع القيم العشرية"
            },
            {
                pattern: "/ 3.0",
                message: "يمكنك استخدام 3 أو 3.0، وكلاهما صحيح لأن النوع double"
            }
        ],
        nextExercise: null
    }
];
