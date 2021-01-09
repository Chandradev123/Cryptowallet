const SHA256 = require('crypto-js/sha256'); //function that will generate unique hash
const EC = require('elliptic').ec; //method is used from elliptic
const uuidV1 = require('uuid/v1');
const ec = new EC('secp256k1');// sec- standards  p-prime   265- 32 bytes long    k-mathematician name  1-this is first implementation 
//uuid - (universal unique id) that generates a unique id based on current time

class ChainUtil {
   static genKeyPair() {
       return ec.genKeyPair();
   }

static id() {
    return uuidV1();
}

static hash(data)
{
    return SHA256(JSON.stringify(data)).toString();
}

static verifySignature(publicKey , signature , dataHash) {
    return ec.keyFromPublic(publicKey, 'hex').verify(dataHash,signature);
}

}


module.exports = ChainUtil;