//Encryption, hashing, and password security

const sha256 = require('sha256');
const argon2 = require('argon2');
const jscrypto = require('jscrypt');

// const str1 = "Live the thug life";
// const encodedStr1 = new Buffer(str1).toString('base64');
// console.log(`The string 'Live the thug life' encodes to ${encodedStr1} in base64` );

// let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
// chars.forEach((char) => console.log(`The string '${char}' encodes to ${new Buffer(char).toString('base64')} in base64` ));


const var1 = "Password1";
console.log(`The string 'Hello World' hashed to ${sha256(var1)}`); //SHA256, SHA128, RIPEMD160, Md5
// console.log(sha256(var1).length);

// jscrypto.encryptFile("sample.txt","sample-encrypted3.txt","aes256","P@sW0rD",655000,(progress) =>{
//   console.log(progress);
// });

// jscrypto.decryptFile("sample-encrypted.txt","sample-decrypted.txt","aes256","P@sW0rD",655000,(progress) =>{
//   console.log(progress);
// });

//single key encryption
//two-key encryption (public/private keys)
//https: public encrypts, private decrypts
//btc: public decrypts, private encrypts

/*
username    password
frank       64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c
randy       19513fdc9da4fb72a4a05eb66917548d3c90ff94d5419e1f2363eea89dfee1dd
...

RAINBOW TABLE
Password1 => 19513fdc9da4fb72a4a05eb66917548d3c90ff94d5419e1f2363eea89dfee1dd, XXXXX, abc,...
abc123 => ....
qwerty1 => ....
*/

// const options = {
//   timeCost: 4, memoryCost: 13, parallelism: 2, type: argon2.argon2d
// };
 
// argon2.hash('argon2passwordhash', options).then(hash => {
//   console.log(`The string 'argon2passwordhash' hashed to ${hash}`);
// });
// argon2.hash('argon2passwordhash', options).then(hash => {
//   console.log(`The string 'argon2passwordhash' hashed to ${hash}`);
// });
// argon2.hash('argon2passwordhash', options).then(hash => {
//   console.log(`The string 'argon2passwordhash' hashed to ${hash}`);
// });

//argon and bcrypt salt first, then hash

//jimmy logs in with usernamy jimmy and password 234qfdww4argon2passwordhash