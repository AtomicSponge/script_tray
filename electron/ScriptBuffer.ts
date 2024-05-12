/**
 * 
 * @author Matthew Evans
 * @module script_tray
 * @see README.md
 * @copyright MIT see LICENSE.md
 * 
 */

export class ScriptBuffer {
  #buffer:Array<string>
  #maxSize:number

  constructor() {
    this.#buffer = []
    this.#maxSize = 100
  }

  /**
   * Read the script buffer
   * @returns The entire buffer formatted as a single string
   */
  read():string {
    let resStr = ''
    this.#buffer.forEach(str => resStr += `${str}\n\n`)
    return resStr
  }

  /**
   * Write to the script buffer
   * @param data Data to write
   */
  write(data:string):void {
    this.#buffer.push(data)
    if(this.#buffer.length > this.#maxSize)
      this.#buffer = this.#buffer.slice(-this.#maxSize)
  }

  /** Get the max buffer size */
  get size():number { return this.#maxSize }
  /** Set the max buffer size */
  set size(val:number) { this.#maxSize = val }
}