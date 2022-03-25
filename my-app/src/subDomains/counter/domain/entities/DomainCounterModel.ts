export interface domainCounterModel {
    value: number;
}

export const domainIncrement = (state: domainCounterModel) => {
    state.value += 1;
}

export const domainDecrement = (state: domainCounterModel) => {
    state.value += -1;
}

export const domainIncrementByAmount = (state: domainCounterModel, amount: number) => {
    state.value += amount;
}