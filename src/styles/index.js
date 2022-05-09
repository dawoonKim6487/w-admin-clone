import { classnames as twc } from 'tailwindcss-classnames';

export const defaultFont = (size) => twc(
    size ? `text-${size}` : "",
)

export const flexStyle = (vertical, gap, flex, between) => twc(
    'flex',
    between ? 'justify-between' : 'justify-start',
    'items-center',
    vertical ? 'flex-col' : 'flex-row',
    gap ? `gap-${gap}` : '',
    flex ? `flex-${flex}` : ""
)

export const aniOpt = (delay) => twc(
    'transition', 'ease-in-out', delay ? `delay-${delay}` : "",
    'duration-300'
)