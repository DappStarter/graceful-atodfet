require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain company hunt case off trip'; 
let testAccounts = [
"0xe2e3869f43a3d5e734c9977ef43bda472324f64fbf1a0e28ba8a2068d66e90a7",
"0x3ad62697cc5f39638ddda232c610c99d929987a8bf22f91ab932fb03c20e0af2",
"0x58f564e768e7a3fe1f10e7a2d6e4bd21d0b334e87a0a2c6d54b5c670651a459f",
"0x81cdc209bb0e2d2489ebe8dd4cc342f1769e266d935f6ec1d1af9e82b2cf2f14",
"0xc9781612f6da297cde641c3af2f0b95e50b407e1b1f8a203361e6d921d78f8db",
"0x87b1925ba71198e7a92f90b897144a11addf6739aa81bf1647cbb3446497ddeb",
"0xff9e8c542fd15eeaba343185b805d44c673da2afd6cbcfc3fb9bc2f3b13878b0",
"0xbb784010a153e88d274b30978bce9e4c2da3cbadf28e5973b592649169d25c8b",
"0x49d007c5e332a28c51f64401c0cb66e8188d2deaaa028e2c3c333e066d4f5568",
"0x06f349ccdefc5e4b4467809b6e4562bfda95f3db540653b9ff3cda530dc9c993"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

