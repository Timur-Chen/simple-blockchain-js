// Blockchain classni import qilamiz
const Blockchain = require("./blockchain");

// Yangi blockchain yaratamiz
const chain = new Blockchain();

// 10 ta blok qo‘shamiz
for (let i = 1; i <= 10; i++) {

    // Transaction ma'lumotlari
    chain.addBlock({

        sender: "Alice",
        receiver: "Bob",
        amount: i * 5

    });

}

// Blockchain boshida valid yoki yo‘qligini tekshiramiz
console.log("\nInitial validation:", chain.isChainValid());

// O‘rtadagi blokni o‘zgartiramiz
console.log("\nTampering middle block...\n");

// 5-blok data ni o‘zgartiramiz
chain.chain[5].data.amount = 9999;

// Blockchain yana tekshiriladi
console.log("Validation after middle change:", chain.isChainValid());

// Oxirgi blokni o‘zgartiramiz
console.log("\nTampering last block...\n");

// 10-blok data ni o‘zgartiramiz
chain.chain[10].data.amount = 7777;

// Blockchain yana tekshiriladi
console.log("Validation after last change:", chain.isChainValid());

// Yangi blok qo‘shamiz
console.log("\nAdding new block...\n");

// Yangi transaction qo‘shish
chain.addBlock({

    sender: "Charlie",
    receiver: "David",
    amount: 200

});

// Yangi blokdan keyin ham tekshiramiz
console.log("Validation after adding block:", chain.isChainValid());