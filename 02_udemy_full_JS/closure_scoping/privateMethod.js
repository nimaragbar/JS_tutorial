// we can create a private method easily in Java, but in JS we must use closure
const budget = () => {
    let balance = 0;
    let changBalance = (value) => {
        return balance += value
    };
    // let create closure
    const deposit20 = () => changBalance(20);
    const withdraw20 = () => changBalance(-20);
    const check_balance = () => balance;

    return {deposit20, withdraw20, check_balance}
};

let wallet = budget();

wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();

console.log(wallet.check_balance());