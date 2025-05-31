import { State } from "../types/webWorkerTypes";

const state: State = {
    images: [],
    timeline: [],
    chunks: []
}

self.onmessage = async (e) => {
    const { type, payload } = e.data;

    switch (type) {
        case 'SAVE_SNAPSHOT':
            state.images.push({ blob: payload.blob, timestamp: payload.timestamp });
            break;
        case 'SAVE_CHUNK':
            state.chunks.push(payload);
            break;
        case 'UPDATE_TIMELINE':
            state.timeline.push(payload);
            break;
        case 'GET_DATA':
            self.postMessage({ type: 'DATA_RESPONSE', payload: state });
            break;
        case 'CLEAR_DATA':
            state.images = [];
            state.timeline = [];
            state.chunks = [];
            break;
        default:
            break;
    }
}