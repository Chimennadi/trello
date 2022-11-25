import { useRef, useEffect } from "react"

function useFocus() {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.focus()  //optional chaining operation (?.)
    }, [])

    return ref
}

export default useFocus