export {}

declare global {
    type MyPick<
        O extends Record<string, any>, 
        K extends keyof O
    > = {
        [Key in keyof O as Key extends K ? Key : never]: O[Key]
    };
}
