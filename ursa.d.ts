// Project: https://github.com/quartzjer/ursa
// Definitions by: Sergey Khomushin <https://github.com/xr0master>
// Definitions: https://github.com/xr0master/definitionTypes-ursa


declare module 'ursa' {

  interface PrivateKey {
    getPrivateExponent(encoding: string): Buffer;
    decrypt(buf: string | Buffer, bufEncoding: string, outEncoding: string, padding: number): Buffer;
    hashAndSign(algorithm: string, buf: string | Buffer, bufEncoding: string, outEncoding: string,
                use_pss_padding: boolean, salt_len: number): Buffer;
    privateEncrypt(buf: string | Buffer, bufEncoding: string, outEncoding: string, padding: number): Buffer;
    sign(algorithm: string, hash: string, hashEncoding: string, outEncoding: string): Buffer;
    toPrivatePem(encoding?: string): Buffer;
    toEncryptedPrivatePem(passPhrase: string, cipher: any, encoding?: string): Buffer;
  }

  interface PublicKey {
    encrypt(encoding: string): Buffer;
    getExponent(encoding: string): Buffer;
    getModulus(encoding: string): Buffer;
    hashAndVerify(encoding: string): Buffer;
    publicDecrypt(encoding: string): Buffer;
    toPublicPem(encoding: string): Buffer;
    toPublicSsh(encoding: string): Buffer;
    toPublicSshFingerprint(encoding: string): Buffer;
    verify(encoding: string): Buffer;
    unseal(encoding: string): Buffer;
  }

  /**
   * Assert wrapper for isKey().
   */
  export function assertKey(obj: any): void;

  /**
   * Assert wrapper for isPrivateKey().
   */
  export function assertPrivateKey(obj: any): void;

  /**
   * Assert wrapper for isPublicKey().
   */
  export function assertPublicKey(obj: any): void;

  /**
   * Coerce the given key value into a key object (either public or
   * private), returning it. If given a private key object, this just
   * returns it as-is. If given a string or Buffer, it tries to parse it
   * as PEM. Anything else is an error.
   */
  export function coerceKey(orig: any): any;

  /**
   * Coerce the given key value into an private key object, returning
   * it. If given a private key object, this just returns it as-is. If
   * given a string or Buffer, it tries to parse it as PEM. Anything
   * else is an error.
   */
  export function coercePrivateKey(orig: any): PrivateKey;

  /**
   * Coerce the given key value into a public key object, returning
   * it. If given a private key object, this just returns it as-is. If
   * given a string or Buffer, it tries to parse it as PEM. Anything
   * else is an error.
   */
  export function coercePublicKey(orig: any): PublicKey;

  /**
   * Create a key object from a PEM format file, either a private or
   * public key depending on what kind of file is passed in. If given
   * a private key file, it must not be encrypted.
   */
  export function createKey(pem: string | Buffer, encoding?: string): PrivateKey | PublicKey;

  /**
   * Create a new private key object, from the given PEM-encoded file,
   * optionally decrypting the file with a password.
   */
  export function createPrivateKey(pem: string | Buffer, password?: string, encoding?: string): PrivateKey;

  /**
   * Create private key from components
   */
  export function createPrivateKeyFromComponents(modulus: number, exponent: number, p: number, q: number, dp: number, dq: number, inverseQ: number, d: number): PrivateKey;

  /**
   * OpenSSH Public key to RSA
   * @param {String|Object} key OpenSSH Public Key
   * @param <String> key encoding, default 'base64'
   * @returns {PublicKey}
   */
  export function openSshPublicKey(key: string | Buffer, encoding?: string): PublicKey;

  /**
   * Create a new public key object, from the given PEM-encoded file.
   */
  export function createPublicKey(pem: string | Buffer, password?: string, encoding?: string): PublicKey;

  /**
   * Create public key from components
   */
  export function createPublicKeyFromComponents(modulus: number, exponent: number): PublicKey;

  /**
   * Create a signer object.
   */
  export function createSigner(algorithm: string): Object;

  /**
   * Create a verifier object.
   */
  export function createVerifier(algorithm: string): Object;

  /**
   * Check whether the two objects are both keys of some sort, are
   * both public or both private, and have the same contents.
   */
  export function equalKeys(key1: PublicKey | PrivateKey, key2: PublicKey | PrivateKey): boolean;

  /**
   * Generate a new private key object (aka a keypair).
   */
  export function generatePrivateKey(modulusBits: number, exponent: number): PrivateKey;

  /**
   * Return whether the given object is a key object (either public or
   * private), as constructed by this module.
   */
  export function isKey(obj: any): boolean;

  /**
   * Return whether the given object is a private key object, as
   * constructed by this module.
   */
  export function isPrivateKey(obj: any): boolean;

  /**
   * Return whether the given object is a public key object (per se), as
   * constructed by this module.
   */
  export function isPublicKey(obj: any): boolean;

  /**
   * Check whether the two objects are both keys of some sort and
   * have the same public part.
   */
  export function matchingPublicKeys(key1: PublicKey, key2: PublicKey): boolean;

  /**
   * Return the SSH-style public key fingerprint of the given SSH-format
   * public key.
   */
  export function sshFingerprint(sshKey: string | Buffer, sshEncoding: string, outEncoding: string): void;

  export const RSA_NO_PADDING: number = 3;
  export const RSA_PKCS1_PADDING: number = 1;
  export const RSA_PKCS1_OAEP_PADDING: number = 4;
  export const RSA_PKCS1_SALT_LEN_HLEN: number = -1;
  export const RSA_PKCS1_SALT_LEN_MAX: number = -2;
  export const RSA_PKCS1_SALT_LEN_RECOVER: number = -2;
}
