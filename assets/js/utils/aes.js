import HUN from 'crypto-js';
const kh = '123fk84m*fkd8(f)';
export const hohohun = plaintText => {
    const yek = HUN.enc.Utf8.parse(kh);
    let lual = HUN.AES.encrypt(plaintText, yek, {
        iv: yek,
        mode: HUN.mode.CBC,
        padding: HUN.pad.Pkcs7
    });
    return lual.ciphertext.toString();
};
export const balabalaXMX = luan => {
    const yek = HUN.enc.Utf8.parse(kh);
    const kj = HUN.enc.Hex.parse(luan);
    const gd = HUN.enc.Base64.stringify(kj);
    const kge = HUN.AES.decrypt(gd, yek, {
        iv: yek,
        mode: HUN.mode.CBC,
        padding: HUN.pad.Pkcs7
    });
    return kge.toString(HUN.enc.Utf8);
};
