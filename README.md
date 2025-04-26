# Vision-doc-frontend
frontend for Vision doc
### [Workflow link](https://miro.com/app/board/uXjVICDyOOs=/?share_link_id=619277626759)

Folder structure

# 📁 Frontend Folder Structure

```bash
src/
├── assets/                 # Static assets like icons, logos, etc.
├── components/             # Reusable UI components
│   ├── RecorderControls/   # Play, Pause, Stop buttons etc.
│   ├── Timeline/           # Timeline view with screenshots + transcript
│   ├── EditorCanvas/       # Rich text editor for documentation
│   └── Shared/             # Buttons, Modals, etc.
│
├── hooks/                  # Custom React hooks
│   ├── useMediaRecorder.js
│   ├── useTranscription.js
│   └── useTimeline.js
│
├── services/               # API calls and logic
│   ├── uploadService.js    # Handles fetch / socket logic
│   └── whisperService.js   # Calls audio-to-text API
│
├── workers/                # Web Workers live here
│   └── uploader.worker.js  # Background uploader for blobs
│
├── pages/                  # Page-level views
│   ├── Home.jsx
│   ├── Recorder.jsx
│   ├── Editor.jsx
│   └── Export.jsx
│
├── utils/                  # Helper functions
│   ├── blobUtils.js
│   ├── timestampUtils.js
│   └── ffmpegUtils.js
│
├── App.jsx                 # Root component
├── index.js                # Entry point
└── vite.config.js / webpack.config.js

```


## Basic commands:
toggle sidebar -> ctrl + b

toggle theme -> alt + t
