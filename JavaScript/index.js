// // const,let等の変数宣言
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1)

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1)

// let val2 = "let変数宣言"
// console.log(val2)

// // letでの変数宣言は上書き可能
// val2 = "let変数を上書き"
// console.log(val2)

// // letは再宣言不可能
// let val2 = "letを再宣言"

// const val3 = "const変数"
// console.log(val3)

// const変数は上書き不可
// val3 = "const変数を上書き"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "Koshiro",
//     age: 22
// }
// console.log(val4)

// val4.name = "jak"
// val4.adress = "Tokyo"
// console.log(val4)

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5)

// val5[0] = "bird"
// console.log(val5)

// val5.push("monkey")
// console.log(val5)

// テンプレート文字列
// const name = "Koshiro"
// const age = 22

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1)

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

// 従来の関数
// function func1(str) {
//     return str;
// }
// const func1 = function (str) {
//     return str;
// }
// console.log(func1("func1です。"))

// アロー関数
// const func2 = (str) => {
//     return str;
// }
// const func2 = str => {
//     return str;
// }
// const func2 = str => str;
// console.log(func2("func2です。"))

// const func3 = (x, y) => {
//     return x + y;
// }
// console.log(func3(2, 5))

// 分割代入
// const myProfile = {
//     name: "Koshiro",
//     age: 22
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1)

// const { name, age } = myProfile
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

// 配列の分割代入
// const myProfile = ["Koshiro", 22]
// const message1 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(message1)

// const [name, age] = myProfile
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

// デフォルト値
// const sayHello = (name = "Guest") => console.log(`こんにちは${name}さん`)
// sayHello("Koshiro")
// sayHello()

// const myProfile = {
//     age: 22
// }
// const { age, name = "Guest" } = myProfile
// console.log(age)
// console.log(name)

