// Block classni block.js faylidan import qilamiz
const Block = require("./block");

// Blockchain class yaratamiz
class Blockchain {

    // Konstruktor - blockchain yaratilganda ishlaydi
    constructor() {

        // Blockchain boshlanishida genesis block yaratamiz
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;

    }

    // Genesis block yaratish funksiyasi
    createGenesisBlock() {

        // Birinchi blok (oldingi hash yo‘q)
        return new Block(

            0, // index
            new Date().toISOString(), // vaqt
            "Genesis Block", // boshlang‘ich data
            "0" // previous hash

        );

    }

    // Eng oxirgi blokni olish funksiyasi
    getLatestBlock() {

        // Chain array ichidagi oxirgi elementni qaytaradi
        return this.chain[this.chain.length - 1];

    }

    // Blockchain ga yangi blok qo‘shish funksiyasi
    addBlock(data) {

        // Oxirgi blokni olamiz
        const previousBlock = this.getLatestBlock();

        // Yangi blok yaratamiz
        const newBlock = new Block(

            previousBlock.index + 1, // yangi index
            new Date().toISOString(), // vaqt
            data, // transaction data
            previousBlock.hash // oldingi blok hash

        );
        
        newBlock.mineBlock(this.difficulty);

        // Yangi blokni chain ga qo‘shamiz
        this.chain.push(newBlock);

    }

    // Blockchain integrity tekshirish funksiyasi
    isChainValid() {

        // Genesis blokdan keyingi barcha bloklarni tekshiramiz
        for (let i = 1; i < this.chain.length; i++) {

            // Hozirgi blokni olamiz
            const currentBlock = this.chain[i];

            // Oldingi blokni olamiz
            const previousBlock = this.chain[i - 1];

            // Agar blok hash o‘zgargan bo‘lsa
            if (currentBlock.hash !== currentBlock.calculateHash()) {

                return false; // blockchain buzilgan

            }

            // Agar previous hash noto‘g‘ri bo‘lsa
            if (currentBlock.previousHash !== previousBlock.hash) {

                return false; // blockchain buzilgan

            }

        }

        // Agar barcha bloklar to‘g‘ri bo‘lsa
        return true;

    }

}

// Blockchain classni export qilamiz
module.exports = Blockchain;