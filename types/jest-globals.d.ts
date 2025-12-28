// Tipos globales para Jest (temporal hasta que se instalen @types/jest)
declare var describe: jest.Describe
declare var it: jest.It
declare var test: jest.It
declare var expect: jest.Expect
declare var beforeEach: jest.Lifecycle
declare var afterEach: jest.Lifecycle
declare var beforeAll: jest.Lifecycle
declare var afterAll: jest.Lifecycle

declare namespace jest {
  interface Describe {
    (name: string, fn: () => void): void
  }
  
  interface It {
    (name: string, fn: (done?: jest.DoneCallback) => void | Promise<void>): void
    only: It
    skip: It
    todo: It
  }
  
  interface Expect {
    <T = any>(actual: T): jest.Matchers<T>
  }
  
  interface Matchers<R> {
    toBe(expected: any): R
    toEqual(expected: any): R
    toMatch(regexpOrString: RegExp | string): R
    toContain(item: any): R
    toHaveProperty(prop: string, value?: any): R
    toBeInTheDocument(): R
    toBeGreaterThan(number: number): R
    toBeGreaterThanOrEqual(number: number): R
    toBeLessThan(number: number): R
    toBeLessThanOrEqual(number: number): R
    toBeTruthy(): R
    toBeFalsy(): R
    toBeDefined(): R
    toBeUndefined(): R
    toBeNull(): R
    toBeInstanceOf(constructor: any): R
    toHaveBeenCalled(): R
    toHaveBeenCalledTimes(times: number): R
    toHaveBeenCalledWith(...args: any[]): R
    toHaveLength(length: number): R
    not: Matchers<R>
  }
  
  interface Lifecycle {
    (fn: () => void | Promise<void>): void
  }
  
  interface DoneCallback {
    (error?: Error): void
  }
}

