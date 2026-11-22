export function validateOrder({ name = "", phone = "", address = "" }) {
  const errors = {};
  if (name.trim().length < 3) errors.name = "আপনার পুরো নাম লিখুন";
  if (!/^01[3-9]\d{8}$/.test(phone.trim())) errors.phone = "১১ সংখ্যার সঠিক মোবাইল নম্বর দিন, যেমন 01712345678";
  if (address.trim().length < 10) errors.address = "বাসা/রাস্তা, এলাকাসহ পূর্ণ ঠিকানা লিখুন";
  return errors;
}
