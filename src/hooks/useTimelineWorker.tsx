import { useEffect, useRef } from "react";
import { SaveChunkPayload, SaveSnapShotPayload, TimelineEvent } from "../types/webWorkerTypes";


export function useTimelineWorker() {
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker(
            new URL("../workers/timelineWorker.ts", import.meta.url),
            { type: "module" }
        );

        return () => workerRef.current?.terminate();
    }, []);

    const send = (type: string, payload: any) => {
        workerRef.current?.postMessage({ type, payload });
    }

    const getData = (callback: (data: any) => void) => {
        const listener = (e: MessageEvent) => {
            if (e.data.type === "ALL_DATA") callback(e.data.payload);
        };
        workerRef.current?.addEventListener("message", listener);
        send("GET_DATA", {});
    };

    return {
        saveSnapshot: (blob: Blob, timestamp: number) => {
            // send snapshot data
            send("SAVE_SNAPSHOT", { blob, timestamp } as SaveSnapShotPayload);
        },
        saveChunk: (blob: Blob, timestamp: number) =>
            send("SAVE_CHUNK", { blob, timestamp } as SaveChunkPayload),
        updateTimeline: (event: TimelineEvent) => send("UPDATE_TIMELINE", event),
        getSessionData: getData,
        clear: () => send("CLEAR", {}),
    };
};