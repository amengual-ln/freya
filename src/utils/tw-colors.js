import colors from 'tailwindcss/colors'

const nonColors = ['inherit', 'current', 'transparent', 'black', 'white']

export const getAvailableColors = () => {
    let availableColors = []
    for (let entry of Object.entries(colors)) {
        if (!nonColors.includes(entry[0]))
            for (let color in entry[1]) {
                if (color > 50)
                    availableColors.push({ name: entry[0] + '-' + color, hex: entry[1][color] + '' })
            }
    }

    availableColors = Array.from(new Set(availableColors))

    return availableColors
}
