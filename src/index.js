/**
 * const let
 */

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";

// console.log(val3);

// const val4 = {
//   name: "my",
//   age: 28,
// } ;

// val4.name = "me";
// val4.adress = "hiroshi";
// val4.age= "14";

// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

//

/**アロー関数 */

//従来
function func1(str) {
  return str;
}
const func2 = function (str) {
  return str;
};

console.log(func1("func1です"));
console.log(func2("func2です"));

//アロー関数

const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(10, 20));

//分割代入
const myProfile = {
  name: "my",
  age: 28
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);
//　↓のように使える
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。。`;
console.log(message2);

const myProfile2 = ["me", 30];

const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message3);

const [name1, age1] = myProfile2;
const message4 = `名前は${name1}です。年齢は${age1}です。。`;
console.log(message4);

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayHello("my");

/**
 * スプレッド構文　...
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
arr7[0] = 100;
console.log(arr7);
console.log(arr4);

//mapや　filterを使った配列の処理
//forループ
const nameArr = ["田中", "山田", "my"];
// for(let index = 0; index < nameArr.length ; index++) {
//   console.log(nameArr[index]);
// }

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
