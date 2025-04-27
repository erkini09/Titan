// Backend - server.js (Node.js & Express)
import express from "express";
import multer from "multer";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
const port = 3000;
const upload = multer({ dest: "uploads/" });

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

app.use(express.static("public"));
app.use(express.json());

let reviews = {
    "Store A": ["Çox yaxşı xidmət!", "Qiymətləri münasibdir."],
    "Store B": ["Məhsullar keyfiyyətlidir.", "Bir az bahadır."],
    "Store C": ["Çatdırılma sürətlidir.", "Əla müştəri xidməti."]
};

// Rəyləri almaq
app.get("/reviews/:store", (req, res) => {
    const store = req.params.store;
    res.json({ reviews: reviews[store] || [] });
});

// Yeni rəy əlavə etmək
app.post("/reviews/:store", (req, res) => {
    const store = req.params.store;
    const { review } = req.body;
    if (!reviews[store]) reviews[store] = [];
    reviews[store].push(review);
    res.status(201).json({ message: "Rəy əlavə olundu." });
});

// Şəkil yükləyib məhsulu müəyyən etmək və nəticələri qaytarmaq
app.post("/upload", upload.single("image"), async (req, res) => {
    try {
        const imagePath = req.file.path;

        // Süni intellektlə məhsul adı müəyyənləşdirmək (simulyasiya)
        const productName = "Nümunə məhsul";

        const { data: products } = await axios.get(`https://api.example.com/products?search=${encodeURIComponent(productName)}`);
        products.sort((a, b) => a.price - b.price);

        res.json({ productName, products });
    } catch (error) {
        console.error("Xəta baş verdi:", error);
        res.status(500).json({ error: "Xəta baş verdi." });
    }
});

// Reklam məlumatı (simulyasiya edilmiş)
const ads = [
    { id: 1, content: "🔊 Ən yeni məhsullar burada!", link: "https://sponsor1.com" },
    { id: 2, content: "🎁 Endirimli məhsullar üçün buraya klikləyin!", link: "https://sponsor2.com" }
];

app.get("/ads", (req, res) => {
    res.json({ ads });
});

// Məhsul tarixçəsi (sadə saxlama)
let history = [];
app.get("/history", (req, res) => {
    res.json({ history });
});

app.post("/history", (req, res) => {
    const item = req.body;
    history.push(item);
    res.status(201).json({ message: "Tarixçəyə əlavə olundu." });
});

// QR ilə axtarış (simulyasiya)
app.post("/qr-search", (req, res) => {
    const { qrCode } = req.body;
    const result = { productName: "QR Məhsulu", price: 9.99 };
    res.json(result);
});

// Səsli axtarış (simulyasiya)
app.post("/voice-search", (req, res) => {
    const { audio } = req.body;
    const recognizedProduct = "Səsli məhsul";
    res.json({ recognizedProduct });
});

// Video üçün istiqamətləndirmə
app.get("/guide", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "guide.mp4"));
});

app.listen(port, () => console.log(`Server ${port}-cü portda işə düşdü!`));
