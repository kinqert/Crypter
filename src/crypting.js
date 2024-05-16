const crypto = require('crypto');

function hashSHA256(plain) {
    return crypto.createHash('sha256').update(plain).digest('hex');
}

function encryptAES256(data, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
        encoded: encrypted.toString('hex'),
        iv
    };
}

function decryptAES256(encryptedData, key, iv) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedData, 'hex');
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = {
    hashSHA256,
    encryptAES256,
    decryptAES256
}