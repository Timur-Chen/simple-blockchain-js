// crypto-js kutubxonasidan SHA256 hashing funksiyasini chaqiramiz
const SHA256 = require("crypto-js/sha256");

// Block nomli class yaratamiz
class Block {

    // Konstruktor - yangi blok yaratilganda ishlaydi
    constructor(index, timestamp, data, previousHash = "") {

        // Blokning zanjirdagi tartib raqami
        this.index = index;

        // Blok yaratilgan vaqt
        this.timestamp = timestamp;

        // Blok ichidagi ma'lumot (transaction yoki boshqa data)
        this.data = data;

        // Oldingi blokning hash qiymati
        this.previousHash = previousHash;

        // Proof-of-work uchun nonce qiymati
        this.nonce = 0;

        // Ushbu blokning hash qiymatini hisoblaymiz
        this.hash = this.calculateHash();
    }

    // Blok uchun hash qiymatini hisoblaydigan funksiya
    calculateHash() {

        // SHA256 algoritmi yordamida hash yaratamiz
        return SHA256(
            // Blok ma'lumotlarini birlashtiramiz
            this.index +
            this.previousHash +
            this.timestamp +
            JSON.stringify(this.data) +
            this.nonce
        ).toString(); // Hashni string ko‘rinishga o‘tkazamiz
    }
    
    // Proof-of-work mining funksiyasi
mineBlock(difficulty) {

    while (this.hash.substring(0, difficulty) !== "0".repeat(difficulty)) {
        this.nonce++;
        this.hash = this.calculateHash();
    }

    console.log("Block mined:", this.hash);
}

}

// Block classni boshqa fayllarda ishlatish uchun export qilamiz
module.exports = Block;