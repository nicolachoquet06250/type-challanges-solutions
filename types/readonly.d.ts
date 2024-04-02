export {}

declare global {
    type MyReadonly<O extends Record<string, any>> = {
        readonly[K in keyof O]: O[K]
    };
}