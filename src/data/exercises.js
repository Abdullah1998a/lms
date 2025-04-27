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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
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
    
    // اقرأ أطوال أضلاع المثلث من المستخدم
    
    // احسب محيط المثلث
    
    // احسب نصف المحيط
    
    // احسب المساحة باستخدام قانون هيرون
    
    // اطبع النتائج
    
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
    cout << "أدخل طول الضلع الأول: ";
    cin >> a;
    cout << "أدخل طول الضلع الثاني: ";
    cin >> b;
    cout << "أدخل طول الضلع الثالث: ";
    cin >> c;
    
    // التحقق من إمكانية تشكيل مثلث
    if (a + b > c && a + c > b && b + c > a) {
        // حساب المحيط
        perimeter = a + b + c;
        
        // حساب نصف المحيط
        s = perimeter / 2;
        
        // حساب المساحة باستخدام قانون هيرون
        area = sqrt(s * (s - a) * (s - b) * (s - c));
        
        // طباعة النتائج
        cout << "محيط المثلث = " << perimeter << endl;
        cout << "مساحة المثلث = " << area << endl;
    } else {
        cout << "الأضلاع المدخلة لا تشكل مثلثًا!" << endl;
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
        requiresInput: true,
        sampleInput: "3 4 5",
        inputDescription: "أدخل أطوال أضلاع المثلث الثلاثة، مفصولة بمسافات"
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
    
    // نفذ عملية التحويل المناسبة
    
    // اطبع النتيجة
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    double temp, result;
    int choice;
    
    cout << "اختر عملية التحويل:" << endl;
    cout << "1. من مئوية إلى فهرنهايت" << endl;
    cout << "2. من فهرنهايت إلى مئوية" << endl;
    cout << "اختيارك (1 أو 2): ";
    cin >> choice;
    
    if (choice == 1) {
        cout << "أدخل درجة الحرارة بالمئوية: ";
        cin >> temp;
        result = (temp * 9/5) + 32;
        cout << temp << " درجة مئوية = " << result << " درجة فهرنهايت" << endl;
    } 
    else if (choice == 2) {
        cout << "أدخل درجة الحرارة بالفهرنهايت: ";
        cin >> temp;
        result = (temp - 32) * 5/9;
        cout << temp << " درجة فهرنهايت = " << result << " درجة مئوية" << endl;
    } 
    else {
        cout << "اختيار غير صحيح!" << endl;
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
        requiresInput: true,
        sampleInput: "1 25",
        inputDescription:
            "أدخل اختيارك (1 للتحويل من مئوية إلى فهرنهايت، 2 للعكس) ثم أدخل درجة الحرارة"
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
    cout << "أدخل ثلاثة أرقام مفصولة بمسافات: ";
    cin >> num1 >> num2 >> num3;
    
    // حساب المتوسط الحسابي
    mean = (num1 + num2 + num3) / 3;
    
    // حساب التباين
    variance = ((num1 - mean) * (num1 - mean) + 
               (num2 - mean) * (num2 - mean) + 
               (num3 - mean) * (num3 - mean)) / 3;
    
    // حساب الانحراف المعياري (الجذر التربيعي للتباين)
    stdDev = sqrt(variance);
    
    // طباعة النتائج
    cout << "المتوسط الحسابي = " << mean << endl;
    cout << "الانحراف المعياري = " << stdDev << endl;
    
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
        requiresInput: true,
        sampleInput: "10 20 30",
        inputDescription: "أدخل ثلاثة أرقام مفصولة بمسافات"
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
    
    // احسب معدل استهلاك الوقود
    
    // اطبع النتائج
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double distance, fuel, kmPerLiter, litersPer100km;
    
    // قراءة المدخلات من المستخدم
    cout << "أدخل المسافة المقطوعة (كم): ";
    cin >> distance;
    cout << "أدخل كمية الوقود المستهلكة (لتر): ";
    cin >> fuel;
    
    // التحقق من صحة المدخلات
    if (distance <= 0 || fuel <= 0) {
        cout << "خطأ: يجب أن تكون المدخلات أرقامًا موجبة!" << endl;
        return 1;
    }
    
    // حساب معدل استهلاك الوقود
    kmPerLiter = distance / fuel;
    litersPer100km = (fuel * 100) / distance;
    
    // طباعة النتائج مع تنسيق العرض إلى رقمين عشريين
    cout << fixed << setprecision(2);
    cout << "معدل الاستهلاك: " << kmPerLiter << " كم/لتر" << endl;
    cout << "معدل الاستهلاك: " << litersPer100km << " لتر/100 كم" << endl;
    
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف المتغيرات اللازمة.
2. قراءة المسافة المقطوعة وكمية الوقود المستهلكة من المستخدم.
3. التحقق من صحة المدخلات (يجب أن تكون أرقامًا موجبة).
4. حساب معدل الاستهلاك بالكيلومتر لكل ليتر: kmPerLiter = distance / fuel.
5. حساب معدل الاستهلاك باللتر لكل 100 كم: litersPer100km = (fuel * 100) / distance.
6. طباعة النتائج مع تنسيق العرض إلى رقمين عشريين.`,
        hints: [
            "استخدم fixed و setprecision لعرض النتائج بعدد محدد من الأرقام العشرية",
            "تأكد من إجراء اختبار للمدخلات للتأكد من أنها أرقام موجبة",
            "معدل استهلاك الوقود يمكن حسابه بطريقتين: كم/لتر أو لتر/100كم"
        ],
        requiresInput: true,
        sampleInput: "500 40",
        inputDescription:
            "أدخل المسافة المقطوعة (بالكيلومتر) ثم كمية الوقود المستهلكة (باللتر)"
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
    // قم بكتابة الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    double grade1, grade2, grade3, grade4, grade5;
    double average;
    
    cout << "أدخل درجات الطالب في المواد الخمس:" << endl;
    cin >> grade1 >> grade2 >> grade3 >> grade4 >> grade5;
    
    average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5.0;
    
    cout << "المعدل: " << average << endl;
    cout << "التقدير: ";
    
    if (average >= 90) {
        cout << "ممتاز";
    } else if (average >= 80) {
        cout << "جيد جداً";
    } else if (average >= 70) {
        cout << "جيد";
    } else if (average >= 60) {
        cout << "مقبول";
    } else {
        cout << "راسب";
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
        requiresInput: true,
        sampleInput: "85 92 78 90 88",
        inputDescription:
            "أدخل خمسة أرقام تمثل درجات الطالب في كل مادة مفصولة بمسافة."
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
    // قم بكتابة الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int start, end;
    bool isPrime;
    
    cout << "أدخل بداية المجال: ";
    cin >> start;
    cout << "أدخل نهاية المجال: ";
    cin >> end;
    
    if (start < 2) {
        start = 2;  // أصغر عدد أولي هو 2
    }
    
    cout << "الأعداد الأولية ضمن المجال [" << start << ", " << end << "] هي:" << endl;
    
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
        requiresInput: true,
        sampleInput: "10 50",
        inputDescription: "أدخل رقمين يمثلان بداية ونهاية المجال المطلوب فحصه."
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
    // قم بكتابة الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n, first = 0, second = 1, next;
    
    cout << "أدخل عدد عناصر متسلسلة فيبوناتشي المطلوب طباعتها: ";
    cin >> n;
    
    cout << "أول " << n << " عناصر من متسلسلة فيبوناتشي:" << endl;
    
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
        requiresInput: true,
        sampleInput: "10",
        inputDescription:
            "أدخل عددًا صحيحًا موجبًا يمثل عدد عناصر متسلسلة فيبوناتشي المطلوب طباعتها."
    },
    {
        id: 9,
        lessonId: 3,
        title: "لعبة تخمين الرقم",
        description:
            "اكتب برنامج للعبة تخمين الرقم حيث يفكر البرنامج برقم عشوائي بين 1 و 100، ويطلب من المستخدم تخمين هذا الرقم. بعد كل تخمين، يخبر البرنامج المستخدم ما إذا كان تخمينه أكبر أو أصغر من الرقم المطلوب. تستمر اللعبة حتى يخمن المستخدم الرقم الصحيح، ثم يخبره البرنامج بعدد المحاولات التي استغرقها.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    // قم بكتابة الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    int secretNumber, guess, attempts = 0;
    
    // تهيئة مولد الأرقام العشوائية
    srand(time(0));
    
    // توليد رقم عشوائي بين 1 و 100
    secretNumber = rand() % 100 + 1;
    
    cout << "مرحباً بك في لعبة تخمين الرقم!" << endl;
    cout << "لقد فكرت برقم بين 1 و 100. حاول تخمينه!" << endl;
    
    do {
        cout << "أدخل تخمينك: ";
        cin >> guess;
        attempts++;
        
        if (guess > secretNumber) {
            cout << "تخمينك أكبر من الرقم المطلوب. حاول مرة أخرى." << endl;
        } else if (guess < secretNumber) {
            cout << "تخمينك أصغر من الرقم المطلوب. حاول مرة أخرى." << endl;
        } else {
            cout << "تهانينا! لقد خمنت الرقم الصحيح وهو " << secretNumber << "!" << endl;
            cout << "عدد المحاولات: " << attempts << endl;
        }
    } while (guess != secretNumber);
    
    return 0;
}
\`\`\``,
        algorithm: `1. تهيئة مولد الأرقام العشوائية باستخدام الوقت الحالي.
2. توليد رقم عشوائي بين 1 و 100.
3. استخدام حلقة do-while للسماح للمستخدم بتخمين الرقم:
   a. طلب تخمين من المستخدم وزيادة عداد المحاولات.
   b. مقارنة التخمين بالرقم المطلوب وإعطاء المستخدم تلميحات.
   c. الاستمرار حتى يخمن المستخدم الرقم الصحيح.
4. طباعة رسالة تهنئة وعدد المحاولات المستغرقة.`,
        hints: [
            "استخدم rand() لتوليد رقم عشوائي، و srand(time(0)) لتهيئة مولد الأرقام العشوائية.",
            "استخدم حلقة do-while لضمان تنفيذ جسم الحلقة مرة واحدة على الأقل.",
            "لا تنسَ زيادة عداد المحاولات مع كل تخمين."
        ],
        requiresInput: true,
        sampleInput: "50\n75\n62\n68\n65\n67\n66",
        inputDescription:
            "أدخل تخمينك للرقم بين 1 و 100. سيقدم البرنامج تلميحات بعد كل تخمين."
    },
    {
        id: 10,
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
    // قم بكتابة الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "أدخل ارتفاع المثلث: ";
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        // طباعة المسافات قبل النجوم
        for (int j = 0; j < n - i - 1; j++) {
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
        algorithm: `1. إدخال ارتفاع المثلث (n).
2. استخدام حلقة خارجية للتكرار على أسطر المثلث من 0 إلى n-1.
3. داخل كل سطر:
   a. طباعة المسافات اللازمة لمحاذاة النجوم في المنتصف (n-i-1 مسافة).
   b. طباعة النجوم (2*i+1 نجمة).
   c. الانتقال إلى سطر جديد.`,
        hints: [
            "استخدم حلقتين متداخلتين: واحدة للأسطر وأخرى للأعمدة.",
            "عدد النجوم في كل سطر يتبع الصيغة: 2*i+1 حيث i هو رقم السطر (بدءًا من 0).",
            "عدد المسافات قبل النجوم في كل سطر يتبع الصيغة: n-i-1."
        ],
        requiresInput: true,
        sampleInput: "5",
        inputDescription:
            "أدخل عددًا صحيحًا موجبًا يمثل ارتفاع المثلث المراد رسمه."
    },
    {
        id: 11,
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
    // قم بتعريف المصفوفة وتنفيذ العمليات المطلوبة
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int arr[100];  // تعريف مصفوفة بحد أقصى 100 عنصر
    int n, i;
    bool isSymmetric = true;
    
    // إدخال عدد العناصر
    cout << "أدخل عدد العناصر (الحد الأقصى 100): ";
    cin >> n;
    
    if (n > 100 || n <= 0) {
        cout << "عدد العناصر غير صالح!" << endl;
        return 1;
    }
    
    // إدخال عناصر المصفوفة
    cout << "أدخل " << n << " عناصر:" << endl;
    for (i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // 1. طباعة العناصر بشكل منسق
    cout << "\\n1. العناصر المدخلة: ";
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
    cout << "2. مجموع العناصر: " << sum << ", المتوسط: " << avg << endl;
    
    // 3. إيجاد وطباعة أكبر عنصر في المصفوفة
    int max = arr[0];
    for (i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    cout << "3. أكبر عنصر: " << max << endl;
    
    // 4. إيجاد وطباعة أصغر عنصر في المصفوفة
    int min = arr[0];
    for (i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    cout << "4. أصغر عنصر: " << min << endl;
    
    // 5. إيجاد معكوس المصفوفة
    cout << "5. معكوس المصفوفة: ";
    for (i = n - 1; i >= 0; i--) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // 6. البحث عن عنصر في المصفوفة
    int search, found = -1;
    cout << "\\nأدخل العنصر المراد البحث عنه: ";
    cin >> search;
    
    for (i = 0; i < n; i++) {
        if (arr[i] == search) {
            found = i;
            break;
        }
    }
    
    if (found != -1) {
        cout << "6. العنصر " << search << " موجود في الموقع: " << found << endl;
    } else {
        cout << "6. العنصر " << search << " غير موجود في المصفوفة" << endl;
    }
    
    // 7. حذف عنصر من المصفوفة
    int delPos;
    cout << "\\nأدخل موقع العنصر المراد حذفه (0 إلى " << n-1 << "): ";
    cin >> delPos;
    
    if (delPos >= 0 && delPos < n) {
        for (i = delPos; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        n--;
        
        cout << "7. المصفوفة بعد الحذف: ";
        for (i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    } else {
        cout << "7. موقع غير صالح للحذف!" << endl;
    }
    
    // 8. إضافة عنصر إلى المصفوفة
    int newElem, addPos;
    cout << "\\nأدخل العنصر الجديد وموقعه (0 إلى " << n << "): ";
    cin >> newElem >> addPos;
    
    if (addPos >= 0 && addPos <= n && n < 100) {
        for (i = n; i > addPos; i--) {
            arr[i] = arr[i - 1];
        }
        arr[addPos] = newElem;
        n++;
        
        cout << "8. المصفوفة بعد الإضافة: ";
        for (i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    } else {
        cout << "8. لا يمكن إضافة العنصر (موقع غير صالح أو المصفوفة ممتلئة)!" << endl;
    }
    
    // 9. التحقق ما إذا كانت المصفوفة متناظرة
    for (i = 0; i < n / 2; i++) {
        if (arr[i] != arr[n - i - 1]) {
            isSymmetric = false;
            break;
        }
    }
    
    cout << "\\n9. المصفوفة " << (isSymmetric ? "متناظرة" : "غير متناظرة") << endl;
    
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
        requiresInput: true,
        sampleInput: "5\n10 20 30 20 10\n30\n2\n40 3",
        inputDescription:
            "عدد العناصر، قيم العناصر، قيمة للبحث، موقع للحذف، قيمة جديدة وموقعها"
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
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int n, m; // n = عدد الطلاب، m = عدد المواد
    
    cout << "أدخل عدد الطلاب: ";
    cin >> n;
    cout << "أدخل عدد المواد: ";
    cin >> m;
    
    // تعريف المصفوفة
    float grades[50][50]; // بافتراض أن الحد الأقصى للطلاب والمواد هو 50
    
    // إدخال علامات الطلاب
    cout << "\\nأدخل علامات الطلاب:" << endl;
    for (int i = 0; i < n; i++) {
        cout << "الطالب رقم " << i + 1 << ":" << endl;
        for (int j = 0; j < m; j++) {
            cout << "المادة رقم " << j + 1 << ": ";
            cin >> grades[i][j];
        }
    }
    
    // طباعة العلامات بشكل منسق
    cout << "\\nعلامات الطلاب:" << endl;
    
    // طباعة أرقام المواد
    cout << "\\t";
    for (int j = 0; j < m; j++) {
        cout << "المادة " << j + 1 << "\\t";
    }
    cout << "المعدل" << endl;
    
    // طباعة علامات كل طالب
    for (int i = 0; i < n; i++) {
        cout << "الطالب " << i + 1 << "\\t";
        float sum = 0;
        for (int j = 0; j < m; j++) {
            cout << grades[i][j] << "\\t\\t";
            sum += grades[i][j];
        }
        float avg = sum / m;
        cout << avg << endl;
    }
    
    // 1. طباعة علامات طالب محدد
    int studentId;
    cout << "\\n1. أدخل رقم الطالب للحصول على علاماته (1 إلى " << n << "): ";
    cin >> studentId;
    
    if (studentId >= 1 && studentId <= n) {
        cout << "علامات الطالب رقم " << studentId << ": ";
        for (int j = 0; j < m; j++) {
            cout << grades[studentId - 1][j] << " ";
        }
        cout << endl;
    } else {
        cout << "رقم طالب غير صالح!" << endl;
    }
    
    // 2. طباعة علامات الطالب الأخير
    cout << "\\n2. علامات الطالب الأخير: ";
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
        
        cout << "\\n3. أعلى علامة في البرمجة: " << maxProgramming;
        cout << " (الطالب رقم " << topStudent + 1 << ")" << endl;
    } else {
        cout << "\\n3. لا توجد مادة برمجة (العمود الثاني غير موجود)" << endl;
    }
    
    // 4. طباعة معدلات كل طالب
    cout << "\\n4. معدلات الطلاب:" << endl;
    for (int i = 0; i < n; i++) {
        float sum = 0;
        for (int j = 0; j < m; j++) {
            sum += grades[i][j];
        }
        float avg = sum / m;
        cout << "الطالب " << i + 1 << ": " << avg << endl;
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
        requiresInput: true,
        sampleInput: "3\n4\n90 85 95 92\n75 80 70 85\n95 90 88 92\n2",
        inputDescription:
            "عدد الطلاب، عدد المواد، علامات كل طالب في كل مادة، رقم الطالب المراد عرض علاماته"
    },
    {
        id: 13,
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
    cout << "أدخل حجم المصفوفة المربعة: ";
    cin >> n;
    
    // تعريف المصفوفة
    int matrix[50][50]; // بافتراض أن الحد الأقصى هو 50×50
    
    // إدخال عناصر المصفوفة
    cout << "أدخل عناصر المصفوفة:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << "العنصر [" << i << "][" << j << "]: ";
            cin >> matrix[i][j];
        }
    }
    
    // طباعة المصفوفة
    cout << "\\nالمصفوفة المدخلة:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << matrix[i][j] << "\\t";
        }
        cout << endl;
    }
    
    // طباعة عناصر القطر الثانوي
    cout << "\\nعناصر القطر الثانوي: ";
    for (int i = 0; i < n; i++) {
        cout << matrix[i][n - 1 - i] << " ";
    }
    cout << endl;
    
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
        requiresInput: true,
        sampleInput: "3\n1 2 3\n4 5 6\n7 8 9",
        inputDescription: "حجم المصفوفة المربعة، عناصر المصفوفة"
    },
    {
        id: 14,
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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 15,
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
    
    cout << "ادخل المحرف: ";
    cin >> c;
    
    cout << "ادخل عدد مرات الطباعة: ";
    cin >> count;
    
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
    
    cout << "ادخل المحرف: ";
    cin >> c;
    
    cout << "ادخل عدد مرات الطباعة: ";
    cin >> count;
    
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
        requiresInput: true,
        sampleInput: "$ 5",
        inputDescription: "المحرف المراد طباعته، ثم عدد مرات الطباعة"
    },
    {
        id: 16,
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
    cout << "الأعداد الأولية بين 2 و 100:" << endl;
    
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
    cout << "الأعداد الأولية بين 2 و 100:" << endl;
    
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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 17,
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
    cout << "قواسم الأعداد من 10 إلى 30:" << endl;
    
    // أكمل الكود هنا
    
    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
using namespace std;

void printDivisors(int num) {
    cout << num << " قواسمه: ";
    
    for (int i = 1; i <= num; i++) {
        if (num % i == 0) {
            cout << i << " ";
        }
    }
    
    cout << endl;
}

int main() {
    cout << "قواسم الأعداد من 10 إلى 30:" << endl;
    
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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 18,
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
    cout << "أدخل عدداً صحيحاً موجباً: ";
    cin >> n;
    
    cout << "فاكتوريال " << n << " هو: " << factorial(n) << endl;
    
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
    cout << "أدخل عدداً صحيحاً موجباً: ";
    cin >> n;
    
    if (n < 0) {
        cout << "لا يمكن حساب الفاكتوريال لعدد سالب!" << endl;
    } else {
        cout << "فاكتوريال " << n << " هو: " << factorial(n) << endl;
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
        requiresInput: true,
        sampleInput: "5",
        inputDescription: "عدد صحيح موجب لحساب فاكتورياله"
    },
    {
        id: 19,
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
    cout << "أدخل رقم العنصر في سلسلة فيبوناتشي: ";
    cin >> n;
    
    cout << "العنصر رقم " << n << " في سلسلة فيبوناتشي هو: " << fibonacci(n) << endl;
    
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
    cout << "أدخل رقم العنصر في سلسلة فيبوناتشي: ";
    cin >> n;
    
    if (n < 0) {
        cout << "يرجى إدخال عدد غير سالب!" << endl;
    } else {
        cout << "العنصر رقم " << n << " في سلسلة فيبوناتشي هو: " << fibonacci(n) << endl;
        
        // عرض السلسلة حتى الرقم n
        cout << "سلسلة فيبوناتشي حتى العنصر " << n << ": ";
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
        requiresInput: true,
        sampleInput: "8",
        inputDescription: "رقم العنصر في سلسلة فيبوناتشي"
    },
    {
        id: 20,
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
    cout << "أدخل العدد المراد البحث عنه: ";
    cin >> target;
    
    int result = binarySearch(arr, 0, size - 1, target);
    
    if (result == -1) {
        cout << "العنصر غير موجود في المصفوفة." << endl;
    } else {
        cout << "العنصر موجود في الموضع: " << result << endl;
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
    
    cout << "المصفوفة: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    int target;
    cout << "أدخل العدد المراد البحث عنه: ";
    cin >> target;
    
    int result = binarySearch(arr, 0, size - 1, target);
    
    if (result == -1) {
        cout << "العنصر غير موجود في المصفوفة." << endl;
    } else {
        cout << "العنصر موجود في الموضع: " << result << endl;
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
        requiresInput: true,
        sampleInput: "23",
        inputDescription: "العدد المراد البحث عنه في المصفوفة المرتبة"
    },
    {
        id: 21,
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
    
    cout << "أدخل الأساس: ";
    cin >> base;
    
    cout << "أدخل الأس: ";
    cin >> exponent;
    
    cout << base << " مرفوع للقوة " << exponent << " يساوي: " << power(base, exponent) << endl;
    
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
    
    cout << "أدخل الأساس: ";
    cin >> base;
    
    cout << "أدخل الأس: ";
    cin >> exponent;
    
    cout << base << " مرفوع للقوة " << exponent << " يساوي: " << power(base, exponent) << endl;
    
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
        requiresInput: true,
        sampleInput: "2 10",
        inputDescription: "أدخل الأساس ثم الأس"
    },
    {
        id: 22,
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
    student1.name = "أحمد";
    student1.age = 20;
    student1.gpa = 3.75;
    
    // طباعة معلومات الطالب
    cout << "معلومات الطالب:" << endl;
    cout << "الاسم: " << student1.name << endl;
    cout << "العمر: " << student1.age << endl;
    cout << "المعدل: " << student1.gpa << endl;
    
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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 23,
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
    cout << "النقطة الأولى: (" << point1.x << ", " << point1.y << ")" << endl;
    cout << "النقطة الثانية: (" << point2.x << ", " << point2.y << ")" << endl;
    cout << "المسافة بين النقطتين: " << distance(point1, point2) << endl;
    
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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 24,
        lessonId: 8,
        title: "إدارة مكتبة صغيرة",
        description:
            "قم بإنشاء نظام بسيط لإدارة مكتبة، حيث يتم تعريف سجل للكتاب يحتوي على معلومات مثل العنوان، المؤلف، سنة النشر، ومتوفر أم لا. ثم قم بإنشاء مصفوفة من الكتب وعرض معلوماتها.",
        difficultyId: 2,
        difficulty: "متوسط",
        language: "cpp",
        startingCode: `#include <iostream>
#include <string>
using namespace std;

// قم بتعريف سجل الكتاب هنا

// قم بكتابة دالة لعرض معلومات كتاب

int main() {
    // قم بإنشاء مصفوفة من الكتب

    // عبء بيانات بعض الكتب

    // اعرض معلومات جميع الكتب
    
    // ابحث عن الكتب المتاحة واعرض معلوماتها

    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

// تعريف سجل الكتاب
struct Book {
    string title;
    string author;
    int year;
    bool available;
};

// دالة لعرض معلومات كتاب
void displayBook(const Book& book) {
    cout << "العنوان: " << book.title << endl;
    cout << "المؤلف: " << book.author << endl;
    cout << "سنة النشر: " << book.year << endl;
    cout << "الحالة: " << (book.available ? "متاح" : "غير متاح") << endl;
    cout << "-------------------" << endl;
}

int main() {
    // إنشاء مصفوفة من الكتب
    const int MAX_BOOKS = 3;
    Book library[MAX_BOOKS];
    
    // تعبئة بيانات الكتب
    library[0] = {"البؤساء", "فيكتور هوغو", 1862, true};
    library[1] = {"الأمير الصغير", "أنطوان دو سانت إكزوبيري", 1943, false};
    library[2] = {"الشيخ والبحر", "إرنست همنغواي", 1952, true};
    
    // عرض معلومات جميع الكتب
    cout << "قائمة الكتب في المكتبة:" << endl;
    cout << "====================" << endl;
    for (int i = 0; i < MAX_BOOKS; i++) {
        displayBook(library[i]);
    }
    
    // عرض الكتب المتاحة فقط
    cout << "الكتب المتاحة:" << endl;
    cout << "====================" << endl;
    for (int i = 0; i < MAX_BOOKS; i++) {
        if (library[i].available) {
            displayBook(library[i]);
        }
    }
    
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف سجل (struct) للكتاب يحتوي على: العنوان، المؤلف، سنة النشر، وحالة التوفر
2. كتابة دالة لعرض معلومات كتاب واحد
3. إنشاء مصفوفة من الكتب وتعبئة بياناتها
4. استخدام حلقة تكرارية لعرض معلومات جميع الكتب
5. استخدام حلقة تكرارية أخرى مع شرط لعرض معلومات الكتب المتاحة فقط`,
        hints: [
            "يمكنك استخدام المعامل العنواني (&) لتمرير السجل بالمرجع لتجنب نسخ البيانات",
            "استخدم المشغل الشرطي (? :) للتحويل بين القيمة المنطقية والنص المناسب",
            "يمكنك تهيئة السجل مباشرة باستخدام القوائم المتعاقبة {}"
        ],
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 25,
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
    cout << "المستطيل (الطول = " << rect.length << ", العرض = " << rect.width << "):" << endl;
    cout << "المساحة = " << rectangleArea(rect) << endl;
    cout << "المحيط = " << rectanglePerimeter(rect) << endl << endl;
    
    // إنشاء دائرة
    Circle circle = {4.0};
    cout << "الدائرة (نصف القطر = " << circle.radius << "):" << endl;
    cout << "المساحة = " << circleArea(circle) << endl;
    cout << "المحيط = " << circlePerimeter(circle) << endl << endl;
    
    // إنشاء مثلث
    Triangle triangle = {3.0, 4.0, 5.0};
    cout << "المثلث (الأضلاع = " << triangle.a << ", " << triangle.b << ", " << triangle.c << "):" << endl;
    cout << "المساحة = " << triangleArea(triangle) << endl;
    cout << "المحيط = " << trianglePerimeter(triangle) << endl;
    
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
        requiresInput: false,
        sampleInput: "",
        inputDescription: ""
    },
    {
        id: 26,
        lessonId: 8,
        title: "إدارة سجلات الموظفين",
        description:
            "قم بإنشاء نظام لإدارة سجلات الموظفين في شركة، حيث يتم تخزين معلومات كل موظف في سجل. قم بتنفيذ عمليات إضافة موظف جديد، عرض معلومات الموظفين، البحث عن موظف، وتعديل بيانات موظف.",
        difficultyId: 3,
        difficulty: "متقدم",
        language: "cpp",
        startingCode: `#include <iostream>
#include <string>
using namespace std;

// قم بتعريف سجل الموظف هنا

// قم بتعريف سجل لقائمة الموظفين

// قم بكتابة دوال لإدارة الموظفين (إضافة، عرض، بحث، تعديل)

int main() {
    // قم بإنشاء قائمة الموظفين

    int choice;
    do {
        // قم بإنشاء قائمة خيارات للمستخدم
        
        // قم بتنفيذ الخيار المحدد

    } while (choice != 0);

    return 0;
}`,
        solution: `\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

// تعريف سجل الموظف
struct Employee {
    int id;
    string name;
    string position;
    double salary;
    int startYear;
};

// تعريف سجل لقائمة الموظفين
struct EmployeeList {
    static const int MAX_EMPLOYEES = 100;
    Employee employees[MAX_EMPLOYEES];
    int count;
};

// دالة لإضافة موظف جديد
bool addEmployee(EmployeeList& list, const Employee& emp) {
    if (list.count >= list.MAX_EMPLOYEES) {
        cout << "خطأ: القائمة ممتلئة!" << endl;
        return false;
    }
    
    // التحقق من عدم تكرار رقم التعريف
    for (int i = 0; i < list.count; i++) {
        if (list.employees[i].id == emp.id) {
            cout << "خطأ: رقم التعريف موجود مسبقاً!" << endl;
            return false;
        }
    }
    
    list.employees[list.count] = emp;
    list.count++;
    return true;
}

// دالة لعرض معلومات موظف واحد
void displayEmployee(const Employee& emp) {
    cout << "رقم التعريف: " << emp.id << endl;
    cout << "الاسم: " << emp.name << endl;
    cout << "المنصب: " << emp.position << endl;
    cout << "الراتب: " << emp.salary << endl;
    cout << "سنة بدء العمل: " << emp.startYear << endl;
    cout << "------------------------" << endl;
}

// دالة لعرض جميع الموظفين
void displayAllEmployees(const EmployeeList& list) {
    if (list.count == 0) {
        cout << "لا يوجد موظفين في القائمة." << endl;
        return;
    }
    
    cout << "قائمة الموظفين (" << list.count << " موظف):" << endl;
    cout << "========================" << endl;
    for (int i = 0; i < list.count; i++) {
        displayEmployee(list.employees[i]);
    }
}

// دالة للبحث عن موظف بالرقم التعريفي
int findEmployee(const EmployeeList& list, int id) {
    for (int i = 0; i < list.count; i++) {
        if (list.employees[i].id == id) {
            return i;  // إرجاع موقع الموظف في المصفوفة
        }
    }
    return -1;  // الموظف غير موجود
}

// دالة لتعديل بيانات موظف
bool updateEmployee(EmployeeList& list, int id, const Employee& newData) {
    int index = findEmployee(list, id);
    if (index == -1) {
        cout << "خطأ: الموظف غير موجود!" << endl;
        return false;
    }
    
    // الاحتفاظ برقم التعريف الأصلي
    list.employees[index] = newData;
    list.employees[index].id = id;  // للتأكد من عدم تغيير رقم التعريف
    return true;
}

// دالة لحذف موظف
bool deleteEmployee(EmployeeList& list, int id) {
    int index = findEmployee(list, id);
    if (index == -1) {
        cout << "خطأ: الموظف غير موجود!" << endl;
        return false;
    }
    
    // نقل جميع العناصر بعد الموظف المحذوف خطوة للخلف
    for (int i = index; i < list.count - 1; i++) {
        list.employees[i] = list.employees[i + 1];
    }
    
    list.count--;
    return true;
}

// دالة لعرض قائمة الخيارات
void displayMenu() {
    cout << "\nنظام إدارة الموظفين" << endl;
    cout << "===================" << endl;
    cout << "1. إضافة موظف جديد" << endl;
    cout << "2. عرض جميع الموظفين" << endl;
    cout << "3. البحث عن موظف" << endl;
    cout << "4. تعديل بيانات موظف" << endl;
    cout << "5. حذف موظف" << endl;
    cout << "0. خروج" << endl;
    cout << "اختر عملية: ";
}

int main() {
    // إنشاء قائمة الموظفين
    EmployeeList companyEmployees = {.count = 0};
    
    // إضافة بعض الموظفين للاختبار
    Employee emp1 = {101, "خالد أحمد", "مطور برمجيات", 5000.0, 2020};
    Employee emp2 = {102, "فاطمة محمد", "محلل نظم", 5500.0, 2019};
    Employee emp3 = {103, "عمر علي", "مدير مشروع", 7000.0, 2018};
    
    addEmployee(companyEmployees, emp1);
    addEmployee(companyEmployees, emp2);
    addEmployee(companyEmployees, emp3);
    
    int choice;
    do {
        displayMenu();
        cin >> choice;
        
        switch (choice) {
            case 1: {  // إضافة موظف جديد
                Employee newEmp;
                cout << "\nإدخال بيانات الموظف الجديد:" << endl;
                cout << "رقم التعريف: ";
                cin >> newEmp.id;
                cout << "الاسم: ";
                cin.ignore();  // تجاهل السطر الجديد المتبقي من الإدخال السابق
                getline(cin, newEmp.name);
                cout << "المنصب: ";
                getline(cin, newEmp.position);
                cout << "الراتب: ";
                cin >> newEmp.salary;
                cout << "سنة بدء العمل: ";
                cin >> newEmp.startYear;
                
                if (addEmployee(companyEmployees, newEmp)) {
                    cout << "تمت إضافة الموظف بنجاح!" << endl;
                }
                break;
            }
            
            case 2:  // عرض جميع الموظفين
                displayAllEmployees(companyEmployees);
                break;
                
            case 3: {  // البحث عن موظف
                int searchId;
                cout << "أدخل رقم تعريف الموظف للبحث: ";
                cin >> searchId;
                
                int index = findEmployee(companyEmployees, searchId);
                if (index != -1) {
                    cout << "\nالموظف موجود:" << endl;
                    displayEmployee(companyEmployees.employees[index]);
                } else {
                    cout << "الموظف غير موجود في القائمة!" << endl;
                }
                break;
            }
            
            case 4: {  // تعديل بيانات موظف
                int updateId;
                cout << "أدخل رقم تعريف الموظف المراد تعديله: ";
                cin >> updateId;
                
                int index = findEmployee(companyEmployees, updateId);
                if (index != -1) {
                    Employee updatedEmp;
                    updatedEmp.id = updateId;  // الاحتفاظ بنفس رقم التعريف
                    
                    cout << "\nإدخال البيانات الجديدة:" << endl;
                    cout << "الاسم: ";
                    cin.ignore();
                    getline(cin, updatedEmp.name);
                    cout << "المنصب: ";
                    getline(cin, updatedEmp.position);
                    cout << "الراتب: ";
                    cin >> updatedEmp.salary;
                    cout << "سنة بدء العمل: ";
                    cin >> updatedEmp.startYear;
                    
                    if (updateEmployee(companyEmployees, updateId, updatedEmp)) {
                        cout << "تم تحديث بيانات الموظف بنجاح!" << endl;
                    }
                } else {
                    cout << "الموظف غير موجود في القائمة!" << endl;
                }
                break;
            }
            
            case 5: {  // حذف موظف
                int deleteId;
                cout << "أدخل رقم تعريف الموظف المراد حذفه: ";
                cin >> deleteId;
                
                if (deleteEmployee(companyEmployees, deleteId)) {
                    cout << "تم حذف الموظف بنجاح!" << endl;
                }
                break;
            }
            
            case 0:  // خروج
                cout << "شكراً لاستخدام نظام إدارة الموظفين!" << endl;
                break;
                
            default:
                cout << "خيار غير صالح، الرجاء المحاولة مرة أخرى." << endl;
        }
        
    } while (choice != 0);
    
    return 0;
}
\`\`\``,
        algorithm: `1. تعريف سجل (struct) للموظف يحتوي على: رقم التعريف، الاسم، المنصب، الراتب، سنة بدء العمل
2. تعريف سجل لقائمة الموظفين يحتوي على مصفوفة من الموظفين وعدد الموظفين الحالي
3. كتابة دوال لإدارة الموظفين:
   - إضافة موظف جديد (مع التحقق من تكرار الهوية)
   - عرض معلومات موظف
   - عرض جميع الموظفين
   - البحث عن موظف عن طريق رقم التعريف
   - تعديل بيانات موظف
   - حذف موظف
4. كتابة دالة لعرض قائمة الخيارات
5. تنفيذ حلقة رئيسية للتعامل مع خيارات المستخدم باستخدام switch-case`,
        hints: [
            "استخدم هيكل بيانات مناسب لتخزين مجموعة من السجلات، مثل المصفوفة",
            "تحقق دائماً من حالات الخطأ المحتملة مثل القائمة الممتلئة أو الموظف غير الموجود",
            "استخدم cin.ignore() قبل getline() عند القراءة بعد cin لتجنب مشاكل الإدخال"
        ],
        requiresInput: true,
        sampleInput:
            "2\n3\n101\n4\n101\nمحمد أحمد\nمهندس برمجيات\n5500\n2021\n2\n0\n",
        inputDescription:
            "الأرقام التي تمثل اختيارات المستخدم في القائمة، متبوعة بالبيانات المطلوبة لكل عملية"
    }
];
