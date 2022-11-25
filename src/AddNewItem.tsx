import { useState } from "react"
import { AddItemButton } from "./styles"
import  NewItemForm  from "./NewItemForm"

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean  //optional
}

function AddNewItem(props: AddNewItemProps) {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;

    if(showForm) {
        return <NewItemForm onAdd={ text => {onAdd(text); setShowForm(false)} } />
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}

export default AddNewItem