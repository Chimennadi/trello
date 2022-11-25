import { useState } from "react"
import useFocus  from "./utils/useFocus"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

type NewItemFormProps = {
    onAdd(text: string): void
}

function NewItemForm({ onAdd }: NewItemFormProps) {
    const [ text, setText ] = useState("")
    const inputRef = useFocus()

    const handleAddText = ( e: React.KeyboardEvent<HTMLInputElement> ) => {
            if (e.key === "Enter") {
                onAdd(text)
            }
        }
    

    return (
        <NewItemFormContainer>
            <NewItemInput 
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyPress={handleAddText}
            />
            <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    )
}

export default NewItemForm