export const selectStyle = (name) => {
    if (Array.isArray(name)) name = name[0];

    switch (name) {
        case 'fire':
            return { backgroundColor: '#f08030', color: '#1c1c1c' };
        case 'water':
            return { backgroundColor: '#6890f0', color: '#f7f7f7' };
        case 'grass':
            return { backgroundColor: '#78c850', color: '#1c1c1c' };
        case 'electric':
            return { backgroundColor: '#f8d030', color: '#1c1c1c' };
        case 'ice':
            return { backgroundColor: '#98d8d8', color: '#1c1c1c' };
        case 'fighting':
            return { backgroundColor: '#c03028', color: '#f7f7f7' };
        case 'poison':
            return { backgroundColor: '#a040a0', color: '#f7f7f7' };
        case 'ground':
            return { backgroundColor: '#e0c068', color: '#1c1c1c' };
        case 'flying':
            return { backgroundColor: '#a890f0', color: '#1c1c1c' };
        case 'psychic':
            return { backgroundColor: '#f85888', color: '#1c1c1c' };
        case 'bug':
            return { backgroundColor: '#a8b820', color: '#1c1c1c' };
        case 'rock':
            return { backgroundColor: '#b8a038', color: '#1c1c1c' };
        case 'ghost':
            return { backgroundColor: '#705898', color: '#f7f7f7' };
        case 'dark':
            return { backgroundColor: '#705848', color: '#f7f7f7' };
        case 'dragon':
            return { backgroundColor: '#7038f8', color: '#f7f7f7' };
        case 'steel':
            return { backgroundColor: '#b8b8d0', color: '#1c1c1c' };
        case 'fairy':
            return { backgroundColor: '#f0b6bc', color: '#1c1c1c' };

        default:
            return { backgroundColor: '#a8a878', color: '#1c1c1c' };
    }
};
