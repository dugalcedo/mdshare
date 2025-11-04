import { useRef, useState, useEffect } from "react";

type Props = {
    isShown: boolean
    message: string
    closeFn: Function
}

function AnimatedAlert(props: Props) {

    const viewportTimeoutRef = useRef<ReturnType<typeof setTimeout>>(0)
    const domTimeoutRef = useRef<ReturnType<typeof setTimeout>>(0)

    const [isOutOfViewPort, setIsOutOfViewport] = useState(true)
    const [isInDOM, setIsInDOM] = useState(false)

    const show = () => {
        setIsOutOfViewport(false) // This causes the element's translateY to change.

        // Start timeout which slides the alert out of view
        viewportTimeoutRef.current = setTimeout(() => {
            setIsOutOfViewport(true)

            // Then wait for the animation to finish before removing it from the DOM
            domTimeoutRef.current = setTimeout(() => {
                setIsInDOM(false)
                props.closeFn()
            }, 1000);

        }, 3000);
    }

    useEffect(() => {
        if (props.isShown) {
            // Delete the previous timeouts if there is one, so there are not extra timeouts in memory.
            clearTimeout(viewportTimeoutRef.current)
            clearTimeout(domTimeoutRef.current)

            setIsInDOM(true)

            // 1ms timeout so it waits for previous re-render to finish
            // (I'm not sure if it's necessary)
            setTimeout(show, 10)
        }
    }, [props.isShown])

    if (!isInDOM || !props.isShown) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            translate: `0px ${isOutOfViewPort ? -150 : 0}px`,
            transition: "0.5s",
            zIndex: "var(--alert-z-index)",
            /* I like to keep my z-indexes in CSS variables because they're easier to keep track of. */
            background: 'red',
            color: 'white'
        }}>
            {props.message}
        </div>
    )
}

export default AnimatedAlert;