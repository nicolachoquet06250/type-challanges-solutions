export {}

type Tmp<
    T extends string[]|Readonly<string[]>,
    A = {
        -readonly [K in keyof T]: T[K]
    }
> = {
    [K in keyof A as A[K] extends string ? A[K] : never]: A[K]
}

declare global {
    type TupleToObject<A extends string[]|Readonly<string[]>> = Tmp<A>
}