type Item = {
    id: string 
}

export const findItemIndexById = <TItem extends Item> ( items: TItem[], id: string ) => {
    return items.findIndex((item: TItem) => item.id === id)
}

/* const itemsWithoutId = [{text: "test"}]

findItemIndexById(itemsWithoutId, "testId") */

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array, from), to, item)
}

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
    return [...array.slice(0, index), ...array.slice(index + 1)]
}

export function insertItemAtIndex<TItem>(array: TItem[], index: number, item: TItem) {
    return [...array.slice(0, index), item, ...array.slice(index)]
}