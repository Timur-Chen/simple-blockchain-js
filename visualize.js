// Blockchain classni import qilamiz
const Blockchain = require("./blockchain");

// Yangi blockchain obyektini yaratamiz
const myBlockchain = new Blockchain();

// Konsolga jarayon haqida ma'lumot chiqaramiz
console.log("\nCreating blockchain...\n");

// 10 ta blok yaratamiz
for (let i = 1; i <= 10; i++) {

    // Blockchain ga yangi transaction qo‘shamiz
    myBlockchain.addBlock({

        sender: "UserA", // jo‘natuvchi
        receiver: "UserB", // qabul qiluvchi
        amount: i * 10 // transaction miqdori

    });

}

// Blockchain strukturasi haqida sarlavha chiqaramiz
console.log("Blockchain visualization:\n");

// Har bir blokni konsolga chiqaramiz
myBlockchain.chain.forEach(block => {

    // Blok indexini chiqaramiz
    console.log("Block:", block.index);

    // Blok yaratilgan vaqt
    console.log("Timestamp:", block.timestamp);

    // Blok ichidagi data
    console.log("Data:", block.data);

    // Blok hash qiymati
    console.log("Hash:", block.hash);

    // Oldingi blok hash qiymati
    console.log("Previous Hash:", block.previousHash);

    // Vizual ajratish uchun chiziq
    console.log("--------------------------------");

});

// Blockchain valid yoki yo‘qligini tekshiramiz
console.log("Blockchain valid:", myBlockchain.isChainValid());