import React from "react";
import "./Grades.css"; // لو تحب تفصل CSS

const years = [
  { id: 0, title: "الصف الأول الاعدادي", link: "/years/0", desc: "← جميع كورسات الصف الأول الإعدادي" },
  { id: 1, title: " الصف الثاني الأعدادي", link: "/years/1", desc: "← جميع كورسات الصف الثاني الإعدادي" },
  { id: 2, title: " الصف الثالث الاعدادي", link: "/years/2", desc: "← جميع كورسات الصف الثالث الإعدادي" },
  { id: 3, title: "الصف الأول الثانوي", link: "/years/3", desc: "← جميع كورسات الصف الأول الثانوي" },
  { id: 4, title: "الصف الثاني الثانوي", link: "/years/4", desc: "← جميع كورسات الصف الثاني الثانوي" },
  { id: 5, title: "الصف الثالث الثانوي", link: "/years/5", desc: "← جميع كورسات الصف الثالث الثانوي" },
];

const Grades = () => {
  return (
    <section className="years-section" dir="rtl">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            اختار المرحلة الدراسية وادخل على <br />
            الكورسات المتاحة لدفعة 2026
          </h2>
        </div>
        <div className="years-grid">
          {years.map((year) => (
            <a key={year.id} href={year.link} className="year-card">
              <div className="year-title">{year.title}</div>
              <div className="year-desc">{year.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grades;
