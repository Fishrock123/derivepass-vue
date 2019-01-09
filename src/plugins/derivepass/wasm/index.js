import wasmURI from 'url-loader?mimetype=application/wasm!./binding.wasm.bin';

let wasm;

// NOTE: This file is... almost generated by `wasm-pack`

let cachegetUint8Memory = null;
function getUint8Memory() {
  if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm(arg) {
  const ptr = wasm.__wbindgen_malloc(arg.length * 1);
  getUint8Memory().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}

function getArrayU8FromWasm(ptr, len) {
  return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
  if (cachedGlobalArgumentPtr === null) {
    cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
  }
  return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
  if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
    cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
  }
  return cachegetUint32Memory;
}

export default class Binding {
  constructor() {
  }

  async init() {
    if (wasm) {
      return;
    }

    const resource = await WebAssembly.instantiateStreaming(fetch(wasmURI));
    wasm = resource.instance.exports;
  }

  /**
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {Uint8Array} arg3
   * @param {Uint8Array} arg4
   * @param {number} arg5
   * @returns {Uint8Array}
   */
  derive(arg0, arg1, arg2, arg3, arg4, arg5) {
    const ptr3 = passArray8ToWasm(arg3);
    const len3 = WASM_VECTOR_LEN;
    const ptr4 = passArray8ToWasm(arg4);
    const len4 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
      wasm.derive(retptr, arg0, arg1, arg2, ptr3, len3, ptr4, len4, arg5);
      const mem = getUint32Memory();
      const rustptr = mem[retptr / 4];
      const rustlen = mem[retptr / 4 + 1];

      const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
      wasm.__wbindgen_free(rustptr, rustlen * 1);
      return realRet;
    } finally {
      wasm.__wbindgen_free(ptr3, len3 * 1);
      wasm.__wbindgen_free(ptr4, len4 * 1);
    }
  }
}
