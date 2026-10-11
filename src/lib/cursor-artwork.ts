// Artwork and motion plans for the self-contained vanilla exports.
// Each entry mirrors the React component of the same id in src/registry/cursors,
// shape for shape, so the copied snippet looks and moves like the gallery cursor.
export type ArtworkEase = "linear" | "easeIn" | "easeOut" | "easeInOut";

export interface ArtworkLoop {
  values: Record<string, number[]>;
  duration: number;
  ease: ArtworkEase | ArtworkEase[];
  times?: number[];
  delay?: number;
  static?: Record<string, number>;
  hoverDuration?: number;
  hoverValues?: Record<string, number[]>;
}

export interface ArtworkNode {
  tag: string;
  attrs: Record<string, string | number>;
  children?: ArtworkNode[];
  loop?: ArtworkLoop;
  hover?: Record<string, number>;
  origin?: string;
}

export interface CursorArtwork {
  accent: string;
  filter?: string;
  nodes: ArtworkNode[];
}

export const CURSOR_ARTWORK: Record<string, CursorArtwork> = {
  jellyfish: {
    accent: "#e879f9",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(232,121,249,0.55))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "bell", cx: "40%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fdf4ff" } },
              { tag: "stop", attrs: { offset: 0.4, stopColor: "#f5d0fe" } },
              { tag: "stop", attrs: { offset: 0.75, stopColor: "#e879f9" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#c026d3" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: {
              id: "tentacle",
              x1: 0,
              y1: 17,
              x2: 0,
              y2: 31,
              gradientUnits: "userSpaceOnUse",
            },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f0abfc" } },
              { tag: "stop", attrs: { offset: 0.55, stopColor: "#c084fc" } },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#67e8f9", stopOpacity: 0.25 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: {
              id: "arm",
              x1: 0,
              y1: 17,
              x2: 0,
              y2: 28,
              gradientUnits: "userSpaceOnUse",
            },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fbcfe8" } },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#f472b6", stopOpacity: 0.35 },
              },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 27.5, cy: 9, r: 0.9, stroke: "#a5f3fc", strokeWidth: 0.6 },
        loop: {
          values: { y: [0, -3.5, -7], opacity: [0, 0.9, 0] },
          duration: 2.8,
          ease: "linear",
          delay: 0.4,
          static: { y: -3.5, opacity: 0.9 },
        },
        origin: "27.5px 9px",
      },
      {
        tag: "circle",
        attrs: { cx: 6, cy: 12, r: 0.7, stroke: "#a5f3fc", strokeWidth: 0.6 },
        loop: {
          values: { y: [0, -3.5, -7], opacity: [0, 0.9, 0] },
          duration: 2.8,
          ease: "linear",
          delay: 1.8,
          static: { y: -3.5, opacity: 0.9 },
        },
        origin: "6px 12px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M10.5 17.6 C9 20.5 12 23 10.3 26 C9.4 27.7 10.2 29.2 9.6 30.4",
              stroke: "url(#tentacle)",
              strokeWidth: 1.3,
              strokeLinecap: "round",
            },
            loop: {
              values: { rotate: [-7, 7, -7] },
              duration: 2.4,
              ease: "easeInOut",
              hoverDuration: 1.1,
            },
            origin: "10.5px 17.6px",
          },
          {
            tag: "path",
            attrs: {
              d: "M14 18.2 C12.8 21.3 15.4 23.8 14 27 C13.3 28.6 14 30 13.6 31.2",
              stroke: "url(#tentacle)",
              strokeWidth: 1.3,
              strokeLinecap: "round",
            },
            loop: {
              values: { rotate: [-7, 7, -7] },
              duration: 2.4,
              ease: "easeInOut",
              delay: 0.3,
              hoverDuration: 1.1,
            },
            origin: "14px 18.2px",
          },
          {
            tag: "path",
            attrs: {
              d: "M20 18.2 C21.2 21.3 18.6 23.8 20 27 C20.7 28.6 20 30 20.4 31.2",
              stroke: "url(#tentacle)",
              strokeWidth: 1.3,
              strokeLinecap: "round",
            },
            loop: {
              values: { rotate: [-7, 7, -7] },
              duration: 2.4,
              ease: "easeInOut",
              delay: 0.6,
              hoverDuration: 1.1,
            },
            origin: "20px 18.2px",
          },
          {
            tag: "path",
            attrs: {
              d: "M23.5 17.6 C25 20.5 22 23 23.7 26 C24.6 27.7 23.8 29.2 24.4 30.4",
              stroke: "url(#tentacle)",
              strokeWidth: 1.3,
              strokeLinecap: "round",
            },
            loop: {
              values: { rotate: [-7, 7, -7] },
              duration: 2.4,
              ease: "easeInOut",
              delay: 0.9,
              hoverDuration: 1.1,
            },
            origin: "23.5px 17.6px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M15.6 18 C14.6 20.6 17.6 22 16.2 24.6 C15.6 25.8 16.4 26.8 16 27.6",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18.4 18 C19.4 20.6 16.4 22 17.8 24.6 C18.4 25.8 17.6 26.8 18 27.6",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
            ],
            loop: {
              values: { rotate: [-4, 4, -4] },
              duration: 2.4,
              ease: "easeInOut",
              hoverDuration: 1.1,
            },
            origin: "17px 18px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M6.5 16.8 C6.2 9.6 11 4.6 17 4.6 C23 4.6 27.8 9.6 27.5 16.8 Q25.2 19.2 22.6 17.4 Q19.8 19.6 17 17.6 Q14.2 19.6 11.4 17.4 Q8.8 19.2 6.5 16.8 Z",
                  fill: "url(#bell)",
                  stroke: "#c026d3",
                  strokeWidth: 0.8,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M10.5 15.2 C10.6 10.4 13.5 7.8 17 7.8 C20.5 7.8 23.4 10.4 23.5 15.2 C20.5 16.2 13.5 16.2 10.5 15.2 Z",
                  fill: "#fdf4ff",
                  fillOpacity: 0.35,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M13.2 13.4 A1.6 1.6 0 1 1 16.2 13.4 M17.8 13.4 A1.6 1.6 0 1 1 20.8 13.4",
                  stroke: "#db2777",
                  strokeWidth: 0.9,
                  strokeLinecap: "round",
                  opacity: 0.55,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M9.6 11.6 C10.4 8.6 12.6 6.6 15.4 6.1",
                  stroke: "#ffffff",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  opacity: 0.85,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 21.8,
                  cy: 8.4,
                  r: 0.9,
                  fill: "#ffffff",
                  opacity: 0.7,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 9.8, cy: 15.6, r: 0.8, fill: "#a5f3fc" },
                loop: {
                  values: { opacity: [0.35, 1, 0.35] },
                  duration: 1.8,
                  ease: "easeInOut",
                  hoverDuration: 0.8,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 13.6, cy: 16.8, r: 0.8, fill: "#a5f3fc" },
                loop: {
                  values: { opacity: [0.35, 1, 0.35] },
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 0.45,
                  hoverDuration: 0.8,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 20.4, cy: 16.8, r: 0.8, fill: "#a5f3fc" },
                loop: {
                  values: { opacity: [0.35, 1, 0.35] },
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 0.9,
                  hoverDuration: 0.8,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 24.2, cy: 15.6, r: 0.8, fill: "#a5f3fc" },
                loop: {
                  values: { opacity: [0.35, 1, 0.35] },
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 1.35,
                  hoverDuration: 0.8,
                },
              },
            ],
            loop: {
              values: { scaleX: [1, 1.07, 1], scaleY: [1, 0.92, 1] },
              duration: 1.6,
              ease: "easeInOut",
              hoverValues: { scaleX: [1, 1.13, 1], scaleY: [1, 0.85, 1] },
              hoverDuration: 0.8,
            },
            origin: "17px 17px",
          },
        ],
        loop: {
          values: { y: [0, -1.6, 0] },
          duration: 3.2,
          ease: "easeInOut",
          hoverDuration: 1.6,
        },
      },
    ],
  },
  koi: {
    accent: "#f97316",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(249,115,22,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "body", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#fff7ed" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fed7aa" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "patch", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fb923c" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#dc2626" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "fin", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#fb923c", stopOpacity: 0.85 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#ffedd5", stopOpacity: 0.95 },
              },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "koiBody" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M7.6 17 C10 12.6 15.6 11.4 21 12 C25.4 12.6 28.8 14.6 29.4 17 C28.8 19.4 25.4 21.4 21 22 C15.6 22.6 10 21.4 7.6 17 Z",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 17, r: 13, stroke: "#7dd3fc", strokeWidth: 0.6 },
        loop: {
          values: { scale: [0.55, 1.05], opacity: [0.6, 0] },
          duration: 2.6,
          ease: "easeOut",
          static: { scale: 0.85, opacity: 0.22 },
        },
        origin: "17px 17px",
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 17, r: 13, stroke: "#7dd3fc", strokeWidth: 0.6 },
        loop: {
          values: { scale: [0.55, 1.05], opacity: [0.6, 0] },
          duration: 2.6,
          ease: "easeOut",
          delay: 1.3,
          static: { scale: 0.55, opacity: 0 },
        },
        origin: "17px 17px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M21.4 13 C20.4 9.6 17.6 8.4 15.8 9 C17.4 10.4 18.4 12 18.8 13.4 Z",
              fill: "url(#fin)",
              stroke: "#ea580c",
              strokeWidth: 0.5,
              strokeLinejoin: "round",
            },
            loop: {
              values: { rotate: [0, -14, 0] },
              duration: 1.1,
              ease: "easeInOut",
              hoverDuration: 0.5,
            },
            origin: "20.5px 13.2px",
          },
          {
            tag: "path",
            attrs: {
              d: "M21.4 21 C20.4 24.4 17.6 25.6 15.8 25 C17.4 23.6 18.4 22 18.8 20.6 Z",
              fill: "url(#fin)",
              stroke: "#ea580c",
              strokeWidth: 0.5,
              strokeLinejoin: "round",
            },
            loop: {
              values: { rotate: [0, 14, 0] },
              duration: 1.1,
              ease: "easeInOut",
              hoverDuration: 0.5,
            },
            origin: "20.5px 20.8px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M8.6 17 C6.6 14.2 4.2 11.8 1.8 11.4 C3 14 3.2 15.6 3 17 C3.2 18.4 3 20 1.8 22.6 C4.2 22.2 6.6 19.8 8.6 17 Z",
                  fill: "url(#fin)",
                  stroke: "#ea580c",
                  strokeWidth: 0.6,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M7 16.4 L3.2 13.4 M7 17.6 L3.2 20.6 M7 17 L2.8 17",
                  stroke: "#f97316",
                  strokeWidth: 0.45,
                  strokeLinecap: "round",
                  opacity: 0.6,
                },
              },
            ],
            loop: {
              values: { rotate: [-16, 16, -16] },
              duration: 1.1,
              ease: "easeInOut",
              hoverValues: { rotate: [-28, 28, -28] },
              hoverDuration: 0.45,
            },
            origin: "8px 17px",
          },
          {
            tag: "path",
            attrs: {
              d: "M7.6 17 C10 12.6 15.6 11.4 21 12 C25.4 12.6 28.8 14.6 29.4 17 C28.8 19.4 25.4 21.4 21 22 C15.6 22.6 10 21.4 7.6 17 Z",
              fill: "url(#body)",
              stroke: "#ea580c",
              strokeWidth: 0.7,
            },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#koiBody)" },
            children: [
              {
                tag: "ellipse",
                attrs: {
                  cx: 25.4,
                  cy: 16.4,
                  rx: 3.4,
                  ry: 2.7,
                  fill: "url(#patch)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M12.8 13.4 C15 12.2 18.6 12.6 19.6 14.6 C20.4 16.4 18.4 17.6 16.4 17.2 C14.6 16.8 13.6 18.8 11.8 18.2 C10.4 17.6 11 14.4 12.8 13.4 Z",
                  fill: "url(#patch)",
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 14.8,
                  cy: 20.8,
                  rx: 2.4,
                  ry: 1.4,
                  fill: "url(#patch)",
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 19,
                  cy: 19.4,
                  r: 0.9,
                  fill: "#1f2937",
                  opacity: 0.85,
                },
              },
            ],
          },
          {
            tag: "path",
            attrs: {
              d: "M11 15.2 C15 13.4 21 13.2 25.6 14.6",
              stroke: "#ffffff",
              strokeWidth: 1,
              strokeLinecap: "round",
              opacity: 0.75,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 27, cy: 15.4, r: 0.8, fill: "#1f2937" },
          },
          {
            tag: "circle",
            attrs: { cx: 27, cy: 18.6, r: 0.8, fill: "#1f2937" },
          },
          {
            tag: "circle",
            attrs: { cx: 27.25, cy: 15.15, r: 0.28, fill: "#ffffff" },
          },
          {
            tag: "circle",
            attrs: { cx: 27.25, cy: 18.35, r: 0.28, fill: "#ffffff" },
          },
        ],
        loop: {
          values: { rotate: [-6, 6, -6] },
          duration: 2.2,
          ease: "easeInOut",
          hoverDuration: 1.1,
        },
        origin: "17px 17px",
      },
    ],
  },
  snail: {
    accent: "#84cc16",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(132,204,22,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "body", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f7fee7" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#bef264" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#65a30d" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "shell", cx: "38%", cy: "32%", r: "72%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.35, stopColor: "#fbbf24" } },
              { tag: "stop", attrs: { offset: 0.75, stopColor: "#d97706" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#92400e" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "eye", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e5e7eb" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M1.2 28.4 H9",
          stroke: "#a5f3fc",
          strokeWidth: 1,
          strokeLinecap: "round",
          opacity: 0.7,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M3.4 27.2 Q3.4 28.3 4.5 28.3 Q3.4 28.3 3.4 29.4 Q3.4 28.3 2.3 28.3 Q3.4 28.3 3.4 27.2 Z",
          fill: "#ffffff",
        },
        loop: {
          values: { opacity: [0, 1, 0], scale: [0.5, 1, 0.5] },
          duration: 1.8,
          ease: "easeInOut",
          static: { opacity: 1, scale: 1 },
        },
        origin: "3.4px 28.3px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "path",
                    attrs: {
                      d: "M26.2 18 C25.8 15 25.2 12.6 24.4 10.8",
                      stroke: "#84cc16",
                      strokeWidth: 1.3,
                      strokeLinecap: "round",
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M27.4 18 C27.8 15 28.6 12.8 29.6 11.2",
                      stroke: "#84cc16",
                      strokeWidth: 1.3,
                      strokeLinecap: "round",
                    },
                  },
                  {
                    tag: "circle",
                    attrs: {
                      cx: 24.2,
                      cy: 10.2,
                      r: 1.7,
                      fill: "url(#eye)",
                      stroke: "#3f6212",
                      strokeWidth: 0.5,
                    },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 24.6, cy: 10.4, r: 0.8, fill: "#111827" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 24.9, cy: 10, r: 0.3, fill: "#ffffff" },
                  },
                  {
                    tag: "circle",
                    attrs: {
                      cx: 29.8,
                      cy: 10.6,
                      r: 1.7,
                      fill: "url(#eye)",
                      stroke: "#3f6212",
                      strokeWidth: 0.5,
                    },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 30.2, cy: 10.8, r: 0.8, fill: "#111827" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 30.5, cy: 10.4, r: 0.3, fill: "#ffffff" },
                  },
                ],
                loop: {
                  values: { rotate: [-5, 5, -5] },
                  duration: 2,
                  ease: "easeInOut",
                  hoverDuration: 0.9,
                },
                origin: "26.8px 18px",
              },
            ],
            hover: { scale: 1.2, y: -0.6 },
            origin: "26.8px 18px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M3.6 27 C3.6 25.6 5.4 24.8 8.4 24.8 H20.4 C22.6 24.8 23.6 22.4 24.2 19.6 C24.6 17.4 27 16.6 28.4 17.8 C29.8 19 29.8 21.6 29.2 23.8 C28.6 26.2 27 27.8 24.6 27.8 H5 C4.2 27.8 3.6 27.6 3.6 27 Z",
                  fill: "url(#body)",
                  stroke: "#4d7c0f",
                  strokeWidth: 0.7,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 27.5,
                  cy: 22.2,
                  rx: 1,
                  ry: 0.7,
                  fill: "#fda4af",
                  opacity: 0.75,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M26.5 24.4 Q27.5 25.2 28.4 24.2",
                  stroke: "#3f6212",
                  strokeWidth: 0.5,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M7 25.9 H20",
                  stroke: "#ffffff",
                  strokeWidth: 0.8,
                  strokeLinecap: "round",
                  opacity: 0.6,
                },
              },
            ],
            loop: {
              values: { scaleX: [1, 1.05, 1] },
              duration: 2.4,
              ease: "easeInOut",
              hoverDuration: 1.2,
            },
            origin: "5px 26px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: {
                  cx: 14.4,
                  cy: 17.4,
                  r: 8.6,
                  fill: "url(#shell)",
                  stroke: "#78350f",
                  strokeWidth: 0.8,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M14.44 17.79 L14.41 17.63 L14.44 17.45 L14.51 17.27 L14.64 17.09 L14.82 16.95 L15.05 16.84 L15.32 16.78 L15.61 16.79 L15.91 16.88 L16.19 17.03 L16.45 17.26 L16.67 17.56 L16.82 17.91 L16.89 18.31 L16.87 18.73 L16.75 19.16 L16.54 19.57 L16.22 19.93 L15.82 20.23 L15.35 20.45 L14.82 20.56 L14.26 20.56 L13.7 20.43 L13.16 20.18 L12.67 19.8 L12.26 19.31 L11.95 18.73 L11.78 18.08 L11.74 17.38 L11.85 16.68 L12.12 15.99 L12.54 15.37 L13.1 14.83 L13.78 14.41 L14.55 14.15 L15.37 14.04 L16.22 14.12 L17.05 14.38 L17.83 14.82 L18.51 15.43 L19.05 16.18 L19.44 17.05 L19.63 18 L19.62 18.99 L19.39 19.98 L18.96 20.91 L18.32 21.74 L17.51 22.44 L16.55 22.96 L15.49 23.26 L14.36 23.34 L13.23 23.18 L12.13 22.77 L11.13 22.14 L10.28 21.29 L9.61 20.26 L9.16 19.1 L8.96 17.85 L9.04 16.57 L9.39 15.31 L10 14.13 L10.86 13.1 L11.94 12.26 L13.18 11.66",
                  stroke: "#92400e",
                  strokeWidth: 1.6,
                  strokeLinecap: "round",
                  opacity: 0.35,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M14.44 17.79 L14.41 17.63 L14.44 17.45 L14.51 17.27 L14.64 17.09 L14.82 16.95 L15.05 16.84 L15.32 16.78 L15.61 16.79 L15.91 16.88 L16.19 17.03 L16.45 17.26 L16.67 17.56 L16.82 17.91 L16.89 18.31 L16.87 18.73 L16.75 19.16 L16.54 19.57 L16.22 19.93 L15.82 20.23 L15.35 20.45 L14.82 20.56 L14.26 20.56 L13.7 20.43 L13.16 20.18 L12.67 19.8 L12.26 19.31 L11.95 18.73 L11.78 18.08 L11.74 17.38 L11.85 16.68 L12.12 15.99 L12.54 15.37 L13.1 14.83 L13.78 14.41 L14.55 14.15 L15.37 14.04 L16.22 14.12 L17.05 14.38 L17.83 14.82 L18.51 15.43 L19.05 16.18 L19.44 17.05 L19.63 18 L19.62 18.99 L19.39 19.98 L18.96 20.91 L18.32 21.74 L17.51 22.44 L16.55 22.96 L15.49 23.26 L14.36 23.34 L13.23 23.18 L12.13 22.77 L11.13 22.14 L10.28 21.29 L9.61 20.26 L9.16 19.1 L8.96 17.85 L9.04 16.57 L9.39 15.31 L10 14.13 L10.86 13.1 L11.94 12.26 L13.18 11.66",
                  stroke: "#fef3c7",
                  strokeWidth: 1,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M8.6 13.2 A7 7 0 0 1 13 9.4",
                  stroke: "#ffffff",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  opacity: 0.75,
                },
              },
            ],
            loop: {
              values: { rotate: [-2.5, 2.5, -2.5] },
              duration: 2.4,
              ease: "easeInOut",
              hoverDuration: 1.2,
            },
            origin: "14px 25px",
          },
        ],
        loop: {
          values: { x: [0, 0.6, 0] },
          duration: 2.4,
          ease: "easeInOut",
          hoverDuration: 1.2,
        },
      },
    ],
  },
  dragonfly: {
    accent: "#22d3ee",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,211,238,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "wing", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#c4b5fd", stopOpacity: 0.55 },
              },
              {
                tag: "stop",
                attrs: { offset: 0.5, stopColor: "#a5f3fc", stopOpacity: 0.6 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#e0f2fe", stopOpacity: 0.9 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "body", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#5eead4" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#0d9488" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e3a8a" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "eye", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#a5f3fc" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#0891b2" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#164e63" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M16.2 13.2 C11.6 12.8 6 14 3.6 16.4 C3.4 17.8 6.6 18 9.6 16.8 C12 15.8 14.6 14.6 16.2 13.8 Z",
                  fill: "url(#wing)",
                  stroke: "#0284c7",
                  strokeWidth: 0.45,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16 13.6 C11.6 14.2 7.4 15.4 4.6 16.6",
                  stroke: "#0369a1",
                  strokeWidth: 0.4,
                  strokeLinecap: "round",
                  opacity: 0.5,
                },
              },
            ],
            loop: {
              values: { rotate: [6, -8, 6] },
              duration: 0.26,
              ease: "easeInOut",
              delay: 0.08,
              hoverDuration: 0.16,
            },
            origin: "16.4px 13.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17.8 13.2C22.4 12.8 28 14 30.4 16.4C30.6 17.8 27.4 18 24.4 16.8C22 15.8 19.4 14.6 17.8 13.8Z",
                  fill: "url(#wing)",
                  stroke: "#0284c7",
                  strokeWidth: 0.45,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18 13.6C22.4 14.2 26.6 15.4 29.4 16.6",
                  stroke: "#0369a1",
                  strokeWidth: 0.4,
                  strokeLinecap: "round",
                  opacity: 0.5,
                },
              },
            ],
            loop: {
              values: { rotate: [-6, 8, -6] },
              duration: 0.26,
              ease: "easeInOut",
              delay: 0.08,
              hoverDuration: 0.16,
            },
            origin: "17.6px 13.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M16 11 C11.4 8.6 5 7.6 2.6 9 C1.8 10.6 5.2 12 9 12.2 C11.8 12.4 14.4 12 16 11.8 Z",
                  fill: "url(#wing)",
                  stroke: "#0284c7",
                  strokeWidth: 0.45,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16 11.4 C11.6 10.6 6.8 9.8 3.4 9.6",
                  stroke: "#0369a1",
                  strokeWidth: 0.4,
                  strokeLinecap: "round",
                  opacity: 0.5,
                },
              },
            ],
            loop: {
              values: { rotate: [-6, 8, -6] },
              duration: 0.26,
              ease: "easeInOut",
              hoverDuration: 0.16,
            },
            origin: "16.2px 11.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M18 11C22.6 8.6 29 7.6 31.4 9C32.2 10.6 28.8 12 25 12.2C22.2 12.4 19.6 12 18 11.8Z",
                  fill: "url(#wing)",
                  stroke: "#0284c7",
                  strokeWidth: 0.45,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18 11.4C22.4 10.6 27.2 9.8 30.6 9.6",
                  stroke: "#0369a1",
                  strokeWidth: 0.4,
                  strokeLinecap: "round",
                  opacity: 0.5,
                },
              },
            ],
            loop: {
              values: { rotate: [6, -8, 6] },
              duration: 0.26,
              ease: "easeInOut",
              hoverDuration: 0.16,
            },
            origin: "17.8px 11.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M16 13.6 C16 13.2 18 13.2 18 13.6 L17.7 29.6 C17.6 30.6 16.4 30.6 16.3 29.6 Z",
                  fill: "url(#body)",
                  stroke: "#134e4a",
                  strokeWidth: 0.5,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16.1 17 H17.9 M16.15 19.6 H17.85 M16.2 22.2 H17.8 M16.25 24.8 H17.75 M16.3 27.4 H17.7",
                  stroke: "#042f2e",
                  strokeWidth: 0.45,
                  opacity: 0.55,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16.7 14.6 L16.6 28",
                  stroke: "#ccfbf1",
                  strokeWidth: 0.4,
                  strokeLinecap: "round",
                  opacity: 0.6,
                },
              },
            ],
            loop: {
              values: { rotate: [-3, 3, -3] },
              duration: 1.8,
              ease: "easeInOut",
              hoverDuration: 0.9,
            },
            origin: "17px 13.6px",
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 17,
              cy: 11.4,
              rx: 2.3,
              ry: 2.9,
              fill: "url(#body)",
              stroke: "#134e4a",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 16.3,
              cy: 10.4,
              rx: 0.7,
              ry: 1.1,
              fill: "#ffffff",
              opacity: 0.5,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 15.7,
              cy: 7.3,
              r: 1.75,
              fill: "url(#eye)",
              stroke: "#164e63",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 18.3,
              cy: 7.3,
              r: 1.75,
              fill: "url(#eye)",
              stroke: "#164e63",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 15.2,
              cy: 6.7,
              r: 0.45,
              fill: "#ffffff",
              opacity: 0.9,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17.8,
              cy: 6.7,
              r: 0.45,
              fill: "#ffffff",
              opacity: 0.9,
            },
          },
        ],
        loop: {
          values: { y: [0, -1.2, 0] },
          duration: 1.8,
          ease: "easeInOut",
          hoverValues: { y: [0, -2.4, 0] },
          hoverDuration: 0.9,
        },
      },
    ],
  },
  dandelion: {
    accent: "#facc15",
    filter:
      "drop-shadow(0 0 0.6px rgba(15,23,42,0.6)) drop-shadow(0 1px 1.5px rgba(15,23,42,0.25))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "halo", cx: "50%", cy: "50%", r: "50%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#fef9c3", stopOpacity: 0.6 },
              },
              {
                tag: "stop",
                attrs: { offset: 0.6, stopColor: "#fde68a", stopOpacity: 0.2 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#fde68a", stopOpacity: 0 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "stem", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#bbf7d0" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#15803d" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "core", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
        ],
      },
      { tag: "circle", attrs: { cx: 17, cy: 13, r: 12.5, fill: "url(#halo)" } },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M17 15 C17.4 20 16.5 25.5 17.4 32",
              stroke: "url(#stem)",
              strokeWidth: 1.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17.2 27.8 C19 25.6 21.8 25.4 23.4 26.4 C21.8 28 19.4 28.6 17.2 27.8 Z",
              fill: "#4ade80",
              stroke: "#15803d",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17.45 11.05 L18.25 7.54 M18.25 7.54 L17.57 6.21 M18.25 7.54 L18.58 6.08 M18.25 7.54 L19.45 6.63 M18.25 11.44 L20.49 8.62 M20.49 8.62 L20.45 7.12 M20.49 8.62 L21.43 7.45 M20.49 8.62 L21.96 8.32 M18.8 12.13 L22.05 10.57 M22.05 10.57 L22.67 9.2 M22.05 10.57 L23.4 9.92 M22.05 10.57 L23.5 10.94 M19 13 L22.6 13 M22.6 13 L23.75 12.04 M22.6 13 L24.1 13 M22.6 13 L23.75 13.96 M18.8 13.87 L22.05 15.43 M22.05 15.43 L23.5 15.06 M22.05 15.43 L23.4 16.08 M22.05 15.43 L22.67 16.8 M18.25 14.56 L20.49 17.38 M20.49 17.38 L21.96 17.68 M20.49 17.38 L21.43 18.55 M20.49 17.38 L20.45 18.88 M17.45 14.95 L18.25 18.46 M18.25 18.46 L19.45 19.37 M18.25 18.46 L18.58 19.92 M18.25 18.46 L17.57 19.79 M16.55 14.95 L15.75 18.46 M15.75 18.46 L16.43 19.79 M15.75 18.46 L15.42 19.92 M15.75 18.46 L14.55 19.37 M15.75 14.56 L13.51 17.38 M13.51 17.38 L13.55 18.88 M13.51 17.38 L12.57 18.55 M13.51 17.38 L12.04 17.68 M15.2 13.87 L11.95 15.43 M11.95 15.43 L11.33 16.8 M11.95 15.43 L10.6 16.08 M11.95 15.43 L10.5 15.06 M15 13 L11.4 13 M11.4 13 L10.25 13.96 M11.4 13 L9.9 13 M11.4 13 L10.25 12.04 M15.2 12.13 L11.95 10.57 M11.95 10.57 L10.5 10.94 M11.95 10.57 L10.6 9.92 M11.95 10.57 L11.33 9.2 M15.75 11.44 L13.51 8.62 M13.51 8.62 L12.04 8.32 M13.51 8.62 L12.57 7.45 M13.51 8.62 L13.55 7.12 M16.55 11.05 L15.75 7.54 M15.75 7.54 L14.55 6.63 M15.75 7.54 L15.42 6.08 M15.75 7.54 L16.43 6.21",
              stroke: "#e2e8f0",
              strokeWidth: 0.4,
              strokeLinecap: "round",
              opacity: 0.7,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 11 L17 5.6 M17.68 11.12 L19.53 6.05 M18.29 11.47 L21.76 7.33 M18.97 12.65 L24.29 11.72 M18.97 13.35 L24.29 14.28 M18.73 14 L23.41 16.7 M18.29 14.53 L21.76 18.67 M17.68 14.88 L19.53 19.95 M17 15 L17 20.4 M16.32 14.88 L14.47 19.95 M15.71 14.53 L12.24 18.67 M15.27 14 L10.59 16.7 M15.03 13.35 L9.71 14.28 M15.03 12.65 L9.71 11.72 M15.27 12 L10.59 9.3 M15.71 11.47 L12.24 7.33 M16.32 11.12 L14.47 6.05",
              stroke: "#cbd5e1",
              strokeWidth: 0.45,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 5.6 L15.51 4.26 M17 5.6 L16.19 3.77 M17 5.6 L17 3.6 M17 5.6 L17.81 3.77 M17 5.6 L18.49 4.26 M19.53 6.05 L18.59 4.28 M19.53 6.05 L19.39 4.05 M19.53 6.05 L20.21 4.17 M19.53 6.05 L20.92 4.61 M19.53 6.05 L21.38 5.3 M21.76 7.33 L21.48 5.35 M21.76 7.33 L22.31 5.41 M21.76 7.33 L23.05 5.8 M21.76 7.33 L23.56 6.45 M21.76 7.33 L23.76 7.26 M24.29 11.72 L25.35 10.02 M24.29 11.72 L25.95 10.6 M24.29 11.72 L26.26 11.37 M24.29 11.72 L26.23 12.2 M24.29 11.72 L25.87 12.95 M24.29 14.28 L25.87 13.05 M24.29 14.28 L26.23 13.8 M24.29 14.28 L26.26 14.63 M24.29 14.28 L25.95 15.4 M24.29 14.28 L25.35 15.98 M23.41 16.7 L25.31 16.08 M23.41 16.7 L25.4 16.91 M23.41 16.7 L25.14 17.7 M23.41 16.7 L24.59 18.32 M23.41 16.7 L23.83 18.66 M21.76 18.67 L23.76 18.74 M21.76 18.67 L23.56 19.55 M21.76 18.67 L23.05 20.2 M21.76 18.67 L22.31 20.59 M21.76 18.67 L21.48 20.65 M19.53 19.95 L21.38 20.7 M19.53 19.95 L20.92 21.39 M19.53 19.95 L20.21 21.83 M19.53 19.95 L19.39 21.95 M19.53 19.95 L18.59 21.72 M17 20.4 L18.49 21.74 M17 20.4 L17.81 22.23 M17 20.4 L17 22.4 M17 20.4 L16.19 22.23 M17 20.4 L15.51 21.74 M14.47 19.95 L15.41 21.72 M14.47 19.95 L14.61 21.95 M14.47 19.95 L13.79 21.83 M14.47 19.95 L13.08 21.39 M14.47 19.95 L12.62 20.7 M12.24 18.67 L12.52 20.65 M12.24 18.67 L11.69 20.59 M12.24 18.67 L10.95 20.2 M12.24 18.67 L10.44 19.55 M12.24 18.67 L10.24 18.74 M10.59 16.7 L10.17 18.66 M10.59 16.7 L9.41 18.32 M10.59 16.7 L8.86 17.7 M10.59 16.7 L8.6 16.91 M10.59 16.7 L8.69 16.08 M9.71 14.28 L8.65 15.98 M9.71 14.28 L8.05 15.4 M9.71 14.28 L7.74 14.63 M9.71 14.28 L7.77 13.8 M9.71 14.28 L8.13 13.05 M9.71 11.72 L8.13 12.95 M9.71 11.72 L7.77 12.2 M9.71 11.72 L7.74 11.37 M9.71 11.72 L8.05 10.6 M9.71 11.72 L8.65 10.02 M10.59 9.3 L8.69 9.92 M10.59 9.3 L8.6 9.09 M10.59 9.3 L8.86 8.3 M10.59 9.3 L9.41 7.68 M10.59 9.3 L10.17 7.34 M12.24 7.33 L10.24 7.26 M12.24 7.33 L10.44 6.45 M12.24 7.33 L10.95 5.8 M12.24 7.33 L11.69 5.41 M12.24 7.33 L12.52 5.35 M14.47 6.05 L12.62 5.3 M14.47 6.05 L13.08 4.61 M14.47 6.05 L13.79 4.17 M14.47 6.05 L14.61 4.05 M14.47 6.05 L15.41 4.28",
              stroke: "#ffffff",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 13,
              r: 2,
              fill: "url(#core)",
              stroke: "#78350f",
              strokeWidth: 0.4,
            },
          },
        ],
        loop: {
          values: { rotate: [-3, 3, -3] },
          duration: 3.6,
          ease: "easeInOut",
          hoverValues: { rotate: [-6, 6, -6] },
          hoverDuration: 1.6,
        },
        origin: "17px 32px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M23.2 9.8 L23.2 7.4",
              stroke: "#94a3b8",
              strokeWidth: 0.45,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M23.2 7.4 L21.6 6.2 M23.2 7.4 L22.2 5.6 M23.2 7.4 L23.2 5.4 M23.2 7.4 L24.2 5.6 M23.2 7.4 L24.8 6.2",
              stroke: "#ffffff",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 23.2, cy: 9.9, r: 0.35, fill: "#a16207" },
          },
        ],
        loop: {
          values: {
            x: [0, 5, 10],
            y: [0, -5, -11],
            rotate: [0, 25, 50],
            opacity: [0, 1, 0],
          },
          duration: 4.2,
          ease: "linear",
          static: { x: 4, y: -4, rotate: 20, opacity: 1 },
          hoverDuration: 2,
        },
        origin: "23.2px 8.4px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M23.2 9.8 L23.2 7.4",
              stroke: "#94a3b8",
              strokeWidth: 0.45,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M23.2 7.4 L21.6 6.2 M23.2 7.4 L22.2 5.6 M23.2 7.4 L23.2 5.4 M23.2 7.4 L24.2 5.6 M23.2 7.4 L24.8 6.2",
              stroke: "#ffffff",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 23.2, cy: 9.9, r: 0.35, fill: "#a16207" },
          },
        ],
        loop: {
          values: {
            x: [0, 5, 10],
            y: [0, -5, -11],
            rotate: [0, 25, 50],
            opacity: [0, 1, 0],
          },
          duration: 4.2,
          ease: "linear",
          delay: 1.4,
          static: { x: 0, y: 0, rotate: 0, opacity: 0 },
          hoverDuration: 2,
        },
        origin: "23.2px 8.4px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M23.2 9.8 L23.2 7.4",
              stroke: "#94a3b8",
              strokeWidth: 0.45,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M23.2 7.4 L21.6 6.2 M23.2 7.4 L22.2 5.6 M23.2 7.4 L23.2 5.4 M23.2 7.4 L24.2 5.6 M23.2 7.4 L24.8 6.2",
              stroke: "#ffffff",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 23.2, cy: 9.9, r: 0.35, fill: "#a16207" },
          },
        ],
        loop: {
          values: {
            x: [0, 5, 10],
            y: [0, -5, -11],
            rotate: [0, 25, 50],
            opacity: [0, 1, 0],
          },
          duration: 4.2,
          ease: "linear",
          delay: 2.8,
          static: { x: 0, y: 0, rotate: 0, opacity: 0 },
          hoverDuration: 2,
        },
        origin: "23.2px 8.4px",
      },
    ],
  },
  "moon-phase": {
    accent: "#bae6fd",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 7px rgba(186,230,253,0.55))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "moon", cx: "38%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#e2e8f0" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#94a3b8" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "crater", cx: "40%", cy: "35%", r: "60%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#94a3b8", stopOpacity: 0.65 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#cbd5e1", stopOpacity: 0.2 },
              },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "aura", cx: "50%", cy: "50%", r: "50%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#e0f2fe", stopOpacity: 0.45 },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.72,
                  stopColor: "#bae6fd",
                  stopOpacity: 0.22,
                },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#bae6fd", stopOpacity: 0 },
              },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "shade", cx: "50%", cy: "50%", r: "50%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#0f172a", stopOpacity: 0.92 },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.86,
                  stopColor: "#0f172a",
                  stopOpacity: 0.88,
                },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#0f172a", stopOpacity: 0.3 },
              },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "moonClip" },
            children: [{ tag: "circle", attrs: { cx: 17, cy: 17, r: 11 } }],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M4.5 4.3 Q4.5 6.5 6.7 6.5 Q4.5 6.5 4.5 8.7 Q4.5 6.5 2.3 6.5 Q4.5 6.5 4.5 4.3 Z",
          fill: "#fde68a",
        },
        loop: {
          values: { opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] },
          duration: 2.2,
          ease: "easeInOut",
          static: { opacity: 1, scale: 1 },
        },
        origin: "4.5px 6.5px",
      },
      {
        tag: "path",
        attrs: {
          d: "M29.5 25.4 Q29.5 27 31.1 27 Q29.5 27 29.5 28.6 Q29.5 27 27.9 27 Q29.5 27 29.5 25.4 Z",
          fill: "#fde68a",
        },
        loop: {
          values: { opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] },
          duration: 2.6,
          ease: "easeInOut",
          delay: 1.1,
          static: { opacity: 1, scale: 1 },
        },
        origin: "29.5px 27px",
      },
      {
        tag: "path",
        attrs: {
          d: "M30 4.8 Q30 6 31.2 6 Q30 6 30 7.2 Q30 6 28.8 6 Q30 6 30 4.8 Z",
          fill: "#fde68a",
        },
        loop: {
          values: { opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] },
          duration: 3,
          ease: "easeInOut",
          delay: 0.5,
          static: { opacity: 1, scale: 1 },
        },
        origin: "30px 6px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: { cx: 17, cy: 17, r: 15, fill: "url(#aura)" },
          },
          {
            tag: "circle",
            attrs: { cx: 17, cy: 17, r: 11, fill: "url(#moon)" },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#moonClip)" },
            children: [
              {
                tag: "ellipse",
                attrs: {
                  cx: 15.5,
                  cy: 18,
                  rx: 3.6,
                  ry: 2.3,
                  fill: "#94a3b8",
                  opacity: 0.25,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 12.5, cy: 13.5, r: 2.4, fill: "url(#crater)" },
              },
              {
                tag: "circle",
                attrs: { cx: 20.5, cy: 21.5, r: 3, fill: "url(#crater)" },
              },
              {
                tag: "circle",
                attrs: { cx: 21.5, cy: 11, r: 1.4, fill: "url(#crater)" },
              },
              {
                tag: "circle",
                attrs: { cx: 13, cy: 22, r: 1.2, fill: "url(#crater)" },
              },
              {
                tag: "circle",
                attrs: { cx: 24.6, cy: 16.6, r: 1, fill: "url(#crater)" },
              },
              {
                tag: "circle",
                attrs: { cx: 17, cy: 17, r: 11.4, fill: "url(#shade)" },
                loop: {
                  values: { x: [-23, 23] },
                  duration: 9,
                  ease: "linear",
                  static: { x: 9 },
                  hoverDuration: 3.5,
                },
              },
            ],
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 17,
              r: 11,
              stroke: "#f8fafc",
              strokeWidth: 0.6,
              opacity: 0.5,
            },
          },
        ],
        hover: { scale: 1.08 },
        origin: "17px 17px",
      },
    ],
  },
  cassette: {
    accent: "#8b5cf6",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(139,92,246,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "shell", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#a78bfa" } },
              { tag: "stop", attrs: { offset: 0.55, stopColor: "#7c3aed" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#4c1d95" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "label", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fffbeb" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fde68a" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "window", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#1e1b4b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f172a" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "tape", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#92400e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#451a03" } },
            ],
          },
        ],
      },
      {
        tag: "rect",
        attrs: {
          x: 2.5,
          y: 7.5,
          width: 29,
          height: 20,
          rx: 2.6,
          fill: "url(#shell)",
          stroke: "#3b0764",
          strokeWidth: 0.8,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M4.6 8.8 H29.4",
          stroke: "#ffffff",
          strokeWidth: 0.9,
          strokeLinecap: "round",
          opacity: 0.35,
        },
      },
      { tag: "circle", attrs: { cx: 4.6, cy: 9.7, r: 0.6, fill: "#ddd6fe" } },
      { tag: "circle", attrs: { cx: 29.4, cy: 9.7, r: 0.6, fill: "#ddd6fe" } },
      { tag: "circle", attrs: { cx: 4.6, cy: 25.3, r: 0.6, fill: "#ddd6fe" } },
      { tag: "circle", attrs: { cx: 29.4, cy: 25.3, r: 0.6, fill: "#ddd6fe" } },
      {
        tag: "rect",
        attrs: {
          x: 5.5,
          y: 10,
          width: 23,
          height: 11.6,
          rx: 1.4,
          fill: "url(#label)",
          stroke: "#4c1d95",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "rect",
        attrs: { x: 5.5, y: 11.6, width: 23, height: 1.1, fill: "#fb923c" },
      },
      {
        tag: "rect",
        attrs: { x: 5.5, y: 12.9, width: 23, height: 1.1, fill: "#f472b6" },
      },
      {
        tag: "rect",
        attrs: {
          x: 10,
          y: 14.6,
          width: 14,
          height: 5.6,
          rx: 2.8,
          fill: "url(#window)",
          stroke: "#4c1d95",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 13.4, cy: 17.4, r: 2.6, fill: "url(#tape)" },
      },
      {
        tag: "circle",
        attrs: { cx: 20.6, cy: 17.4, r: 2, fill: "url(#tape)" },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 13.4,
              cy: 17.4,
              r: 1.5,
              fill: "#f8fafc",
              stroke: "#cbd5e1",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M14 17.4 L14.75 17.4 M13.7 17.92 L14.08 18.57 M13.1 17.92 L12.73 18.57 M12.8 17.4 L12.05 17.4 M13.1 16.88 L12.73 16.23 M13.7 16.88 L14.08 16.23",
              stroke: "#64748b",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 13.4, cy: 17.4, r: 0.45, fill: "#334155" },
          },
        ],
        loop: {
          values: { rotate: [0, 360] },
          duration: 2.4,
          ease: "linear",
          hoverDuration: 0.7,
        },
        origin: "13.4px 17.4px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 20.6,
              cy: 17.4,
              r: 1.5,
              fill: "#f8fafc",
              stroke: "#cbd5e1",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M21.2 17.4 L21.95 17.4 M20.9 17.92 L21.28 18.57 M20.3 17.92 L19.93 18.57 M20 17.4 L19.25 17.4 M20.3 16.88 L19.93 16.23 M20.9 16.88 L21.28 16.23",
              stroke: "#64748b",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 20.6, cy: 17.4, r: 0.45, fill: "#334155" },
          },
        ],
        loop: {
          values: { rotate: [0, 360] },
          duration: 2.4,
          ease: "linear",
          hoverDuration: 0.7,
        },
        origin: "20.6px 17.4px",
      },
      {
        tag: "path",
        attrs: {
          d: "M11.6 15.5 H15",
          stroke: "#ffffff",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          opacity: 0.35,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M7.4 20.6 Q8.4 19.6 9.4 20.6 T11.4 20.6 T13.4 20.6",
          stroke: "#6d28d9",
          strokeWidth: 0.6,
          strokeLinecap: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8.5 27.5 L10.3 23.6 H23.7 L25.5 27.5",
          fill: "#5b21b6",
          stroke: "#3b0764",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      { tag: "circle", attrs: { cx: 12.6, cy: 25.7, r: 0.7, fill: "#1e1b4b" } },
      { tag: "circle", attrs: { cx: 21.4, cy: 25.7, r: 0.7, fill: "#1e1b4b" } },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 27.4,
              cy: 6.6,
              r: 1.2,
              fill: "#f472b6",
              stroke: "#be185d",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M28.5 6.4 V2 Q30.2 2.8 31 4.2",
              stroke: "#f472b6",
              strokeWidth: 0.9,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
          },
        ],
        loop: {
          values: { x: [0, 1, 2], y: [0, -3.5, -7], opacity: [0, 1, 0] },
          duration: 2.6,
          ease: "linear",
          static: { x: 0, y: 0, opacity: 1 },
          hoverDuration: 1.2,
        },
        origin: "28.4px 5px",
      },
    ],
  },
  domino: {
    accent: "#facc15",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.4)) drop-shadow(0 0 6px rgba(250,204,21,0.25))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "tile", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e7e5e4" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "side", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#a8a29e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#57534e" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "pin", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
        ],
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 28.6,
          rx: 13,
          ry: 1.6,
          fill: "#0f172a",
          opacity: 0.25,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 19.2,
              y: 10.2,
              width: 9,
              height: 18,
              rx: 2,
              fill: "url(#side)",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 18,
              y: 9,
              width: 9,
              height: 18,
              rx: 2,
              fill: "url(#tile)",
              stroke: "#44403c",
              strokeWidth: 0.7,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M19.4 10.6 V25.4",
              stroke: "#ffffff",
              strokeWidth: 0.8,
              strokeLinecap: "round",
              opacity: 0.8,
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 19.6,
              y1: 18,
              x2: 25.4,
              y2: 18,
              stroke: "#57534e",
              strokeWidth: 0.8,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 22.5, cy: 18, r: 0.75, fill: "url(#pin)" },
          },
          {
            tag: "circle",
            attrs: { cx: 20.4, cy: 11.8, r: 1.05, fill: "#1c1917" },
          },
          {
            tag: "circle",
            attrs: { cx: 24.6, cy: 15.2, r: 1.05, fill: "#1c1917" },
          },
          {
            tag: "circle",
            attrs: { cx: 20.4, cy: 20.6, r: 1.05, fill: "#1c1917" },
          },
          {
            tag: "circle",
            attrs: { cx: 22.5, cy: 22.6, r: 1.05, fill: "#1c1917" },
          },
          {
            tag: "circle",
            attrs: { cx: 24.6, cy: 24.6, r: 1.05, fill: "#1c1917" },
          },
        ],
        loop: {
          values: { rotate: [0, 0, 3, 0, 0] },
          duration: 2.6,
          ease: "easeInOut",
          times: [0, 0.32, 0.42, 0.6, 1],
          hoverValues: { rotate: [0, 0, 9, 9, 0] },
          hoverDuration: 1.8,
        },
        origin: "28.2px 28.2px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 8.2,
              y: 10.2,
              width: 9,
              height: 18,
              rx: 2,
              fill: "url(#side)",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 7,
              y: 9,
              width: 9,
              height: 18,
              rx: 2,
              fill: "url(#tile)",
              stroke: "#44403c",
              strokeWidth: 0.7,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M8.4 10.6 V25.4",
              stroke: "#ffffff",
              strokeWidth: 0.8,
              strokeLinecap: "round",
              opacity: 0.8,
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 8.6,
              y1: 18,
              x2: 14.4,
              y2: 18,
              stroke: "#57534e",
              strokeWidth: 0.8,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 11.5, cy: 18, r: 0.75, fill: "url(#pin)" },
          },
          {
            tag: "circle",
            attrs: { cx: 11.5, cy: 13.5, r: 1.2, fill: "#1c1917" },
          },
          {
            tag: "circle",
            attrs: { cx: 9.4, cy: 20.6, r: 1.05, fill: "#1c1917" },
          },
          {
            tag: "circle",
            attrs: { cx: 13.6, cy: 24.4, r: 1.05, fill: "#1c1917" },
          },
        ],
        loop: {
          values: { rotate: [0, 6.2, 9.2, 6.2, 0] },
          duration: 2.6,
          ease: ["easeIn", "easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.32, 0.42, 0.6, 1],
          hoverValues: { rotate: [0, 6.2, 15.5, 15.5, 0] },
          hoverDuration: 1.8,
        },
        origin: "17.2px 28.2px",
      },
    ],
  },
  "newtons-cradle": {
    accent: "#94a3b8",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(148,163,184,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "ball", cx: "35%", cy: "30%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.35, stopColor: "#e2e8f0" } },
              { tag: "stop", attrs: { offset: 0.75, stopColor: "#64748b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e293b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "bar", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#e2e8f0" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#475569" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "post", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#94a3b8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#334155" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "base", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#334155" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f172a" } },
            ],
          },
        ],
      },
      {
        tag: "rect",
        attrs: {
          x: 1.5,
          y: 27.4,
          width: 31,
          height: 3.4,
          rx: 1.7,
          fill: "url(#base)",
          stroke: "#020617",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M3.2 28.4 H30.8",
          stroke: "#ffffff",
          strokeWidth: 0.6,
          strokeLinecap: "round",
          opacity: 0.25,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 3,
          y: 5,
          width: 1.8,
          height: 22.8,
          rx: 0.9,
          fill: "url(#post)",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 29.2,
          y: 5,
          width: 1.8,
          height: 22.8,
          rx: 0.9,
          fill: "url(#post)",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 2.4,
          y: 4.4,
          width: 29.2,
          height: 2.2,
          rx: 1.1,
          fill: "url(#bar)",
          stroke: "#1e293b",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M5 6.6 L6.6 20 L8.2 6.6",
              stroke: "#94a3b8",
              strokeWidth: 0.45,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 6.6,
              cy: 22.4,
              r: 2.55,
              fill: "url(#ball)",
              stroke: "#1e293b",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 5.8,
              cy: 21.5,
              r: 0.55,
              fill: "#ffffff",
              opacity: 0.9,
            },
          },
        ],
        loop: {
          values: { rotate: [26, 0, 0, 0, 26] },
          duration: 1.5,
          ease: ["easeIn", "linear", "linear", "easeOut"],
          times: [0, 0.25, 0.5, 0.75, 1],
          hoverValues: { rotate: [38, 0, 0, 0, 38] },
          hoverDuration: 1.1,
        },
        origin: "6.6px 6.6px",
      },
      {
        tag: "path",
        attrs: {
          d: "M10.2 6.6 L11.8 20 L13.4 6.6",
          stroke: "#94a3b8",
          strokeWidth: 0.45,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 11.8,
          cy: 22.4,
          r: 2.55,
          fill: "url(#ball)",
          stroke: "#1e293b",
          strokeWidth: 0.35,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 11, cy: 21.5, r: 0.55, fill: "#ffffff", opacity: 0.9 },
      },
      {
        tag: "path",
        attrs: {
          d: "M15.4 6.6 L17 20 L18.6 6.6",
          stroke: "#94a3b8",
          strokeWidth: 0.45,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 22.4,
          r: 2.55,
          fill: "url(#ball)",
          stroke: "#1e293b",
          strokeWidth: 0.35,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 16.2, cy: 21.5, r: 0.55, fill: "#ffffff", opacity: 0.9 },
      },
      {
        tag: "path",
        attrs: {
          d: "M20.6 6.6 L22.2 20 L23.8 6.6",
          stroke: "#94a3b8",
          strokeWidth: 0.45,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 22.2,
          cy: 22.4,
          r: 2.55,
          fill: "url(#ball)",
          stroke: "#1e293b",
          strokeWidth: 0.35,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 21.4, cy: 21.5, r: 0.55, fill: "#ffffff", opacity: 0.9 },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M25.8 6.6 L27.4 20 L29 6.6",
              stroke: "#94a3b8",
              strokeWidth: 0.45,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 27.4,
              cy: 22.4,
              r: 2.55,
              fill: "url(#ball)",
              stroke: "#1e293b",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 26.6,
              cy: 21.5,
              r: 0.55,
              fill: "#ffffff",
              opacity: 0.9,
            },
          },
        ],
        loop: {
          values: { rotate: [0, 0, -26, 0, 0] },
          duration: 1.5,
          ease: ["linear", "easeOut", "easeIn", "linear"],
          times: [0, 0.25, 0.5, 0.75, 1],
          hoverValues: { rotate: [0, 0, -38, 0, 0] },
          hoverDuration: 1.1,
        },
        origin: "27.4px 6.6px",
      },
    ],
  },
  pinball: {
    accent: "#f43f5e",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,63,94,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "ball", cx: "35%", cy: "30%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.35, stopColor: "#e2e8f0" } },
              { tag: "stop", attrs: { offset: 0.75, stopColor: "#64748b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e293b" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "bumper", cx: "45%", cy: "40%", r: "60%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fda4af" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#f43f5e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#9f1239" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "cap", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f59e0b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "flipper", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#cbd5e1" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M2.2 13 L3.8 11.4 L5.4 13 M2.2 16 L3.8 14.4 L5.4 16",
          stroke: "#22d3ee",
          strokeWidth: 0.9,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        loop: {
          values: { opacity: [0.3, 1, 0.3] },
          duration: 0.7,
          ease: "easeInOut",
          static: { opacity: 1 },
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M28.6 13 L30.2 11.4 L31.8 13 M28.6 16 L30.2 14.4 L31.8 16",
          stroke: "#22d3ee",
          strokeWidth: 0.9,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        loop: {
          values: { opacity: [0.3, 1, 0.3] },
          duration: 0.7,
          ease: "easeInOut",
          delay: 0.35,
          static: { opacity: 1 },
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 8.5,
              r: 6.6,
              fill: "#f43f5e",
              fillOpacity: 0.18,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 8.5,
              r: 5.4,
              fill: "url(#bumper)",
              stroke: "#881337",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 8.5,
              r: 3.8,
              stroke: "#fff1f2",
              strokeWidth: 1,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 8.5,
              r: 2.8,
              fill: "url(#cap)",
              stroke: "#b45309",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 6.8 L17.44 7.89 L18.62 7.97 L17.71 8.73 L18 9.88 L17 9.25 L16 9.88 L16.29 8.73 L15.38 7.97 L16.56 7.89 Z",
              fill: "#ffffff",
              opacity: 0.95,
            },
          },
        ],
        loop: {
          values: { scale: [1, 1, 1.18, 1, 1] },
          duration: 1.4,
          ease: "easeInOut",
          times: [0, 0.44, 0.5, 0.62, 1],
          hoverDuration: 0.8,
        },
        origin: "17px 8.5px",
      },
      {
        tag: "path",
        attrs: {
          d: "M18.48 15.21 L19.77 15.75 M17.61 16.08 L18.15 17.37 M16.39 16.08 L15.85 17.37 M15.52 15.21 L14.23 15.75 M15.52 13.99 L14.23 13.45 M16.39 13.12 L15.85 11.83 M17.61 13.12 L18.15 11.83 M18.48 13.99 L19.77 13.45",
          stroke: "#fde047",
          strokeWidth: 0.8,
          strokeLinecap: "round",
        },
        loop: {
          values: {
            opacity: [0, 0, 1, 0, 0],
            scale: [0.6, 0.6, 1.1, 1.4, 1.4],
          },
          duration: 1.4,
          ease: "easeInOut",
          times: [0, 0.46, 0.5, 0.6, 1],
          hoverDuration: 0.8,
        },
        origin: "17px 14.6px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M5.2 22.6 C4 22.6 3.4 23.6 3.4 24.6 C3.4 25.8 4.4 26.6 5.6 26.6 L14.2 28.3 C15 28.4 15.5 27.6 14.9 27 L6.6 23 C6.2 22.8 5.7 22.6 5.2 22.6 Z",
              fill: "url(#flipper)",
              stroke: "#dc2626",
              strokeWidth: 0.9,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 5.4, cy: 24.6, r: 0.7, fill: "#dc2626" },
          },
        ],
        loop: {
          values: { rotate: [0, -24, 0, 0] },
          duration: 1.4,
          ease: ["easeOut", "easeIn", "linear"],
          times: [0, 0.06, 0.22, 1],
          hoverDuration: 0.8,
        },
        origin: "5.4px 24.6px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M28.8 22.6C30 22.6 30.6 23.6 30.6 24.6C30.6 25.8 29.6 26.6 28.4 26.6L19.8 28.3C19 28.4 18.5 27.6 19.1 27L27.4 23C27.8 22.8 28.3 22.6 28.8 22.6Z",
              fill: "url(#flipper)",
              stroke: "#dc2626",
              strokeWidth: 0.9,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 28.6, cy: 24.6, r: 0.7, fill: "#dc2626" },
          },
        ],
        loop: {
          values: { rotate: [0, 24, 0, 0] },
          duration: 1.4,
          ease: ["easeOut", "easeIn", "linear"],
          times: [0, 0.06, 0.22, 1],
          hoverDuration: 0.8,
        },
        origin: "28.6px 24.6px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 23.2,
              r: 2.9,
              fill: "url(#ball)",
              stroke: "#1e293b",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 16.1, cy: 22.2, r: 0.75, fill: "#ffffff" },
          },
        ],
        loop: {
          values: { y: [0, -6.4, 0] },
          duration: 1.4,
          ease: ["easeOut", "easeIn"],
          times: [0, 0.5, 1],
          hoverDuration: 0.8,
        },
      },
    ],
  },
  yoyo: {
    accent: "#3b82f6",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(59,130,246,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "disc", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#bae6fd" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#3b82f6" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e3a8a" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "face", cx: "45%", cy: "40%", r: "65%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#dbeafe" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "string" },
            children: [
              { tag: "rect", attrs: { x: -10, y: 3.4, width: 54, height: 60 } },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 2.4, r: 1.3, stroke: "#b45309", strokeWidth: 0.9 },
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#string)" },
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "line",
                attrs: {
                  x1: 17,
                  y1: -16,
                  x2: 17,
                  y2: 17,
                  stroke: "#d97706",
                  strokeWidth: 0.8,
                },
              },
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "circle",
                    attrs: {
                      cx: 17,
                      cy: 17,
                      r: 8,
                      fill: "url(#disc)",
                      stroke: "#1e3a8a",
                      strokeWidth: 0.7,
                    },
                  },
                  {
                    tag: "circle",
                    attrs: {
                      cx: 17,
                      cy: 17,
                      r: 6.2,
                      stroke: "#1e3a8a",
                      strokeWidth: 0.6,
                      opacity: 0.35,
                    },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 17, cy: 17, r: 4.4, fill: "url(#face)" },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M17 13.2 C19.8 13.6 20.6 16.4 19 18.2 C17.6 19.6 15.4 19 15.2 17.2",
                      stroke: "#f59e0b",
                      strokeWidth: 1.1,
                      strokeLinecap: "round",
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M17 20.8 C14.2 20.4 13.4 17.6 15 15.8",
                      stroke: "#fb7185",
                      strokeWidth: 1.1,
                      strokeLinecap: "round",
                    },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 17, cy: 17, r: 1.1, fill: "#334155" },
                  },
                ],
                loop: {
                  values: { rotate: [0, 360] },
                  duration: 0.8,
                  ease: "linear",
                  hoverDuration: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M11.4 12.6 A7 7 0 0 1 15.4 9.6",
                  stroke: "#ffffff",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  opacity: 0.75,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 21.6,
                  cy: 11.8,
                  r: 0.7,
                  fill: "#ffffff",
                  opacity: 0.6,
                },
              },
            ],
            loop: {
              values: { y: [-4, 6, -4] },
              duration: 1.6,
              ease: ["easeIn", "easeOut"],
              times: [0, 0.5, 1],
              static: { y: 1 },
              hoverValues: { y: [-4, 9, -4] },
              hoverDuration: 0.9,
            },
          },
        ],
      },
    ],
  },
  typewriter: {
    accent: "#2dd4bf",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(45,212,191,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "body", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#99f6e4" } },
              { tag: "stop", attrs: { offset: 0.35, stopColor: "#2dd4bf" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f766e" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "roller", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#475569" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f172a" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "paper", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f1f5f9" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "key", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e7e5e4" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 10,
              y: 1.5,
              width: 14,
              height: 12,
              rx: 0.8,
              fill: "url(#paper)",
              stroke: "#94a3b8",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12 4 H22 M12 6.2 H20.5 M12 8.4 H21.5",
              stroke: "#94a3b8",
              strokeWidth: 0.7,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12 10.6 H18.2",
              stroke: "#334155",
              strokeWidth: 0.8,
              strokeLinecap: "round",
            },
            loop: {
              values: { scaleX: [0.08, 0.3, 0.55, 0.8, 1, 0.08] },
              duration: 3,
              ease: "easeOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              static: { scaleX: 0.55 },
              hoverDuration: 1.4,
            },
            origin: "12px 10.6px",
          },
          {
            tag: "rect",
            attrs: {
              x: 6,
              y: 11.6,
              width: 22,
              height: 3.6,
              rx: 1.8,
              fill: "url(#roller)",
              stroke: "#020617",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M7.4 12.5 H26.6",
              stroke: "#ffffff",
              strokeWidth: 0.6,
              strokeLinecap: "round",
              opacity: 0.3,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 5.4,
              cy: 13.4,
              r: 2,
              fill: "#e2e8f0",
              stroke: "#475569",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 28.6,
              cy: 13.4,
              r: 2,
              fill: "#e2e8f0",
              stroke: "#475569",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 5.4, cy: 13.4, r: 0.7, fill: "#94a3b8" },
          },
          {
            tag: "circle",
            attrs: { cx: 28.6, cy: 13.4, r: 0.7, fill: "#94a3b8" },
          },
          {
            tag: "path",
            attrs: {
              d: "M6.2 11.2 L3.4 8.6",
              stroke: "#cbd5e1",
              strokeWidth: 1,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 3.1,
              cy: 8.3,
              r: 0.8,
              fill: "#e2e8f0",
              stroke: "#475569",
              strokeWidth: 0.3,
            },
          },
        ],
        loop: {
          values: { x: [3, 1.5, 0, -1.5, -3, 3] },
          duration: 3,
          ease: ["easeOut", "easeOut", "easeOut", "easeOut", "easeInOut"],
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          static: { x: 0 },
          hoverDuration: 1.4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M5.6 16 H28.4 L31.4 27.2 C31.6 28.2 30.9 29 29.9 29 H4.1 C3.1 29 2.4 28.2 2.6 27.2 Z",
          fill: "url(#body)",
          stroke: "#134e4a",
          strokeWidth: 0.8,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 5,
          y: 15.4,
          width: 24,
          height: 1.6,
          rx: 0.8,
          fill: "#0f766e",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M15.6 15.4 L17 13.9 L18.4 15.4 Z",
          fill: "#e2e8f0",
          stroke: "#475569",
          strokeWidth: 0.3,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M6.8 17.8 H27.2",
          stroke: "#ffffff",
          strokeWidth: 0.7,
          strokeLinecap: "round",
          opacity: 0.45,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 8.6,
          cy: 20.4,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 12.8,
          cy: 20.4,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
        loop: {
          values: { y: [0, 0.8, 0, 0] },
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 1],
          hoverDuration: 0.3,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 20.4,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 21.2,
          cy: 20.4,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
        loop: {
          values: { y: [0, 0.8, 0, 0] },
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 1],
          delay: 0.2,
          hoverDuration: 0.3,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 25.4,
          cy: 20.4,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 6.6,
          cy: 24,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 10.8,
          cy: 24,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 15,
          cy: 24,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
        loop: {
          values: { y: [0, 0.8, 0, 0] },
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 1],
          delay: 0.4,
          hoverDuration: 0.3,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 19.2,
          cy: 24,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 23.4,
          cy: 24,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 27.6,
          cy: 24,
          r: 1.35,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 10.4,
          y: 26.3,
          width: 13.2,
          height: 1.6,
          rx: 0.8,
          fill: "url(#key)",
          stroke: "#1f2937",
          strokeWidth: 0.5,
        },
      },
    ],
  },
  dial: {
    accent: "#e11d48",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(225,29,72,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "plate", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fffbeb" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e7e5e4" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "wheel", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fb7185" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#e11d48" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#881337" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "center", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e7e5e4" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "chrome", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#475569" } },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 15,
          fill: "url(#chrome)",
          stroke: "#334155",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 17, r: 13.4, fill: "url(#plate)" },
      },
      {
        tag: "path",
        attrs: {
          d: "M25.24 13.82 H26.24 M22.6 9.98 H23.6 M18.43 7.9 H19.43 M13.78 8.11 H14.78 M9.81 10.54 H10.81 M7.52 14.59 H8.52 M7.48 19.25 H8.48 M9.7 23.34 H10.7 M13.63 25.84 H14.63 M18.27 26.13 H19.27",
          stroke: "#7f1d1d",
          strokeWidth: 0.7,
          strokeLinecap: "round",
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M4 17 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 Z M23.59 13.82 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M20.95 9.98 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.78 7.9 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M12.13 8.11 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.16 10.54 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.87 14.59 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.83 19.25 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.05 23.34 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M11.98 25.84 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.62 26.13 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z",
              fill: "url(#wheel)",
              fillRule: "evenodd",
              stroke: "#881337",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M23.59 13.82 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M20.95 9.98 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.78 7.9 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M12.13 8.11 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.16 10.54 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.87 14.59 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.83 19.25 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.05 23.34 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M11.98 25.84 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.62 26.13 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z",
              stroke: "#fecdd3",
              strokeWidth: 0.35,
              opacity: 0.6,
            },
          },
        ],
        loop: {
          values: { rotate: [0, 0, 150, 150, -6, 0] },
          duration: 3.2,
          ease: ["linear", "easeInOut", "linear", "easeOut", "easeInOut"],
          times: [0, 0.12, 0.5, 0.58, 0.9, 1],
          hoverValues: { rotate: [0, 0, 225, 225, -8, 0] },
          hoverDuration: 2.2,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M7.2 10.2 A12 12 0 0 1 14.4 5.3",
          stroke: "#ffffff",
          strokeWidth: 1.2,
          strokeLinecap: "round",
          opacity: 0.55,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 4.6,
          fill: "url(#center)",
          stroke: "#881337",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M14.9 16 C15.6 15.1 16.3 14.8 17 14.8 C17.7 14.8 18.4 15.1 19.1 16 L18.5 16.8 L17.8 16.4 V15.8 C17.3 15.7 16.7 15.7 16.2 15.8 V16.4 L15.5 16.8 Z M15.6 17.6 H18.4 L17.9 19.2 H16.1 Z",
          fill: "#e11d48",
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 23.53,
          y1: 25.35,
          x2: 27.56,
          y2: 27.93,
          stroke: "#334155",
          strokeWidth: 2.4,
          strokeLinecap: "round",
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 23.53,
          y1: 25.35,
          x2: 27.56,
          y2: 27.93,
          stroke: "url(#chrome)",
          strokeWidth: 1.5,
          strokeLinecap: "round",
        },
      },
    ],
  },
  "gear-train": {
    accent: "#f59e0b",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "gold", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.55, stopColor: "#fbbf24" } },
              { tag: "stop", attrs: { offset: 0.85, stopColor: "#d97706" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#92400e" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "copper", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffedd5" } },
              { tag: "stop", attrs: { offset: 0.55, stopColor: "#fb923c" } },
              { tag: "stop", attrs: { offset: 0.85, stopColor: "#c2410c" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#7c2d12" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "hub", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f1f5f9" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#334155" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M19.55 21.4 L21.65 22.28 L21.27 23.67 L19.02 23.38 L18.66 24.1 L18.22 24.77 L19.6 26.57 L18.57 27.6 L16.77 26.22 L16.1 26.66 L15.38 27.02 L15.67 29.27 L14.28 29.65 L13.4 27.55 L12.6 27.6 L11.8 27.55 L10.92 29.65 L9.53 29.27 L9.82 27.02 L9.1 26.66 L8.43 26.22 L6.63 27.6 L5.6 26.57 L6.98 24.77 L6.54 24.1 L6.18 23.38 L3.93 23.67 L3.55 22.28 L5.65 21.4 L5.6 20.6 L5.65 19.8 L3.55 18.92 L3.93 17.53 L6.18 17.82 L6.54 17.1 L6.98 16.43 L5.6 14.63 L6.63 13.6 L8.43 14.98 L9.1 14.54 L9.82 14.18 L9.53 11.93 L10.92 11.55 L11.8 13.65 L12.6 13.6 L13.4 13.65 L14.28 11.55 L15.67 11.93 L15.38 14.18 L16.1 14.54 L16.77 14.98 L18.57 13.6 L19.6 14.63 L18.22 16.43 L18.66 17.1 L19.02 17.82 L21.27 17.53 L21.65 18.92 L19.55 19.8 L19.6 20.6 Z M11.35 16.2 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M15.53 19.24 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M13.94 24.16 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M8.76 24.16 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M7.17 19.24 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z",
              fill: "url(#gold)",
              fillRule: "evenodd",
              stroke: "#78350f",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 12.6,
              cy: 20.6,
              r: 6,
              stroke: "#92400e",
              strokeWidth: 0.5,
              opacity: 0.45,
            },
          },
        ],
        loop: {
          values: { rotate: [0, 360] },
          duration: 8,
          ease: "linear",
          hoverDuration: 2.4,
        },
        origin: "12.6px 20.6px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M26.33 11.91 L28.3 12.92 L27.71 14.34 L25.6 13.66 L25.12 14.24 L24.54 14.72 L25.22 16.83 L23.8 17.42 L22.79 15.45 L22.04 15.51 L21.29 15.45 L20.28 17.42 L18.86 16.83 L19.54 14.72 L18.96 14.24 L18.48 13.66 L16.37 14.34 L15.78 12.92 L17.75 11.91 L17.69 11.16 L17.75 10.41 L15.78 9.4 L16.37 7.98 L18.48 8.66 L18.96 8.08 L19.54 7.6 L18.86 5.49 L20.28 4.9 L21.29 6.87 L22.04 6.81 L22.79 6.87 L23.8 4.9 L25.22 5.49 L24.54 7.6 L25.12 8.08 L25.6 8.66 L27.71 7.98 L28.3 9.4 L26.33 10.41 L26.39 11.16 Z M23.1 9.25 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z M23.1 13.07 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z M19.28 13.07 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z M19.28 9.25 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z",
              fill: "url(#copper)",
              fillRule: "evenodd",
              stroke: "#7c2d12",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
        ],
        loop: {
          values: { rotate: [0, -540] },
          duration: 8,
          ease: "linear",
          hoverDuration: 2.4,
        },
        origin: "22.04px 11.16px",
      },
      {
        tag: "path",
        attrs: {
          d: "M5.18 17.9 A7.9 7.9 0 0 1 10.56 12.97",
          stroke: "#ffffff",
          strokeWidth: 0.9,
          strokeLinecap: "round",
          opacity: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17.25 9.42 A5.1 5.1 0 0 1 20.72 6.23",
          stroke: "#ffffff",
          strokeWidth: 0.8,
          strokeLinecap: "round",
          opacity: 0.5,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 12.6,
          cy: 20.6,
          r: 1.9,
          fill: "url(#hub)",
          stroke: "#1e293b",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 22.04,
          cy: 11.16,
          r: 1.3,
          fill: "url(#hub)",
          stroke: "#1e293b",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M18.6 13 Q18.6 14.6 20.2 14.6 Q18.6 14.6 18.6 16.2 Q18.6 14.6 17 14.6 Q18.6 14.6 18.6 13 Z",
          fill: "#fef9c3",
        },
        loop: {
          values: { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] },
          duration: 1.2,
          ease: "easeInOut",
          static: { opacity: 1, scale: 1 },
          hoverDuration: 0.5,
        },
        origin: "18.6px 14.6px",
      },
    ],
  },
  caliper: {
    accent: "#fb923c",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(251,146,60,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "steel", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#64748b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "slider", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#64748b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e293b" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "bead", cx: "38%", cy: "32%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fed7aa" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fb923c" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#c2410c" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "wheel", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 10.1,
              cy: 23.4,
              r: 3,
              fill: "url(#bead)",
              stroke: "#9a3412",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 9.1,
              cy: 22.4,
              r: 0.85,
              fill: "#ffffff",
              opacity: 0.9,
            },
          },
        ],
        loop: {
          values: { scaleX: [1, 1, 0.94, 0.94, 1] },
          duration: 2.8,
          ease: "easeInOut",
          times: [0, 0.2, 0.45, 0.75, 1],
          hoverValues: { scaleX: [1, 1, 0.86, 0.86, 1] },
          hoverDuration: 1.6,
        },
        origin: "10.1px 23.4px",
      },
      {
        tag: "rect",
        attrs: {
          x: 2,
          y: 8.6,
          width: 30,
          height: 4.6,
          rx: 1,
          fill: "url(#steel)",
          stroke: "#334155",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8.4 8.6 V10.6 M9.52 8.6 V9.7 M10.64 8.6 V9.7 M11.76 8.6 V9.7 M12.88 8.6 V9.7 M14 8.6 V10.6 M15.12 8.6 V9.7 M16.24 8.6 V9.7 M17.36 8.6 V9.7 M18.48 8.6 V9.7 M19.6 8.6 V10.6 M20.72 8.6 V9.7 M21.84 8.6 V9.7 M22.96 8.6 V9.7 M24.08 8.6 V9.7 M25.2 8.6 V10.6 M26.32 8.6 V9.7 M27.44 8.6 V9.7 M28.56 8.6 V9.7 M29.68 8.6 V9.7 M30.8 8.6 V10.6",
          stroke: "#334155",
          strokeWidth: 0.35,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M3 12.2 H31",
          stroke: "#ffffff",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          opacity: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M2 13 V24 C2 26 4 28.6 6.8 30.6 L7.1 30.6 V13 Z",
          fill: "url(#steel)",
          stroke: "#334155",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M3 8.6 V4.6 C3 4 3.6 3.6 4.2 3.8 L6.2 5 V8.6 Z",
          fill: "url(#steel)",
          stroke: "#334155",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M13.1 13 V30.6 L13.4 30.6 C16.2 28.6 18.2 26 18.2 24 V13 Z",
              fill: "url(#steel)",
              stroke: "#334155",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13.1 8.6 V5 L15 3.8 C15.6 3.6 16.2 4 16.2 4.6 V8.6 Z",
              fill: "url(#steel)",
              stroke: "#334155",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 12.4,
              y: 7.4,
              width: 10,
              height: 7.4,
              rx: 1.4,
              fill: "url(#slider)",
              stroke: "#0f172a",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 14,
              y: 9.1,
              width: 6.8,
              height: 2.6,
              rx: 0.6,
              fill: "#e2e8f0",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M15 9.1 V10.3 M16.2 9.1 V10 M17.4 9.1 V10.3 M18.6 9.1 V10 M19.8 9.1 V10.3",
              stroke: "#334155",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17.4,
              cy: 16.2,
              r: 1.5,
              fill: "url(#wheel)",
              stroke: "#78350f",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 21.2,
              cy: 8.2,
              r: 0.75,
              fill: "#cbd5e1",
              stroke: "#334155",
              strokeWidth: 0.3,
            },
          },
        ],
        loop: {
          values: { x: [3, 3, -0.3, -0.3, 3] },
          duration: 2.8,
          ease: "easeInOut",
          times: [0, 0.2, 0.45, 0.75, 1],
          hoverValues: { x: [3, 3, -0.8, -0.8, 3] },
          hoverDuration: 1.6,
        },
      },
    ],
  },
  "drafting-compass": {
    accent: "#38bdf8",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "steel", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#94a3b8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#475569" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "hinge", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#92400e" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "pencil", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde047" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ca8a04" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: {
              id: "ink",
              x1: 24.5,
              y1: 29.5,
              x2: 20.99,
              y2: 19.86,
              gradientUnits: "userSpaceOnUse",
            },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#38bdf8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#a78bfa" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M24.5 29.5 A15 15 0 0 0 20.99 19.86",
          stroke: "url(#ink)",
          strokeWidth: 1.4,
          strokeLinecap: "round",
          strokeDasharray: "10.47 40",
        },
        loop: {
          values: { strokeDashoffset: [11.47, 3.93, 3.93], opacity: [1, 1, 0] },
          duration: 2.8,
          ease: "easeInOut",
          times: [0, 0.6, 1],
          static: { strokeDashoffset: 5.76, opacity: 1 },
          hoverValues: { strokeDashoffset: [11.47, 0, 0], opacity: [1, 1, 0] },
          hoverDuration: 1.8,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M15.35 6.68 L9.73 26.72 L10.87 27.08 L17.45 7.32 Z",
              fill: "url(#steel)",
              stroke: "#334155",
              strokeWidth: 0.5,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 10.3,
              y1: 26.9,
              x2: 9.5,
              y2: 29.6,
              stroke: "#1e293b",
              strokeWidth: 0.7,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M16.55 7.31 L21.53 22.6 L22.87 22.2 L18.65 6.69 Z",
              fill: "url(#steel)",
              stroke: "#334155",
              strokeWidth: 0.5,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M20.99 21.44 L22.69 27.14 L24.31 26.66 L22.61 20.96 Z",
              fill: "url(#pencil)",
              stroke: "#a16207",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M22.68 27.15 L24.32 26.65 L24.5 29.5 Z",
              fill: "#fcd9a8",
              stroke: "#a16207",
              strokeWidth: 0.3,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M23.95 28.2 L24.5 29.5 L24.3 28.1 Z",
              fill: "#334155",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 22.1,
              cy: 21.6,
              r: 0.8,
              fill: "#e2e8f0",
              stroke: "#334155",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 13.6,
              y1: 18,
              x2: 20.2,
              y2: 18,
              stroke: "#64748b",
              strokeWidth: 0.7,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 16.9,
              cy: 18,
              r: 0.95,
              fill: "url(#hinge)",
              stroke: "#78350f",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 15.9,
              y: 0.8,
              width: 2.2,
              height: 4.4,
              rx: 1,
              fill: "#1e293b",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M16.1 2 H17.9 M16.1 3 H17.9 M16.1 4 H17.9",
              stroke: "#64748b",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 6.6,
              r: 2.6,
              fill: "url(#hinge)",
              stroke: "#78350f",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 17, cy: 6.6, r: 0.8, fill: "#fef3c7" },
          },
        ],
        loop: {
          values: { rotate: [0, -25, 0] },
          duration: 2.8,
          ease: "easeInOut",
          times: [0, 0.6, 1],
          static: { rotate: -18 },
          hoverValues: { rotate: [0, -40, 0] },
          hoverDuration: 1.8,
        },
        origin: "9.5px 29.5px",
      },
    ],
  },
  oscilloscope: {
    accent: "#4ade80",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(74,222,128,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "case", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#6b7280" } },
              { tag: "stop", attrs: { offset: 0.15, stopColor: "#4b5563" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1f2937" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "screen", cx: "50%", cy: "45%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#14532d" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#052e16" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#022c22" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "knob", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#64748b" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "crt" },
            children: [
              {
                tag: "rect",
                attrs: { x: 4.6, y: 7.6, width: 18.8, height: 15.8, rx: 2.4 },
              },
            ],
          },
        ],
      },
      {
        tag: "rect",
        attrs: {
          x: 5,
          y: 28.4,
          width: 4,
          height: 1.8,
          rx: 0.6,
          fill: "#111827",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 25,
          y: 28.4,
          width: 4,
          height: 1.8,
          rx: 0.6,
          fill: "#111827",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 2,
          y: 5,
          width: 30,
          height: 24,
          rx: 3.4,
          fill: "url(#case)",
          stroke: "#111827",
          strokeWidth: 0.8,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M4.6 6.3 H29.4",
          stroke: "#ffffff",
          strokeWidth: 0.7,
          strokeLinecap: "round",
          opacity: 0.3,
        },
      },
      {
        tag: "rect",
        attrs: { x: 4, y: 7, width: 20, height: 17, rx: 3, fill: "#0b0f19" },
      },
      {
        tag: "rect",
        attrs: {
          x: 4.6,
          y: 7.6,
          width: 18.8,
          height: 15.8,
          rx: 2.4,
          fill: "url(#screen)",
        },
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#crt)" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M9.3 7.6 V23.4 M14 7.6 V23.4 M18.7 7.6 V23.4 M4.6 11.6 H23.4 M4.6 15.5 H23.4 M4.6 19.4 H23.4",
              stroke: "#4ade80",
              strokeWidth: 0.4,
              opacity: 0.2,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "path",
                    attrs: {
                      d: "M4 15.5 q2 -6.8 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0",
                      stroke: "#22c55e",
                      strokeWidth: 3,
                      strokeLinecap: "round",
                      opacity: 0.3,
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M4 15.5 q2 -6.8 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0",
                      stroke: "#bbf7d0",
                      strokeWidth: 1.1,
                      strokeLinecap: "round",
                    },
                  },
                ],
                loop: {
                  values: { x: [0, -8] },
                  duration: 1.2,
                  ease: "linear",
                  hoverDuration: 0.6,
                },
              },
            ],
            hover: { scaleY: 1.5 },
            origin: "14px 15.5px",
          },
          {
            tag: "rect",
            attrs: {
              x: 4.6,
              y: 7.6,
              width: 1.6,
              height: 15.8,
              fill: "#4ade80",
              opacity: 0.14,
            },
            loop: {
              values: { x: [0, 17.2] },
              duration: 2.4,
              ease: "linear",
              hoverDuration: 1.2,
            },
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M6.2 9.6 C9 8.8 12 8.6 15 8.8",
          stroke: "#ffffff",
          strokeWidth: 1.2,
          strokeLinecap: "round",
          opacity: 0.15,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 27.6,
          cy: 11.4,
          r: 2,
          fill: "url(#knob)",
          stroke: "#0f172a",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 27.6,
          y1: 11.4,
          x2: 27.6,
          y2: 9.9,
          stroke: "#0f172a",
          strokeWidth: 0.6,
          strokeLinecap: "round",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 27.6,
          cy: 17.2,
          r: 2,
          fill: "url(#knob)",
          stroke: "#0f172a",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 27.6,
          y1: 17.2,
          x2: 28.7,
          y2: 16.1,
          stroke: "#0f172a",
          strokeWidth: 0.6,
          strokeLinecap: "round",
        },
      },
      {
        tag: "circle",
        attrs: { cx: 27.6, cy: 22.4, r: 1.8, fill: "#ef4444", opacity: 0.25 },
      },
      {
        tag: "circle",
        attrs: { cx: 27.6, cy: 22.4, r: 0.9, fill: "#f87171" },
        loop: {
          values: { opacity: [1, 0.3, 1] },
          duration: 1.2,
          ease: "easeInOut",
          hoverDuration: 0.5,
        },
      },
    ],
  },
  packet: {
    accent: "#22d3ee",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,211,238,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: {
              id: "fiber",
              x1: 5,
              y1: 26.5,
              x2: 29,
              y2: 7.5,
              gradientUnits: "userSpaceOnUse",
            },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#22d3ee" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#a78bfa" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "top", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ecfeff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#67e8f9" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "left", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#38bdf8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#2563eb" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "right", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#6366f1" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#3730a3" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "nodeA", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ecfeff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#22d3ee" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0e7490" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "nodeB", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f5f3ff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#a78bfa" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#6d28d9" } },
            ],
          },
        ],
      },
      {
        tag: "line",
        attrs: {
          x1: 5,
          y1: 26.5,
          x2: 29,
          y2: 7.5,
          stroke: "url(#fiber)",
          strokeWidth: 2.6,
          strokeLinecap: "round",
          opacity: 0.25,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 5,
          y1: 26.5,
          x2: 29,
          y2: 7.5,
          stroke: "url(#fiber)",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeDasharray: "1.2 2",
        },
        loop: {
          values: { strokeDashoffset: [0, -6.4] },
          duration: 0.8,
          ease: "linear",
          hoverDuration: 0.4,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 5, cy: 26.5, r: 3.6, stroke: "#22d3ee", strokeWidth: 1 },
        loop: {
          values: { scale: [1, 2.1, 2.1], opacity: [0.9, 0, 0] },
          duration: 1.8,
          ease: "easeInOut",
          times: [0, 0.28, 1],
          static: { scale: 1, opacity: 0 },
          hoverDuration: 0.9,
        },
        origin: "5px 26.5px",
      },
      {
        tag: "circle",
        attrs: { cx: 29, cy: 7.5, r: 3.6, stroke: "#a78bfa", strokeWidth: 1 },
        loop: {
          values: { scale: [1, 1, 2.1], opacity: [0, 0.9, 0] },
          duration: 1.8,
          ease: "easeInOut",
          times: [0, 0.72, 1],
          static: { scale: 1, opacity: 0 },
          hoverDuration: 0.9,
        },
        origin: "29px 7.5px",
      },
      {
        tag: "circle",
        attrs: {
          cx: 5,
          cy: 26.5,
          r: 3.6,
          fill: "url(#nodeA)",
          stroke: "#0e7490",
          strokeWidth: 0.6,
        },
      },
      { tag: "circle", attrs: { cx: 5, cy: 26.5, r: 1.3, fill: "#083344" } },
      {
        tag: "circle",
        attrs: {
          cx: 29,
          cy: 7.5,
          r: 3.6,
          fill: "url(#nodeB)",
          stroke: "#5b21b6",
          strokeWidth: 0.6,
        },
      },
      { tag: "circle", attrs: { cx: 29, cy: 7.5, r: 1.3, fill: "#2e1065" } },
      {
        tag: "path",
        attrs: {
          d: "M17 15.6 L18.4 17 L17 18.4 L15.6 17 Z",
          fill: "#67e8f9",
          opacity: 0.3,
        },
        loop: {
          values: {
            x: [-12, -12, 12, 12, -12],
            y: [9.5, 9.5, -9.5, -9.5, 9.5],
            opacity: [0, 1, 1, 0, 0],
          },
          duration: 1.8,
          ease: ["easeOut", "easeInOut", "easeIn", "linear"],
          times: [0, 0.1, 0.72, 0.8, 1],
          delay: 0.16,
          static: { x: -4.6, y: 3.6, opacity: 0.3 },
          hoverDuration: 0.9,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17 15 L19 17 L17 19 L15 17 Z",
          fill: "#67e8f9",
          opacity: 0.55,
        },
        loop: {
          values: {
            x: [-12, -12, 12, 12, -12],
            y: [9.5, 9.5, -9.5, -9.5, 9.5],
            opacity: [0, 1, 1, 0, 0],
          },
          duration: 1.8,
          ease: ["easeOut", "easeInOut", "easeIn", "linear"],
          times: [0, 0.1, 0.72, 0.8, 1],
          delay: 0.08,
          static: { x: -2.4, y: 1.9, opacity: 0.55 },
          hoverDuration: 0.9,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M17 13.4 L20.6 15.2 L17 17 L13.4 15.2 Z",
              fill: "url(#top)",
              stroke: "#1e1b4b",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13.4 15.2 L17 17 V21 L13.4 19.2 Z",
              fill: "url(#left)",
              stroke: "#1e1b4b",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M20.6 15.2 V19.2 L17 21 V17 Z",
              fill: "url(#right)",
              stroke: "#1e1b4b",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M14.4 17.2 L16 18 M14.4 18.6 L15.3 19.05",
              stroke: "#ffffff",
              strokeWidth: 0.5,
              strokeLinecap: "round",
              opacity: 0.8,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M18 18.6 L19.6 17.8",
              stroke: "#a5b4fc",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M14.6 15.2 L17 14",
              stroke: "#ffffff",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
        ],
        loop: {
          values: {
            x: [-12, -12, 12, 12, -12],
            y: [9.5, 9.5, -9.5, -9.5, 9.5],
            opacity: [0, 1, 1, 0, 0],
          },
          duration: 1.8,
          ease: ["easeOut", "easeInOut", "easeIn", "linear"],
          times: [0, 0.1, 0.72, 0.8, 1],
          static: { x: 0, y: 0, opacity: 1 },
          hoverDuration: 0.9,
        },
      },
    ],
  },
  seismograph: {
    accent: "#ef4444",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.3))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "drum", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#94a3b8" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "cap", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#334155" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#64748b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "base", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#92400e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#451a03" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "arm", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f1f5f9" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#64748b" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "paper" },
            children: [
              { tag: "rect", attrs: { x: 5, y: 11, width: 20, height: 13 } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 2,
              y: 25.2,
              width: 30,
              height: 4.6,
              rx: 1.6,
              fill: "url(#base)",
              stroke: "#292524",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M3.6 26.3 H30.4",
              stroke: "#fde68a",
              strokeWidth: 0.5,
              strokeLinecap: "round",
              opacity: 0.4,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 3.6,
              y: 15,
              width: 1.6,
              height: 10.4,
              rx: 0.6,
              fill: "#475569",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 24.8,
              y: 15,
              width: 1.6,
              height: 10.4,
              rx: 0.6,
              fill: "#475569",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 5,
              y: 11,
              width: 20,
              height: 13,
              rx: 2,
              fill: "url(#drum)",
              stroke: "#64748b",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#paper)" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M5 13.6 H25 M5 16 H25 M5 19.2 H25 M5 21.6 H25",
                  stroke: "#93c5fd",
                  strokeWidth: 0.3,
                  opacity: 0.5,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M5 17.6 L8 17.6 L8.6 16.9 L9.2 18.2 L9.8 17.6 L12 17.6 L12.6 14.2 L13.3 21.4 L14 13 L14.7 20.8 L15.4 15.6 L16.1 18.8 L16.8 17 L17.5 17.6 L25 17.6 L25 17.6 L28 17.6 L28.6 16.9 L29.2 18.2 L29.8 17.6 L32 17.6 L32.6 14.2 L33.3 21.4 L34 13 L34.7 20.8 L35.4 15.6 L36.1 18.8 L36.8 17 L37.5 17.6 L45 17.6",
                  stroke: "#ef4444",
                  strokeWidth: 0.8,
                  strokeLinejoin: "round",
                  strokeLinecap: "round",
                },
                loop: {
                  values: { x: [0, -20] },
                  duration: 3,
                  ease: "linear",
                  hoverDuration: 1.2,
                },
              },
            ],
          },
          {
            tag: "ellipse",
            attrs: { cx: 5, cy: 17.5, rx: 1.5, ry: 6.5, fill: "url(#cap)" },
          },
          {
            tag: "ellipse",
            attrs: { cx: 25, cy: 17.5, rx: 1.5, ry: 6.5, fill: "url(#cap)" },
          },
          {
            tag: "rect",
            attrs: {
              x: 28.6,
              y: 4.6,
              width: 1.8,
              height: 21,
              rx: 0.8,
              fill: "url(#cap)",
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "line",
                attrs: {
                  x1: 29.5,
                  y1: 6.4,
                  x2: 18.2,
                  y2: 16.6,
                  stroke: "url(#arm)",
                  strokeWidth: 1.1,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 23.4,
                  cy: 11.7,
                  r: 1.5,
                  fill: "#475569",
                  stroke: "#1e293b",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18.9 15.5 L17.2 17.7 L19.6 16.6 Z",
                  fill: "#ef4444",
                  stroke: "#7f1d1d",
                  strokeWidth: 0.4,
                  strokeLinejoin: "round",
                },
              },
            ],
            loop: {
              values: { rotate: [0, 1.6, -1.6, 1.1, 0] },
              duration: 0.5,
              ease: "easeInOut",
              hoverValues: { rotate: [0, 5, -5, 4, 0] },
              hoverDuration: 0.25,
            },
            origin: "29.5px 6.4px",
          },
          {
            tag: "circle",
            attrs: {
              cx: 29.5,
              cy: 6.4,
              r: 1.2,
              fill: "#e2e8f0",
              stroke: "#334155",
              strokeWidth: 0.4,
            },
          },
        ],
        loop: {
          values: { x: [0, 0.15, -0.15, 0.1, 0] },
          duration: 0.6,
          ease: "easeInOut",
          hoverValues: { x: [0, -0.9, 0.9, -0.7, 0] },
          hoverDuration: 0.3,
        },
      },
    ],
  },
  kaleidoscope: {
    accent: "#a855f7",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(168,85,247,0.5))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "bg", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#312e81" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#1e1b4b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f0a2e" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "rim", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "k1", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fda4af" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e11d48" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "k2", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef08a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f59e0b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "k3", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#a5f3fc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0891b2" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "k4", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#d8b4fe" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#7c3aed" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "core", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f472b6" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "lens" },
            children: [{ tag: "circle", attrs: { cx: 17, cy: 17, r: 13 } }],
          },
        ],
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 14.6,
          fill: "url(#rim)",
          stroke: "#78350f",
          strokeWidth: 0.6,
        },
      },
      { tag: "circle", attrs: { cx: 17, cy: 17, r: 13, fill: "url(#bg)" } },
      {
        tag: "g",
        attrs: { clipPath: "url(#lens)" },
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z",
                  fill: "url(#k1)",
                  transform: "rotate(0 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z",
                  fill: "url(#k3)",
                  transform: "rotate(60 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z",
                  fill: "url(#k1)",
                  transform: "rotate(120 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z",
                  fill: "url(#k3)",
                  transform: "rotate(180 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z",
                  fill: "url(#k1)",
                  transform: "rotate(240 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z",
                  fill: "url(#k3)",
                  transform: "rotate(300 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z",
                  fill: "url(#k2)",
                  transform: "rotate(30 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z",
                  fill: "url(#k2)",
                  transform: "rotate(90 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z",
                  fill: "url(#k2)",
                  transform: "rotate(150 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z",
                  fill: "url(#k2)",
                  transform: "rotate(210 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z",
                  fill: "url(#k2)",
                  transform: "rotate(270 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z",
                  fill: "url(#k2)",
                  transform: "rotate(330 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M28.14 20.13 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M25.01 25.56 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M19.58 28.69 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M13.32 28.69 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M7.89 25.56 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M4.76 20.13 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M4.76 13.87 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M7.89 8.44 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M13.32 5.31 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M19.58 5.31 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M25.01 8.44 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M28.14 13.87 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z",
                  fill: "#fef9c3",
                },
              },
            ],
            loop: {
              values: { rotate: [0, 360] },
              duration: 16,
              ease: "linear",
              hoverDuration: 5,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z",
                  fill: "url(#k2)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                  strokeOpacity: 0.6,
                  transform: "rotate(30 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z",
                  fill: "url(#k4)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                  strokeOpacity: 0.6,
                  transform: "rotate(90 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z",
                  fill: "url(#k2)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                  strokeOpacity: 0.6,
                  transform: "rotate(150 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z",
                  fill: "url(#k4)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                  strokeOpacity: 0.6,
                  transform: "rotate(210 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z",
                  fill: "url(#k2)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                  strokeOpacity: 0.6,
                  transform: "rotate(270 17 17)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z",
                  fill: "url(#k4)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                  strokeOpacity: 0.6,
                  transform: "rotate(330 17 17)",
                },
              },
            ],
            loop: {
              values: { rotate: [0, -360] },
              duration: 10,
              ease: "linear",
              hoverDuration: 3.4,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 12.6 L17.95 15.35 L20.81 14.8 L18.9 17 L20.81 19.2 L17.95 18.65 L17 21.4 L16.05 18.65 L13.19 19.2 L15.1 17 L13.19 14.8 L16.05 15.35 Z",
                  fill: "url(#core)",
                  stroke: "#ffffff",
                  strokeWidth: 0.3,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 17, cy: 17, r: 1.5, fill: "#ffffff" },
              },
            ],
            loop: {
              values: { rotate: [0, 60], scale: [1, 1.14, 1] },
              duration: 2.4,
              ease: "easeInOut",
              hoverDuration: 1,
            },
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M7.2 11 A11 11 0 0 1 12 6.2",
          stroke: "#ffffff",
          strokeWidth: 1.4,
          strokeLinecap: "round",
          opacity: 0.3,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 13,
          stroke: "#fef3c7",
          strokeWidth: 0.4,
          opacity: 0.5,
        },
      },
    ],
  },
  zen: {
    accent: "#22c55e",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.25))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "s1", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#94a3b8" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#475569" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e293b" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "s2", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#e7e5e4" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#a8a29e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#57534e" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "s3", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#64748b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#334155" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "s4", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fafaf9" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#d6d3d1" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#78716c" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "leaf", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#86efac" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#16a34a" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "petal", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fce7f3" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f472b6" } },
            ],
          },
        ],
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 29.6,
          rx: 9,
          ry: 1.2,
          fill: "#38bdf8",
          opacity: 0.2,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 29.6,
          rx: 12,
          ry: 2,
          stroke: "#38bdf8",
          strokeWidth: 0.7,
        },
        loop: {
          values: { scale: [0.5, 1.1], opacity: [0.8, 0] },
          duration: 3.2,
          ease: "easeOut",
          static: { scale: 0.8, opacity: 0.45 },
          hoverDuration: 1.6,
        },
        origin: "17px 29.6px",
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 29.6,
          rx: 12,
          ry: 2,
          stroke: "#38bdf8",
          strokeWidth: 0.7,
        },
        loop: {
          values: { scale: [0.5, 1.1], opacity: [0.8, 0] },
          duration: 3.2,
          ease: "easeOut",
          delay: 1.6,
          static: { scale: 0.5, opacity: 0 },
          hoverDuration: 1.6,
        },
        origin: "17px 29.6px",
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 25.6,
          rx: 10,
          ry: 4,
          fill: "url(#s1)",
          stroke: "#0f172a",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 13.5,
          cy: 24,
          rx: 3.2,
          ry: 1.12,
          fill: "#ffffff",
          opacity: 0.3,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "ellipse",
            attrs: {
              cx: 17.4,
              cy: 19.8,
              rx: 7.6,
              ry: 3.2,
              fill: "url(#s2)",
              stroke: "#292524",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 14.74,
              cy: 18.52,
              rx: 2.43,
              ry: 0.9,
              fill: "#ffffff",
              opacity: 0.3,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "ellipse",
                attrs: {
                  cx: 16.8,
                  cy: 14.8,
                  rx: 5.4,
                  ry: 2.6,
                  fill: "url(#s3)",
                  stroke: "#1e293b",
                  strokeWidth: 0.5,
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 14.91,
                  cy: 13.76,
                  rx: 1.73,
                  ry: 0.73,
                  fill: "#ffffff",
                  opacity: 0.3,
                },
              },
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "ellipse",
                    attrs: {
                      cx: 17.2,
                      cy: 10.6,
                      rx: 3.6,
                      ry: 2,
                      fill: "url(#s4)",
                      stroke: "#44403c",
                      strokeWidth: 0.5,
                    },
                  },
                  {
                    tag: "ellipse",
                    attrs: {
                      cx: 15.94,
                      cy: 9.8,
                      rx: 1.15,
                      ry: 0.56,
                      fill: "#ffffff",
                      opacity: 0.3,
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M17.2 8.8 C17.2 7.6 17.4 6.6 17.8 5.8",
                      stroke: "#16a34a",
                      strokeWidth: 0.7,
                      strokeLinecap: "round",
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M17.6 6.4 C18.6 4.6 20.6 4.2 21.6 4.8 C20.8 6.2 19 6.8 17.6 6.4 Z",
                      fill: "url(#leaf)",
                      stroke: "#15803d",
                      strokeWidth: 0.3,
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M17.4 7.2 C16.4 5.8 14.6 5.6 13.8 6.2 C14.6 7.4 16.2 7.8 17.4 7.2 Z",
                      fill: "url(#leaf)",
                      stroke: "#15803d",
                      strokeWidth: 0.3,
                    },
                  },
                ],
                loop: {
                  values: { rotate: [-3, 3, -3] },
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                  hoverValues: { rotate: [-7, 7, -7] },
                  hoverDuration: 2,
                },
                origin: "16.8px 12.4px",
              },
            ],
            loop: {
              values: { rotate: [-2, 2, -2] },
              duration: 4,
              ease: "easeInOut",
              delay: 0.5,
              hoverValues: { rotate: [-4.5, 4.5, -4.5] },
              hoverDuration: 2,
            },
            origin: "17.4px 16.8px",
          },
        ],
        loop: {
          values: { rotate: [-1.5, 1.5, -1.5] },
          duration: 4,
          ease: "easeInOut",
          hoverValues: { rotate: [-3, 3, -3] },
          hoverDuration: 2,
        },
        origin: "17px 22px",
      },
      {
        tag: "path",
        attrs: {
          d: "M27 6 C28.4 5.2 30 5.6 30.4 6.8 C29.2 7.8 27.6 7.6 27 6 Z",
          fill: "url(#petal)",
          stroke: "#db2777",
          strokeWidth: 0.25,
        },
        loop: {
          values: {
            x: [0, -3, -6],
            y: [0, 5, 11],
            rotate: [0, 60, 140],
            opacity: [0, 1, 0],
          },
          duration: 5,
          ease: "linear",
          static: { x: -1, y: 2, rotate: 20, opacity: 1 },
          hoverDuration: 2.5,
        },
        origin: "28.6px 6.4px",
      },
    ],
  },
  labyrinth: {
    accent: "#67e8f9",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(103,232,249,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "floor", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#1e3a8a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f172a" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "gold", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fbbf24" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#d97706" } },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 14.2,
          fill: "url(#floor)",
          stroke: "#fbbf24",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M14.42 29.13 A12.4 12.4 0 1 1 19.58 29.13 M23.99 23.29 A9.4 9.4 0 1 1 25.94 19.9 M13.61 22.43 A6.4 6.4 0 1 1 16.11 23.34 M20.23 15.95 A3.4 3.4 0 1 1 19.53 14.72 M19.43 26.08 L20.21 28.98 M21.53 21.53 L23.65 23.65 M16.7 20.39 L16.44 23.38",
          stroke: "url(#gold)",
          strokeWidth: 1.3,
          strokeLinecap: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17 31.4 L17 27.9 A10.9 10.9 0 1 1 26.44 22.45 L23.84 20.95 A7.9 7.9 0 1 0 14.3 24.42 L15.32 21.6 A4.9 4.9 0 1 1 21.24 14.55 L17 17",
          stroke: "#67e8f9",
          strokeWidth: 1.4,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "4 148.89",
          opacity: 0.45,
        },
        loop: {
          values: { strokeDashoffset: [4, -124.89, -124.89] },
          duration: 7,
          ease: "linear",
          times: [0, 0.85, 1],
          static: { strokeDashoffset: -37.24 },
          hoverDuration: 3,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17 31.4 L17 27.9 A10.9 10.9 0 1 1 26.44 22.45 L23.84 20.95 A7.9 7.9 0 1 0 14.3 24.42 L15.32 21.6 A4.9 4.9 0 1 1 21.24 14.55 L17 17",
          stroke: "#ecfeff",
          strokeWidth: 2.2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "0.01 148.89",
        },
        loop: {
          values: { strokeDashoffset: [0, -128.89, -128.89] },
          duration: 7,
          ease: "linear",
          times: [0, 0.85, 1],
          static: { strokeDashoffset: -41.24 },
          hoverDuration: 3,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17 14.6 Q17 17 19.4 17 Q17 17 17 19.4 Q17 17 14.6 17 Q17 17 17 14.6 Z",
          fill: "#f9a8d4",
          stroke: "#ffffff",
          strokeWidth: 0.3,
        },
        loop: {
          values: { scale: [1, 1, 1.6, 1], rotate: [0, 0, 45, 90] },
          duration: 7,
          ease: "easeInOut",
          times: [0, 0.82, 0.9, 1],
          hoverDuration: 3,
        },
        origin: "17px 17px",
      },
    ],
  },
  slinky: {
    accent: "#ec4899",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(236,72,153,0.3))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "c0", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#991b1b" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#ef4444" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fca5a5" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#ef4444" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#991b1b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c1", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#9a3412" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#f97316" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fdba74" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#f97316" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#9a3412" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c2", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#92400e" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#92400e" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c3", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#854d0e" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#eab308" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fef08a" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#eab308" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#854d0e" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c4", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#3f6212" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#84cc16" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#bef264" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#84cc16" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#3f6212" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c5", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#166534" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#22c55e" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#86efac" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#22c55e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#166534" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c6", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#155e75" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#06b6d4" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#67e8f9" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#06b6d4" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#155e75" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c7", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#1e3a8a" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#3b82f6" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#93c5fd" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#3b82f6" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e3a8a" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "c8", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#4c1d95" } },
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#8b5cf6" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#c4b5fd" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#8b5cf6" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#4c1d95" } },
            ],
          },
        ],
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 6.5,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c0)",
          strokeWidth: 1.5,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 8.2,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c1)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 1.05, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.03,
          hoverValues: { y: [0, 1.45, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 9.9,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c2)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 2.1, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.06,
          hoverValues: { y: [0, 2.9, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 11.6,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c3)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 3.15, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.09,
          hoverValues: { y: [0, 4.35, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 13.3,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c4)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 4.2, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.12,
          hoverValues: { y: [0, 5.8, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 15,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c5)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 5.25, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.15,
          hoverValues: { y: [0, 7.25, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 16.7,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c6)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 6.3, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.18,
          hoverValues: { y: [0, 8.7, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 18.4,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c7)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 7.35, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.21,
          hoverValues: { y: [0, 10.15, 0] },
          hoverDuration: 1,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 20.1,
          rx: 9,
          ry: 2.6,
          stroke: "url(#c8)",
          strokeWidth: 1.5,
        },
        loop: {
          values: { y: [0, 8.4, 0] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.24,
          hoverValues: { y: [0, 11.6, 0] },
          hoverDuration: 1,
        },
      },
    ],
  },
  gyroscope: {
    accent: "#38bdf8",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "gold", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#92400e" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "silver", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#94a3b8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#334155" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "rotor", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#e0f2fe" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#38bdf8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e40af" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "disc" },
            children: [
              { tag: "ellipse", attrs: { cx: 17, cy: 15.5, rx: 7.2, ry: 2.6 } },
            ],
          },
        ],
      },
      {
        tag: "ellipse",
        attrs: { cx: 17, cy: 31, rx: 6.4, ry: 1.6, fill: "#1e293b" },
      },
      {
        tag: "path",
        attrs: {
          d: "M15.6 27.6 H18.4 L19.8 30.8 H14.2 Z",
          fill: "url(#silver)",
          stroke: "#1e293b",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 15.5,
          r: 12,
          stroke: "url(#gold)",
          strokeWidth: 2,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 15.5,
          r: 12,
          stroke: "#ffffff",
          strokeWidth: 0.4,
          opacity: 0.35,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 3.5,
          r: 1,
          fill: "url(#gold)",
          stroke: "#78350f",
          strokeWidth: 0.3,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 27.5,
          r: 1,
          fill: "url(#gold)",
          stroke: "#78350f",
          strokeWidth: 0.3,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 17,
              y1: 4.6,
              x2: 17,
              y2: 26.4,
              stroke: "url(#silver)",
              strokeWidth: 1.1,
              strokeLinecap: "round",
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 17,
              cy: 15.5,
              rx: 4.2,
              ry: 10.6,
              stroke: "url(#silver)",
              strokeWidth: 1.4,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 17,
              cy: 15.5,
              rx: 7.2,
              ry: 2.6,
              fill: "url(#rotor)",
              stroke: "#1e3a8a",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#disc)" },
            children: [
              {
                tag: "rect",
                attrs: {
                  x: 9.4,
                  y: 12.5,
                  width: 1.6,
                  height: 6,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
                loop: {
                  values: { x: [0, 14] },
                  duration: 0.35,
                  ease: "linear",
                  static: { x: 4 },
                  hoverDuration: 0.18,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.4,
                  y: 12.5,
                  width: 1.6,
                  height: 6,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
                loop: {
                  values: { x: [0, 14] },
                  duration: 0.35,
                  ease: "linear",
                  delay: 0.17,
                  static: { x: 7.4 },
                  hoverDuration: 0.18,
                },
              },
            ],
          },
          {
            tag: "path",
            attrs: {
              d: "M10.6 15 C12 13.6 15 13 17 13",
              stroke: "#ffffff",
              strokeWidth: 0.6,
              strokeLinecap: "round",
              opacity: 0.6,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 15.5,
              r: 1.1,
              fill: "url(#silver)",
              stroke: "#334155",
              strokeWidth: 0.3,
            },
          },
        ],
        loop: {
          values: { rotate: [-16, 16, -16] },
          duration: 3.2,
          ease: "easeInOut",
          hoverValues: { rotate: [-28, 28, -28] },
          hoverDuration: 1.6,
        },
        origin: "17px 15.5px",
      },
    ],
  },
  "arcade-coin": {
    accent: "#facc15",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.5))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "coin", cx: "38%", cy: "32%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#facc15" } },
              { tag: "stop", attrs: { offset: 0.85, stopColor: "#ca8a04" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#a16207" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "edge", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#a16207" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#713f12" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "plate", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#475569" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0f172a" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M5.5 6.2 Q5.5 8 7.3 8 Q5.5 8 5.5 9.8 Q5.5 8 3.7 8 Q5.5 8 5.5 6.2 Z",
          fill: "#fef08a",
        },
        loop: {
          values: { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] },
          duration: 1.6,
          ease: "easeInOut",
          static: { opacity: 1, scale: 1 },
        },
        origin: "5.5px 8px",
      },
      {
        tag: "path",
        attrs: {
          d: "M28.6 13.7 Q28.6 15 29.9 15 Q28.6 15 28.6 16.3 Q28.6 15 27.3 15 Q28.6 15 28.6 13.7 Z",
          fill: "#fef08a",
        },
        loop: {
          values: { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.8,
          static: { opacity: 1, scale: 1 },
        },
        origin: "28.6px 15px",
      },
      {
        tag: "path",
        attrs: {
          d: "M27.4 3.4 Q27.4 4.4 28.4 4.4 Q27.4 4.4 27.4 5.4 Q27.4 4.4 26.4 4.4 Q27.4 4.4 27.4 3.4 Z",
          fill: "#fef08a",
        },
        loop: {
          values: { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 1.4,
          static: { opacity: 1, scale: 1 },
        },
        origin: "27.4px 4.4px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "circle",
                    attrs: { cx: 17.7, cy: 12.6, r: 8, fill: "url(#edge)" },
                  },
                  {
                    tag: "circle",
                    attrs: {
                      cx: 17,
                      cy: 12,
                      r: 8,
                      fill: "url(#coin)",
                      stroke: "#a16207",
                      strokeWidth: 0.6,
                    },
                  },
                  {
                    tag: "circle",
                    attrs: {
                      cx: 17,
                      cy: 12,
                      r: 6.2,
                      stroke: "#a16207",
                      strokeWidth: 0.6,
                      opacity: 0.7,
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M17 8.1 L17.97 10.67 L20.71 10.79 L18.57 12.51 L19.29 15.16 L17 13.65 L14.71 15.16 L15.43 12.51 L13.29 10.79 L16.03 10.67 Z",
                      fill: "#fde047",
                      stroke: "#a16207",
                      strokeWidth: 0.6,
                      strokeLinejoin: "round",
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M11.6 8.6 A6.4 6.4 0 0 1 15.4 6",
                      stroke: "#ffffff",
                      strokeWidth: 1.2,
                      strokeLinecap: "round",
                      opacity: 0.8,
                    },
                  },
                ],
                loop: {
                  values: { scaleX: [1, 0.12, 1] },
                  duration: 1.8,
                  ease: "easeInOut",
                  hoverDuration: 0.6,
                },
                origin: "17px 12px",
              },
            ],
            loop: {
              values: { y: [0, -1.4, 0] },
              duration: 2,
              ease: "easeInOut",
            },
          },
        ],
        hover: { y: 9, scale: 0.9 },
        origin: "17px 12px",
      },
      {
        tag: "rect",
        attrs: {
          x: 7,
          y: 24,
          width: 20,
          height: 7.4,
          rx: 2,
          fill: "url(#plate)",
          stroke: "#020617",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8.6 25.2 H25.4",
          stroke: "#ffffff",
          strokeWidth: 0.6,
          strokeLinecap: "round",
          opacity: 0.25,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 11.5,
          y: 26.5,
          width: 11,
          height: 2.2,
          rx: 1.1,
          fill: "#1f0505",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 11.5,
          y: 26.5,
          width: 11,
          height: 2.2,
          rx: 1.1,
          fill: "#ef4444",
        },
        loop: {
          values: { opacity: [0.45, 1, 0.45] },
          duration: 1.2,
          ease: "easeInOut",
          hoverDuration: 0.4,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 9.4, cy: 29.6, r: 0.6, fill: "#22c55e" },
        loop: {
          values: { opacity: [1, 0.3, 1] },
          duration: 0.9,
          ease: "easeInOut",
        },
      },
      {
        tag: "circle",
        attrs: { cx: 24.6, cy: 29.6, r: 0.6, fill: "#f59e0b" },
        loop: {
          values: { opacity: [0.3, 1, 0.3] },
          duration: 0.9,
          ease: "easeInOut",
        },
      },
    ],
  },
  "hot-air-balloon": {
    accent: "#ef4444",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "envelope", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fecaca" } },
              { tag: "stop", attrs: { offset: 0.4, stopColor: "#f87171" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b91c1c" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "gore", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fffbeb" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fbbf24" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "basket", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#d97706" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#78350f" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "flame", cx: "50%", cy: "70%", r: "60%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fbbf24" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f97316" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "env" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 2.2 C23.6 2.2 27.6 6.8 27.6 12 C27.6 16.4 23.6 19.4 20.2 22.4 L13.8 22.4 C10.4 19.4 6.4 16.4 6.4 12 C6.4 6.8 10.4 2.2 17 2.2 Z",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M2 26.4 C2 25 3.4 24.2 4.6 24.6 C5.2 23.4 7.4 23.4 8 24.8 C9.2 24.6 10 25.4 9.8 26.4 Z",
          fill: "#f1f5f9",
          stroke: "#cbd5e1",
          strokeWidth: 0.4,
        },
        loop: {
          values: { x: [4, -2, 4], opacity: [0.9, 1, 0.9] },
          duration: 7,
          ease: "easeInOut",
          hoverDuration: 3.5,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "line",
                attrs: {
                  x1: 13.8,
                  y1: 22.4,
                  x2: 14.6,
                  y2: 25.8,
                  stroke: "#78350f",
                  strokeWidth: 0.5,
                },
              },
              {
                tag: "line",
                attrs: {
                  x1: 20.2,
                  y1: 22.4,
                  x2: 19.4,
                  y2: 25.8,
                  stroke: "#78350f",
                  strokeWidth: 0.5,
                },
              },
              {
                tag: "line",
                attrs: {
                  x1: 16.2,
                  y1: 22.4,
                  x2: 16.4,
                  y2: 25.8,
                  stroke: "#78350f",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "line",
                attrs: {
                  x1: 17.8,
                  y1: 22.4,
                  x2: 17.6,
                  y2: 25.8,
                  stroke: "#78350f",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 21.6 C18.4 23 18.2 24.6 17 25.4 C15.8 24.6 15.6 23 17 21.6 Z",
                  fill: "url(#flame)",
                },
                loop: {
                  values: { scale: [0.8, 1.1, 0.85, 1, 0.8] },
                  duration: 0.6,
                  ease: "easeInOut",
                  hoverValues: { scale: [1.2, 1.7, 1.3, 1.6, 1.2] },
                  hoverDuration: 0.4,
                },
                origin: "17px 25px",
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 2.2 C23.6 2.2 27.6 6.8 27.6 12 C27.6 16.4 23.6 19.4 20.2 22.4 L13.8 22.4 C10.4 19.4 6.4 16.4 6.4 12 C6.4 6.8 10.4 2.2 17 2.2 Z",
                  fill: "url(#envelope)",
                  stroke: "#7f1d1d",
                  strokeWidth: 0.7,
                },
              },
              {
                tag: "g",
                attrs: { clipPath: "url(#env)" },
                children: [
                  {
                    tag: "path",
                    attrs: {
                      d: "M17 2.2 C20.2 2.6 21.6 7 21.6 12 C21.6 16.2 20 19.8 18.8 22.4 L15.2 22.4 C14 19.8 12.4 16.2 12.4 12 C12.4 7 13.8 2.6 17 2.2 Z",
                      fill: "url(#gore)",
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M4 13 L5.2 11 L6.4 13 L7.6 11 L8.8 13 L10 11 L11.2 13 L12.4 11 L13.6 13 L14.8 11 L16 13 L17.2 11 L18.4 13 L19.6 11 L20.8 13 L22 11 L23.2 13 L24.4 11 L25.6 13 L26.8 11 L28 13 L29.2 11 L30.4 13 L30 15.4 L4 15.4 Z",
                      fill: "#2563eb",
                      opacity: 0.9,
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M9 3 C7 6 6.6 18 12 23 M25 3 C27 6 27.4 18 22 23",
                      stroke: "#7f1d1d",
                      strokeWidth: 0.4,
                      opacity: 0.5,
                    },
                  },
                ],
              },
              {
                tag: "path",
                attrs: {
                  d: "M9.4 8.4 C10.4 5.8 12.6 4.2 15 3.8",
                  stroke: "#ffffff",
                  strokeWidth: 1.3,
                  strokeLinecap: "round",
                  opacity: 0.7,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.2,
                  y: 25.6,
                  width: 5.6,
                  height: 4.2,
                  rx: 1,
                  fill: "url(#basket)",
                  stroke: "#451a03",
                  strokeWidth: 0.5,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M14.4 27 H19.6 M14.4 28.4 H19.6 M16 25.8 V29.6 M18 25.8 V29.6",
                  stroke: "#fbbf24",
                  strokeWidth: 0.3,
                  opacity: 0.6,
                },
              },
            ],
            loop: {
              values: { rotate: [-2.5, 2.5, -2.5] },
              duration: 4,
              ease: "easeInOut",
              hoverDuration: 2,
            },
            origin: "17px 2px",
          },
        ],
        loop: {
          values: { y: [0, -1.8, 0] },
          duration: 3.2,
          ease: "easeInOut",
          hoverValues: { y: [0, -3.6, 0] },
          hoverDuration: 1.6,
        },
      },
    ],
  },
  lighthouse: {
    accent: "#facc15",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "tower", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#e2e8f0" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#94a3b8" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "stripe", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f87171" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#dc2626" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#991b1b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: {
              id: "beam",
              x1: 17,
              y1: 0,
              x2: 34,
              y2: 0,
              gradientUnits: "userSpaceOnUse",
            },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#fef9c3", stopOpacity: 0.9 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#fde047", stopOpacity: 0 },
              },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "lamp", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#fef08a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#facc15" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "halo", cx: "50%", cy: "50%", r: "50%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#fef08a", stopOpacity: 0.7 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#fef08a", stopOpacity: 0 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "sea", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#38bdf8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1d4ed8" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "towerClip" },
            children: [
              {
                tag: "path",
                attrs: { d: "M13.4 28 L14.6 11.8 H19.4 L20.6 28 Z" },
              },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "bay" },
            children: [
              {
                tag: "ellipse",
                attrs: { cx: 17, cy: 30.2, rx: 14.6, ry: 3.6 },
              },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: { d: "M17 7.6 L34 3.4 L34 12.6 L17 9.6 Z", fill: "url(#beam)" },
        loop: {
          values: { scaleX: [1, -1, 1] },
          duration: 4,
          ease: "easeInOut",
          static: { scaleX: 1 },
          hoverDuration: 1.6,
        },
        origin: "17px 8.6px",
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 8.6, r: 5, fill: "url(#halo)" },
        loop: {
          values: { scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] },
          duration: 2,
          ease: "easeInOut",
          hoverDuration: 0.8,
        },
        origin: "17px 8.6px",
      },
      {
        tag: "path",
        attrs: {
          d: "M13.4 28 L14.6 11.8 H19.4 L20.6 28 Z",
          fill: "url(#tower)",
          stroke: "#334155",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#towerClip)" },
        children: [
          {
            tag: "rect",
            attrs: {
              x: 10,
              y: 14.4,
              width: 14,
              height: 3,
              fill: "url(#stripe)",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 10,
              y: 20.2,
              width: 14,
              height: 3,
              fill: "url(#stripe)",
            },
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M16 28 V25.6 C16 24.6 18 24.6 18 25.6 V28 Z",
          fill: "#1e293b",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 16.4,
          y: 18,
          width: 1.2,
          height: 1.6,
          rx: 0.3,
          fill: "#fde68a",
          stroke: "#1e293b",
          strokeWidth: 0.3,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 13,
          y: 10.8,
          width: 8,
          height: 1.4,
          rx: 0.5,
          fill: "#334155",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M13.4 10.8 V9.6 M15 10.8 V9.6 M19 10.8 V9.6 M20.6 10.8 V9.6",
          stroke: "#334155",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 14.6,
          y: 6.6,
          width: 4.8,
          height: 4.2,
          rx: 0.6,
          fill: "url(#lamp)",
          stroke: "#334155",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M16.2 6.6 V10.8 M17.8 6.6 V10.8",
          stroke: "#334155",
          strokeWidth: 0.35,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M14 6.9 L17 3.6 L20 6.9 Z",
          fill: "url(#stripe)",
          stroke: "#7f1d1d",
          strokeWidth: 0.5,
          strokeLinejoin: "round",
        },
      },
      { tag: "circle", attrs: { cx: 17, cy: 3.2, r: 0.7, fill: "#334155" } },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 29,
          rx: 8.6,
          ry: 2,
          fill: "#475569",
          stroke: "#1e293b",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#bay)" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M-8 29.6 q2 -1.4 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 V34 H-8 Z",
              fill: "url(#sea)",
              opacity: 0.92,
            },
            loop: {
              values: { x: [0, -8] },
              duration: 2.4,
              ease: "linear",
              hoverDuration: 1.2,
            },
          },
        ],
      },
    ],
  },
  hourglass: {
    accent: "#f59e0b",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "wood", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#d97706" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#92400e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#451a03" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "glass", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#e0f2fe", stopOpacity: 0.55 },
              },
              {
                tag: "stop",
                attrs: { offset: 0.5, stopColor: "#bae6fd", stopOpacity: 0.2 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#7dd3fc", stopOpacity: 0.4 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "sand", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f59e0b" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "glassClip" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M10.4 6.2 C10.4 11 15.4 13.6 16.2 17 C15.4 20.4 10.4 23 10.4 27.8 H23.6 C23.6 23 18.6 20.4 17.8 17 C18.6 13.6 23.6 11 23.6 6.2 Z",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M10.4 6.2 C10.4 11 15.4 13.6 16.2 17 C15.4 20.4 10.4 23 10.4 27.8 H23.6 C23.6 23 18.6 20.4 17.8 17 C18.6 13.6 23.6 11 23.6 6.2 Z",
              fill: "url(#glass)",
            },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#glassClip)" },
            children: [
              {
                tag: "rect",
                attrs: {
                  x: 9,
                  y: 9.4,
                  width: 16,
                  height: 7.8,
                  fill: "url(#sand)",
                },
                loop: {
                  values: { scaleY: [1, 0, 0] },
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.8, 1],
                  static: { scaleY: 0.55 },
                  hoverDuration: 2,
                },
                origin: "17px 17.2px",
              },
              {
                tag: "path",
                attrs: {
                  d: "M8 28 C11 22.6 14.6 20.6 17 20.6 C19.4 20.6 23 22.6 26 28 Z",
                  fill: "url(#sand)",
                },
                loop: {
                  values: { scaleY: [0, 1, 1] },
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.8, 1],
                  static: { scaleY: 0.5 },
                  hoverDuration: 2,
                },
                origin: "17px 28px",
              },
              {
                tag: "line",
                attrs: {
                  x1: 17,
                  y1: 16.6,
                  x2: 17,
                  y2: 28,
                  stroke: "#fbbf24",
                  strokeWidth: 0.7,
                },
                loop: {
                  values: { opacity: [1, 1, 0, 0] },
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.78, 0.8, 1],
                  hoverDuration: 2,
                },
              },
            ],
          },
          {
            tag: "path",
            attrs: {
              d: "M10.4 6.2 C10.4 11 15.4 13.6 16.2 17 C15.4 20.4 10.4 23 10.4 27.8 H23.6 C23.6 23 18.6 20.4 17.8 17 C18.6 13.6 23.6 11 23.6 6.2 Z",
              stroke: "#7dd3fc",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12 8 C12.2 10.6 14 12.6 15 13.8",
              stroke: "#ffffff",
              strokeWidth: 0.8,
              strokeLinecap: "round",
              opacity: 0.8,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 8.4,
              y: 5.8,
              width: 1.4,
              height: 22.4,
              rx: 0.6,
              fill: "url(#wood)",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 24.2,
              y: 5.8,
              width: 1.4,
              height: 22.4,
              rx: 0.6,
              fill: "url(#wood)",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 7.2,
              y: 3.4,
              width: 19.6,
              height: 2.8,
              rx: 1.2,
              fill: "url(#wood)",
              stroke: "#292524",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 7.2,
              y: 27.8,
              width: 19.6,
              height: 2.8,
              rx: 1.2,
              fill: "url(#wood)",
              stroke: "#292524",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M8.6 4.3 H25.4 M8.6 28.7 H25.4",
              stroke: "#fde68a",
              strokeWidth: 0.4,
              strokeLinecap: "round",
              opacity: 0.5,
            },
          },
        ],
        loop: {
          values: { rotate: [0, 0, 180] },
          duration: 4,
          ease: ["linear", "easeInOut"],
          times: [0, 0.8, 1],
          static: { rotate: 0 },
          hoverDuration: 2,
        },
      },
    ],
  },
  "snow-globe": {
    accent: "#93c5fd",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(147,197,253,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "sky", cx: "50%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#60a5fa" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#1e3a8a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#172554" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "base", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f87171" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#991b1b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "gold", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "tree", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#4ade80" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#166534" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "snow", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#cbd5e1" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "globe" },
            children: [{ tag: "circle", attrs: { cx: 17, cy: 14, r: 10.6 } }],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M8.6 24 H25.4 L27 30 C27.1 30.6 26.7 31 26.1 31 H7.9 C7.3 31 6.9 30.6 7 30 Z",
              fill: "url(#base)",
              stroke: "#7f1d1d",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 8.2,
              y: 25.4,
              width: 17.6,
              height: 1.6,
              rx: 0.4,
              fill: "url(#gold)",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 17, cy: 14, r: 10.6, fill: "url(#sky)" },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#globe)" },
            children: [
              {
                tag: "ellipse",
                attrs: {
                  cx: 17,
                  cy: 23.6,
                  rx: 12,
                  ry: 4.4,
                  fill: "url(#snow)",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 8.4 L20.6 14 H18.8 L21.6 18.4 H19.4 L22 22 H12 L14.6 18.4 H12.4 L15.2 14 H13.4 Z",
                  fill: "url(#tree)",
                  stroke: "#14532d",
                  strokeWidth: 0.4,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M15.2 14 H18.8 M14.6 18.4 H19.4",
                  stroke: "#ffffff",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  opacity: 0.85,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 16.3,
                  y: 22,
                  width: 1.4,
                  height: 1.6,
                  fill: "#78350f",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 6.7 L17.38 7.67 L18.43 7.74 L17.62 8.4 L17.88 9.41 L17 8.85 L16.12 9.41 L16.38 8.4 L15.57 7.74 L16.62 7.67 Z",
                  fill: "#fde047",
                },
              },
              {
                tag: "circle",
                attrs: { cx: 15.6, cy: 16.2, r: 0.45, fill: "#f87171" },
              },
              {
                tag: "circle",
                attrs: { cx: 18.6, cy: 20.4, r: 0.45, fill: "#fde047" },
              },
              {
                tag: "circle",
                attrs: { cx: 18.2, cy: 12.4, r: 0.4, fill: "#60a5fa" },
              },
              {
                tag: "circle",
                attrs: { cx: 11, cy: 4, r: 0.6, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 3.1,
                  ease: "linear",
                  static: { x: 0.4, y: 15, opacity: 1 },
                  hoverDuration: 1.1923076923076923,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 15, cy: 4, r: 0.5, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 3.5,
                  ease: "linear",
                  delay: 1.1,
                  static: { x: 0.4, y: 4, opacity: 1 },
                  hoverDuration: 1.346153846153846,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 19.5, cy: 4, r: 0.65, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 2.9,
                  ease: "linear",
                  delay: 0.4,
                  static: { x: 0.4, y: 9.5, opacity: 1 },
                  hoverDuration: 1.1153846153846154,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 23, cy: 4, r: 0.5, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 3.3,
                  ease: "linear",
                  delay: 1.8,
                  static: { x: 0.4, y: 8, opacity: 1 },
                  hoverDuration: 1.2692307692307692,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 13.4, cy: 4, r: 0.55, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 3.7,
                  ease: "linear",
                  delay: 2.4,
                  static: { x: 0.4, y: 5.799999999999997, opacity: 1 },
                  hoverDuration: 1.4230769230769231,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 21, cy: 4, r: 0.6, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 3.2,
                  ease: "linear",
                  delay: 2.9,
                  static: { x: 0.4, y: 7, opacity: 1 },
                  hoverDuration: 1.2307692307692308,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 17, cy: 4, r: 0.45, fill: "#ffffff" },
                loop: {
                  values: {
                    x: [0, 1.2, -0.8],
                    y: [0, 9, 18],
                    opacity: [0, 1, 0],
                  },
                  duration: 4,
                  ease: "linear",
                  delay: 0.8,
                  static: { x: 0.4, y: 5, opacity: 1 },
                  hoverDuration: 1.5384615384615383,
                },
              },
            ],
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 14,
              r: 10.6,
              stroke: "#bfdbfe",
              strokeWidth: 0.7,
              opacity: 0.8,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M9.4 10 C10.4 7 12.8 5 15.6 4.4",
              stroke: "#ffffff",
              strokeWidth: 1.3,
              strokeLinecap: "round",
              opacity: 0.75,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 24, cy: 19.4, r: 0.8, fill: "#ffffff", opacity: 0.5 },
          },
        ],
        loop: {
          values: { rotate: [0, 0, 0, 0, 0] },
          duration: 1,
          ease: "easeInOut",
          hoverValues: { rotate: [0, -9, 8, -6, 0] },
          hoverDuration: 0.45,
        },
        origin: "17px 30px",
      },
    ],
  },
  compass: {
    accent: "#f59e0b",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "brass", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.4, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#78350f" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "face", cx: "45%", cy: "40%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fffbeb" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fde68a" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "north", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f87171" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b91c1c" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "south", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#94a3b8" } },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 3.4,
          r: 1.7,
          stroke: "url(#brass)",
          strokeWidth: 1.1,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 12.4,
          fill: "url(#brass)",
          stroke: "#78350f",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 10.2,
          fill: "url(#face)",
          stroke: "#92400e",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M26 17 L24.4 17 M24.79 21.5 L23.93 21 M21.5 24.79 L21 23.93 M17 26 L17 24.4 M12.5 24.79 L13 23.93 M9.21 21.5 L10.07 21 M8 17 L9.6 17 M9.21 12.5 L10.07 13 M12.5 9.21 L13 10.07 M17 8 L17 9.6 M21.5 9.21 L21 10.07 M24.79 12.5 L23.93 13",
          stroke: "#78350f",
          strokeWidth: 0.55,
          strokeLinecap: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17 10.4 Q17 17 23.6 17 Q17 17 17 23.6 Q17 17 10.4 17 Q17 17 17 10.4 Z",
          fill: "#d6d3d1",
          opacity: 0.5,
        },
      },
      {
        tag: "path",
        attrs: { d: "M17 7.4 L18.2 9.6 H15.8 Z", fill: "#dc2626" },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M17 7.6 L19 17 H15 Z",
              fill: "url(#north)",
              stroke: "#7f1d1d",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 26.4 L19 17 H15 Z",
              fill: "url(#south)",
              stroke: "#475569",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
        ],
        loop: {
          values: { rotate: [-14, 9, -5, 3, -1, 0, -14] },
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
          static: { rotate: -8 },
          hoverValues: { rotate: [0, 120, 300, 390, 350, 365, 360] },
          hoverDuration: 2,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 1.4,
          fill: "url(#brass)",
          stroke: "#78350f",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M9.4 12 A9 9 0 0 1 15 7.8",
          stroke: "#ffffff",
          strokeWidth: 1.2,
          strokeLinecap: "round",
          opacity: 0.6,
        },
      },
    ],
  },
  metronome: {
    accent: "#d97706",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(217,119,6,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "wood", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#c2410c" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#9a3412" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#431407" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "panel", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fcd34d" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "steel", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#64748b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "gold", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef08a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M6.8 5.6 L5.4 4.4 M6.8 7 L5 7 M6.8 8.4 L5.4 9.6",
          stroke: "#fbbf24",
          strokeWidth: 0.7,
          strokeLinecap: "round",
        },
        loop: {
          values: { opacity: [1, 0, 0, 0, 1] },
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 0.12, 0.5, 0.88, 1],
          static: { opacity: 1 },
          hoverDuration: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M27.2 5.6 L28.6 4.4 M27.2 7 L29 7 M27.2 8.4 L28.6 9.6",
          stroke: "#fbbf24",
          strokeWidth: 0.7,
          strokeLinecap: "round",
        },
        loop: {
          values: { opacity: [0, 0, 1, 0, 0] },
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 0.38, 0.5, 0.62, 1],
          static: { opacity: 0 },
          hoverDuration: 0.6,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12.6 4.4 H21.4 L27.2 29 H6.8 Z",
          fill: "url(#wood)",
          stroke: "#292524",
          strokeWidth: 0.7,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 12,
          y: 3,
          width: 10,
          height: 1.8,
          rx: 0.9,
          fill: "#7c2d12",
          stroke: "#292524",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M14.4 6.8 H19.6 L22.6 25 H11.4 Z",
          fill: "url(#panel)",
          stroke: "#78350f",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M15.4 9 H18.6 M16.1 10.75 H17.9 M15.4 12.5 H18.6 M16.1 14.25 H17.9 M15.4 16 H18.6 M16.1 17.75 H17.9 M15.4 19.5 H18.6 M16.1 21.25 H17.9 M15.4 23 H18.6",
          stroke: "#78350f",
          strokeWidth: 0.4,
          opacity: 0.7,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M13.2 5.4 L8 28",
          stroke: "#ffffff",
          strokeWidth: 0.6,
          strokeLinecap: "round",
          opacity: 0.3,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 17,
              y1: 25,
              x2: 17,
              y2: 6.4,
              stroke: "url(#steel)",
              strokeWidth: 1,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M15.3 11 H18.7 L18.2 14 H15.8 Z",
              fill: "url(#gold)",
              stroke: "#78350f",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
            },
          },
        ],
        loop: {
          values: { rotate: [-24, 24, -24] },
          duration: 1.2,
          ease: "easeInOut",
          static: { rotate: -16 },
          hoverDuration: 0.6,
        },
        origin: "17px 25px",
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 25,
          r: 1.2,
          fill: "url(#gold)",
          stroke: "#78350f",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 5,
          y: 28.6,
          width: 24,
          height: 2.8,
          rx: 1.2,
          fill: "#431407",
          stroke: "#1c1917",
          strokeWidth: 0.5,
        },
      },
    ],
  },
  cactus: {
    accent: "#22c55e",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,197,94,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "cactus", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#86efac" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#22c55e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#166534" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "pot", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fdba74" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#ea580c" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#9a3412" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "rim", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fed7aa" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f97316" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "petal", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fdf2f8" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ec4899" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M13.8 17.6 H10.8 C9.6 17.6 8.8 16.8 8.8 15.6 V12.4 C8.8 11.4 9.6 10.8 10.4 10.8 C11.2 10.8 12 11.4 12 12.4 V14.6 H13.8 Z",
              fill: "url(#cactus)",
              stroke: "#14532d",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M20.2 15 H23.2 C24.4 15 25.2 14.2 25.2 13 V10.2 C25.2 9.2 24.4 8.6 23.6 8.6 C22.8 8.6 22 9.2 22 10.2 V12 H20.2 Z",
              fill: "url(#cactus)",
              stroke: "#14532d",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13.6 22.4 V9.8 C13.6 7.6 15.2 6.2 17 6.2 C18.8 6.2 20.4 7.6 20.4 9.8 V22.4 Z",
              fill: "url(#cactus)",
              stroke: "#14532d",
              strokeWidth: 0.6,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M15.4 8.4 V21.6 M18.6 8.4 V21.6",
              stroke: "#bbf7d0",
              strokeWidth: 0.5,
              strokeLinecap: "round",
              opacity: 0.55,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M14.2 10 l-0.8 -0.5 M19.8 10.6 l0.8 -0.5 M14.2 19.4 l-0.8 -0.5 M19.8 18.8 l0.8 -0.5 M9.4 13 l-0.8 -0.4 M24.6 11 l0.8 -0.4 M16.9 7 l0 -0.8",
              stroke: "#f0fdf4",
              strokeWidth: 0.4,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 15.6, cy: 13.8, r: 0.75, fill: "#14532d" },
          },
          {
            tag: "circle",
            attrs: { cx: 18.4, cy: 13.8, r: 0.75, fill: "#14532d" },
          },
          {
            tag: "circle",
            attrs: { cx: 15.85, cy: 13.55, r: 0.25, fill: "#ffffff" },
          },
          {
            tag: "circle",
            attrs: { cx: 18.65, cy: 13.55, r: 0.25, fill: "#ffffff" },
          },
          {
            tag: "path",
            attrs: {
              d: "M16.2 15.5 Q17 16.2 17.8 15.5",
              stroke: "#14532d",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 14.7,
              cy: 15.3,
              rx: 0.7,
              ry: 0.45,
              fill: "#fda4af",
              opacity: 0.8,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 19.3,
              cy: 15.3,
              rx: 0.7,
              ry: 0.45,
              fill: "#fda4af",
              opacity: 0.8,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 17, cy: 4.45, r: 1.15, fill: "url(#petal)" },
              },
              {
                tag: "circle",
                attrs: { cx: 18.28, cy: 5.38, r: 1.15, fill: "url(#petal)" },
              },
              {
                tag: "circle",
                attrs: { cx: 17.79, cy: 6.89, r: 1.15, fill: "url(#petal)" },
              },
              {
                tag: "circle",
                attrs: { cx: 16.21, cy: 6.89, r: 1.15, fill: "url(#petal)" },
              },
              {
                tag: "circle",
                attrs: { cx: 15.72, cy: 5.38, r: 1.15, fill: "url(#petal)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 17,
                  cy: 5.8,
                  r: 0.85,
                  fill: "#fde047",
                  stroke: "#ca8a04",
                  strokeWidth: 0.3,
                },
              },
            ],
            hover: { scale: 1.6, rotate: 36 },
            origin: "17px 5.8px",
          },
        ],
        loop: {
          values: { scaleY: [1, 1.035, 1], scaleX: [1, 0.985, 1] },
          duration: 2.4,
          ease: "easeInOut",
          hoverDuration: 1,
        },
        origin: "17px 22.4px",
      },
      {
        tag: "rect",
        attrs: {
          x: 9.2,
          y: 21.4,
          width: 15.6,
          height: 2.6,
          rx: 1,
          fill: "url(#rim)",
          stroke: "#7c2d12",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M10.2 24 H23.8 L22.6 31 H11.4 Z",
          fill: "url(#pot)",
          stroke: "#7c2d12",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12 26 C14 27 20 27 22 26",
          stroke: "#fed7aa",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          opacity: 0.6,
        },
      },
    ],
  },
  octopus: {
    accent: "#c084fc",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(192,132,252,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "head", cx: "38%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fae8ff" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#d8b4fe" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#7e22ce" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: {
              id: "arm",
              x1: 0,
              y1: 18,
              x2: 0,
              y2: 31,
              gradientUnits: "userSpaceOnUse",
            },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#c084fc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#9333ea" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "eye", cx: "45%", cy: "40%", r: "60%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e2e8f0" } },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 28, cy: 8, r: 0.9, stroke: "#a5f3fc", strokeWidth: 0.5 },
        loop: {
          values: { y: [0, -4, -8], opacity: [0, 0.9, 0] },
          duration: 2.6,
          ease: "linear",
          static: { y: -3, opacity: 0.9 },
        },
        origin: "28px 8px",
      },
      {
        tag: "circle",
        attrs: { cx: 5.6, cy: 10, r: 0.7, stroke: "#a5f3fc", strokeWidth: 0.5 },
        loop: {
          values: { y: [0, -4, -8], opacity: [0, 0.9, 0] },
          duration: 2.6,
          ease: "linear",
          delay: 1.3,
          static: { y: -3, opacity: 0.9 },
        },
        origin: "5.6px 10px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M10 18.6 C8.6 21.6 9.8 24.4 8 26.6 C7 27.8 7.6 29.4 9 29",
                  stroke: "#581c87",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M10 18.6 C8.6 21.6 9.8 24.4 8 26.6 C7 27.8 7.6 29.4 9 29",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M10 18.6 C8.6 21.6 9.8 24.4 8 26.6 C7 27.8 7.6 29.4 9 29",
                  stroke: "#f5d0fe",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  strokeDasharray: "0.1 1.6",
                  opacity: 0.9,
                },
              },
            ],
            loop: {
              values: { rotate: [-8, 8, -8] },
              duration: 1.8,
              ease: "easeInOut",
              hoverValues: { rotate: [-18, 18, -18] },
              hoverDuration: 0.7,
            },
            origin: "10px 18.6px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M12.8 19.4 C12 22.6 13.4 25.4 12 28 C11.4 29.4 12.6 30.6 13.6 29.6",
                  stroke: "#581c87",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M12.8 19.4 C12 22.6 13.4 25.4 12 28 C11.4 29.4 12.6 30.6 13.6 29.6",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M12.8 19.4 C12 22.6 13.4 25.4 12 28 C11.4 29.4 12.6 30.6 13.6 29.6",
                  stroke: "#f5d0fe",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  strokeDasharray: "0.1 1.6",
                  opacity: 0.9,
                },
              },
            ],
            loop: {
              values: { rotate: [8, -8, 8] },
              duration: 1.8,
              ease: "easeInOut",
              delay: 0.12,
              hoverValues: { rotate: [18, -18, 18] },
              hoverDuration: 0.7,
            },
            origin: "12.8px 19.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M15.8 19.8 C15.6 23 16.6 26 15.8 29.2 C15.6 30.4 16.8 31 17.4 30",
                  stroke: "#581c87",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M15.8 19.8 C15.6 23 16.6 26 15.8 29.2 C15.6 30.4 16.8 31 17.4 30",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M15.8 19.8 C15.6 23 16.6 26 15.8 29.2 C15.6 30.4 16.8 31 17.4 30",
                  stroke: "#f5d0fe",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  strokeDasharray: "0.1 1.6",
                  opacity: 0.9,
                },
              },
            ],
            loop: {
              values: { rotate: [-8, 8, -8] },
              duration: 1.8,
              ease: "easeInOut",
              delay: 0.24,
              hoverValues: { rotate: [-18, 18, -18] },
              hoverDuration: 0.7,
            },
            origin: "15.8px 19.8px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M18.2 19.8 C18.4 23 17.4 26 18.2 29.2 C18.4 30.4 17.2 31 16.6 30",
                  stroke: "#581c87",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18.2 19.8 C18.4 23 17.4 26 18.2 29.2 C18.4 30.4 17.2 31 16.6 30",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18.2 19.8 C18.4 23 17.4 26 18.2 29.2 C18.4 30.4 17.2 31 16.6 30",
                  stroke: "#f5d0fe",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  strokeDasharray: "0.1 1.6",
                  opacity: 0.9,
                },
              },
            ],
            loop: {
              values: { rotate: [8, -8, 8] },
              duration: 1.8,
              ease: "easeInOut",
              delay: 0.36,
              hoverValues: { rotate: [18, -18, 18] },
              hoverDuration: 0.7,
            },
            origin: "18.2px 19.8px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M21.2 19.4 C22 22.6 20.6 25.4 22 28 C22.6 29.4 21.4 30.6 20.4 29.6",
                  stroke: "#581c87",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M21.2 19.4 C22 22.6 20.6 25.4 22 28 C22.6 29.4 21.4 30.6 20.4 29.6",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M21.2 19.4 C22 22.6 20.6 25.4 22 28 C22.6 29.4 21.4 30.6 20.4 29.6",
                  stroke: "#f5d0fe",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  strokeDasharray: "0.1 1.6",
                  opacity: 0.9,
                },
              },
            ],
            loop: {
              values: { rotate: [-8, 8, -8] },
              duration: 1.8,
              ease: "easeInOut",
              delay: 0.48,
              hoverValues: { rotate: [-18, 18, -18] },
              hoverDuration: 0.7,
            },
            origin: "21.2px 19.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M24 18.6 C25.4 21.6 24.2 24.4 26 26.6 C27 27.8 26.4 29.4 25 29",
                  stroke: "#581c87",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M24 18.6 C25.4 21.6 24.2 24.4 26 26.6 C27 27.8 26.4 29.4 25 29",
                  stroke: "url(#arm)",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M24 18.6 C25.4 21.6 24.2 24.4 26 26.6 C27 27.8 26.4 29.4 25 29",
                  stroke: "#f5d0fe",
                  strokeWidth: 0.6,
                  strokeLinecap: "round",
                  strokeDasharray: "0.1 1.6",
                  opacity: 0.9,
                },
              },
            ],
            loop: {
              values: { rotate: [8, -8, 8] },
              duration: 1.8,
              ease: "easeInOut",
              delay: 0.6,
              hoverValues: { rotate: [18, -18, 18] },
              hoverDuration: 0.7,
            },
            origin: "24px 18.6px",
          },
          {
            tag: "path",
            attrs: {
              d: "M8 16 C8 9.6 12 5 17 5 C22 5 26 9.6 26 16 C26 18.6 24.6 20.2 22.6 20.4 C19 20.8 15 20.8 11.4 20.4 C9.4 20.2 8 18.6 8 16 Z",
              fill: "url(#head)",
              stroke: "#581c87",
              strokeWidth: 0.7,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 14.2, cy: 8.4, r: 0.8, fill: "#f5d0fe", opacity: 0.8 },
          },
          {
            tag: "circle",
            attrs: { cx: 19.8, cy: 7.6, r: 0.6, fill: "#f5d0fe", opacity: 0.8 },
          },
          {
            tag: "circle",
            attrs: {
              cx: 21.8,
              cy: 10.2,
              r: 0.5,
              fill: "#f5d0fe",
              opacity: 0.7,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M10.4 11.8 C11 8.8 13 6.8 15.4 6.2",
              stroke: "#ffffff",
              strokeWidth: 1.2,
              strokeLinecap: "round",
              opacity: 0.7,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "ellipse",
                attrs: {
                  cx: 13.6,
                  cy: 14.2,
                  rx: 1.9,
                  ry: 2.2,
                  fill: "url(#eye)",
                  stroke: "#581c87",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 20.4,
                  cy: 14.2,
                  rx: 1.9,
                  ry: 2.2,
                  fill: "url(#eye)",
                  stroke: "#581c87",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 14, cy: 14.6, r: 1.05, fill: "#1e1b4b" },
              },
              {
                tag: "circle",
                attrs: { cx: 20.8, cy: 14.6, r: 1.05, fill: "#1e1b4b" },
              },
              {
                tag: "circle",
                attrs: { cx: 14.4, cy: 14.1, r: 0.38, fill: "#ffffff" },
              },
              {
                tag: "circle",
                attrs: { cx: 21.2, cy: 14.1, r: 0.38, fill: "#ffffff" },
              },
            ],
            loop: {
              values: { scaleY: [1, 1, 0.1, 1, 1] },
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.9, 0.93, 0.96, 1],
            },
            origin: "17px 14.2px",
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 11.6,
              cy: 17,
              rx: 1,
              ry: 0.6,
              fill: "#f472b6",
              opacity: 0.6,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 22.4,
              cy: 17,
              rx: 1,
              ry: 0.6,
              fill: "#f472b6",
              opacity: 0.6,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M16 17.4 Q17 18.4 18 17.4",
              stroke: "#581c87",
              strokeWidth: 0.6,
              strokeLinecap: "round",
            },
          },
        ],
        loop: {
          values: { y: [0, -1.4, 0] },
          duration: 2.4,
          ease: "easeInOut",
          hoverDuration: 1,
        },
      },
    ],
  },
  penguin: {
    accent: "#38bdf8",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "body", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#475569" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#1e293b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#020617" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "belly", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e2e8f0" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "beak", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fdba74" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ea580c" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "scarf", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f87171" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b91c1c" } },
            ],
          },
        ],
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 30.4,
          rx: 7.4,
          ry: 1.2,
          fill: "#0f172a",
          opacity: 0.25,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "ellipse",
            attrs: {
              cx: 14,
              cy: 28.8,
              rx: 2.3,
              ry: 0.95,
              fill: "url(#beak)",
              stroke: "#9a3412",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 20,
              cy: 28.8,
              rx: 2.3,
              ry: 0.95,
              fill: "url(#beak)",
              stroke: "#9a3412",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M9.2 15 C6.8 16.8 5.6 20.2 5.8 23 C7.8 22.2 9.2 20.2 9.8 18 Z",
              fill: "url(#body)",
              stroke: "#020617",
              strokeWidth: 0.5,
            },
            loop: {
              values: { rotate: [0, 8, 0] },
              duration: 1.2,
              ease: "easeInOut",
              hoverValues: { rotate: [0, 34, 0] },
              hoverDuration: 0.35,
            },
            origin: "9.4px 15.4px",
          },
          {
            tag: "path",
            attrs: {
              d: "M24.8 15C27.2 16.8 28.4 20.2 28.2 23C26.2 22.2 24.8 20.2 24.2 18Z",
              fill: "url(#body)",
              stroke: "#020617",
              strokeWidth: 0.5,
            },
            loop: {
              values: { rotate: [0, -8, 0] },
              duration: 1.2,
              ease: "easeInOut",
              hoverValues: { rotate: [0, -34, 0] },
              hoverDuration: 0.35,
            },
            origin: "24.6px 15.4px",
          },
          {
            tag: "path",
            attrs: {
              d: "M17 3.6 C22.4 3.6 25.4 9 25.4 16.4 C25.4 24 22 28.6 17 28.6 C12 28.6 8.6 24 8.6 16.4 C8.6 9 11.6 3.6 17 3.6 Z",
              fill: "url(#body)",
              stroke: "#020617",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 10 C20.6 10 22.6 14 22.6 19 C22.6 24 20.4 27.4 17 27.4 C13.6 27.4 11.4 24 11.4 19 C11.4 14 13.4 10 17 10 Z",
              fill: "url(#belly)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 7.6 C18.8 6.2 21.6 7 21.8 9.6 C22 12 19.6 13.6 17 14.6 C14.4 13.6 12 12 12.2 9.6 C12.4 7 15.2 6.2 17 7.6 Z",
              fill: "url(#belly)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12.6 6.6 C13.6 5.2 15 4.6 16.2 4.5",
              stroke: "#94a3b8",
              strokeWidth: 0.8,
              strokeLinecap: "round",
              opacity: 0.7,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 15, cy: 9.8, r: 0.95, fill: "#0f172a" },
          },
          {
            tag: "circle",
            attrs: { cx: 19, cy: 9.8, r: 0.95, fill: "#0f172a" },
          },
          {
            tag: "circle",
            attrs: { cx: 15.3, cy: 9.5, r: 0.32, fill: "#ffffff" },
          },
          {
            tag: "circle",
            attrs: { cx: 19.3, cy: 9.5, r: 0.32, fill: "#ffffff" },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 13.6,
              cy: 11.9,
              rx: 0.8,
              ry: 0.5,
              fill: "#fda4af",
              opacity: 0.85,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 20.4,
              cy: 11.9,
              rx: 0.8,
              ry: 0.5,
              fill: "#fda4af",
              opacity: 0.85,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M15.6 11.2 H18.4 L17 13.2 Z",
              fill: "url(#beak)",
              stroke: "#9a3412",
              strokeWidth: 0.3,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M10.8 15.2 C13 16.4 21 16.4 23.2 15.2 L23.4 17.2 C21 18.4 13 18.4 10.6 17.2 Z",
              fill: "url(#scarf)",
              stroke: "#7f1d1d",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M20.4 17.4 L22.2 22 L20 21.6 L19.2 17.6 Z",
              fill: "url(#scarf)",
              stroke: "#7f1d1d",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13 16.2 V17.6 M15.4 16.6 V18 M18 16.6 V18 M20.6 16.3 V17.7",
              stroke: "#fecaca",
              strokeWidth: 0.5,
              opacity: 0.8,
            },
          },
        ],
        loop: {
          values: { rotate: [-6, 6, -6] },
          duration: 1.2,
          ease: "easeInOut",
          hoverDuration: 0.6,
        },
        origin: "17px 29.4px",
      },
    ],
  },
  bee: {
    accent: "#facc15",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "fuzz", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#facc15" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ca8a04" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "head", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#57534e" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0c0a09" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "beeBody" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M8.6 18.4 C8.6 14.6 11.8 12.2 16 12.2 C20.2 12.2 23.2 14.6 23.2 18.4 C23.2 22.2 20.2 24.6 16 24.6 C11.8 24.6 8.6 22.2 8.6 18.4 Z",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M2 20 q1.4 -1 2.8 0 t2.8 0",
          stroke: "#fde68a",
          strokeWidth: 0.6,
          strokeLinecap: "round",
          strokeDasharray: "0.6 1.2",
        },
        loop: {
          values: { opacity: [0.2, 0.9, 0.2] },
          duration: 1.2,
          ease: "easeInOut",
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M15.6 13 C12.6 11.6 11.2 7.4 13 5.8 C14.8 4.2 17.6 7.6 17 12.2 Z",
              fill: "#f0f9ff",
              fillOpacity: 0.7,
              stroke: "#7dd3fc",
              strokeWidth: 0.45,
              strokeLinejoin: "round",
            },
            loop: {
              values: { scaleY: [1, 0.35, 1] },
              duration: 0.14,
              ease: "easeInOut",
              hoverDuration: 0.08,
            },
            origin: "16.6px 12.8px",
          },
          {
            tag: "path",
            attrs: {
              d: "M8.8 18.2 L5.2 19 L8.8 19.8 Z",
              fill: "#1c1917",
              stroke: "#1c1917",
              strokeWidth: 0.3,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M8.6 18.4 C8.6 14.6 11.8 12.2 16 12.2 C20.2 12.2 23.2 14.6 23.2 18.4 C23.2 22.2 20.2 24.6 16 24.6 C11.8 24.6 8.6 22.2 8.6 18.4 Z",
              fill: "url(#fuzz)",
              stroke: "#713f12",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "g",
            attrs: { clipPath: "url(#beeBody)" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M11.6 11 C10.6 14 10.6 22 11.6 25 H14 C13 22 13 14 14 11 Z",
                  fill: "#1c1917",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16.4 11 C15.4 14 15.4 22 16.4 25 H18.8 C17.8 22 17.8 14 18.8 11 Z",
                  fill: "#1c1917",
                },
              },
            ],
          },
          {
            tag: "path",
            attrs: {
              d: "M10.6 15.6 C11.6 13.8 13.6 13 15.6 13",
              stroke: "#ffffff",
              strokeWidth: 0.9,
              strokeLinecap: "round",
              opacity: 0.6,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 23.6,
              cy: 16.8,
              r: 3.6,
              fill: "url(#head)",
              stroke: "#0c0a09",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 24.8, cy: 16, r: 1.25, fill: "#ffffff" },
          },
          {
            tag: "circle",
            attrs: { cx: 25.1, cy: 16.1, r: 0.65, fill: "#0c0a09" },
          },
          {
            tag: "circle",
            attrs: { cx: 25.35, cy: 15.8, r: 0.25, fill: "#ffffff" },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 25.2,
              cy: 18.4,
              rx: 0.8,
              ry: 0.5,
              fill: "#fb7185",
              opacity: 0.8,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M23.4 13.4 C23.4 11.2 24.4 9.8 25.8 9.4 M22.2 13.6 C21.6 11.6 21.8 10 22.6 9",
              stroke: "#1c1917",
              strokeWidth: 0.6,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 26,
              cy: 9.3,
              r: 0.7,
              fill: "#facc15",
              stroke: "#1c1917",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 22.6,
              cy: 8.9,
              r: 0.6,
              fill: "#facc15",
              stroke: "#1c1917",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17.4 12.6 C17.2 9 19.4 5.2 21.4 6 C23.2 6.8 21.6 11 18.6 13 Z",
              fill: "#f0f9ff",
              fillOpacity: 0.7,
              stroke: "#7dd3fc",
              strokeWidth: 0.45,
              strokeLinejoin: "round",
            },
            loop: {
              values: { scaleY: [1, 0.35, 1] },
              duration: 0.14,
              ease: "easeInOut",
              delay: 0.07,
              hoverDuration: 0.08,
            },
            origin: "16.6px 12.8px",
          },
        ],
        loop: {
          values: {
            x: [0, 1.2, 0, -1.2, 0],
            y: [0, -1.4, 0, -0.8, 0],
            rotate: [0, -4, 0, 3, 0],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            x: [0, 2.2, 0, -2.2, 0],
            y: [0, -2.4, 0, -1.6, 0],
            rotate: [0, -8, 0, 6, 0],
          },
          hoverDuration: 1,
        },
      },
    ],
  },
  ladybug: {
    accent: "#ef4444",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "shell", cx: "35%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fecaca" } },
              { tag: "stop", attrs: { offset: 0.35, stopColor: "#ef4444" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#7f1d1d" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "wing", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#f0f9ff", stopOpacity: 0.85 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#bae6fd", stopOpacity: 0.5 },
              },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M9 14 L5.6 12.6 M25 14 L28.4 12.6 M9 19 L5.6 17.6 M25 19 L28.4 17.6 M9 24 L5.6 22.6 M25 24 L28.4 22.6",
              stroke: "#1c1917",
              strokeWidth: 0.8,
              strokeLinecap: "round",
            },
            loop: {
              values: { scaleY: [1, 0.9, 1] },
              duration: 0.5,
              ease: "easeInOut",
            },
            origin: "17px 19px",
          },
          {
            tag: "path",
            attrs: {
              d: "M16 11 C11 12 6 18 6.6 26 C9 26.6 13 22 16 13 Z",
              fill: "url(#wing)",
              stroke: "#7dd3fc",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M18 11C23 12 28 18 27.4 26C25 26.6 21 22 18 13Z",
              fill: "url(#wing)",
              stroke: "#7dd3fc",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12.6 9.8 C12.6 6.8 14.6 4.8 17 4.8 C19.4 4.8 21.4 6.8 21.4 9.8 Z",
              fill: "#1c1917",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 15, cy: 7.4, r: 0.8, fill: "#ffffff" },
          },
          {
            tag: "circle",
            attrs: { cx: 19, cy: 7.4, r: 0.8, fill: "#ffffff" },
          },
          {
            tag: "path",
            attrs: {
              d: "M15.4 5.2 C14.6 3.4 13 2.6 11.6 2.8 M18.6 5.2 C19.4 3.4 21 2.6 22.4 2.8",
              stroke: "#1c1917",
              strokeWidth: 0.6,
              strokeLinecap: "round",
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 9.4 C12 9.4 8.4 13.6 8.4 19.4 C8.4 25.4 12.4 29.4 17 29.4 Z",
                  fill: "url(#shell)",
                  stroke: "#450a0a",
                  strokeWidth: 0.6,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 13.2, cy: 14.4, r: 1.5, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 11.4, cy: 20.4, r: 1.4, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 14.4, cy: 24.8, r: 1.3, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 15.4, cy: 19.2, r: 0.9, fill: "#1c1917" },
              },
              {
                tag: "path",
                attrs: {
                  d: "M10.4 15 C10.8 12.6 12.4 10.8 14.4 10.2",
                  stroke: "#ffffff",
                  strokeWidth: 0.9,
                  strokeLinecap: "round",
                  opacity: 0.7,
                },
              },
            ],
            hover: { rotate: -24 },
            origin: "17px 10.4px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 9.4C22 9.4 25.6 13.6 25.6 19.4C25.6 25.4 21.6 29.4 17 29.4Z",
                  fill: "url(#shell)",
                  stroke: "#450a0a",
                  strokeWidth: 0.6,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 20.8, cy: 14.4, r: 1.5, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 22.6, cy: 20.4, r: 1.4, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 19.6, cy: 24.8, r: 1.3, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 18.6, cy: 19.2, r: 0.9, fill: "#1c1917" },
              },
            ],
            hover: { rotate: 24 },
            origin: "17px 10.4px",
          },
        ],
        loop: {
          values: { rotate: [-4, 4, -4] },
          duration: 1,
          ease: "easeInOut",
          hoverDuration: 0.5,
        },
        origin: "17px 19px",
      },
    ],
  },
  "origami-crane": {
    accent: "#fb7185",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(251,113,133,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "light", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fecdd3" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "deep", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fda4af" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e11d48" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M14.6 18 L8.6 4.4 L16.6 15.6 Z",
                  fill: "url(#light)",
                  stroke: "#be123c",
                  strokeWidth: 0.35,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16.6 15.6 L8.6 4.4 L19 17.4 Z",
                  fill: "#fda4af",
                  stroke: "#be123c",
                  strokeWidth: 0.35,
                  strokeLinejoin: "round",
                },
              },
            ],
            loop: {
              values: { scaleY: [1, 0.35, 1] },
              duration: 1.4,
              ease: "easeInOut",
              hoverValues: { scaleY: [1, -0.5, 1] },
              hoverDuration: 0.6,
            },
            origin: "17px 18px",
          },
          {
            tag: "path",
            attrs: {
              d: "M13 19 L3.4 12 L11.4 20.6 Z",
              fill: "#fecdd3",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13 19 L3.4 12 L8.2 19.4 Z",
              fill: "#fda4af",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M11 20 L17 16.4 L23 20 Z",
              fill: "#fecdd3",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M11 20 L23 20 L17 23.6 Z",
              fill: "url(#deep)",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M21 19 L29.4 8.6 L23.6 20.4 Z",
              fill: "#fda4af",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M21 19 L29.4 8.6 L22 19.6 Z",
              fill: "#ffe4e6",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M29.4 8.6 L32.2 9.6 L28.8 10.6 Z",
              fill: "#f43f5e",
              stroke: "#be123c",
              strokeWidth: 0.35,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M16 18.4 L24.8 4 L18.4 17 Z",
                  fill: "url(#light)",
                  stroke: "#be123c",
                  strokeWidth: 0.35,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18.4 17 L24.8 4 L20.6 18.2 Z",
                  fill: "url(#deep)",
                  stroke: "#be123c",
                  strokeWidth: 0.35,
                  strokeLinejoin: "round",
                },
              },
            ],
            loop: {
              values: { scaleY: [1, 0.35, 1] },
              duration: 1.4,
              ease: "easeInOut",
              hoverValues: { scaleY: [1, -0.5, 1] },
              hoverDuration: 0.6,
            },
            origin: "17px 18px",
          },
        ],
        loop: {
          values: { y: [0, -1.6, 0], rotate: [0, -3, 0] },
          duration: 1.4,
          ease: "easeInOut",
          hoverDuration: 0.6,
        },
        origin: "17px 20px",
      },
    ],
  },
  "lava-lamp": {
    accent: "#db2777",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(219,39,119,0.5))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "chrome", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#f8fafc" } },
              { tag: "stop", attrs: { offset: 0.35, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 0.7, stopColor: "#64748b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#334155" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "liquid", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#7c3aed" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#db2777" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "wax", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#fb923c" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ea580c" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "vessel" },
            children: [
              { tag: "path", attrs: { d: "M12.8 8 H21.2 L23.4 24 H10.6 Z" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M12.8 8 H21.2 L23.4 24 H10.6 Z",
          fill: "url(#liquid)",
          stroke: "#4c1d95",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#vessel)" },
        children: [
          {
            tag: "ellipse",
            attrs: { cx: 17, cy: 24, rx: 6.6, ry: 1.8, fill: "url(#wax)" },
          },
          {
            tag: "ellipse",
            attrs: { cx: 15.6, cy: 20.4, rx: 3, ry: 2.4, fill: "url(#wax)" },
            loop: {
              values: {
                y: [0, -10, 0],
                scaleX: [1, 0.8, 1],
                scaleY: [1, 1.25, 1],
              },
              duration: 5,
              ease: "easeInOut",
              static: { y: -3, scaleX: 0.95, scaleY: 1.1 },
              hoverDuration: 2.2727272727272725,
            },
            origin: "15.6px 20.4px",
          },
          {
            tag: "ellipse",
            attrs: { cx: 19, cy: 12.4, rx: 2.2, ry: 1.9, fill: "url(#wax)" },
            loop: {
              values: {
                y: [0, 8, 0],
                scaleX: [1, 1.2, 1],
                scaleY: [1, 0.85, 1],
              },
              duration: 6,
              ease: "easeInOut",
              delay: 0.8,
              static: { y: 0, scaleX: 1, scaleY: 1 },
              hoverDuration: 2.727272727272727,
            },
            origin: "19px 12.4px",
          },
          {
            tag: "ellipse",
            attrs: { cx: 15, cy: 15.6, rx: 1.4, ry: 1.2, fill: "url(#wax)" },
            loop: {
              values: { y: [3, -5, 3], scale: [1, 1.2, 1] },
              duration: 4,
              ease: "easeInOut",
              delay: 0.4,
              static: { y: 0, scale: 1 },
              hoverDuration: 1.8181818181818181,
            },
            origin: "15px 15.6px",
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M13.6 9.2 L11.9 22.6",
          stroke: "#ffffff",
          strokeWidth: 0.8,
          strokeLinecap: "round",
          opacity: 0.35,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M14 3 H20 L21.2 8 H12.8 Z",
          fill: "url(#chrome)",
          stroke: "#1e293b",
          strokeWidth: 0.5,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12.2 24 H21.8 L24.4 31 H9.6 Z",
          fill: "url(#chrome)",
          stroke: "#1e293b",
          strokeWidth: 0.5,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M11.6 27 H22.4",
          stroke: "#1e293b",
          strokeWidth: 0.4,
          opacity: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M10.6 30 H23.4",
          stroke: "#ffffff",
          strokeWidth: 0.4,
          opacity: 0.4,
        },
      },
    ],
  },
  "disco-ball": {
    accent: "#e879f9",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(232,121,249,0.5))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "ball", cx: "38%", cy: "32%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.4, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 0.8, stopColor: "#64748b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e293b" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "shade", cx: "38%", cy: "32%", r: "72%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#ffffff", stopOpacity: 0.35 },
              },
              {
                tag: "stop",
                attrs: { offset: 0.55, stopColor: "#0f172a", stopOpacity: 0 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#0f172a", stopOpacity: 0.65 },
              },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "ballClip" },
            children: [{ tag: "circle", attrs: { cx: 17, cy: 17, r: 11 } }],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: { cx: 31.88, cy: 20.99, r: 0.9, fill: "#f472b6" },
          },
          {
            tag: "circle",
            attrs: { cx: 20.99, cy: 31.88, r: 0.9, fill: "#22d3ee" },
          },
          {
            tag: "circle",
            attrs: { cx: 6.11, cy: 27.89, r: 0.9, fill: "#fde047" },
          },
          {
            tag: "circle",
            attrs: { cx: 2.12, cy: 13.01, r: 0.9, fill: "#a78bfa" },
          },
          {
            tag: "circle",
            attrs: { cx: 13.01, cy: 2.12, r: 0.9, fill: "#4ade80" },
          },
          {
            tag: "circle",
            attrs: { cx: 27.89, cy: 6.11, r: 0.9, fill: "#fb923c" },
          },
        ],
        loop: {
          values: { rotate: [0, 360] },
          duration: 10,
          ease: "linear",
          hoverDuration: 3,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 17,
          y1: 0,
          x2: 17,
          y2: 5.4,
          stroke: "#94a3b8",
          strokeWidth: 0.6,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 15.6,
          y: 4.6,
          width: 2.8,
          height: 1.8,
          rx: 0.4,
          fill: "#94a3b8",
          stroke: "#334155",
          strokeWidth: 0.3,
        },
      },
      { tag: "circle", attrs: { cx: 17, cy: 17, r: 11, fill: "url(#ball)" } },
      {
        tag: "g",
        attrs: { clipPath: "url(#ballClip)" },
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 4.15,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 6.75,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 9.35,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 11.95,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 14.55,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 17.15,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 19.75,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 22.35,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 24.95,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 27.55,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 30.15,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 32.75,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 35.35,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 5.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 8.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 10.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 13.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 15.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 18.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 20.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#c4b5fd",
                  opacity: 0.67,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 23.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#f9a8d4",
                  opacity: 0.79,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 25.75,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#67e8f9",
                  opacity: 0.55,
                },
              },
              {
                tag: "rect",
                attrs: {
                  x: 37.95,
                  y: 28.25,
                  width: 2.3,
                  height: 2.2,
                  rx: 0.3,
                  fill: "#ffffff",
                  opacity: 0.67,
                },
              },
            ],
            loop: {
              values: { x: [0, -5.2] },
              duration: 1.6,
              ease: "linear",
              hoverDuration: 0.6,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 17,
              cy: 17,
              rx: 3.6,
              ry: 11,
              stroke: "#334155",
              strokeWidth: 0.3,
              opacity: 0.5,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 17,
              cy: 17,
              rx: 7.4,
              ry: 11,
              stroke: "#334155",
              strokeWidth: 0.3,
              opacity: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M6 9.4 H28 M6 12 H28 M6 14.6 H28 M6 17.2 H28 M6 19.8 H28 M6 22.4 H28 M6 25 H28",
              stroke: "#334155",
              strokeWidth: 0.3,
              opacity: 0.5,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 17, cy: 17, r: 11, fill: "url(#shade)" },
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 17, r: 11, stroke: "#334155", strokeWidth: 0.5 },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 13,
          cy: 11.6,
          rx: 2.6,
          ry: 1.6,
          fill: "#ffffff",
          opacity: 0.55,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12.4 8.8 Q12.4 11 14.6 11 Q12.4 11 12.4 13.2 Q12.4 11 10.2 11 Q12.4 11 12.4 8.8 Z",
          fill: "#ffffff",
        },
        loop: {
          values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
          duration: 1.4,
          ease: "easeInOut",
          static: { opacity: 1, scale: 1 },
        },
        origin: "12.4px 11px",
      },
      {
        tag: "path",
        attrs: {
          d: "M22.4 18.6 Q22.4 20.4 24.2 20.4 Q22.4 20.4 22.4 22.2 Q22.4 20.4 20.6 20.4 Q22.4 20.4 22.4 18.6 Z",
          fill: "#ffffff",
        },
        loop: {
          values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
          duration: 1.6,
          ease: "easeInOut",
          delay: 0.6,
          static: { opacity: 1, scale: 1 },
        },
        origin: "22.4px 20.4px",
      },
      {
        tag: "path",
        attrs: {
          d: "M19.6 8 Q19.6 9.4 21 9.4 Q19.6 9.4 19.6 10.8 Q19.6 9.4 18.2 9.4 Q19.6 9.4 19.6 8 Z",
          fill: "#fdf4ff",
        },
        loop: {
          values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
          duration: 1.2,
          ease: "easeInOut",
          delay: 1.1,
          static: { opacity: 1, scale: 1 },
        },
        origin: "19.6px 9.4px",
      },
    ],
  },
  "rubber-duck": {
    accent: "#facc15",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "duck", cx: "38%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef9c3" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#fde047" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ca8a04" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "beak", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fdba74" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#ea580c" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "wing", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde047" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#eab308" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "water", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#7dd3fc" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#2563eb" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "pond" },
            children: [
              { tag: "ellipse", attrs: { cx: 17, cy: 29, rx: 15, ry: 4.6 } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M29.6 8.6 q1 1 0 2 M31 7.6 q1.8 2 0 4",
          stroke: "#fbbf24",
          strokeWidth: 0.7,
          strokeLinecap: "round",
        },
        loop: {
          values: { opacity: [0, 0, 0] },
          duration: 0.5,
          ease: "easeInOut",
          hoverValues: { opacity: [0, 1, 0] },
          hoverDuration: 0.5,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M5 18.4 C6.6 19.6 8 19.8 9.4 19.2 C11.2 18.4 13 18.2 15.6 18.6 L24.4 18.6 C27.4 18.6 29 20.6 28.6 23.4 C28.2 26.6 24.6 28.4 17.4 28.4 C10 28.4 5.6 26.2 5 21.4 Z",
                  fill: "url(#duck)",
                  stroke: "#a16207",
                  strokeWidth: 0.6,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 22.4,
                  cy: 12.6,
                  r: 5.4,
                  fill: "url(#duck)",
                  stroke: "#a16207",
                  strokeWidth: 0.6,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M26.8 12.8 C29 12.2 31.4 12.6 31.8 13.8 C31.2 15.2 29 15.6 26.8 15 Z",
                  fill: "url(#beak)",
                  stroke: "#9a3412",
                  strokeWidth: 0.4,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M27 14 H31.4",
                  stroke: "#9a3412",
                  strokeWidth: 0.35,
                  opacity: 0.7,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 23.8, cy: 11, r: 0.95, fill: "#1c1917" },
              },
              {
                tag: "circle",
                attrs: { cx: 24.1, cy: 10.7, r: 0.32, fill: "#ffffff" },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 24.8,
                  cy: 14.2,
                  rx: 1,
                  ry: 0.6,
                  fill: "#fb923c",
                  opacity: 0.55,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M11.6 21.4 C14.4 19.8 18.8 20.2 20.6 22.4 C18.6 24.8 14 24.8 11.6 21.4 Z",
                  fill: "url(#wing)",
                  stroke: "#a16207",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M18.6 9.4 C19.4 8 21 7.2 22.6 7.2 M7.6 21 C8.4 20.2 9.6 19.8 10.8 19.8",
                  stroke: "#ffffff",
                  strokeWidth: 0.9,
                  strokeLinecap: "round",
                  opacity: 0.75,
                },
              },
            ],
            hover: { scaleY: 0.9, scaleX: 1.06 },
            origin: "17px 28px",
          },
        ],
        loop: {
          values: { rotate: [-4, 4, -4], y: [0, 0.8, 0] },
          duration: 2.2,
          ease: "easeInOut",
          hoverDuration: 1,
        },
        origin: "17px 26px",
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#pond)" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M-8 27 q2 -1.4 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 V34 H-8 Z",
              fill: "url(#water)",
              opacity: 0.88,
            },
            loop: {
              values: { x: [0, -8] },
              duration: 2,
              ease: "linear",
              hoverDuration: 1,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M-8 27.1 q2 -1.4 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0",
              stroke: "#e0f2fe",
              strokeWidth: 0.5,
              opacity: 0.8,
            },
            loop: {
              values: { x: [0, -8] },
              duration: 2,
              ease: "linear",
              hoverDuration: 1,
            },
          },
        ],
      },
    ],
  },
  owl: {
    accent: "#f59e0b",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "feathers", cx: "40%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#d6a77a" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#a16207" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#713f12" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "belly", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#fcd34d" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "iris", cx: "40%", cy: "35%", r: "65%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef08a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f59e0b" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "branch", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#a16207" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#57340d" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M1.6 29.6 C10 28.6 24 28.6 32.4 29.8",
          stroke: "url(#branch)",
          strokeWidth: 2.2,
          strokeLinecap: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M27 29.2 C28.4 27 30.6 26.4 32 27 C31 28.6 29 29.4 27 29.2 Z",
          fill: "#4ade80",
          stroke: "#15803d",
          strokeWidth: 0.35,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M9.8 9.2 L8.4 3.8 L12.8 7 Z",
              fill: "url(#feathers)",
              stroke: "#451a03",
              strokeWidth: 0.5,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M24.2 9.2 L25.6 3.8 L21.2 7 Z",
              fill: "url(#feathers)",
              stroke: "#451a03",
              strokeWidth: 0.5,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 5.6 C23.6 5.6 26.6 10.6 26.6 17 C26.6 23.6 23 28.4 17 28.4 C11 28.4 7.4 23.6 7.4 17 C7.4 10.6 10.4 5.6 17 5.6 Z",
              fill: "url(#feathers)",
              stroke: "#451a03",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M8 15 C6.6 19 7.6 24 10.6 26.6 C10 22 10 18 11 15.4 Z",
              fill: "#78350f",
              opacity: 0.8,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M26 15C27.4 19 26.4 24 23.4 26.6C24 22 24 18 23 15.4Z",
              fill: "#78350f",
              opacity: 0.8,
            },
          },
          {
            tag: "ellipse",
            attrs: { cx: 17, cy: 21.6, rx: 5.6, ry: 6, fill: "url(#belly)" },
          },
          {
            tag: "path",
            attrs: {
              d: "M14.2 19.6 l0.9 0.8 l0.9 -0.8 M18 19.6 l0.9 0.8 l0.9 -0.8 M16.1 22.4 l0.9 0.8 l0.9 -0.8 M14.2 25 l0.9 0.8 l0.9 -0.8 M18 25 l0.9 0.8 l0.9 -0.8",
              stroke: "#b45309",
              strokeWidth: 0.45,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 13.4,
              cy: 12.6,
              r: 3.9,
              fill: "#fef3c7",
              stroke: "#92400e",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 20.6,
              cy: 12.6,
              r: 3.9,
              fill: "#fef3c7",
              stroke: "#92400e",
              strokeWidth: 0.4,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "circle",
                    attrs: { cx: 13.4, cy: 12.6, r: 2.5, fill: "url(#iris)" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 20.6, cy: 12.6, r: 2.5, fill: "url(#iris)" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 13.6, cy: 12.8, r: 1.35, fill: "#1c1917" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 20.8, cy: 12.8, r: 1.35, fill: "#1c1917" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 14.1, cy: 12.2, r: 0.45, fill: "#ffffff" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 21.3, cy: 12.2, r: 0.45, fill: "#ffffff" },
                  },
                ],
                loop: {
                  values: { scaleY: [1, 1, 0.1, 1, 1] },
                  duration: 4.5,
                  ease: "easeInOut",
                  times: [0, 0.9, 0.93, 0.96, 1],
                },
                origin: "17px 12.6px",
              },
            ],
            hover: { scale: 1.15 },
            origin: "17px 12.6px",
          },
          {
            tag: "path",
            attrs: {
              d: "M16 14.6 H18 L17 17 Z",
              fill: "#f97316",
              stroke: "#9a3412",
              strokeWidth: 0.3,
              strokeLinejoin: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M14.4 28.6 v1.4 M15.6 28.6 v1.4 M18.4 28.6 v1.4 M19.6 28.6 v1.4",
              stroke: "#f97316",
              strokeWidth: 0.7,
              strokeLinecap: "round",
            },
          },
        ],
        loop: {
          values: { rotate: [-4, 4, -4] },
          duration: 3.2,
          ease: "easeInOut",
          hoverDuration: 1.4,
        },
        origin: "17px 28px",
      },
    ],
  },
  donut: {
    accent: "#f472b6",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,114,182,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "dough", cx: "50%", cy: "50%", r: "50%" },
            children: [
              { tag: "stop", attrs: { offset: 0.3, stopColor: "#92400e" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#fcd34d" } },
              { tag: "stop", attrs: { offset: 0.8, stopColor: "#d97706" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#92400e" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "icing", cx: "42%", cy: "38%", r: "65%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fdf2f8" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#f9a8d4" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#db2777" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M4 17 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 Z M12.6 17 a4.4 4.4 0 1 0 8.8 0 a4.4 4.4 0 1 0 -8.8 0 Z",
                  fill: "url(#dough)",
                  fillRule: "evenodd",
                  stroke: "#78350f",
                  strokeWidth: 0.6,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M27.6 17 L27.78 17.42 L27.92 17.86 L27.99 18.3 L27.96 18.74 L27.85 19.16 L27.65 19.56 L27.39 19.93 L27.08 20.28 L26.77 20.6 L26.47 20.92 L26.21 21.24 L26 21.59 L25.85 21.95 L25.74 22.35 L25.65 22.78 L25.58 23.23 L25.48 23.68 L25.34 24.13 L25.17 24.56 L24.99 24.99 L24.81 25.45 L24.64 25.94 L24.43 26.42 L24.09 26.76 L23.59 26.86 L22.96 26.73 L22.33 26.51 L21.77 26.36 L21.32 26.37 L20.94 26.52 L20.61 26.78 L20.28 27.09 L19.93 27.39 L19.56 27.65 L19.16 27.85 L18.74 27.96 L18.3 27.99 L17.86 27.92 L17.42 27.78 L17 27.6 L16.59 27.4 L16.2 27.21 L15.81 27.07 L15.42 26.98 L15.02 26.94 L14.61 26.96 L14.17 27.02 L13.72 27.09 L13.26 27.14 L12.78 27.18 L12.3 27.21 L11.78 27.25 L11.22 27.32 L10.67 27.34 L10.2 27.18 L9.91 26.76 L9.81 26.12 L9.82 25.41 L9.82 24.77 L9.72 24.28 L9.5 23.93 L9.19 23.67 L8.82 23.45 L8.42 23.23 L8.03 23 L7.66 22.72 L7.35 22.41 L7.11 22.04 L6.95 21.63 L6.88 21.19 L6.88 20.74 L6.92 20.28 L6.98 19.83 L7.04 19.39 L7.06 18.98 L7.02 18.58 L6.93 18.19 L6.79 17.8 L6.6 17.41 L6.4 17 L6.21 16.58 L6.07 16.14 L5.97 15.69 L5.91 15.24 L5.84 14.78 L5.73 14.3 L5.62 13.79 L5.6 13.3 L5.83 12.88 L6.31 12.57 L6.93 12.36 L7.51 12.16 L7.93 11.92 L8.18 11.59 L8.32 11.2 L8.42 10.76 L8.52 10.32 L8.67 9.89 L8.88 9.49 L9.15 9.15 L9.49 8.88 L9.89 8.67 L10.32 8.53 L10.77 8.42 L11.22 8.35 L11.65 8.26 L12.05 8.15 L12.41 8 L12.76 7.79 L13.08 7.53 L13.4 7.23 L13.72 6.92 L14.07 6.61 L14.44 6.35 L14.84 6.15 L15.26 6.04 L15.7 6.01 L16.14 6.08 L16.58 6.22 L17 6.4 L17.41 6.6 L17.8 6.79 L18.19 6.93 L18.58 7.02 L18.98 7.06 L19.39 7.03 L19.83 6.96 L20.3 6.84 L20.81 6.67 L21.37 6.44 L21.99 6.18 L22.61 6 L23.13 6.05 L23.47 6.44 L23.62 7.09 L23.65 7.84 L23.68 8.53 L23.76 9.09 L23.92 9.52 L24.15 9.85 L24.45 10.12 L24.79 10.35 L25.17 10.56 L25.58 10.77 L25.97 11 L26.34 11.28 L26.65 11.59 L26.89 11.96 L27.05 12.37 L27.12 12.81 L27.12 13.26 L27.08 13.72 L27.02 14.17 L26.96 14.61 L26.94 15.02 L26.98 15.42 L27.07 15.81 L27.21 16.2 L27.4 16.59 Z M11.8 17 a5.2 5.2 0 1 0 10.4 0 a5.2 5.2 0 1 0 -10.4 0 Z",
                  fill: "url(#icing)",
                  fillRule: "evenodd",
                  stroke: "#be185d",
                  strokeWidth: 0.5,
                  strokeLinejoin: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M24.74 16.29 L25.68 17.71 M19.11 25.25 L18.63 26.87 M25.31 14.77 L23.69 15.29 M25.78 13.39 L26.54 14.91",
                  stroke: "#fde047",
                  strokeWidth: 0.75,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M26.07 18.89 L26.55 20.53 M8.53 13.64 L9.79 14.78 M26.82 17.6 L25.42 18.56 M22.07 11.57 L21.23 13.05",
                  stroke: "#22d3ee",
                  strokeWidth: 0.75,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M8.7 15.24 L8.84 16.94 M12.79 25.82 L14.49 25.88 M23.51 14.18 L24.99 15.04 M25.63 13.69 L24.73 15.13",
                  stroke: "#a3e635",
                  strokeWidth: 0.75,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16.07 23.57 L15.01 24.91 M20.56 24.46 L19.5 25.8 M20.64 6.84 L19.5 8.1 M7.17 15.6 L7.53 17.26",
                  stroke: "#ffffff",
                  strokeWidth: 0.75,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M22.29 22.34 L21.83 23.98 M25.75 17.38 L24.15 17.98 M26.3 16.16 L26.66 17.82",
                  stroke: "#a78bfa",
                  strokeWidth: 0.75,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M19.88 9.71 L21.52 10.15 M10.41 15.24 L9.83 16.84 M15.87 25.75 L17.57 25.87",
                  stroke: "#fb923c",
                  strokeWidth: 0.75,
                  strokeLinecap: "round",
                },
              },
            ],
            loop: {
              values: { rotate: [0, 360] },
              duration: 14,
              ease: "linear",
              hoverDuration: 3,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M8.8 12.4 A9.6 9.6 0 0 1 14.6 7.6",
              stroke: "#ffffff",
              strokeWidth: 1.3,
              strokeLinecap: "round",
              opacity: 0.7,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 17,
              r: 4.4,
              stroke: "#78350f",
              strokeWidth: 0.6,
              opacity: 0.6,
            },
          },
        ],
        hover: { scale: 1.08 },
        origin: "17px 17px",
      },
    ],
  },
  boba: {
    accent: "#f472b6",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,114,182,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "tea", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde7c8" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#e7b98a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#c08552" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "pearl", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#78716c" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1c1917" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "lid", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#cbd5e1" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "cup" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M8.6 9.8 H25.4 L23.4 30 C23.3 30.8 22.7 31.4 21.9 31.4 H12.1 C11.3 31.4 10.7 30.8 10.6 30 Z",
                },
              },
            ],
          },
        ],
      },
      {
        tag: "line",
        attrs: {
          x1: 22.6,
          y1: 1.6,
          x2: 18.4,
          y2: 27,
          stroke: "#be185d",
          strokeWidth: 3,
          strokeLinecap: "round",
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 22.6,
          y1: 1.6,
          x2: 18.4,
          y2: 27,
          stroke: "#f472b6",
          strokeWidth: 2.2,
          strokeLinecap: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8.6 9.8 H25.4 L23.4 30 C23.3 30.8 22.7 31.4 21.9 31.4 H12.1 C11.3 31.4 10.7 30.8 10.6 30 Z",
          fill: "url(#tea)",
          opacity: 0.94,
        },
      },
      {
        tag: "g",
        attrs: { clipPath: "url(#cup)" },
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 13.4, cy: 29.4, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 13,
                  cy: 28.95,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 16, cy: 29.4, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 15.6,
                  cy: 28.95,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.1,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 18.6, cy: 29.4, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 18.2,
                  cy: 28.95,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.2,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 21.2, cy: 29.4, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 20.8,
                  cy: 28.95,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.3,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 12.8, cy: 27, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 12.4,
                  cy: 26.55,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.2,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 15.4, cy: 27, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 15,
                  cy: 26.55,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.3,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 18, cy: 27, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 17.6,
                  cy: 26.55,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.4,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 20.6, cy: 27, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 20.2,
                  cy: 26.55,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.5,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 14.2, cy: 24.8, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 13.8,
                  cy: 24.35,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.4,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 16.8, cy: 24.8, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 16.4,
                  cy: 24.35,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.5,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "circle",
                attrs: { cx: 19.4, cy: 24.8, r: 1.25, fill: "url(#pearl)" },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 19,
                  cy: 24.35,
                  r: 0.32,
                  fill: "#ffffff",
                  opacity: 0.8,
                },
              },
            ],
            loop: {
              values: { y: [0, -0.7, 0] },
              duration: 1.6,
              ease: "easeInOut",
              delay: 0.6,
              hoverValues: { y: [0, -2.4, 0] },
              hoverDuration: 0.6,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 18.6, cy: 25.4, r: 1.2, fill: "url(#pearl)" },
            loop: {
              values: { x: [0, 0, 0], y: [0, 0, 0], opacity: [0, 0, 0] },
              duration: 0.9,
              ease: "linear",
              hoverValues: {
                x: [0, 2.6, 3.4],
                y: [0, -15, -20],
                opacity: [1, 1, 0],
              },
              hoverDuration: 0.9,
            },
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M8.6 9.8 H25.4 L23.4 30 C23.3 30.8 22.7 31.4 21.9 31.4 H12.1 C11.3 31.4 10.7 30.8 10.6 30 Z",
          stroke: "#94a3b8",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M10.6 12 L12.1 28.6",
          stroke: "#ffffff",
          strokeWidth: 0.8,
          strokeLinecap: "round",
          opacity: 0.55,
        },
      },
      {
        tag: "circle",
        attrs: { cx: 14.6, cy: 17.4, r: 0.75, fill: "#451a03" },
      },
      {
        tag: "circle",
        attrs: { cx: 19.4, cy: 17.4, r: 0.75, fill: "#451a03" },
      },
      {
        tag: "circle",
        attrs: { cx: 14.85, cy: 17.15, r: 0.25, fill: "#ffffff" },
      },
      {
        tag: "circle",
        attrs: { cx: 19.65, cy: 17.15, r: 0.25, fill: "#ffffff" },
      },
      {
        tag: "path",
        attrs: {
          d: "M16.2 18.6 Q17 19.4 17.8 18.6",
          stroke: "#451a03",
          strokeWidth: 0.5,
          strokeLinecap: "round",
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 13.4,
          cy: 18.8,
          rx: 0.9,
          ry: 0.5,
          fill: "#fb7185",
          opacity: 0.7,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 20.6,
          cy: 18.8,
          rx: 0.9,
          ry: 0.5,
          fill: "#fb7185",
          opacity: 0.7,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 7.8,
          y: 8.4,
          width: 18.4,
          height: 2.2,
          rx: 1.1,
          fill: "url(#lid)",
          stroke: "#64748b",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 22.6,
          y1: 1.6,
          x2: 21.3,
          y2: 9.4,
          stroke: "#be185d",
          strokeWidth: 3,
          strokeLinecap: "round",
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 22.6,
          y1: 1.6,
          x2: 21.3,
          y2: 9.4,
          stroke: "#f472b6",
          strokeWidth: 2.2,
          strokeLinecap: "round",
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 22.3,
          y1: 2.4,
          x2: 21.4,
          y2: 7.8,
          stroke: "#fbcfe8",
          strokeWidth: 0.6,
          strokeLinecap: "round",
        },
      },
    ],
  },
  astronaut: {
    accent: "#818cf8",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(129,140,248,0.45))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "suit", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.6, stopColor: "#e2e8f0" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#94a3b8" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "visor", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#4338ca" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#1e1b4b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#7c3aed" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M4.4 4.4 Q4.4 6 6 6 Q4.4 6 4.4 7.6 Q4.4 6 2.8 6 Q4.4 6 4.4 4.4 Z",
          fill: "#fde68a",
        },
        loop: {
          values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
          duration: 2,
          ease: "easeInOut",
          static: { opacity: 1, scale: 1 },
        },
        origin: "4.4px 6px",
      },
      {
        tag: "path",
        attrs: {
          d: "M29.6 23.7 Q29.6 25 30.9 25 Q29.6 25 29.6 26.3 Q29.6 25 28.3 25 Q29.6 25 29.6 23.7 Z",
          fill: "#fde68a",
        },
        loop: {
          values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
          duration: 2,
          ease: "easeInOut",
          delay: 0.9,
          static: { opacity: 1, scale: 1 },
        },
        origin: "29.6px 25px",
      },
      {
        tag: "path",
        attrs: {
          d: "M28.8 4.2 Q28.8 5.2 29.8 5.2 Q28.8 5.2 28.8 6.2 Q28.8 5.2 27.8 5.2 Q28.8 5.2 28.8 4.2 Z",
          fill: "#c7d2fe",
        },
        loop: {
          values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
          duration: 2,
          ease: "easeInOut",
          delay: 1.5,
          static: { opacity: 1, scale: 1 },
        },
        origin: "28.8px 5.2px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 10.4,
              y: 16.4,
              width: 13.2,
              height: 9.6,
              rx: 2.4,
              fill: "#cbd5e1",
              stroke: "#475569",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 12.6,
              y: 24.4,
              width: 3.6,
              height: 5.4,
              rx: 1.6,
              fill: "url(#suit)",
              stroke: "#475569",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 17.8,
              y: 24.4,
              width: 3.6,
              height: 5.4,
              rx: 1.6,
              fill: "url(#suit)",
              stroke: "#475569",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12.6 28.4 H16.2 M17.8 28.4 H21.4",
              stroke: "#818cf8",
              strokeWidth: 0.9,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 11.4,
              y: 17.4,
              width: 11.2,
              height: 8.4,
              rx: 3.6,
              fill: "url(#suit)",
              stroke: "#475569",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 14.6,
              y: 19.8,
              width: 4.8,
              height: 3,
              rx: 0.6,
              fill: "#e2e8f0",
              stroke: "#64748b",
              strokeWidth: 0.35,
            },
          },
          {
            tag: "circle",
            attrs: { cx: 15.6, cy: 21.3, r: 0.5, fill: "#ef4444" },
          },
          {
            tag: "circle",
            attrs: { cx: 17, cy: 21.3, r: 0.5, fill: "#22c55e" },
          },
          {
            tag: "circle",
            attrs: { cx: 18.4, cy: 21.3, r: 0.5, fill: "#3b82f6" },
          },
          {
            tag: "path",
            attrs: {
              d: "M11.6 19 C9.4 19.6 8 21.4 8.2 23.4",
              stroke: "#475569",
              strokeWidth: 3.2,
              strokeLinecap: "round",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M11.6 19 C9.4 19.6 8 21.4 8.2 23.4",
              stroke: "url(#suit)",
              strokeWidth: 2.4,
              strokeLinecap: "round",
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M22.4 19 C24.6 18.4 25.8 16.6 25.8 14.4",
                  stroke: "#475569",
                  strokeWidth: 3.2,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M22.4 19 C24.6 18.4 25.8 16.6 25.8 14.4",
                  stroke: "url(#suit)",
                  strokeWidth: 2.4,
                  strokeLinecap: "round",
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 25.8,
                  cy: 13.8,
                  r: 1.3,
                  fill: "#818cf8",
                  stroke: "#3730a3",
                  strokeWidth: 0.4,
                },
              },
            ],
            loop: {
              values: { rotate: [0, 0, 0] },
              duration: 0.5,
              ease: "easeInOut",
              hoverValues: { rotate: [0, -24, 0] },
              hoverDuration: 0.5,
            },
            origin: "22.4px 19px",
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 11.8,
              r: 7.6,
              fill: "url(#suit)",
              stroke: "#475569",
              strokeWidth: 0.6,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M11.8 12.2 C11.8 9 14 7.2 17 7.2 C20 7.2 22.2 9 22.2 12.2 C22.2 15 20.2 16.4 17 16.4 C13.8 16.4 11.8 15 11.8 12.2 Z",
              fill: "url(#visor)",
              stroke: "#1e1b4b",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13.6 10.6 C14.2 9 15.6 8.4 17 8.4",
              stroke: "#ffffff",
              strokeWidth: 1,
              strokeLinecap: "round",
              opacity: 0.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 19.6,
              cy: 13.8,
              r: 0.4,
              fill: "#ffffff",
              opacity: 0.8,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 20.8,
              cy: 12.4,
              r: 0.25,
              fill: "#ffffff",
              opacity: 0.7,
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 21.8,
              y1: 6.4,
              x2: 23.6,
              y2: 3.4,
              stroke: "#64748b",
              strokeWidth: 0.6,
              strokeLinecap: "round",
            },
          },
          {
            tag: "circle",
            attrs: { cx: 23.8, cy: 3, r: 0.9, fill: "#f43f5e" },
            loop: {
              values: { opacity: [1, 0.25, 1] },
              duration: 1.2,
              ease: "easeInOut",
              hoverDuration: 0.5,
            },
          },
        ],
        loop: {
          values: { rotate: [-8, 8, -8], y: [0, -1.4, 0] },
          duration: 4,
          ease: "easeInOut",
          hoverDuration: 2,
        },
        origin: "17px 17px",
      },
    ],
  },
  "soap-bubble": {
    accent: "#22d3ee",
    filter:
      "drop-shadow(0 0 0.6px rgba(15,23,42,0.45)) drop-shadow(0 0 6px rgba(34,211,238,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "film", cx: "45%", cy: "40%", r: "60%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#ffffff", stopOpacity: 0.04 },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.75,
                  stopColor: "#e0f2fe",
                  stopOpacity: 0.12,
                },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#bae6fd", stopOpacity: 0.45 },
              },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 28.4,
              cy: 26,
              r: 2,
              fill: "#e0f2fe",
              fillOpacity: 0.15,
              stroke: "#7dd3fc",
              strokeWidth: 0.45,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M27.27 25.59 A1.2 1.2 0 0 1 27.99 24.87",
              stroke: "#ffffff",
              strokeWidth: 0.4,
              strokeLinecap: "round",
            },
          },
        ],
        loop: {
          values: { y: [0, -5, -10], opacity: [0, 1, 0] },
          duration: 3,
          ease: "linear",
          delay: 0.6,
          static: { y: -3, opacity: 1 },
          hoverDuration: 1.6,
        },
        origin: "28.4px 26px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 6.4,
              cy: 25,
              r: 1.3,
              fill: "#e0f2fe",
              fillOpacity: 0.15,
              stroke: "#7dd3fc",
              strokeWidth: 0.45,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M5.67 24.73 A0.78 0.78 0 0 1 6.13 24.27",
              stroke: "#ffffff",
              strokeWidth: 0.4,
              strokeLinecap: "round",
            },
          },
        ],
        loop: {
          values: { y: [0, -5, -10], opacity: [0, 1, 0] },
          duration: 3,
          ease: "linear",
          delay: 1.8,
          static: { y: -3, opacity: 1 },
          hoverDuration: 1.6,
        },
        origin: "6.4px 25px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: { cx: 17, cy: 16, r: 11, fill: "url(#film)" },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M7.51 12.55 A10.1 10.1 0 0 1 17.88 5.94",
                  stroke: "#f472b6",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                  opacity: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M7.64 11.02 A10.6 10.6 0 0 1 16.45 5.41",
                  stroke: "#f472b6",
                  strokeWidth: 0.8,
                  strokeLinecap: "round",
                  opacity: 0.85,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M19.61 6.24 A10.1 10.1 0 0 1 27.06 15.12",
                  stroke: "#22d3ee",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                  opacity: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M21.14 6.24 A10.6 10.6 0 0 1 27.33 13.62",
                  stroke: "#22d3ee",
                  strokeWidth: 0.8,
                  strokeLinecap: "round",
                  opacity: 0.85,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M26.95 17.75 A10.1 10.1 0 0 1 18.75 25.95",
                  stroke: "#fde047",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                  opacity: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M27.08 19.28 A10.6 10.6 0 0 1 20.28 26.08",
                  stroke: "#fde047",
                  strokeWidth: 0.8,
                  strokeLinecap: "round",
                  opacity: 0.85,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M16.12 26.06 A10.1 10.1 0 0 1 6.94 16.88",
                  stroke: "#a78bfa",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                  opacity: 0.4,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M14.62 26.33 A10.6 10.6 0 0 1 6.67 18.38",
                  stroke: "#a78bfa",
                  strokeWidth: 0.8,
                  strokeLinecap: "round",
                  opacity: 0.85,
                },
              },
            ],
            loop: {
              values: { rotate: [0, 360] },
              duration: 6,
              ease: "linear",
              hoverDuration: 1.8,
            },
            origin: "17px 16px",
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 16,
              r: 11,
              stroke: "#bae6fd",
              strokeWidth: 0.6,
              opacity: 0.9,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M10.4 11.6 C11.2 9.2 13.2 7.6 15.6 7.2",
              stroke: "#ffffff",
              strokeWidth: 1.6,
              strokeLinecap: "round",
              opacity: 0.95,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 10.2,
              cy: 13.8,
              r: 0.6,
              fill: "#ffffff",
              opacity: 0.9,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M24.89 18.87 A8.4 8.4 0 0 1 19.87 23.89",
              stroke: "#ffffff",
              strokeWidth: 0.8,
              strokeLinecap: "round",
              opacity: 0.55,
            },
          },
        ],
        loop: {
          values: { scaleX: [1, 1.05, 0.97, 1], scaleY: [1, 0.95, 1.03, 1] },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: { scaleX: [1, 1.1, 0.93, 1], scaleY: [1, 0.9, 1.07, 1] },
          hoverDuration: 0.8,
        },
        origin: "17px 16px",
      },
    ],
  },
  "crystal-ball": {
    accent: "#a855f7",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(168,85,247,0.55))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "orb", cx: "40%", cy: "35%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ede9fe" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#7c3aed" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#1e1b4b" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "aura", cx: "50%", cy: "50%", r: "50%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0.6, stopColor: "#c084fc", stopOpacity: 0.45 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#c084fc", stopOpacity: 0 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "gold", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#78350f" } },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "orbClip" },
            children: [{ tag: "circle", attrs: { cx: 17, cy: 14, r: 10 } }],
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 17, cy: 14, r: 13, fill: "url(#aura)" },
        loop: {
          values: { scale: [0.92, 1.06, 0.92], opacity: [0.6, 1, 0.6] },
          duration: 2.6,
          ease: "easeInOut",
          hoverDuration: 1,
        },
        origin: "17px 14px",
      },
      { tag: "circle", attrs: { cx: 17, cy: 14, r: 10, fill: "url(#orb)" } },
      {
        tag: "g",
        attrs: { clipPath: "url(#orbClip)" },
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "ellipse",
                attrs: {
                  cx: 13,
                  cy: 11.6,
                  rx: 6,
                  ry: 3.2,
                  fill: "#c084fc",
                  opacity: 0.55,
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 21.4,
                  cy: 17,
                  rx: 5,
                  ry: 2.6,
                  fill: "#22d3ee",
                  opacity: 0.4,
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 15.4,
                  cy: 19,
                  rx: 4,
                  ry: 2,
                  fill: "#f0abfc",
                  opacity: 0.45,
                },
              },
            ],
            loop: {
              values: { rotate: [0, 360] },
              duration: 8,
              ease: "linear",
              hoverDuration: 2.4,
            },
            origin: "17px 14px",
          },
          {
            tag: "path",
            attrs: {
              d: "M17.5 14 L17.59 14.09 L17.67 14.22 L17.72 14.37 L17.73 14.53 L17.71 14.71 L17.65 14.9 L17.55 15.08 L17.41 15.25 L17.22 15.4 L17 15.52 L16.75 15.6 L16.47 15.63 L16.17 15.62 L15.87 15.55 L15.57 15.43 L15.28 15.25 L15.02 15.01 L14.79 14.72 L14.6 14.38 L14.47 14 L14.4 13.59 L14.4 13.16 L14.47 12.71 L14.62 12.27 L14.85 11.85 L15.15 11.46 L15.53 11.11 L15.97 10.82 L16.46 10.6 L17 10.45 L17.57 10.4 L18.16 10.43 L18.75 10.57 L19.32 10.8 L19.87 11.13 L20.36 11.56 L20.79 12.07 L21.15 12.65 L21.41 13.3 L21.56 14 L21.61 14.73 L21.53 15.47 L21.34 16.21 L21.02 16.92 L20.59 17.59 L20.04 18.18 L19.39 18.7 L18.66 19.11 L17.86 19.41 L17 19.58 L16.11 19.61 L15.21 19.5 L14.33 19.24 L13.48 18.84 L12.7 18.3 L11.99 17.64 L11.4 16.86 L10.92 15.97 L10.59 15.02 L10.41 14 L10.39 12.95 L10.54 11.9 L10.85 10.87 L11.34 9.89",
              stroke: "#ffffff",
              strokeWidth: 0.6,
              strokeLinecap: "round",
              opacity: 0.35,
            },
            loop: {
              values: { rotate: [0, -360] },
              duration: 5,
              ease: "linear",
              hoverDuration: 1.5,
            },
            origin: "17px 14px",
          },
          {
            tag: "path",
            attrs: {
              d: "M13.4 14.4 Q13.4 15.6 14.6 15.6 Q13.4 15.6 13.4 16.8 Q13.4 15.6 12.2 15.6 Q13.4 15.6 13.4 14.4 Z",
              fill: "#ffffff",
            },
            loop: {
              values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
              duration: 1.6,
              ease: "easeInOut",
              static: { opacity: 1, scale: 1 },
            },
            origin: "13.4px 15.6px",
          },
          {
            tag: "path",
            attrs: {
              d: "M20.4 9.4 Q20.4 10.4 21.4 10.4 Q20.4 10.4 20.4 11.4 Q20.4 10.4 19.4 10.4 Q20.4 10.4 20.4 9.4 Z",
              fill: "#ffffff",
            },
            loop: {
              values: { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] },
              duration: 1.4,
              ease: "easeInOut",
              delay: 0.7,
              static: { opacity: 1, scale: 1 },
            },
            origin: "20.4px 10.4px",
          },
          {
            tag: "path",
            attrs: {
              d: "M17 9.6 Q17 14 21.4 14 Q17 14 17 18.4 Q17 14 12.6 14 Q17 14 17 9.6 Z",
              fill: "#ffffff",
            },
            hover: { opacity: 1, scale: 1.1 },
            origin: "17px 14px",
          },
        ],
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 14,
          r: 10,
          stroke: "#ddd6fe",
          strokeWidth: 0.6,
          opacity: 0.8,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M9.6 10.4 C10.6 7.6 13 5.6 15.8 5.2",
          stroke: "#ffffff",
          strokeWidth: 1.4,
          strokeLinecap: "round",
          opacity: 0.8,
        },
      },
      {
        tag: "ellipse",
        attrs: { cx: 17, cy: 23.8, rx: 6.4, ry: 1.6, fill: "#92400e" },
      },
      {
        tag: "path",
        attrs: {
          d: "M10.4 23.6 C12.6 25.4 21.4 25.4 23.6 23.6 L25.2 28.8 C25.4 29.8 24.8 30.6 23.8 30.6 H10.2 C9.2 30.6 8.6 29.8 8.8 28.8 Z",
          fill: "url(#gold)",
          stroke: "#78350f",
          strokeWidth: 0.6,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M10 28.2 H24",
          stroke: "#fef3c7",
          strokeWidth: 0.5,
          opacity: 0.6,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 27.2,
          r: 0.9,
          fill: "#a855f7",
          stroke: "#581c87",
          strokeWidth: 0.3,
        },
      },
    ],
  },
  magnifier: {
    accent: "#38bdf8",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "brass", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fef3c7" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#f59e0b" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#78350f" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "handle", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#9a3412" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#431407" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "lens", cx: "40%", cy: "35%", r: "70%" },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#f0f9ff", stopOpacity: 0.85 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#7dd3fc", stopOpacity: 0.55 },
              },
            ],
          },
          {
            tag: "clipPath",
            attrs: { id: "lensClip" },
            children: [{ tag: "circle", attrs: { cx: 14, cy: 14, r: 7.6 } }],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M19.2 21.6 L27.59 30.41 L30.41 27.59 L21.6 19.2 Z",
          fill: "url(#handle)",
          stroke: "#1c1917",
          strokeWidth: 0.5,
          strokeLinejoin: "round",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 29,
          cy: 29,
          r: 2,
          fill: "url(#handle)",
          stroke: "#1c1917",
          strokeWidth: 0.5,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M18.27 20.53 L20.4 22.8 L22.8 20.4 L20.53 18.27 Z",
          fill: "url(#brass)",
          stroke: "#78350f",
          strokeWidth: 0.4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M22.6 23.8 L27.4 28.6",
          stroke: "#fdba74",
          strokeWidth: 0.6,
          strokeLinecap: "round",
          opacity: 0.5,
        },
      },
      { tag: "circle", attrs: { cx: 14, cy: 14, r: 7.6, fill: "url(#lens)" } },
      {
        tag: "g",
        attrs: { clipPath: "url(#lensClip)" },
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "path",
                    attrs: {
                      d: "M0.68 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M0.68 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M2.88 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M5.08 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M7.28 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M9.48 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M11.68 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M13.88 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M16.08 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M18.28 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M20.48 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M22.68 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M24.88 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M27.08 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 1 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 3.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 5.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 7.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 9.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 12 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 14.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 16.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 18.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 20.8 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 23 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 25.2 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 27.4 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z M29.28 29.6 a0.32 0.32 0 1 0 0.64 0 a0.32 0.32 0 1 0 -0.64 0 Z",
                      fill: "#0ea5e9",
                      opacity: 0.35,
                    },
                  },
                  {
                    tag: "path",
                    attrs: {
                      d: "M13 10.2 L13.71 12.03 L15.66 12.13 L14.14 13.37 L14.65 15.27 L13 14.2 L11.35 15.27 L11.86 13.37 L10.34 12.13 L12.29 12.03 Z",
                      fill: "#facc15",
                      stroke: "#a16207",
                      strokeWidth: 0.35,
                    },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 18.6, cy: 17.4, r: 1.3, fill: "#f472b6" },
                  },
                  {
                    tag: "circle",
                    attrs: { cx: 9.4, cy: 18.4, r: 0.9, fill: "#4ade80" },
                  },
                ],
                loop: {
                  values: { x: [-2, 2, -2], y: [1.2, -1.2, 1.2] },
                  duration: 4,
                  ease: "easeInOut",
                  hoverDuration: 2,
                },
              },
            ],
            hover: { scale: 1.4 },
            origin: "14px 14px",
          },
        ],
      },
      {
        tag: "circle",
        attrs: { cx: 14, cy: 14, r: 8.3, stroke: "#78350f", strokeWidth: 2.6 },
      },
      {
        tag: "circle",
        attrs: {
          cx: 14,
          cy: 14,
          r: 8.3,
          stroke: "url(#brass)",
          strokeWidth: 1.8,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8.6 11 A6 6 0 0 1 12 7.6",
          stroke: "#ffffff",
          strokeWidth: 1.2,
          strokeLinecap: "round",
          opacity: 0.85,
        },
      },
    ],
  },
  pufferfish: {
    accent: "#22d3ee",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,211,238,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "puffer", cx: "40%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ecfeff" } },
              { tag: "stop", attrs: { offset: 0.45, stopColor: "#67e8f9" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#0e7490" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "belly", x1: 0, y1: 0, x2: 0, y2: 1 },
            children: [
              {
                tag: "stop",
                attrs: { offset: 0, stopColor: "#ffffff", stopOpacity: 0 },
              },
              {
                tag: "stop",
                attrs: { offset: 1, stopColor: "#ffffff", stopOpacity: 0.9 },
              },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "fin", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#f59e0b" } },
            ],
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "g",
                attrs: {},
                children: [
                  {
                    tag: "path",
                    attrs: {
                      d: "M25.14 16 L28 17 L25.14 18 Z M24.99 18.84 L27.34 20.76 L24.31 20.72 Z M23.88 21.47 L25.43 24.07 L22.59 23 Z M21.93 23.55 L22.5 26.53 L20.2 24.55 Z M19.4 24.84 L18.91 27.83 L17.43 25.19 Z M16.57 25.19 L15.09 27.83 L14.6 24.84 Z M13.8 24.55 L11.5 26.53 L12.07 23.55 Z M11.41 23 L8.57 24.07 L10.12 21.47 Z M9.69 20.72 L6.66 20.76 L9.01 18.84 Z M8.86 18 L6 17 L8.86 16 Z M9.01 15.16 L6.66 13.24 L9.69 13.28 Z M10.12 12.53 L8.57 9.93 L11.41 11 Z M12.07 10.45 L11.5 7.47 L13.8 9.45 Z M14.6 9.16 L15.09 6.17 L16.57 8.81 Z M17.43 8.81 L18.91 6.17 L19.4 9.16 Z M20.2 9.45 L22.5 7.47 L21.93 10.45 Z M22.59 11 L25.43 9.93 L23.88 12.53 Z M24.31 13.28 L27.34 13.24 L24.99 15.16 Z",
                      fill: "#cffafe",
                      stroke: "#0e7490",
                      strokeWidth: 0.4,
                      strokeLinejoin: "round",
                    },
                  },
                ],
                hover: { scale: 1.14 },
                origin: "17px 17px",
              },
              {
                tag: "path",
                attrs: {
                  d: "M8.6 17 C6.4 14.6 4.4 14.4 3.2 15 C3.8 16.4 3.8 17.6 3.2 19 C4.4 19.6 6.4 19.4 8.6 17 Z",
                  fill: "url(#fin)",
                  stroke: "#b45309",
                  strokeWidth: 0.4,
                },
                loop: {
                  values: { rotate: [-10, 10, -10] },
                  duration: 0.8,
                  ease: "easeInOut",
                  hoverDuration: 0.3,
                },
                origin: "8.6px 17px",
              },
              {
                tag: "circle",
                attrs: {
                  cx: 17,
                  cy: 17,
                  r: 8.6,
                  fill: "url(#puffer)",
                  stroke: "#155e75",
                  strokeWidth: 0.6,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M9 18.4 C10.4 23.6 23.6 23.6 25 18.4 C24 24.8 10 24.8 9 18.4 Z",
                  fill: "#ffffff",
                  opacity: 0.55,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 13,
                  cy: 11.6,
                  r: 0.7,
                  fill: "#155e75",
                  opacity: 0.6,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 16.4,
                  cy: 10,
                  r: 0.55,
                  fill: "#155e75",
                  opacity: 0.6,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 20.2,
                  cy: 10.8,
                  r: 0.65,
                  fill: "#155e75",
                  opacity: 0.6,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 22.6,
                  cy: 13.4,
                  r: 0.5,
                  fill: "#155e75",
                  opacity: 0.6,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 14.2,
                  cy: 15.2,
                  r: 2.3,
                  fill: "#ffffff",
                  stroke: "#155e75",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 20.2,
                  cy: 15.2,
                  r: 2.3,
                  fill: "#ffffff",
                  stroke: "#155e75",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "circle",
                attrs: { cx: 14.6, cy: 15.5, r: 1.2, fill: "#0f172a" },
              },
              {
                tag: "circle",
                attrs: { cx: 20.6, cy: 15.5, r: 1.2, fill: "#0f172a" },
              },
              {
                tag: "circle",
                attrs: { cx: 15, cy: 15, r: 0.4, fill: "#ffffff" },
              },
              {
                tag: "circle",
                attrs: { cx: 21, cy: 15, r: 0.4, fill: "#ffffff" },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 17.2,
                  cy: 19.6,
                  rx: 1,
                  ry: 0.85,
                  fill: "#fb7185",
                  stroke: "#be123c",
                  strokeWidth: 0.4,
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 12,
                  cy: 18.4,
                  rx: 0.9,
                  ry: 0.55,
                  fill: "#fda4af",
                  opacity: 0.8,
                },
              },
              {
                tag: "ellipse",
                attrs: {
                  cx: 22.4,
                  cy: 18.4,
                  rx: 0.9,
                  ry: 0.55,
                  fill: "#fda4af",
                  opacity: 0.8,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M11 11.4 C12 9.6 13.8 8.6 15.6 8.4",
                  stroke: "#ffffff",
                  strokeWidth: 1.1,
                  strokeLinecap: "round",
                  opacity: 0.75,
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M23.6 21 C25.6 21.6 27 23 27.2 24.6 C25.6 24.6 24.2 23.6 23.2 22 Z",
                  fill: "url(#fin)",
                  stroke: "#b45309",
                  strokeWidth: 0.35,
                },
                loop: {
                  values: { rotate: [-14, 14, -14] },
                  duration: 0.6,
                  ease: "easeInOut",
                  hoverDuration: 0.25,
                },
                origin: "23.6px 21.4px",
              },
            ],
            hover: { scale: 1.3 },
            origin: "17px 17px",
          },
        ],
        loop: {
          values: { y: [0, -1.2, 0], rotate: [-3, 3, -3] },
          duration: 2.6,
          ease: "easeInOut",
          hoverDuration: 1.2,
        },
        origin: "17px 17px",
      },
    ],
  },
  pinwheel: {
    accent: "#f472b6",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,114,182,0.35))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: { id: "stick", x1: 0, y1: 0, x2: 1, y2: 0 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fde68a" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#b45309" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M2.4 9 q2 -1 4 0 M1.6 13 q2.4 -1 4.8 0 M2.4 17 q2 -1 4 0",
          stroke: "#7dd3fc",
          strokeWidth: 0.7,
          strokeLinecap: "round",
        },
        loop: {
          values: { x: [-1.5, 1.5], opacity: [0, 1] },
          duration: 1,
          ease: "linear",
          static: { x: 0, opacity: 0.8 },
          hoverDuration: 0.4,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 17,
          y1: 13,
          x2: 17,
          y2: 32,
          stroke: "#78350f",
          strokeWidth: 2,
          strokeLinecap: "round",
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 17,
          y1: 13,
          x2: 17,
          y2: 32,
          stroke: "url(#stick)",
          strokeWidth: 1.3,
          strokeLinecap: "round",
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z",
              fill: "#f472b6",
              stroke: "#be185d",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
              transform: "rotate(0 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z",
              fill: "#be185d",
              opacity: 0.55,
              transform: "rotate(0 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z",
              fill: "#fde047",
              stroke: "#ca8a04",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
              transform: "rotate(90 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z",
              fill: "#ca8a04",
              opacity: 0.55,
              transform: "rotate(90 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z",
              fill: "#22d3ee",
              stroke: "#0e7490",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
              transform: "rotate(180 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z",
              fill: "#0e7490",
              opacity: 0.55,
              transform: "rotate(180 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z",
              fill: "#a78bfa",
              stroke: "#6d28d9",
              strokeWidth: 0.4,
              strokeLinejoin: "round",
              transform: "rotate(270 17 13)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z",
              fill: "#6d28d9",
              opacity: 0.55,
              transform: "rotate(270 17 13)",
            },
          },
        ],
        loop: {
          values: { rotate: [0, 360] },
          duration: 2.4,
          ease: "linear",
          hoverDuration: 0.5,
        },
        origin: "17px 13px",
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 13,
          r: 1.6,
          fill: "#ffffff",
          stroke: "#64748b",
          strokeWidth: 0.4,
        },
      },
      { tag: "circle", attrs: { cx: 17, cy: 13, r: 0.6, fill: "#64748b" } },
    ],
  },
  "alarm-clock": {
    accent: "#ef4444",
    filter:
      "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.4))",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "radialGradient",
            attrs: { id: "body", cx: "38%", cy: "30%", r: "75%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#fecaca" } },
              { tag: "stop", attrs: { offset: 0.4, stopColor: "#ef4444" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#7f1d1d" } },
            ],
          },
          {
            tag: "linearGradient",
            attrs: { id: "bell", x1: 0, y1: 0, x2: 1, y2: 1 },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 0.5, stopColor: "#cbd5e1" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#475569" } },
            ],
          },
          {
            tag: "radialGradient",
            attrs: { id: "face", cx: "45%", cy: "40%", r: "70%" },
            children: [
              { tag: "stop", attrs: { offset: 0, stopColor: "#ffffff" } },
              { tag: "stop", attrs: { offset: 1, stopColor: "#e2e8f0" } },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M3.4 9 q-1.6 2.6 0 5.2 M1.6 7.6 q-2.4 4 0 8 M30.6 9 q1.6 2.6 0 5.2 M32.4 7.6 q2.4 4 0 8",
          stroke: "#fbbf24",
          strokeWidth: 0.8,
          strokeLinecap: "round",
        },
        loop: {
          values: { opacity: [0, 0, 0] },
          duration: 0.4,
          ease: "easeInOut",
          hoverValues: { opacity: [0.2, 1, 0.2] },
          hoverDuration: 0.3,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M10.6 26.6 L8.6 30.6 M23.4 26.6 L25.4 30.6",
              stroke: "#334155",
              strokeWidth: 1.6,
              strokeLinecap: "round",
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 9.4,
              cy: 8.4,
              rx: 4.2,
              ry: 3.6,
              fill: "url(#bell)",
              stroke: "#334155",
              strokeWidth: 0.5,
              transform: "rotate(-38 9.4 8.4)",
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 24.6,
              cy: 8.4,
              rx: 4.2,
              ry: 3.6,
              fill: "url(#bell)",
              stroke: "#334155",
              strokeWidth: 0.5,
              transform: "rotate(38 24.6 8.4)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M10 6.6 C12.6 3.6 21.4 3.6 24 6.6",
              stroke: "#64748b",
              strokeWidth: 0.9,
              strokeLinecap: "round",
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "line",
                attrs: {
                  x1: 17,
                  y1: 4.6,
                  x2: 17,
                  y2: 2,
                  stroke: "#64748b",
                  strokeWidth: 0.8,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 17,
                  cy: 1.8,
                  r: 0.9,
                  fill: "url(#bell)",
                  stroke: "#334155",
                  strokeWidth: 0.3,
                },
              },
            ],
            loop: {
              values: { rotate: [0, 0, 0] },
              duration: 0.12,
              ease: "easeInOut",
              hoverValues: { rotate: [-26, 26, -26] },
              hoverDuration: 0.12,
            },
            origin: "17px 4.6px",
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 18,
              r: 10.4,
              fill: "url(#body)",
              stroke: "#7f1d1d",
              strokeWidth: 0.7,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 18,
              r: 8,
              fill: "url(#face)",
              stroke: "#b91c1c",
              strokeWidth: 0.5,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M24.2 18 L23 18 M23.24 21.6 L22.63 21.25 M20.6 24.24 L20.25 23.63 M17 25.2 L17 24 M13.4 24.24 L13.75 23.63 M10.76 21.6 L11.37 21.25 M9.8 18 L11 18 M10.76 14.4 L11.37 14.75 M13.4 11.76 L13.75 12.37 M17 10.8 L17 12 M20.6 11.76 L20.25 12.37 M23.24 14.4 L22.63 14.75",
              stroke: "#334155",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 17,
              y1: 18,
              x2: 13.71,
              y2: 16.1,
              stroke: "#1e293b",
              strokeWidth: 1,
              strokeLinecap: "round",
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 17,
              y1: 18,
              x2: 17,
              y2: 12,
              stroke: "#1e293b",
              strokeWidth: 0.7,
              strokeLinecap: "round",
            },
            loop: {
              values: { rotate: [0, 360] },
              duration: 12,
              ease: "linear",
              hoverDuration: 2,
            },
            origin: "17px 18px",
          },
          {
            tag: "line",
            attrs: {
              x1: 17,
              y1: 19.4,
              x2: 17,
              y2: 11.4,
              stroke: "#ef4444",
              strokeWidth: 0.4,
              strokeLinecap: "round",
            },
            loop: {
              values: { rotate: [0, 360] },
              duration: 3,
              ease: "linear",
              hoverDuration: 0.6,
            },
            origin: "17px 18px",
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 18,
              r: 0.8,
              fill: "#ef4444",
              stroke: "#7f1d1d",
              strokeWidth: 0.3,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M9.6 13.4 C10.8 10.8 13.2 9 16 8.6",
              stroke: "#ffffff",
              strokeWidth: 1.1,
              strokeLinecap: "round",
              opacity: 0.6,
            },
          },
        ],
        loop: {
          values: { rotate: [0, 1.2, 0, -1.2, 0] },
          duration: 1,
          ease: "easeInOut",
          hoverValues: { rotate: [0, 8, -8, 6, 0] },
          hoverDuration: 0.2,
        },
        origin: "17px 29px",
      },
    ],
  },
};
