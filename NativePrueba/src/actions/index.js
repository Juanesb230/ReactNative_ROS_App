export const ip_master = (ipID) => {
    return {
        type: 'ip_master',
        payload: ipID
    }
}

export const port_master = (portID) => {
    return {
        type: 'port_master',
        payload: portID
    }
}

export const vref = (vrefID) => {
    return {
        type: 'vref',
        payload: vrefID
    }
}

export const wref = (wrefID) => {
    return {
        type: 'wref',
        payload: wrefID
    }
}