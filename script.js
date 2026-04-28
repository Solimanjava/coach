// بيانات البرامج التدريبية الكاملة والمفصلة - الكابتن أحمد سليمان
const programStructure = {
    // ---------------------------------------------------------
    // 1. الإعــــداد العــــام (تم وضعه سابقاً وموجود هنا للكامل)
    // ---------------------------------------------------------
    general: {
        title: "برنامج الإعداد العام | General Prep",
        u16: [
            { week: "الأسبوع 1: التأسيس | Week 1", days: [{day:"يوم 1", work:"تحمل 15د + جذع", img:""}, {day:"يوم 2", work:"تكنيك وقوف + وثب", img:""}, {day:"يوم 3", work:"سرعة 20م", img:""}] },
            { week: "الأسبوع 2: القوة | Week 2", days: [{day:"يوم 1", work:"وزن الجسم", img:""}, {day:"يوم 2", work:"تكنيك دوران", img:""}, {day:"يوم 3", work:"كرة طبية", img:""}] },
            { week: "الأسبوع 3: الشدة | Week 3", days: [{day:"يوم 1", work:"بليومتريك", img:""}, {day:"يوم 2", work:"ربط حركي", img:""}, {day:"يوم 3", work:"سرعة 30م", img:""}] },
            { week: "الأسبوع 4: تقييم | Week 4", days: [{day:"يوم 1", work:"استشفاء", img:""}, {day:"يوم 2", work:"مسابقة تجريبية", img:""}, {day:"يوم 3", work:"ترفيه", img:""}] }
        ],
        o16: [
            { week: "الأسبوع 1: التأسيس | Week 1", days: [{day:"يوم 1", work:"تحمل 20د + بلانك", img:""}, {day:"يوم 2", work:"خطف (بار فارغ)", img:""}, {day:"يوم 3", work:"بليومتريك منخفض", img:""}] },
            { week: "الأسبوع 2: القوة | Week 2", days: [{day:"يوم 1", work:"سكوات + ديدليفت", img:""}, {day:"يوم 2", work:"خطف متوسط", img:""}, {day:"يوم 3", work:"حواجز", img:""}] },
            { week: "الأسبوع 3: الشدة | Week 3", days: [{day:"يوم 1", work:"سكوات ثقيل", img:""}, {day:"يوم 2", work:"خطف وزن", img:""}, {day:"يوم 3", work:"سرعة 50م", img:""}] },
            { week: "الأسبوع 4: تقييم | Week 4", days: [{day:"يوم 1", work:"تثبيت أوزان", img:""}, {day:"يوم 2", work:"مسابقة كاملة", img:""}, {day:"يوم 3", work:"اختبارات سرعة", img:""}] }
        ]
    },

    // ---------------------------------------------------------
    // 2. الإعــــداد الخــــاص (تخصص رمي: جلة، قرص، رمح، مطرقة)
    // ---------------------------------------------------------
    specific: {
        title: "برنامج الإعداد الخاص | Specific Prep",
        u16: [
            { week: "الأسبوع 1: تكنيك المسابقة | Week 1", days: [{day:"يوم 1", work:"رمي كرات طبية أثقل من الجلة", img:""}, {day:"يوم 2", work:"تجزئة الحركة (الزحف/الدوران)", img:""}, {day:"يوم 3", work:"وثب ثلاثي من الثبات", img:""}] },
            { week: "الأسبوع 2: سرعة الأداء | Week 2", days: [{day:"يوم 1", work:"رمي بأوزان خفيفة لزيادة السرعة", img:""}, {day:"يوم 2", work:"تطوير نهاية الرمي (Finishing)", img:""}, {day:"يوم 3", work:"حواجز سريعة", img:""}] },
            { week: "الأسبوع 3: القوة الخاصة | Week 3", days: [{day:"يوم 1", work:"وثب عريض متتالي", img:""}, {day:"يوم 2", work:"رمي من اقتراب كامل (80%)", img:""}, {day:"يوم 3", work:"انطلاقات بمقاومة", img:""}] },
            { week: "الأسبوع 4: المنافسة | Week 4", days: [{day:"يوم 1", work:"إحماء مسابقات", img:""}, {day:"يوم 2", work:"اختبار رقمي (قياس مسافة)", img:""}, {day:"يوم 3", work:"مرونة عميقة", img:""}] }
        ],
        o16: [
            { week: "الأسبوع 1: تكنيك + حديد | Week 1", days: [{day:"يوم 1", work:"خطف + نتر (وزن تخصصي)", img:""}, {day:"يوم 2", work:"رمي أوزان ثقيلة (Overweight)", img:""}, {day:"يوم 3", work:"بليومتريك (صناديق عالية)", img:""}] },
            { week: "الأسبوع 2: الإيقاع الحركي | Week 2", days: [{day:"يوم 1", work:"سكوات سريع + رمي جلة/قرص", img:""}, {day:"يوم 2", work:"رمي أوزان خفيفة (Underweight)", img:""}, {day:"يوم 3", work:"سبرنتات 30م من الجلوس", img:""}] },
            { week: "الأسبوع 3: الشدة القصوى | Week 3", days: [{day:"يوم 1", work:"نتر (90%) + رمي تخصصي", img:""}, {day:"يوم 2", work:"اقتراب كامل بأقصى سرعة", img:""}, {day:"يوم 3", work:"قفز عميق (Depth Jumps)", img:""}] },
            { week: "الأسبوع 4: التهدئة (Tapering) | Week 4", days: [{day:"يوم 1", work:"تقليل الأوزان (50%) وزيادة السرعة", img:""}, {day:"يوم 2", work:"محاكاة بطولة (نفس التوقيت)", img:""}, {day:"يوم 3", work:"جلسة استشفاء ومرونة", img:""}] }
        ]
    },

    // ---------------------------------------------------------
    // 3. القــــوة الانفجاريــــة (برنامج تعزيز القدرة)
    // ---------------------------------------------------------
    explosive: {
        title: "برنامج القوة الانفجارية | Explosive Power",
        u16: [
            { week: "البرنامج الشهري الموحد | Monthly Plan", days: [
                {day:"يوم 1", work:"قفز صناديق + رمي كرة طبية للأمام", img:""},
                {day:"يوم 2", work:"سبرنتات قصيرة (10م-20م) بتركيز البدء", img:""},
                {day:"يوم 3", work:"وثب عريض + رمي كرة طبية خلف الرأس", img:""}
            ]}
        ],
        o16: [
            { week: "البرنامج الشهري الموحد | Monthly Plan", days: [
                {day:"يوم 1", work:"نصف سكوات سريع + قفز عمودي فوراً", img:""},
                {day:"يوم 2", work:"خطف أوليمبي (Snatch) لزيادة القدرة", img:""},
                {day:"يوم 3", work:"رمي مطرقة/جلة ثقيلة من الثبات (انفجار)", img:""}
            ]}
        ]
    }
};

