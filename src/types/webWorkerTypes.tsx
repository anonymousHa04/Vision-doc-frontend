export interface TimelineEvent {
    event: string;
    timeStamp: number;
}

export interface SaveSnapShotPayload {
    blob: Blob;
    timestamp: number;
}

export interface SaveChunkPayload {
    blob: Blob;
    timestamp: number;
}

export interface State {
    images: SaveSnapShotPayload[];
    chunks: SaveChunkPayload[];
    timeline: TimelineEvent[];
}