export const Status={
    Success:"success",
    Loading:"Loading",
    Error:"error"
} as const

export type StatusType=(typeof Status)[keyof typeof Status];