export const lessons = [
    {
        id: 1,
        title: "مقدمة في التوابع",
        content: `
## ما هو التابع؟
---
التابع هو عبارة عن برنامج مصغر يمكن استدعاؤه عدة مرات داخل البرنامج الرئيسي. يتكون التابع من:
- دخل (وسطاء أو parameters).
- مجموعة من التعليمات البرمجية.
- خرج (القيمة التي يعيدها).

## لماذا نستخدم التوابع؟
---
**التوابع تساعدنا على**:<br>
1. إعادة استخدام نفس الشيفرة البرمجية عدة مرات دون تكرارها.<br>
2. تنظيم البرنامج وتقسيمه إلى أجزاء منطقية أصغر.<br>
3. تجنب التكرار وجعل البرنامج أكثر وضوحاً.

## الفرق بين التوابع والحلقات
---
- **الحلقات**: تنفذ مجموعة من التعليمات بشكل متتالي عدة مرات.
- **التوابع**: يمكن تنفيذها بشكل منفصل عند استدعائها (لا يجب أن تكون متتالية).

## كيفية استخدام التابع
---
1. **التعريف**: نعرف التابع فوق الدالة الرئيسية \`()main\`.<br>
2. **الاستدعاء**: نستدعي التابع داخل الدالة الرئيسية \`()main\`.

## بنية التابع
---
\`\`\`cpp
return_type function_name(parameter1, parameter2, ...) {
    // التعليمات البرمجية
    return return_value; // في حال التابع يعيد قيمة
}
\`\`\`

> ### قواعد مهمة:
> - **اسم التابع**: يخضع لنفس شروط أسماء المتغيرات (لا تبدأ بأرقام، لا مسافات، إلخ).
> - **القيمة المعادة**: يمكن أن تكون \`int\`, \`float\`, إلخ... مع استخدام \`return\`.
> - **تابع لا يعيد قيمة**: نستخدم \`void\` وليس بالضرورة استخدام \`return\`.  

## أنواع التوابع:
---
1. **توابع جاهزة**: موجودة ضمن مكتبات اللغة (مثل \`sqrt\` في الرياضيات).<br>
2. **توابع معرفة من المستخدم**: نقوم بتعريفها بأنفسنا.

## الوسطاء (Parameters):
---
- يجب ذكر نوع كل وسيط بجانب اسمه (حتى لو كانت كلها من نفس النوع).
- لا يمكن تسمية وسيطين بنفس الاسم.

## أمثلة عملية
---
### مثال ١: تابع يعيد قيمة (إيجاد العدد الأكبر)

\`\`\`cpp
#include <iostream>
using namespace std;
// تعريف الدالة
int comp(int x, int y) {
    if (x > y)
        return x;
    else
        return y;
}
int main() {
    int x, y;
    // إدخال رقمين
    cin >> x >> y;
    // إستدعاء الدالة وطباعة النتيجة
    cout << "The large number is " << comp(x, y);
    return 0;
}
\`\`\`

**شرح المثال**:

- التابع \`comp\` يستقبل عددين ويقارن بينهما.
- إذا كان العدد الأول أكبر، يعيد العدد الأول وإلا، يعيد العدد الثاني.
- في الدالة الرئيسية، ندخل عددين ثم نستدعي التابع لإيجاد الأكبر وطباعته.

### مثال ٢: تابع لا يعيد قيمة (void)

\`\`\`cpp
#include <iostream>
using namespace std;
// تعريف الدالة
void comp(int x, int y) {
    if (x > y)
        cout << x;
    else
        cout << y;
}
int main() {
    int m, n;
    // إدخال رقمين
    cin >> m >> n;
    // إستدعاء الدالة
    comp(m, n);
    return 0;
}
\`\`\`

**شرح المثال**:

- التابع \`comp\` يستقبل عددين ويطبع الأكبر مباشرة.
- لاحظ استخدام \`void\` لأن التابع لا يعيد قيمة.
- في الدالة الرئيسية، ندخل عددين ثم نستدعي التابع.

### مثال ٣: تابع بدون وسطاء

\`\`\`cpp
void Hello() {
    cout << "Hello";
}
// يمكن استدعاءه كالتالي
Hello();  // سيطبع Hello
\`\`\`
## طرق تمرير الوسطاء
---
### 1. التمرير بالقيمة (Call by Value)

\`\`\`cpp
void swapC(int x, int y) {
    int z;
    z = x;
    x = y;
    y = z;
}
int main() {
    int a = 2, b = 5;
    swapC(a, b);
    cout << a << b;  // سيطبع ٢٥ وليس ٥٢
    return 0;
}
\`\`\`

**شرح المثال**:

- تم تمرير نسخة من القيم \`a\` و \`b\` إلى التابع.
- تم تبديل القيم داخل التابع فقط.
- لم تتغير القيم الأصلية في الدالة الرئيسية.

### ٢. التمرير بالمرجع (Call by Reference)

\`\`\`cpp
void swapR(int &x, int &y) {
    int z;
    z = x;
    x = y;
    y = z;
}
int main() {
    int a = 2, b = 5;
    swapR(a, b);
    cout << a << b;  // سيطبع ٥٢
    return 0;
}
\`\`\`

**شرح المثال**:

- تم تمرير المتغيرات \`a\` و \`b\` بالمرجع (باستخدام &).
- أي تغيير في \`x\` و \`y\` داخل التابع يؤثر على القيم الأصلية.
- لذلك تم تبديل القيم بنجاح.

> ### نصائح
>1. **افهم الفرق بين التابع والبرنامج الرئيسي**: التابع هو جزء صغير نستدعيه عند الحاجة.<br>
>2. **تخيل التابع كآلة حاسبة**: تعطيها مدخلات (وسطاء) وتعطيك مخرجات (القيمة المعادة).<br>
>3. **استخدم أسماء واضحة**: اختر أسماء معبرة للتوابع تصف ما تقوم به.
>4. **انتبه للفرق بين التمرير بالقيمة والتمرير بالمرجع**: 
>    - التمرير بالقيمة: تنشئ نسخة مؤقتة من المتغيرات.
>    - التمرير بالمرجع: تعمل على المتغيرات الأصلية مباشرة.
>5. **لا تنسَ تحديد نوع القيمة المعادة**: \`int\`, \`float\`, \`void\`, إلخ...<br>
>6. **تجنب تكرار الشيفرة**: إذا كنت تستخدم نفس الشيفرة أكثر من مرة، حولها إلى تابع.
`
    },
    {
        id: 2,
        title: "المصفوفات",
        content: `
### ما هي المصفوفات
# تجربة
`
    }
    // إضافة المزيد من الدروس هنا
];
