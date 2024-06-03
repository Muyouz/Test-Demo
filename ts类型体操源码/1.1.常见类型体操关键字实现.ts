//pick 关键点：1.参数是联合类型 2.in相当于遍历一个联合类型
type mypick<T, K extends keyof T> = {
    [key in K]: T[key]
}

//readonly  关键点：1.遍历赋值
type MyReadonly<T> = {
    readonly[key in keyof T]: T[key]
}

//元组转数组  关键点：1.元组默认key为数字 2.T[类型]是获取元组中的所有对应类型的值作为联合类型
type TupleToObject<T extends readonly any[]> = {
    [value in T[number]]: value
}

//选取数组的第一个元素类型
type FirstOne<T extends any[]> = T extends [] ? never : T[0]
type FirstTwo<T extends any[]> = T[number] extends never ? never : T[0]
type FirstThree<T extends any[]> = T['length'] extends 0 ? never : T[0]
type FirstFour<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

//获取只读元组长度
type Length<T extends readonly any[]> = T['length']
type LengthTwo<T extends any[]> = T extends { length: infer rest } ? rest : never

//exclude
type MyExclude<T, U> = T extends U ? never : T

//判断Promise中的类型  关键点：1.判断是否是Promise 2.判断是否是Promise<unknown> 3.递归判断
type MyAwaited<T> = T extends Promise<infer U> ? (U extends Promise<unknown> ? MyAwaited<U> : U) : never

//实现IF
type If<C, T, F> = C extends true ? T : F

//实现concat
type Concat<T extends readonly any[], U extends readonly any[]> = [...T,...U]

//include
type Includes<T extends readonly any[], U> = T extends [infer First,...infer Rest] ? 
    Equal<U,First> extends true ? true : Includes<Rest,U>
  : false

//push
type Push<T extends any[], U> = [...T, U]

//unshift
type Unshift<T extends any[], U> = [U, ...T]

//Parameters
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => unknown ? P : never;