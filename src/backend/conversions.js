
export const convert = (from, to, seconds, factor, fincre) => {
    console.log(from, to, seconds, factor, fincre)
    if (from === "SCY" && (to === "LCM" || to === "SCM")) {
        return seconds * factor + (fincre / 100);
    }

    else if (from === "LCM" && (to === "SCY" || to === "SCM")) {
        return (seconds - (fincre / 100)) / factor;
    }

    else if (from === "SCM" && to === "SCY") {
        return seconds / factor;
    }

    else if (from === "SCM" && to === "LCM") {
        return seconds + (fincre / 100);
    }
}

export const getFactor = (from, to, event) => {
    if (from === "LCM" && to === "SCM") {
        return 1.0;
    }
    if ((from === "LCM" || from === "SCY") && (to === "LCM" || to === "SCY") && (event === '400-fr' || event === '800-fr' || event === '500-fr' || event === '1000-fr')) { // LCM to/from SCY distance 400/800 to/from 500/1000
        return 0.8925;
    } else if ((from === "LCM" || from === "SCY") && (to === "LCM" || to === "SCY") && (event === '1500-fr' || event === '1650-fr')) { // LCM to/from SCY distance 1500 to/from 1650
        return 1.02;
    }
    else {
        return 1.11;
    }
}

const getIncrement = (event) => {
    const stroke = event.split('-')[1];

    switch (stroke) {
        case 'fl': return 70;
        case 'bk': return 60;
        case 'br': return 100;
        case 'fr': return 80;
        case 'im': return 80;
        default: break;
    }
}

export const getFincre = (event, from, to) => {
    const distance = parseInt(event.split('-')[0]);
    const increment = getIncrement(event);
    console.log(distance    )

    if ((from === 'SCY' || from === 'SCM') && (to === 'SCY' || to === 'SCM')) { // To / from SCY - SCM >> 0
        return 0;
    }

    if ((from === 'LCM' || from === 'SCM') && (to === 'LCM' || to === 'SCM') && distance >= 400) { // To / from LCM - SCM distance free
        if (event === '500-fr' || event === '400-fr') {
            return 640;
        }

        else if (event === '800-fr' || event === '1000-fr') {
            return 1280;
        }

        else if (event === '1500-fr' || event === '1650-fr') {
            return 2400;
        }
    }

    switch (distance) {
        case 50: return increment
        case 100: return increment * 2
        case 200: return increment * 4
        case 400: return increment * 8
        default: return 0;
    }
}

export const timeStringToSeconds = (time) => {
    const mins = parseInt(time.split(':')[0]) * 60;
    const secs = parseFloat(time.split(':')[1]);
    return mins + secs
}

export const secondsToTimeString = (seconds) => {
    if (seconds < 60) {
        return seconds;
    } else {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60
        return `${minutes}:${secs}`
    }
}