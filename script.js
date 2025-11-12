// تشغيل الكود بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    if (!name || !phone || !amount) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال!");
      return;
    }

    alert(تم إرسال طلبك بنجاح:\nالاسم: ${name}\nالرقم: ${phone}\nالمبلغ: ${amount} JOD);
    form.reset();
  });
});
