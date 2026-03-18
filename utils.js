
export const commentsData = JSON.parse(localStorage.getItem("c")) || [
    {
        message: "Hienoa sisältöä, kiitos jakamisesta!",
        author: "kalii@example.com",
        timestamp: "24.1.2026 14:20",
    },
    {
        message: "Kysymys: miten tämä lomake tallentaa tiedot oikeasti?",
        author: "emma@example.com",
        timestamp: "16.3.2025 20:05",
    },
    {
        message: "Tämä on todella hyödyllinen sivusto aloittelijoille!",
        author: "elisa@example.com",
        timestamp: "227.8.2025 09:33",
    },
    {
        message: "Voisitko lisätä lisää esimerkkejä CSS-tyyleistä?",
        author: "juli@example.com",
        timestamp: "3.3.2026 03:33",
    },
    {
        message: "Kiitos selkeästä ohjeistuksesta!",
        author: "emmi@example.com",
        timestamp: "20.7.2025 12:30",
    },
];
saveComments()
export function saveComments(){
  localStorage.setItem("c", JSON.stringify(commentsData))
}