let currentType = null;

function showSection(type) {
    currentType = type;
    const container = document.getElementById('accordion-container');
    const titleDiv = document.getElementById('program-title');
    titleDiv.innerHTML = `<h2 class="section-title">${programStructure[type].title}</h2>`;
    container.innerHTML = `
        <div class="age-selector fade-in">
            <p>اختر الفئة العمرية | Select Age Group</p>
            <div class="age-buttons">
                <button class="age-btn" onclick="showAgeProgram('u16')">
                    <i class="fas fa-child"></i> تحت 16 سنة (براعم/ناشئين)
                </button>
                <button class="age-btn" onclick="showAgeProgram('o16')">
                    <i class="fas fa-running"></i> فوق 16 سنة (شباب/رجال)
                </button>
            </div>
        </div>
    `;
}

function showAgeProgram(ageGroup) {
    const container = document.getElementById('accordion-container');
    let html = `<button class="back-btn" onclick="showSection('${currentType}')"><i class="fas fa-arrow-right"></i> العودة لاختيار الفئة</button>`;
    
    programStructure[currentType][ageGroup].forEach((weekData, index) => {
        html += `
            <div class="week-card fade-in">
                <div class="week-header" onclick="toggleWeek(${index})">
                    <span><i class="fas fa-calendar-alt"></i> ${weekData.week}</span>
                    <i class="fas fa-chevron-down arrow-icon"></i>
                </div>
                <div id="week-${index}" class="week-body">
                    <table class="program-table">
                        <thead>
                            <tr>
                                <th>اليوم</th>
                                <th>التمرين المطلوب</th>
                                <th>توضيح</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${weekData.days.map(d => `
                                <tr>
                                    <td class="day-col"><strong>${d.day}</strong></td>
                                    <td class="work-col">${d.work}</td>
                                    <td class="img-col"><div class="exercise-placeholder">صورة التكنيك</div></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function toggleWeek(id) {
    const el = document.getElementById(`week-${id}`);
    const icon = el.previousElementSibling.querySelector('.arrow-icon');
    const isOpen = el.style.display === 'block';
    el.style.display = isOpen ? 'none' : 'block';
    icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

window.onload = () => showSection('general');