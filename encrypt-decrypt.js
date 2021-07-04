"use strict";
var crypto = require("crypto");

var EncryptionHelper = (function () {

    function getKeyAndIV(key, callback) {

        crypto.pseudoRandomBytes(16, function (err, ivBuffer) {

            var keyBuffer  = (key instanceof Buffer) ? key : new Buffer(key) ;

            callback({
                iv: ivBuffer,
                key: keyBuffer
            });
        });
    }

    function encryptText(cipher_alg, key, iv, text, encoding) {
        var key1 = "1234567890abcdef";
        var cipher = crypto.createCipheriv(cipher_alg, key1, iv);
        var result = Buffer.concat([cipher.update(text), cipher.final()]);
        //console.log(result);
        result = Buffer.concat([iv, result]).toString(encoding);
        //console.log(result);
        return result;
    }

    function decryptText(cipher_alg, key, text, encoding) {
        var bText = Buffer.from(text, encoding);
        var iv = bText.slice(0, 16);
        var payload = bText.slice(16);
        var decipher = crypto.createDecipheriv(cipher_alg, key, iv);

        return Buffer.concat([
          decipher.update(payload, encoding),
          decipher.final()
        ]);
    }

    return {
        CIPHERS: {
          "AES_128": "aes128",          //requires 16 byte key
          "AES_128_CBC": "aes-128-cbc", //requires 16 byte key
          "AES_192": "aes192",          //requires 24 byte key
          "AES_256": "aes256"           //requires 32 byte key
        },
        getKeyAndIV: getKeyAndIV,
        encryptText: encryptText,
        decryptText: decryptText
    };
})();

module.exports = EncryptionHelper;
