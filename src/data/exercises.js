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
    cin >> choice;
    if (choice == 1) {
        cin >> temp;
        result = (temp * 9/5) + 32;
        cout << temp << " Celsius = " << result << " Fahrenheit" << endl;
    } 
    else if (choice == 2) {
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
        id: 3,
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
    cin >> a >> b >> c;
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
        id: 4,
        lessonId: 2,
        title: "حساب المتوسط والانحراف المعياري",
        description:
            "اكتب برنامج يقرأ ثلاثة أرقام من المستخدم ويحسب المتوسط الحسابي والانحراف المعياري لهذه الأرقام.",
        difficultyId: 3,
        difficulty: "متقدم",
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
        difficultyId: 3,
        difficulty: "متقدم",
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
    cin >> distance;
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
    },
    {
        id: 6,
        lessonId: 3,
        title: "حساب المعدل وتحديد التقدير",
        description:
            "اكتب برنامج يقوم بإدخال درجات طالب في 5 مواد ثم يحسب المعدل ويحدد التقدير حسب الشروط التالية: \nإذا كان المعدل 90 أو أكثر: ممتاز\nإذا كان المعدل بين 80 و89: جيد جداً\nإذا كان المعدل بين 70 و79: جيد\nإذا كان المعدل بين 60 و69: مقبول\nإذا كان المعدل أقل من 60: راسب",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // عرّف المتغيرات اللازمة
    
    // اقرأ المدخلات من المستخدم
    
    // احسب المعدل
    
    // اطبع التقدير
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    double grade1, grade2, grade3, grade4, grade5, average;
    // قراءة المدخلات من المستخدم
    cin >> grade1 >> grade2 >> grade3 >> grade4 >> grade5;
    // حساب المعدّل
    average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5.0;
    cout << "Average = " << average << endl;
    // طباعة التقدير
    cout << "The estimate: ";
    if (average >= 90) {
        cout << "Excellent";
    } else if (average >= 80) {
        cout << "Very Good";
    } else if (average >= 70) {
        cout << "Good";
    } else if (average >= 60) {
        cout << "Acceptable";
    } else {
        cout << "Fail";
    }
    cout << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. إدخال درجات الطالب في المواد الخمس.
2. حساب المعدل بقسمة مجموع الدرجات على عدد المواد.
3. تحديد التقدير باستخدام بنية if-else if-else حسب قيمة المعدل.
4. طباعة المعدل والتقدير.`,
        hints: [
            "استخدم متغيرات من نوع double لتخزين الدرجات والمعدل.",
            "استخدم بنية if-else if-else المتسلسلة لتحديد التقدير.",
            "تأكد من قسمة المجموع على 5.0 للحصول على نتيجة بالفاصلة العشرية."
        ],
        testCases: [
            {
                description: "اختبار تقدير جيد جداً",
                input: "85 92 78 90 88",
                expectedOutput: "Average = 86.6\nThe estimate: Very Good"
            },
            {
                description: "اختبار تقدير ممتاز",
                input: "95 91 93 97 94",
                expectedOutput: "Average = 94\nThe estimate: Excellent"
            },
            {
                description: "اختبار تقدير راسب",
                input: "45 58 52 59 55",
                expectedOutput: "Average = 53.8\nThe estimate: Fail"
            }
        ]
    },
    {
        id: 7,
        lessonId: 3,
        title: "فحص الأعداد الأولية ضمن مجال",
        description:
            "اكتب برنامج يقبل من المستخدم عددين صحيحين موجبين (البداية والنهاية) ويقوم بطباعة جميع الأعداد الأولية الموجودة ضمن هذا المجال.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // تعريف المتغيرات اللازمة
    
    // قراءة المدخلات من المستخدم
    
    // استخراج وطباعة الأعداد الأولية ضمن المجال المحدد
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int start, end;
    bool isPrime;
    // قراءة المدخلات من المستخدم
    cin >> start >> end;
    if (start < 2) {
        start = 2;  // أصغر عدد أولي هو 2
    }
    cout << "Prime numbers in the range [" << start << ", " << end << "] are:" << endl;
    // حساب الأعداد الأولية ضمن المجال المحدد وطباعتها
    for (int num = start; num <= end; num++) {
        isPrime = true;
        for (int i = 2; i <= sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            cout << num << " ";
        }
    }
    cout << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. إدخال بداية ونهاية المجال من المستخدم.
2. التأكد من أن بداية المجال لا تقل عن 2 (أصغر عدد أولي).
3. لكل عدد في المجال:
   a. افتراض أن العدد أولي.
   b. فحص قابلية القسمة على الأعداد من 2 حتى الجذر التربيعي للعدد.
   c. إذا كان العدد قابلاً للقسمة، فهو ليس أولياً.
4. طباعة الأعداد الأولية التي تم العثور عليها.`,
        hints: [
            "لفحص ما إذا كان العدد أولياً، يكفي التحقق من قابلية القسمة حتى الجذر التربيعي للعدد.",
            "استخدم sqrt() من مكتبة cmath للحصول على الجذر التربيعي.",
            "لا تنسَ أن أصغر عدد أولي هو 2."
        ],
        testCases: [
            {
                description: "اختبار مجال صغير",
                input: "10 50",
                expectedOutput:
                    "Prime numbers in the range [10, 50] are:\n11 13 17 19 23 29 31 37 41 43 47"
            },
            {
                description: "اختبار مجال يبدأ من 1",
                input: "1 20",
                expectedOutput:
                    "Prime numbers in the range [2, 20] are:\n2 3 5 7 11 13 17 19"
            },
            {
                description: "اختبار مجال أعداد كبيرة",
                input: "90 100",
                expectedOutput: "Prime numbers in the range [90, 100] are:\n97"
            }
        ]
    },
    {
        id: 8,
        lessonId: 3,
        title: "حساب متسلسلة فيبوناتشي",
        description:
            "اكتب برنامج يقوم بطباعة أول n عنصر من متسلسلة فيبوناتشي، حيث n هو عدد صحيح موجب يدخله المستخدم. متسلسلة فيبوناتشي تبدأ بالرقمين 0 و 1، ثم كل عنصر تالي هو مجموع العنصرين السابقين له (0, 1, 1, 2, 3, 5, 8, 13, ...).",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // تعريف المتغيرات اللازمة
    
    // قراءة المدخلات من المستخدم
    
    // حساب وطباعة عناصر المتسلسلة
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n, first = 0, second = 1, next;
    // قراءة المدخلات من المستخدم
    cin >> n;
    cout << "First " << n << " elements of the Fibonacci sequence" << endl;
    // حساب وطباعة عناصر المتسلسلة
    for (int i = 0; i < n; i++) {
        if (i <= 1) {
            next = i;
        } else {
            next = first + second;
            first = second;
            second = next;
        }
        cout << next << " ";
    }
    cout << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. إدخال عدد العناصر المطلوب طباعتها (n).
2. تهيئة المتغيرات first = 0 و second = 1.
3. استخدام حلقة لطباعة n عنصر:
   a. للعنصرين الأول والثاني (i=0, i=1)، طباعة القيم 0 و 1.
   b. للعناصر التالية، حساب العنصر الجديد كمجموع العنصرين السابقين.
   c. تحديث قيم first و second للعنصر التالي.
4. طباعة المتسلسلة.`,
        hints: [
            "استخدم ثلاثة متغيرات: واحد للعنصر الأول، وآخر للعنصر الثاني، وثالث للعنصر الجديد.",
            "تذكر أن متسلسلة فيبوناتشي تبدأ بـ 0 و 1.",
            "بعد حساب كل عنصر جديد، يجب تحديث قيم العنصرين السابقين."
        ],
        testCases: [
            {
                description: "اختبار أول 10 أرقام",
                input: "10",
                expectedOutput:
                    "First 10 elements of the Fibonacci sequence\n0 1 1 2 3 5 8 13 21 34"
            },
            {
                description: "اختبار أول 5 أرقام",
                input: "5",
                expectedOutput:
                    "First 5 elements of the Fibonacci sequence\n0 1 1 2 3"
            },
            {
                description: "اختبار رقم واحد",
                input: "1",
                expectedOutput: "First 1 elements of the Fibonacci sequence\n0"
            }
        ]
    },
    {
        id: 9,
        lessonId: 3,
        title: "رسم مثلث باستخدام النجوم",
        description:
            "اكتب برنامج يطلب من المستخدم إدخال عدد صحيح موجب n، ثم يقوم برسم مثلث باستخدام النجوم (*) بحيث يكون ارتفاع المثلث هو n سطر، ويزيد عدد النجوم في كل سطر بمقدار 2 عن السطر السابق، ويكون أول سطر به نجمة واحدة في المنتصف.",
        difficultyId: 3,
        difficulty: "متقدم",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // تعريف المتغيرات اللازمة
    
    // قراءة المدخلات من المستخدم
    
    // كتابة الكود اللازم
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int h;
    cin >> h;
    for (int i = 0; i < h; i++) {
        // طباعة المسافات قبل النجوم
        for (int j = 0; j < h - i - 1; j++) {
            cout << " ";
        }
        // طباعة النجوم
        for (int j = 0; j < 2 * i + 1; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. إدخال ارتفاع المثلث (h).
2. استخدام حلقة خارجية للتكرار على أسطر المثلث من 0 إلى h-1.
3. داخل كل سطر:
   a. طباعة المسافات اللازمة لمحاذاة النجوم في المنتصف (h-i-1 مسافة).
   b. طباعة النجوم (2*i+1 نجمة).
   c. الانتقال إلى سطر جديد.`,
        hints: [
            "استخدم حلقتين متداخلتين: واحدة للأسطر وأخرى للأعمدة.",
            "عدد النجوم في كل سطر يتبع الصيغة: 2*i+1 حيث i هو رقم السطر (بدءًا من 0).",
            "عدد المسافات قبل النجوم في كل سطر يتبع الصيغة: h-i-1."
        ],
        testCases: [
            {
                description: "اختبار مثلث بارتفاع 5",
                input: "5",
                expectedOutput: "    *\n   ***\n  *****\n *******\n*********"
            },
            {
                description: "اختبار مثلث بارتفاع 3",
                input: "3",
                expectedOutput: "  *\n ***\n*****"
            },
            {
                description: "اختبار مثلث بارتفاع 1",
                input: "1",
                expectedOutput: "*"
            }
        ]
    },
    {
        id: 10,
        lessonId: 4,
        title: "عمليات على مصفوفة أحادية",
        description:
            "كتابة برنامج للتعامل مع مصفوفة أحادية وإجراء عمليات مختلفة عليها",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // تعريف المتغيرات اللازمة
    
    // قراءة المدخلات من المستخدم
    
    // 1. طباعة العناصر بشكل منسق
    
    // 2. حساب وطباعة مجموع ومتوسط عناصر المصفوفة
    
    // 3. إيجاد وطباعة أكبر عنصر في المصفوفة
    
    // 4. إيجاد وطباعة أصغر عنصر في المصفوفة
    
    // 5. إيجاد معكوس المصفوفة
    
    // 6. البحث عن عنصر في المصفوفة
    
    // 7. حذف عنصر من المصفوفة
    
    // 8. إضافة عنصر إلى المصفوفة
    
    // 9. التحقق ما إذا كانت المصفوفة متناظرة
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;
int main() {
    int arr[100]; // تعريف مصفوفة بحد أقصى 100 عنصر
    int n, i;
    // إدخال عدد العناصر بحد أقصى 100 عنصر
    cin >> n;
    if (n < 100 && n >= 0) {
        // إدخال عناصر المصفوفة
        for (i = 0; i < n; i++) {
            cin >> arr[i];
        }
        // 1. طباعة العناصر بشكل منسق
        cout << "The entered items : ";
        for (i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
        // 2. حساب وطباعة مجموع ومتوسط عناصر المصفوفة
        int sum = 0;
        for (i = 0; i < n; i++) {
            sum += arr[i];
        }
        float avg = (float)sum / n;
        cout << "Sumation: " << sum << ", Average: " << avg << endl;
        // 3. إيجاد وطباعة أكبر عنصر في المصفوفة
        int max = arr[0];
        for (i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        cout << "The largest item : " << max << endl;
        // 4. إيجاد وطباعة أصغر عنصر في المصفوفة
        int min = arr[0];
        for (i = 1; i < n; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        cout << "The smallest item: " << min << endl;
        // 5. إيجاد معكوس المصفوفة
        cout << "Inverse array: ";
        for (i = n - 1; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
        // 6. البحث عن عنصر في المصفوفة
        int search, found = -1;
        cin >> search;
        for (i = 0; i < n; i++) {
            if (arr[i] == search) {
                found = i;
                break;
            }
        }
        if (found != -1) {
            cout << "The item " << search << " is in index: " << found << endl;
        } else {
            cout << "The item " << search << " isn't in the array!" << endl;
        }
        // 7. حذف عنصر من المصفوفة
        int delPos;
        cin >> delPos;
        if (delPos >= 0 && delPos < n) {
            for (i = delPos; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            n--;
            cout << "Array after deletion: ";
            for (i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            cout << endl;
        } else {
            cout << "The item cannot be deleted (invalid index)!" << endl;
        }
        // 8. إضافة عنصر إلى المصفوفة
        int newElem, addPos;
        cin >> newElem >> addPos;
        if (addPos >= 0 && addPos <= n && n < 100) {
            // Shift elements to make room
            for (i = n; i > addPos; i--) {
                arr[i] = arr[i - 1];
            }
            arr[addPos] = newElem;
            n++;
            cout << "Array after addition: ";
            for (i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            cout << endl;
        } else {
            cout << "The item cannot be added (invalid index or the array is full)!" << endl;
        }
        // 9. التحقق ما إذا كانت المصفوفة متناظرة
        bool isSymmetric = true;
        for (i = 0; i < n / 2; i++) {
            if (arr[i] != arr[n - i - 1]) {
                isSymmetric = false;
                break;
            }
        }
        cout << "Array is " << (isSymmetric ? "symmetric" : "asymmetric") << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف مصفوفة بحجم 100 عنصر
2. إدخال عدد العناصر N والتحقق أنه لا يتجاوز 100
3. إدخال N من العناصر إلى المصفوفة
4. طباعة عناصر المصفوفة
5. حساب مجموع عناصر المصفوفة وقسمته على عدد العناصر لإيجاد المتوسط
6. إيجاد أكبر عنصر بمقارنة كل عنصر بالقيمة الأكبر الحالية
7. إيجاد أصغر عنصر بمقارنة كل عنصر بالقيمة الأصغر الحالية
8. طباعة المصفوفة بالترتيب العكسي لإيجاد معكوس المصفوفة
9. البحث عن عنصر محدد في المصفوفة وطباعة موقعه
10. حذف عنصر من المصفوفة بتحريك العناصر
11. إضافة عنصر للمصفوفة بتحريك العناصر
12. التحقق من تناظر المصفوفة بمقارنة العناصر من البداية والنهاية`,
        hints: [
            "استخدم متغير n لتخزين عدد العناصر الفعلية في المصفوفة",
            "عند إضافة أو حذف عنصر تأكد من تحديث قيمة n",
            "للتحقق من تناظر المصفوفة، قارن العنصر الأول مع الأخير، والثاني مع قبل الأخير وهكذا"
        ],
        testCases: [
            {
                description: "مصفوفة متناظرة مع عمليات البحث والإضافة والحذف",
                input: "5\n10 20 30 20 10\n30\n2\n40 2",
                expectedOutput:
                    "The entered items : 10 20 30 20 10\nSumation: 90, Average: 18\nThe largest item : 30\nThe smallest item: 10\nInverse array: 10 20 30 20 10\nThe item 30 is in index: 2\nArray after deletion: 10 20 20 10\nArray after addition: 10 20 40 20 10\nArray is symmetric"
            },
            {
                description: "مصفوفة غير متناظرة مع عناصر متكررة",
                input: "4\n20 15 10 5\n10\n1\n25 2",
                expectedOutput:
                    "The entered items : 20 15 10 5\nSumation: 50, Average: 12.5\nThe largest item : 20\nThe smallest item: 5\nInverse array: 5 10 15 20\nThe item 10 is in index: 2\nArray after deletion: 20 10 5\nArray after addition: 20 10 25 5\nArray is asymmetric"
            },
            {
                description: "مصفوفة بعنصر واحد",
                input: "1\n42\n42\n0\n99 0",
                expectedOutput:
                    "The entered items : 42\nSumation: 42, Average: 42\nThe largest item : 42\nThe smallest item: 42\nInverse array: 42\nThe item 42 is in index: 0\nArray after deletion: \nArray after addition: 99\nArray is symmetric"
            }
        ]
    },
    {
        id: 11,
        lessonId: 4,
        title: "طباعة عناصر القطر الثانوي",
        description: "كتابة برنامج لطباعة عناصر القطر الثانوي في مصفوفة مربعة",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // قم بتعريف المصفوفة وطباعة عناصر القطر الثانوي
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // تعريف المصفوفة
    int matrix[50][50]; // بافتراض أن الحد الأقصى هو 50×50
    // إدخال عناصر المصفوفة
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    // طباعة المصفوفة
    cout << "The entered array:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    // طباعة عناصر القطر الثانوي
    cout << "Secondary diameter items: ";
    for (int i = 0; i < n; i++) {
        cout << matrix[i][n - 1 - i] << " ";
    }
    return 0;
}
\`\`\``,
        algorithm: `1. طلب إدخال حجم المصفوفة المربعة n
2. تعريف مصفوفة مربعة بحجم n × n
3. إدخال عناصر المصفوفة
4. طباعة المصفوفة بشكل منسق
5. طباعة عناصر القطر الثانوي باستخدام الصيغة matrix[i][n-1-i]`,
        hints: [
            "القطر الثانوي يمتد من أعلى اليمين إلى أسفل اليسار",
            "العناصر في القطر الثانوي لها العلاقة i + j = n - 1 أو j = n - 1 - i",
            "تأكد من أن المصفوفة مربعة (عدد الصفوف = عدد الأعمدة)"
        ],
        testCases: [
            {
                description: "مصفوفة مربعة 3×3",
                input: "3\n1 2 3\n4 5 6\n7 8 9",
                expectedOutput:
                    "The entered array:\n1 2 3\n4 5 6\n7 8 9\nSecondary diameter items: 3 5 7"
            },
            {
                description: "مصفوفة مربعة 4×4",
                input: "4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16",
                expectedOutput:
                    "The entered array:\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\nSecondary diameter items: 4 7 10 13"
            },
            {
                description: "مصفوفة مربعة 2×2",
                input: "2\n10 20\n30 40",
                expectedOutput:
                    "The entered array:\n10 20\n30 40\nSecondary diameter items: 20 30"
            }
        ]
    },
    {
        id: 12,
        lessonId: 4,
        title: "إدارة علامات الطلاب",
        description:
            "كتابة برنامج للتعامل مع علامات مجموعة من الطلاب في عدة مواد باستخدام مصفوفة ثنائية",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

int main() {
    // قم بتعريف المصفوفة الثنائية وتنفيذ العمليات المطلوبة
    
    // إدخال علامات الطلاب
    
    // طباعة العلامات بشكل منسق
    // طباعة أرقام المواد
    // طباعة علامات كل طالب
    
    // 1. طباعة علامات طالب محدد
    
    // 2. طباعة علامات الطالب الأخير
    
    // 3. طباعة أعلى علامة في البرمجة (العمود الثاني)
    
    // 4. طباعة معدلات كل طالب
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n, m; // n = عدد الطلاب، m = عدد المواد
    cin >> n >> m;
    // تعريف المصفوفة
    float grades[50][50]; // بافتراض أن الحد الأقصى للطلاب والمواد هو 50
    // إدخال علامات الطلاب
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> grades[i][j];
        }
    }
    // طباعة العلامات بشكل منسق
    cout << "Students' marks:" << endl;
    // طباعة أرقام المواد
    for (int j = 0; j < m; j++) {
        cout << "Subject " << j + 1 << " ";
    }
    cout << "Average" << endl;
    // طباعة علامات كل طالب
    for (int i = 0; i < n; i++) {
        cout << "Student " << i + 1 << " ";
        float sum = 0;
        for (int j = 0; j < m; j++) {
            cout << grades[i][j] << "  ";
            sum += grades[i][j];
        }
        float avg = sum / m;
        cout << avg << endl;
    }
    // 1. طباعة علامات طالب محدد
    int studentId;
    cin >> studentId;
    if (studentId >= 1 && studentId <= n) {
        cout << "Student's marks ID " << studentId << ": ";
        for (int j = 0; j < m; j++) {
            cout << grades[studentId - 1][j] << " ";
        }
        cout << endl;
    } else {
        cout << "Student ID isn't correct!" << endl;
    }
    // 2. طباعة علامات الطالب الأخير
    cout << "The last student's marks: ";
    for (int j = 0; j < m; j++) {
        cout << grades[n - 1][j] << " ";
    }
    cout << endl;
    // 3. طباعة أعلى علامة في البرمجة (العمود الثاني)
    if (m >= 2) {
        float maxProgramming = grades[0][1]; // الطالب الأول، العمود الثاني (البرمجة)
        int topStudent = 0;
        for (int i = 1; i < n; i++) {
            if (grades[i][1] > maxProgramming) {
                maxProgramming = grades[i][1];
                topStudent = i;
            }
        }
        cout << "The heighest mark in Programming: " << maxProgramming;
        cout << " (Student ID " << topStudent + 1 << ")" << endl;
    } else {
        cout << "No programming subject (the second column does not exist)" << endl;
    }
    // 4. طباعة معدلات كل طالب
    cout << "Students' average:" << endl;
    for (int i = 0; i < n; i++) {
        float sum = 0;
        for (int j = 0; j < m; j++) {
            sum += grades[i][j];
        }
        float avg = sum / m;
        cout << "Student " << i + 1 << ": " << avg << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف مصفوفة ثنائية لتخزين علامات الطلاب
2. طلب إدخال عدد الطلاب n وعدد المواد m
3. إدخال علامات كل طالب في كل مادة
4. طباعة جدول منسق لعرض علامات جميع الطلاب
5. طلب إدخال رقم طالب معين وطباعة علاماته
6. طباعة علامات الطالب الأخير
7. إيجاد أعلى علامة في مادة البرمجة (العمود الثاني)
8. حساب وطباعة معدلات كل طالب`,
        hints: [
            "استخدم مصفوفة ثنائية حيث تمثل الصفوف الطلاب والأعمدة المواد",
            "تأكد من التعامل مع ترقيم المصفوفة الذي يبدأ من 0 عند إدخال رقم الطالب",
            "يمكنك حساب المعدل بجمع علامات الطالب وقسمتها على عدد المواد"
        ],
        testCases: [
            {
                description: "ثلاثة طلاب بأربع مواد",
                input: "3 4\n90 85 95 92\n75 80 70 85\n95 90 88 92\n2",
                expectedOutput:
                    "Students' marks:\nSubject 1 Subject 2 Subject 3 Subject 4 Average\nStudent 1 90  85  95  92  90.5\nStudent 2 75  80  70  85  77.5\nStudent 3 95  90  88  92  91.25\nStudent's marks ID 2: 75 80 70 85\nThe last student's marks: 95 90 88 92\nThe heighest mark in Programming: 90 (Student ID 3)\nStudents' average:\nStudent 1: 90.5\nStudent 2: 77.5\nStudent 3: 91.25"
            },
            {
                description: "طالبان بثلاث مواد",
                input: "2 3\n88 92 78\n94 85 90\n1",
                expectedOutput:
                    "Students' marks:\nSubject 1 Subject 2 Subject 3 Average\nStudent 1 88  92  78  86\nStudent 2 94  85  90  89.6667\nStudent's marks ID 1: 88 92 78\nThe last student's marks: 94 85 90\nThe heighest mark in Programming: 92 (Student ID 1)\nStudents' average:\nStudent 1: 86\nStudent 2: 89.6667"
            },
            {
                description: "طالب واحد بمادتين",
                input: "1 2\n75 80\n1",
                expectedOutput:
                    "Students' marks:\nSubject 1 Subject 2 Average\nStudent 1 75  80  77.5\nStudent's marks ID 1: 75 80\nThe last student's marks: 75 80\nThe heighest mark in Programming: 80 (Student ID 1)\nStudents' average:\nStudent 1: 77.5"
            }
        ]
    },
    {
        id: 13,
        lessonId: 5,
        title: "طباعة نجوم",
        description: "اكتب تابع يقوم بطباعة 10 نجوم على سطر واحد.",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع printStars هنا

int main() {
    printStars();
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

void printStars() {
    for(int i = 0; i < 10; i++) {
        cout << "*";
    }
    cout << endl;
}

int main() {
    printStars();
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع printStars لا يرجع أي قيمة (void)
2. استخدام حلقة تكرارية تتكرر 10 مرات
3. في كل مرة طباعة نجمة "*"
4. طباعة سطر جديد بعد الانتهاء`,
        hints: [
            "استخدم حلقة for للتكرار",
            "تذكر أن ترسل سطراً جديداً بعد طباعة النجوم",
            "التابع من نوع void لأنه لا يحتاج لإرجاع قيمة"
        ],
        testCases: [
            {
                description: "التحقق من طباعة 10 نجوم",
                input: "",
                expectedOutput: "**********\n"
            }
        ]
    },
    {
        id: 14,
        lessonId: 5,
        title: "طباعة محرف عدة مرات",
        description:
            "اكتب تابع يقوم بطباعة محرف معين بحسب عدد المرات التي يتم تمريرها كوسيط.",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع printChar هنا

int main() {
    char c;
    int count;
    cin >> c >> count;
    printChar(c, count);
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

void printChar(char c, int count) {
    for(int i = 0; i < count; i++) {
        cout << c;
    }
    cout << endl;
}
int main() {
    char c;
    int count;
    cin >> c >> count;
    printChar(c, count);
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع printChar يستقبل محرف c وعدد صحيح count
2. استخدام حلقة تكرارية تتكرر count مرة
3. في كل مرة طباعة المحرف c
4. طباعة سطر جديد بعد الانتهاء`,
        hints: [
            "التابع يجب أن يستقبل وسيطين: المحرف وعدد مرات الطباعة",
            "استخدم حلقة for للتكرار بعدد المرات المطلوبة",
            "تأكد من تمرير الوسائط بالترتيب الصحيح عند استدعاء التابع"
        ],
        testCases: [
            {
                description: "طباعة محرف $ خمس مرات",
                input: "$ 5",
                expectedOutput: "$$$$$\n"
            },
            {
                description: "طباعة محرف * ثلاث مرات",
                input: "* 3",
                expectedOutput: "***\n"
            },
            {
                description: "طباعة محرف A عشر مرات",
                input: "A 10",
                expectedOutput: "AAAAAAAAAA\n"
            }
        ]
    },
    {
        id: 15,
        lessonId: 6,
        title: "اختبار العدد الأولي",
        description:
            "اكتب تابع يتحقق فيما إذا كان العدد الصحيح أولياً أم لا، ثم استخدمه لطباعة الأعداد الأولية بين 2 و 100.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
#include <cmath>
using namespace std;

// اكتب التابع isPrime هنا

int main() {
    cout << "Prime numbers between 2 and 100:" << endl;
    // أكمل الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 == 0 || num % 3 == 0) {
        return false;
    }
    for (int i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    cout << "Prime numbers between 2 and 100:" << endl;
    for (int i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            cout << i << " ";
        }
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع isPrime يستقبل عدداً صحيحاً ويرجع قيمة منطقية
2. التحقق من حالات خاصة (أقل من أو يساوي 1، أو 2، أو 3)
3. التحقق السريع إذا كان العدد قابلاً للقسمة على 2 أو 3
4. استخدام خوارزمية فعالة للتحقق من كون العدد أولياً باختبار الأعداد حتى جذر العدد
5. في الدالة الرئيسية، استخدام حلقة تكرارية لاختبار الأعداد من 2 إلى 100
6. طباعة العدد إذا كان أولياً حسب نتيجة التابع isPrime`,
        hints: [
            "العدد الأولي هو العدد الذي له قاسمان فقط: 1 والعدد نفسه",
            "يمكنك تحسين الأداء بالتحقق فقط حتى الجذر التربيعي للعدد",
            "استخدم حلقة في main() لفحص كل الأعداد من 2 إلى 100"
        ],
        testCases: [
            {
                description: "التحقق من عرض الأعداد الأولية بين 2 و 100",
                input: "",
                expectedOutput:
                    "Prime numbers between 2 and 100:\n2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97"
            }
        ]
    },
    {
        id: 16,
        lessonId: 6,
        title: "طباعة قواسم الأعداد",
        description:
            "اكتب تابع لطباعة قواسم عدد معين، ثم اكتب برنامج يقوم فيه التابع الرئيسي باستدعاء هذا التابع لطباعة قواسم الأعداد من 10 إلى 30، كل عدد بجانبه قواسمه على سطر منفصل.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع printDivisors هنا

int main() {
    cout << "Divisors of numbers from 10 to 30:" << endl;
    // أكمل الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

void printDivisors(int num) {
    cout << num << " Its Divisors: ";
    for (int i = 1; i <= num; i++) {
        if (num % i == 0) {
            cout << i << " ";
        }
    }
    cout << endl;
}

int main() {
    cout << "Divisors of numbers from 10 to 30:" << endl;
    for (int i = 10; i <= 30; i++) {
        printDivisors(i);
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع printDivisors يستقبل عدداً صحيحاً
2. طباعة العدد متبوعاً بنص "قواسمه: "
3. استخدام حلقة تكرارية من 1 إلى العدد نفسه
4. التحقق من كون الرقم الحالي قاسماً للعدد المدخل (باقي القسمة يساوي صفر)
5. طباعة القاسم عند العثور عليه
6. في الدالة الرئيسية، استخدام حلقة تكرارية للأعداد من 10 إلى 30
7. استدعاء التابع printDivisors لكل عدد من هذه الأعداد`,
        hints: [
            "القاسم هو أي عدد يقسم العدد المعطى بدون باقٍ",
            "استخدم عامل باقي القسمة % للتحقق من كون الرقم قاسماً",
            "تذكر أن تطبع كل عدد وقواسمه على سطر منفصل"
        ],
        testCases: [
            {
                description: "التحقق من عرض قواسم الأعداد من 10 إلى 30",
                input: "",
                expectedOutput:
                    "Divisors of numbers from 10 to 30:\n10 Its Divisors: 1 2 5 10\n11 Its Divisors: 1 11\n12 Its Divisors: 1 2 3 4 6 12\n13 Its Divisors: 1 13\n14 Its Divisors: 1 2 7 14\n15 Its Divisors: 1 3 5 15\n16 Its Divisors: 1 2 4 8 16\n17 Its Divisors: 1 17\n18 Its Divisors: 1 2 3 6 9 18\n19 Its Divisors: 1 19\n20 Its Divisors: 1 2 4 5 10 20\n21 Its Divisors: 1 3 7 21\n22 Its Divisors: 1 2 11 22\n23 Its Divisors: 1 23\n24 Its Divisors: 1 2 3 4 6 8 12 24\n25 Its Divisors: 1 5 25\n26 Its Divisors: 1 2 13 26\n27 Its Divisors: 1 3 9 27\n28 Its Divisors: 1 2 4 7 14 28\n29 Its Divisors: 1 29\n30 Its Divisors: 1 2 3 5 6 10 15 30"
            }
        ]
    },
    {
        id: 17,
        lessonId: 7,
        title: "حساب العدد التراكمي (الفاكتوريال)",
        description:
            "اكتب تابع عودي لحساب الفاكتوريال لعدد صحيح موجب. الفاكتوريال هو حاصل ضرب جميع الأعداد من 1 حتى العدد نفسه.",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع العودي factorial هنا

int main() {
    int n; 
    cin >> n;
    cout << "Factorial " << n << " is " << factorial(n) << endl;
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

unsigned long long factorial(int n) {
    // الحالة الأساسية
    if (n == 0 || n == 1) {
        return 1;
    }
    // الحالة العودية
    return n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    if (n >= 0) {
        cout << "Factorial " << n << " is " << factorial(n) << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع عودي factorial يستقبل عدداً صحيحاً n ويرجع عدداً صحيحاً طويلاً
2. تحديد الحالة الأساسية: إذا كان العدد 0 أو 1، يرجع القيمة 1
3. تحديد الحالة العودية: إرجاع n * factorial(n-1)
4. في الدالة الرئيسية، قراءة قيمة عدد من المستخدم
5. التحقق من كون العدد موجباً
6. استدعاء التابع factorial وطباعة النتيجة`,
        hints: [
            "الفاكتوريال يُمكن تعريفه بشكل عودي: n! = n * (n-1)!",
            "الحالة الأساسية للفاكتوريال هي: 0! = 1! = 1",
            "استخدم نوع بيانات كبير مثل unsigned long long لتجنب المشاكل عند الأعداد الكبيرة"
        ],
        testCases: [
            {
                description: "حساب فاكتوريال 5",
                input: "5",
                expectedOutput: "Factorial 5 is 120"
            },
            {
                description: "حساب فاكتوريال 0",
                input: "0",
                expectedOutput: "Factorial 0 is 1"
            },
            {
                description: "حساب فاكتوريال عدد كبير",
                input: "10",
                expectedOutput: "Factorial 10 is 3628800"
            }
        ]
    },
    {
        id: 18,
        lessonId: 7,
        title: "حساب أرقام سلسلة فيبوناتشي",
        description:
            "اكتب تابع عودي لحساب الرقم n في سلسلة فيبوناتشي. سلسلة فيبوناتشي هي سلسلة تبدأ بالرقمين 0 و 1، وكل رقم تالٍ هو مجموع الرقمين السابقين.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع العودي fibonacci هنا

int main() {
    int n;
    cin >> n;
    cout << "Item number " << n << " in Fibonacci sequence is " << fibonacci(n) << endl;
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    // الحالات الأساسية
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    // الحالة العودية
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n;
    cin >> n;
    if (n >= 0) {
        cout << "Item number " << n << " in Fibonacci sequence is " << fibonacci(n) << endl;
        // عرض السلسلة حتى الرقم n
        cout << "Fibonacci sequence up to the item " << n << ": ";
        for (int i = 0; i <= n; i++) {
            cout << fibonacci(i) << " ";
        }
        cout << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع عودي fibonacci يستقبل عدداً صحيحاً n ويرجع عدداً صحيحاً
2. تحديد الحالات الأساسية: إذا كان n <= 0، يرجع 0، وإذا كان n == 1، يرجع 1
3. تحديد الحالة العودية: إرجاع fibonacci(n-1) + fibonacci(n-2)
4. في الدالة الرئيسية، قراءة قيمة n من المستخدم
5. التحقق من كون العدد غير سالب
6. استدعاء التابع fibonacci وطباعة النتيجة
7. استعراض السلسلة حتى العنصر n باستخدام حلقة تكرارية`,
        hints: [
            "سلسلة فيبوناتشي تعرف بشكل عودي: F(n) = F(n-1) + F(n-2)",
            "الحالات الأساسية هي: F(0) = 0 و F(1) = 1",
            "هذا التنفيذ العودي البسيط ليس فعالاً للأعداد الكبيرة، يمكن تحسينه باستخدام تقنية التخزين المؤقت (memoization)"
        ],
        testCases: [
            {
                description: "حساب الرقم الثامن في سلسلة فيبوناتشي",
                input: "8",
                expectedOutput:
                    "Item number 8 in Fibonacci sequence is 21\nFibonacci sequence up to the item 8: 0 1 1 2 3 5 8 13 21"
            },
            {
                description: "حساب الرقم صفر في سلسلة فيبوناتشي",
                input: "0",
                expectedOutput:
                    "Item number 0 in Fibonacci sequence is 0\nFibonacci sequence up to the item 0: 0"
            },
            {
                description: "حساب الرقم الخامس في سلسلة فيبوناتشي",
                input: "5",
                expectedOutput:
                    "Item number 5 in Fibonacci sequence is 5\nFibonacci sequence up to the item 5: 0 1 1 2 3 5"
            }
        ]
    },
    {
        id: 19,
        lessonId: 7,
        title: "البحث الثنائي العودي",
        description:
            "اكتب تابع عودي للبحث الثنائي في مصفوفة مرتبة. البحث الثنائي هو خوارزمية فعالة للبحث تعمل عن طريق تقسيم نطاق البحث إلى نصفين في كل خطوة.",
        difficultyId: 3,
        difficulty: "متقدم",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع العودي binarySearch هنا

int main() {
    const int size = 10;
    int arr[size] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int target;
    cin >> target;
    int result = binarySearch(arr, 0, size - 1, target);
    if (result == -1) {
        cout << "The item is not found in the array." << endl;
    } else {
        cout << "The item is in the index: " << result << endl;
    }
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int left, int right, int target) {
    // الحالة الأساسية: العنصر غير موجود
    if (left > right) {
        return -1;
    }
    // حساب منتصف النطاق
    int mid = left + (right - left) / 2;
    // إذا وجد العنصر في المنتصف
    if (arr[mid] == target) {
        return mid;
    }
    // إذا كان العنصر أصغر من قيمة المنتصف، ابحث في النصف الأيسر
    if (arr[mid] > target) {
        return binarySearch(arr, left, mid - 1, target);
    }
    // وإلا، ابحث في النصف الأيمن
    return binarySearch(arr, mid + 1, right, target);
}
int main() {
    const int size = 10;
    int arr[size] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int target;
    cin >> target;
    int result = binarySearch(arr, 0, size - 1, target);
    if (result == -1) {
        cout << "The item is not found in the array." << endl;
    } else {
        cout << "The item is in the index: " << result << endl;
    }
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع عودي binarySearch يستقبل مصفوفة، ومؤشرين للبداية والنهاية، والعنصر المراد البحث عنه
2. تحديد الحالة الأساسية: إذا كان المؤشر الأيسر أكبر من المؤشر الأيمن، فإن العنصر غير موجود، وإرجاع -1
3. حساب موضع المنتصف بطريقة آمنة تتجنب مشكلة الفيضان العددي
4. إذا كان العنصر في المنتصف يساوي الهدف، إرجاع موضع المنتصف
5. إذا كان الهدف أصغر من عنصر المنتصف، استدعاء التابع بشكل عودي للبحث في النصف الأيسر
6. وإلا، استدعاء التابع بشكل عودي للبحث في النصف الأيمن
7. في الدالة الرئيسية، إنشاء مصفوفة مرتبة للاختبار
8. قراءة قيمة العنصر المراد البحث عنه من المستخدم
9. استدعاء التابع binarySearch وطباعة النتيجة`,
        hints: [
            "البحث الثنائي يعمل فقط على المصفوفات المرتبة",
            "استخدم left + (right - left) / 2 لحساب المنتصف بدلاً من (left + right) / 2 لتجنب الفيضان العددي",
            "شرط التوقف هو عندما يصبح المؤشر الأيسر أكبر من المؤشر الأيمن"
        ],
        testCases: [
            {
                description: "البحث عن عنصر موجود في المصفوفة",
                input: "23",
                expectedOutput: "The item is in the index: 5"
            },
            {
                description: "البحث عن عنصر غير موجود في المصفوفة",
                input: "50",
                expectedOutput: "The item is not found in the array."
            },
            {
                description: "البحث عن العنصر الأول في المصفوفة",
                input: "2",
                expectedOutput: "The item is in the index: 0"
            }
        ]
    },
    {
        id: 20,
        lessonId: 7,
        title: "حساب القوة باستخدام الرفع السريع",
        description:
            "اكتب تابع عودي لحساب قوة عدد (x^n) باستخدام خوارزمية الرفع السريع. هذه الخوارزمية أكثر كفاءة من الحساب المباشر.",
        difficultyId: 3,
        difficulty: "متقدم",
        language: "cpp",
        startingCode: `#include <iostream>
using namespace std;

// اكتب التابع العودي power هنا

int main() {
    double base;
    int exponent;
    cin >> base >> exponent;
    cout << base << "^" << exponent << ": " << power(base, exponent) << endl;
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

double power(double x, int n) {
    // الحالة الأساسية
    if (n == 0) {
        return 1;
    }
    // للأسس السالبة
    if (n < 0) {
        return 1 / power(x, -n);
    }
    // إذا كان الأس فردياً
    if (n % 2 == 1) {
        return x * power(x, n - 1);
    }
    // إذا كان الأس زوجياً، استخدم الرفع السريع
    double half_pow = power(x, n / 2);
    return half_pow * half_pow;
}
int main() {
    double base;
    int exponent;
    cin >> base >> exponent;
    cout << base << "^" << exponent << ": " << power(base, exponent) << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف تابع عودي power يستقبل أساساً من نوع double وأساً من نوع int ويرجع قيمة من نوع double
2. تحديد الحالة الأساسية: إذا كان الأس يساوي 0، يرجع 1
3. التعامل مع الأسس السالبة: إرجاع مقلوب power(x, -n)
4. التعامل مع الأسس الفردية: إرجاع x * power(x, n-1)
5. للأسس الزوجية، استخدام الرفع السريع: حساب power(x, n/2) مرة واحدة وضربها في نفسها
6. في الدالة الرئيسية، قراءة قيم الأساس والأس من المستخدم
7. استدعاء التابع power وطباعة النتيجة`,
        hints: [
            "الرفع السريع يستخدم حقيقة أن x^n = (x^(n/2))^2 إذا كان n زوجياً",
            "تعامل مع الحالات الخاصة: الأس صفر، والأسس السالبة، والأسس الفردية",
            "هذه الخوارزمية تقلل التعقيد الزمني من O(n) إلى O(log n)"
        ],
        testCases: [
            {
                description: "حساب قوة عدد موجب بأس موجب",
                input: "2 10",
                expectedOutput: "2^10: 1024"
            },
            {
                description: "حساب قوة عدد بأس سالب",
                input: "2 -2",
                expectedOutput: "2^-2: 0.25"
            },
            {
                description: "حساب قوة عدد بأس صفر",
                input: "5 0",
                expectedOutput: "5^0: 1"
            }
        ]
    },
    {
        id: 21,
        lessonId: 8,
        title: "إنشاء سجل طالب",
        description:
            "قم بإنشاء سجل (struct) لطالب يحتوي على معلوماته الأساسية مثل الاسم والعمر والمعدل، ثم اطبع هذه المعلومات.",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
#include <string>
using namespace std;

// قم بتعريف سجل الطالب هنا

int main() {
    // قم بإنشاء متغير من نوع سجل الطالب وتعبئة بياناته

    // اطبع معلومات الطالب

    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

// تعريف سجل الطالب
struct Student {
    string name;
    int age;
    float gpa;
};

int main() {
    // إنشاء متغير من نوع سجل الطالب
    Student student1;
    
    // تعبئة بيانات الطالب
    student1.name = "Ahmed";
    student1.age = 20;
    student1.gpa = 3.75;
    
    // طباعة معلومات الطالب
    cout << "Student information:" << endl;
    cout << "Name: " << student1.name << endl;
    cout << "Age: " << student1.age << endl; 
    cout << "Average: " << student1.gpa << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف سجل (struct) للطالب يحتوي على الحقول: الاسم، العمر، المعدل
2. إنشاء متغير من نوع سجل الطالب
3. تعبئة بيانات الطالب
4. طباعة معلومات الطالب`,
        hints: [
            "استخدم الكلمة المفتاحية struct لتعريف السجل",
            "يمكنك الوصول إلى حقول السجل باستخدام النقطة (.)",
            "لتخزين الاسم، استخدم نوع string من مكتبة <string>"
        ],
        testCases: [
            {
                description: "تعريف سجل الطالب وطباعة المعلومات الأساسية",
                input: "",
                expectedOutput:
                    "Student information:\nName: Ahmed\nAge: 20\nAverage: 3.75"
            }
        ]
    },
    {
        id: 22,
        lessonId: 8,
        title: "حساب المسافة بين نقطتين",
        description:
            "قم بإنشاء سجل لنقطة في المستوى الإحداثي (x, y) وكتابة دالة لحساب المسافة بين نقطتين.",
        difficultyId: 1,
        difficulty: "مبتدئ",
        language: "cpp",
        startingCode: `#include <iostream>
#include <cmath>
using namespace std;

// قم بتعريف سجل النقطة هنا

// قم بكتابة دالة لحساب المسافة بين نقطتين

int main() {
    // قم بإنشاء نقطتين وتعيين قيمهما

    // احسب المسافة بين النقطتين واطبع النتيجة

    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

// تعريف سجل النقطة
struct Point {
    double x;
    double y;
};

// دالة لحساب المسافة بين نقطتين
double distance(Point p1, Point p2) {
    double dx = p2.x - p1.x;
    double dy = p2.y - p1.y;
    return sqrt(dx * dx + dy * dy);
}

int main() {
    // إنشاء نقطتين
    Point point1, point2;
    // تعيين قيم للنقطة الأولى
    point1.x = 3.0;
    point1.y = 4.0;
    // تعيين قيم للنقطة الثانية
    point2.x = 6.0;
    point2.y = 8.0;
    // حساب وطباعة المسافة
    cout << "First point: (" << point1.x << ", " << point1.y << ")" << endl; 
    cout << "Second point: (" << point2.x <<", " << point2.y << ")" << endl; 
    cout << "The distance between the two points: " << distance(point1, point2) << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف سجل (struct) للنقطة يحتوي على الإحداثيات (x, y)
2. كتابة دالة لحساب المسافة بين نقطتين باستخدام معادلة المسافة الإقليدية: sqrt((x2-x1)² + (y2-y1)²)
3. إنشاء نقطتين وتعيين قيمهما
4. استدعاء دالة المسافة وطباعة النتيجة`,
        hints: [
            "استخدم معادلة المسافة بين نقطتين: المسافة = sqrt((x2-x1)² + (y2-y1)²)",
            "استخدم دالة sqrt() من مكتبة cmath لحساب الجذر التربيعي",
            "يمكنك تمرير السجلات كمعاملات للدالة مثل أي نوع بيانات آخر"
        ],
        testCases: [
            {
                description: "حساب المسافة بين النقطة (3,4) والنقطة (6,8)",
                input: "",
                expectedOutput:
                    "First point: (3, 4)\nSecond point: (6, 8)\nThe distance between the two points: 5"
            }
        ]
    },
    {
        id: 23,
        lessonId: 8,
        title: "حساب مساحة ومحيط الأشكال",
        description:
            "قم بإنشاء سجلات لتمثيل أشكال هندسية مختلفة (مستطيل، دائرة، مثلث) وكتابة دوال لحساب المساحة والمحيط لكل شكل.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
#include <cmath>
using namespace std;

// قم بتعريف السجلات المطلوبة هنا (مستطيل، دائرة، مثلث)

// قم بكتابة دوال لحساب المساحة والمحيط

int main() {
    // قم بإنشاء الأشكال وتعيين قيمها

    // احسب واطبع المساحة والمحيط لكل شكل

    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

// تعريف سجل المستطيل
struct Rectangle {
    double length;
    double width;
};

// تعريف سجل الدائرة
struct Circle {
    double radius;
};

// تعريف سجل المثلث
struct Triangle {
    double a;
    double b;
    double c;
};

// دوال حساب مساحة ومحيط المستطيل
double rectangleArea(const Rectangle& rect) {
    return rect.length * rect.width;
}

double rectanglePerimeter(const Rectangle& rect) {
    return 2 * (rect.length + rect.width);
}

// دوال حساب مساحة ومحيط الدائرة
double circleArea(const Circle& circle) {
    const double PI = 3.14159265359;
    return PI * circle.radius * circle.radius;
}

double circlePerimeter(const Circle& circle) {
    const double PI = 3.14159265359;
    return 2 * PI * circle.radius;
}

// دوال حساب مساحة ومحيط المثلث
double triangleArea(const Triangle& tri) {
    // استخدام صيغة هيرون لحساب مساحة المثلث
    double s = (tri.a + tri.b + tri.c) / 2;
    return sqrt(s * (s - tri.a) * (s - tri.b) * (s - tri.c));
}

double trianglePerimeter(const Triangle& tri) {
    return tri.a + tri.b + tri.c;
}

int main() {
    // إنشاء مستطيل
    Rectangle rect = {5.0, 3.0};
    cout << "Rectangle (length = " << rect.length << ", width = " << rect.width << "):" << endl;
    cout << "Area = " << rectangleArea(rect) << endl;
    cout << "Perimeter = " << rectanglePerimeter(rect) << endl << endl;
    // إنشاء دائرة
    Circle circle = {4.0};
    cout << "Circle (radius = " << circle.radius << "):" << endl;
    cout << "Area = " << circleArea(circle) << endl;
    cout << "Perimeter = " << circlePerimeter(circle) << endl << endl;
    // إنشاء مثلث
    Triangle triangle = {3.0, 4.0, 5.0};
    cout << "Triangle (sides = " << triangle.a << ", " << triangle.b << ", " << triangle.c << "):" << endl;
    cout << "Area = " << triangleArea(triangle) << endl;
    cout << "Perimeter = " << trianglePerimeter(triangle) << endl;
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف ثلاثة سجلات (struct) للأشكال الهندسية:
   - مستطيل (الطول والعرض)
   - دائرة (نصف القطر)
   - مثلث (أطوال الأضلاع الثلاثة)
2. كتابة دوال لحساب:
   - مساحة ومحيط المستطيل
   - مساحة ومحيط الدائرة
   - مساحة ومحيط المثلث (باستخدام صيغة هيرون للمساحة)
3. إنشاء متغيرات لكل شكل وتعيين قيمها
4. استدعاء الدوال وطباعة النتائج`,
        hints: [
            "لحساب مساحة المثلث، استخدم صيغة هيرون: A = sqrt(s(s-a)(s-b)(s-c)) حيث s = (a+b+c)/2",
            "تذكر أن استخدام المعامل العنواني (&) عند تمرير السجلات كمعاملات للدوال يحسن الأداء",
            "يمكنك تعريف قيمة π كثابت في البرنامج: const double PI = 3.14159265359"
        ],
        testCases: [
            {
                description: "حساب مساحة ومحيط المستطيل والدائرة والمثلث",
                input: "",
                expectedOutput:
                    "Rectangle (length = 5, width = 3):\nArea = 15\nPerimeter = 16\n\nCircle (radius = 4):\nArea = 50.2655\nPerimeter = 25.1327\n\nTriangle (sides = 3, 4, 5):\nArea = 6\nPerimeter = 12"
            }
        ]
    }
];
