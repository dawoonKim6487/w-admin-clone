export const fontSize = (size) => {
    switch (size) {
        case 'xs':
            return 'text-xs'
        case 'sm':
            return 'text-sm'
        case 'xl':
            return 'text-xl'
        case '2xl':
            return 'text-2xl'
        case '3xl':
            return 'text-3xl'
        default:
            return 'text-base'
    }
}

export const fontColor = (color) => {
    switch (color) {
        case 'w':
            return 'text-white'
        case 'r':
            return 'text-red-600'
        case 'dark':
            return 'text-stone-500'
        default:
            return 'text-zinc-800'
    }
}