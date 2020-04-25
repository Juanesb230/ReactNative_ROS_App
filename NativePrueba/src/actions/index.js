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

