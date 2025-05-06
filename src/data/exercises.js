export const exercises = [
    {
        id: 1,
        lessonId: 2,
        title: "طباعة رسالة بترتيب معكوس",
        description:
            "اكتب برنامج يقوم بطباعة رسالة 'Hello World' بترتيب معكوس ('World Hello').",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // اكتب الكود هنا لطباعة 'World Hello'
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "World Hello" << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. استخدم أمر cout لطباعة النص "World Hello" على الشاشة.
2. إضافة سطر جديد باستخدام endl.
3. إرجاع قيمة 0 للدلالة على نجاح تنفيذ البرنامج.`,
        hints: [
            "استخدم أمر cout لطباعة النص على الشاشة",
            "يمكنك طباعة النص مباشرة بالترتيب المطلوب",
            "لا تنسَ إضافة سطر جديد في نهاية الطباعة"
        ],
        testCases: [
            {
                description: "طباعة رسالة 'World Hello'",
                input: "",
                expectedOutput: "World Hello"
            }
        ]
    },
    {
        id: 2,
        lessonId: 2,
        title: "حساب مساحة ومحيط المثلث",
        description:
            "اكتب برنامج يقرأ أطوال أضلاع مثلث (a, b, c) ويقوم بحساب مساحته (باستخدام قانون هيرون) ومحيطه.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // عرّف المتغيرات اللازمة
    
    //أقرأ أطوال أضلاع المثلث من المستخدمa, b, c
    //أقرأ أطوال أضلاع المثلث من المستخدمa, b, c
    
    // التحقق أن أطوال الأضلاع تشكل مثلثاً
    if (a + b > c && a + c > b && b + c > a) {
        // احسب محيط المثلث
        
        // احسب نصف المحيط
    
        // احسب المساحة باستخدام قانون هيرون
    
        // اطبع النتائج
        
    } else {
        cout << "The entered sides do not form a triangle!" << endl;
    }
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // تعريف المتغيرات
    double a, b, c, perimeter, s, area;
    // قراءة أطوال الأضلاع من المستخدم
    cout << "Enter the length of the first side of the triangle: ";
    cin >> a;
    cout << "Enter the length of the second side of the triangle: ";
    cin >> b;
    cout << "Enter the length of the third side of the triangle: ";
    cin >> c;
    // التحقق أن أطوال الأضلاع تشكل مثلثاً
    if (a + b > c && a + c > b && b + c > a) {
        // حساب المحيط
        perimeter = a + b + c;
        // حساب نصف المحيط
        s = perimeter / 2;
        // حساب المساحة باستخدام قانون هيرون
        area = sqrt(s * (s - a) * (s - b) * (s - c));
        // طباعة النتائج
        cout << "Triangle's perimeter = " << perimeter << endl;
        cout << "Triangle's area = " << area << endl;
    } else {
        cout << "The entered sides do not form a triangle!" << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف المتغيرات اللازمة.
2. قراءة أطوال أضلاع المثلث من المستخدم.
3. التحقق من إمكانية تشكيل مثلث (مجموع طولي أي ضلعين يجب أن يكون أكبر من طول الضلع الثالث).
4. حساب محيط المثلث (مجموع أطوال الأضلاع).
5. حساب نصف المحيط s = (a + b + c) / 2.
6. حساب المساحة باستخدام قانون هيرون: area = sqrt(s * (s - a) * (s - b) * (s - c)).
7. طباعة النتائج.`,
        hints: [
            "تأكد من التحقق ما إذا كانت الأضلاع يمكن أن تشكل مثلثًا",
            "استخدم قانون هيرون لحساب مساحة المثلث: √(s(s-a)(s-b)(s-c)) حيث s هو نصف المحيط",
            "استخدم مكتبة cmath للحصول على دالة الجذر التربيعي sqrt()"
        ],
        testCases: [
            {
                description: "مثلث متساوي الأضلاع (3، 3، 3)",
                input: "3 3 3",
                expectedOutput:
                    "Triangle's perimeter = 9\nTriangle's area = 3.89711"
            },
            {
                description: "مثلث قائم الزاوية (3، 4، 5)",
                input: "3 4 5",
                expectedOutput: "Triangle's perimeter = 12\nTriangle's area = 6"
            },
            {
                description: "أضلاع لا تشكل مثلث (1، 1، 10)",
                input: "1 1 10",
                expectedOutput: "The entered sides do not form a triangle!"
            }
        ]
    },
    {
        id: 3,
        lessonId: 2,
        title: "تحويل درجة الحرارة",
        description:
            "اكتب برنامج يقوم بتحويل درجات الحرارة من درجة مئوية إلى فهرنهايت والعكس حسب اختيار المستخدم.",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // عرّف المتغيرات اللازمة
    
    // اسأل المستخدم عن العملية المطلوبة
    
    if (choice == 1) {
        // نفذ عملية التحويل المناسبة
    
        // اطبع النتيجة
        
    } 
    else if (choice == 2) {
        // نفذ عملية التحويل المناسبة
    
        // اطبع النتيجة
        
    } 
    else {
        cout << "Your choice is incorrect!" << endl;
    }
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    double temp, result;
    int choice;
    
    cout << "Choose the conversion process" << endl;
    cout << "1. Celsius to Fahrenheit." << endl;
    cout << "2. Fahrenheit to Celsius." << endl;
    cout << "Choose (1 or 2): ";
    cin >> choice;
    if (choice == 1) {
        cout << "Enter the temperature in Celsius: ";
        cin >> temp;
        result = (temp * 9/5) + 32;
        cout << temp << " Celsius = " << result << " Fahrenheit" << endl;
    } 
    else if (choice == 2) {
        cout << "Enter the temperature in Fahrenheit: ";
        cin >> temp;
        result = (temp - 32) * 5/9;
        cout << temp << " Fahrenheit = " << result << " Celsius" << endl;
    } 
    else {
        cout << "Your choice is incorrect!" << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف المتغيرات اللازمة.
2. عرض خيارات التحويل للمستخدم.
3. قراءة اختيار المستخدم.
4. طلب درجة الحرارة المراد تحويلها من المستخدم.
5. تطبيق معادلة التحويل المناسبة:
   - من مئوية إلى فهرنهايت: F = (C * 9/5) + 32
   - من فهرنهايت إلى مئوية: C = (F - 32) * 5/9
6. طباعة النتيجة.`,
        hints: [
            "معادلة التحويل من مئوية إلى فهرنهايت: F = (C × 9/5) + 32",
            "معادلة التحويل من فهرنهايت إلى مئوية: C = (F - 32) × 5/9",
            "تأكد من تخزين النتيجة في متغير من نوع double للحفاظ على الدقة"
        ],
        testCases: [
            {
                description: "تحويل من مئوية إلى فهرنهايت (0 درجة مئوية)",
                input: "1\n0",
                expectedOutput: "0 Celsius = 32 Fahrenheit"
            },
            {
                description: "تحويل من فهرنهايت إلى مئوية (32 درجة فهرنهايت)",
                input: "2\n32",
                expectedOutput: "32 Fahrenheit = 0 Celsius"
            },
            {
                description: "اختبار إدخال خيار غير صحيح",
                input: "3",
                expectedOutput: "Your choice is incorrect!"
            }
        ]
    },
    {
        id: 4,
        lessonId: 2,
        title: "حساب المتوسط والانحراف المعياري",
        description:
            "اكتب برنامج يقرأ ثلاثة أرقام من المستخدم ويحسب المتوسط الحسابي والانحراف المعياري لهذه الأرقام.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // عرّف المتغيرات اللازمة
    
    // اقرأ الأرقام من المستخدم
    
    // احسب المتوسط الحسابي
    
    // احسب الانحراف المعياري
    
    // اطبع النتائج
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double num1, num2, num3;
    double mean, variance, stdDev;
    // قراءة الأرقام من المستخدم
    cout << "Enter three numbers separated by space: ";
    cin >> num1 >> num2 >> num3;
    // حساب المتوسط الحسابي
    mean = (num1 + num2 + num3) / 3;
    // حساب التباين
    variance = ((num1 - mean) * (num1 - mean) + (num2 - mean) * (num2 - mean) + (num3 - mean) * (num3 - mean)) / 3;
    // حساب الانحراف المعياري (الجذر التربيعي للتباين)
    stdDev = sqrt(variance);
    // طباعة النتائج
    cout << "Mean = " << mean << endl;
    cout << "Standard deviation = " << stdDev << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف المتغيرات اللازمة.
2. قراءة ثلاثة أرقام من المستخدم.
3. حساب المتوسط الحسابي: mean = (num1 + num2 + num3) / 3.
4. حساب التباين: variance = ((num1 - mean)² + (num2 - mean)² + (num3 - mean)²) / 3.
5. حساب الانحراف المعياري: stdDev = sqrt(variance).
6. طباعة النتائج.`,
        hints: [
            "المتوسط الحسابي هو مجموع القيم مقسومًا على عددها",
            "الانحراف المعياري هو الجذر التربيعي للتباين",
            "التباين هو متوسط مربعات الانحرافات عن المتوسط الحسابي"
        ],
        testCases: [
            {
                description: "أعداد متتالية (10، 20، 30)",
                input: "10 20 30",
                expectedOutput: "Mean = 20\nStandard deviation = 8.16497"
            },
            {
                description: "أعداد متساوية (5، 5، 5)",
                input: "5 5 5",
                expectedOutput: "Mean = 5\nStandard deviation = 0"
            },
            {
                description: "أعداد سالبة وموجبة (-10، 0، 10)",
                input: "-10 0 10",
                expectedOutput: "Mean = 0\nStandard deviation = 8.16497"
            }
        ]
    },
    {
        id: 5,
        lessonId: 2,
        title: "حساب معدل استهلاك الوقود",
        description:
            "اكتب برنامج يحسب معدل استهلاك السيارة للوقود. يقرأ البرنامج المسافة المقطوعة بالكيلومترات وكمية الوقود المستهلكة باللترات، ثم يحسب معدل الاستهلاك بالليتر لكل 100 كم وبالكيلومتر لكل ليتر.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // عرّف المتغيرات اللازمة
    
    // اقرأ المدخلات من المستخدم
    
    // التحقق من صحة المدخلات
    if (distance > 0 && fuel > 0) {
        // احسب معدل استهلاك الوقود
    
        // اطبع النتائج
    
    }
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    double distance, fuel, kmPerLiter, litersPer100km;
    // قراءة المدخلات من المستخدم
    cout << "Enter the distance traveled in kilometers: ";
    cin >> distance;
    cout << "Enter the amount of fuel consumed in liters: ";
    cin >> fuel;
    // التحقق من صحة المدخلات
    if (distance > 0 && fuel > 0) {
        // حساب معدل استهلاك الوقود
        kmPerLiter = distance / fuel;
        litersPer100km = (fuel * 100) / distance;
        cout << "Consumption rate: " << kmPerLiter << "Km/L" << endl;
        cout << "Consumption rate: " << litersPer100km << "L/100Km" << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف المتغيرات اللازمة.
2. قراءة المسافة المقطوعة وكمية الوقود المستهلكة من المستخدم.
3. التحقق من صحة المدخلات (يجب أن تكون أرقامًا موجبة).
4. حساب معدل الاستهلاك بالكيلومتر لكل ليتر: kmPerLiter = distance / fuel.
5. حساب معدل الاستهلاك باللتر لكل 100 كم: litersPer100km = (fuel * 100) / distance.
`,
        hints: [
            "تأكد من إجراء اختبار للمدخلات للتأكد من أنها أرقام موجبة",
            "معدل استهلاك الوقود يمكن حسابه بطريقتين: كم/لتر أو لتر/100كم"
        ],
        testCases: [
            {
                description: "مسافة 500 كم، استهلاك 40 لتر",
                input: "500 40",
                expectedOutput:
                    "Consumption rate: 12.5Km/L\nConsumption rate: 8L/100Km"
            },
            {
                description: "مسافة 100 كم، استهلاك 10 لتر",
                input: "100 10",
                expectedOutput:
                    "Consumption rate: 10Km/L\nConsumption rate: 10L/100Km"
            },
            {
                description: "مسافة 200 كم، استهلاك 15 لتر",
                input: "200 15",
                expectedOutput:
                    "Consumption rate: 13.3333Km/L\nConsumption rate: 7.5L/100Km"
            }
        ]
    }
];
