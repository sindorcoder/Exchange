export const category = [
  { name: "Food & Groceries" },
  { name: "Housing" },
  { name: "Transportation" }, // Transport
  { name: "Health & Fitness" }, // Sog'liq va fitness
  { name: "Education" }, // Ta'lim
  { name: "Entertainment" }, // O'yin-kulgi
  { name: "Clothing" }, // Kiyim-kechak
  { name: "Savings & Investments" }, // Jamg'arma va investitsiya
  { name: "Bills & Utilities" }, // To'lovlar va kommunal xizmatlar
  { name: "Personal Care" }, // Shaxsiy gigiyena
  { name: "Insurance" }, // Sug'urta
  { name: "Childcare & Education" }, // Bolalarni parvarishlash va ta'lim
  { name: "Travel & Vacation" }, // Sayohat va ta'tillar
  { name: "Gifts & Donations" }, // Sovg'alar va xayriya
  { name: "Pets" }, // Uy hayvonlari
  { name: "Subscriptions" }, // Obunalar (Netflix, Spotify va boshqalar)
  { name: "Home Maintenance" }, // Uy ta'miri va xizmatlari
  { name: "Electronics" }, // Elektronika
  { name: "Furniture" }, // Mebel
  { name: "Legal Fees" }, // Yuridik xarajatlar
  { name: "Taxes" }, // Soliqlar
  { name: "Investment Tools" }, // Investitsiya vositalari
  { name: "Business Expenses" }, // Biznes xarajatlari
  { name: "Hobbies" }, // Xobbilarga xarajatlar
  { name: "Education & Courses" }, // Kurslar va o'qish
  { name: "Medical Bills" }, // Tibbiy xarajatlar
  { name: "Fitness & Sports" }, // Fitness va sport anjomlari
  { name: "Car Maintenance" }, // Mashina ta'miri va xizmatlari
  { name: "Public Transport" }, // Jamoat transporti
  { name: "Dining Out" }, // Ovqatlanish (restoranlar va kafelar)
  { name: "Fuel & Gas" }, // Yonilg'i
  { name: "Festivals & Celebrations" }, // Bayramlar va tadbirlar
  { name: "Loans & EMI" }, // Kreditlar va to'lovlar
  { name: "Miscellaneous" }, // Turli xarajatlar

];

function generateDates(startYear: number, endYear: number) {
  const dates = [];

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`;
        dates.push(date);
      }
    }
  }

  return dates;
}

const startYear = 2024;
const endYear = 2030;
export const allDates = generateDates(startYear, endYear);
