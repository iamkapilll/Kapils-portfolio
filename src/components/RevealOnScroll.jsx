import { useEffect, useRef } from "react"

export const RevealOnScroll = ({children}) =>{
    const ref = useRef(null)

    useEffect(() =>{
        const observer = new IntersectionObserver(([entry]) =>{
            if
        })
    })
    return (
        <div ref={ref} className="reveal"> {children}</div>
    )
}