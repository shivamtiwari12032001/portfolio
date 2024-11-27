export const fadeInVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            duration: 0.5
        }
    }
}
export const fadeInTextVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
            delay: 0.3,
            duration: 0.6
        }
    }
}

export const child = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,

    }
}