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

export const topic_vel = (top_velID) => {
    return {
        type: 'topic_vel',
        payload: top_velID
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

export const topic_odom = (top_odomID) => {
    return {
        type: 'topic_odom',
        payload: top_odomID
    }
}

export const ros_node = (rosID) => {
    return {
        type: 'ros_node',
        payload: rosID
    }
}

export const ros_connection = (rosconID) => {
    return {
        type: 'ros_connection',
        payload: rosconID
    }
}