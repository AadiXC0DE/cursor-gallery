// Artwork and motion plans for the self-contained vanilla exports.
// The React source files remain independent so they can be copied directly.
export interface ArtworkLoop {
  values: Record<string, number[]>;
  duration: number;
  ease: "linear" | "easeInOut";
  times?: number[];
  delay?: number;
  static?: Record<string, number>;
  hoverDuration?: number;
  hoverValues?: Record<string, number[]>;
  springReturn?: boolean;
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
  nodes: ArtworkNode[];
  glow?: boolean;
}

export const CURSOR_ARTWORK: Record<string, CursorArtwork> = {
  jellyfish: {
    accent: "#2dd4bf",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M10 18 C7 22 13 25 10 29",
        },
        loop: {
          values: {
            rotate: [0, 5, 0, -5, 0],
          },
          duration: 2.8,
          ease: "easeInOut",
          hoverDuration: 1.5,
        },
        origin: "17px 18px",
      },
      {
        tag: "path",
        attrs: {
          d: "M17 18 C14 22 20 25 17 29",
        },
        loop: {
          values: {
            rotate: [0, 5, 0, -5, 0],
          },
          duration: 2.8,
          ease: "easeInOut",
          hoverDuration: 1.5,
        },
        origin: "17px 18px",
      },
      {
        tag: "path",
        attrs: {
          d: "M24 18 C21 22 27 25 24 29",
        },
        loop: {
          values: {
            rotate: [0, 5, 0, -5, 0],
          },
          duration: 2.8,
          ease: "easeInOut",
          hoverDuration: 1.5,
        },
        origin: "17px 18px",
      },
      {
        tag: "path",
        attrs: {
          d: "M7 16 C7 2 27 2 27 16 Q17 20 7 16 Z",
          fill: "#2dd4bf",
          fillOpacity: 0.25,
        },
        loop: {
          values: {
            scaleX: [1, 1.06, 1],
            scaleY: [1, 0.92, 1],
          },
          duration: 2.8,
          ease: "easeInOut",
          hoverValues: {
            scaleX: [1.1, 1.26, 1.1],
            scaleY: [1, 0.85, 1],
          },
          hoverDuration: 1.5,
        },
        origin: "17px 16px",
      },
    ],
  },
  koi: {
    accent: "#f59e0b",
    nodes: [
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M9 17 L4 11 Q6 17 4 23 Z",
              fill: "#f59e0b",
              fillOpacity: 0.65,
            },
            loop: {
              values: {
                rotate: [-8, 8, -8],
              },
              duration: 1.8,
              ease: "easeInOut",
              hoverValues: {
                rotate: [-24, 24, -24],
              },
              hoverDuration: 0.65,
            },
            origin: "9px 17px",
          },
          {
            tag: "path",
            attrs: {
              d: "M9 17 C12 8 24 9 28 16 Q29 17 28 18 C24 25 12 26 9 17 Z",
              fill: "#f59e0b",
              fillOpacity: 0.28,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M16 11 L19 7 L22 11",
              fill: "#f59e0b",
              fillOpacity: 0.65,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 24,
              cy: 15,
              r: 1.5,
              fill: "#e4e4e7",
              stroke: "none",
            },
          },
        ],
        loop: {
          values: {
            rotate: [-6, 6, -6],
          },
          duration: 4,
          ease: "easeInOut",
          hoverValues: {
            rotate: [-18, 18, -18],
          },
          hoverDuration: 1.6,
        },
        origin: "17px 17px",
      },
    ],
  },
  snail: {
    accent: "#fb7185",
    nodes: [
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M4 26 Q8 23 13 25 H24 Q29 25 29 21",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 12,
              cy: 15,
              r: 7.5,
              fill: "#fb7185",
              fillOpacity: 0.18,
              strokeWidth: 2.25,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M12 19 C6 19 6 10 12 10 C17 10 18 16 13 16 Q11 16 12 13",
              strokeWidth: 2,
            },
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "line",
                attrs: {
                  x1: 25,
                  y1: 24,
                  x2: 25,
                  y2: 17,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 25,
                  cy: 17,
                  r: 1.3,
                  fill: "#fb7185",
                  stroke: "none",
                },
              },
            ],
            hover: {
              scaleY: 1.45,
            },
            origin: "25px 24px",
          },
          {
            tag: "g",
            attrs: {},
            children: [
              {
                tag: "line",
                attrs: {
                  x1: 29,
                  y1: 22,
                  x2: 29,
                  y2: 15,
                },
              },
              {
                tag: "circle",
                attrs: {
                  cx: 29,
                  cy: 15,
                  r: 1.3,
                  fill: "#fb7185",
                  stroke: "none",
                },
              },
            ],
            hover: {
              scaleY: 1.45,
            },
            origin: "29px 22px",
          },
        ],
        loop: {
          values: {
            x: [0, 0.6, 0],
          },
          duration: 4,
          ease: "easeInOut",
        },
      },
    ],
  },
  dragonfly: {
    accent: "#38bdf8",
    nodes: [
      {
        tag: "g",
        attrs: {
          transform: "rotate(-15 10 12)",
        },
        children: [
          {
            tag: "ellipse",
            attrs: {
              cx: 10,
              cy: 12,
              rx: 6,
              ry: 2.8,
              fill: "#38bdf8",
              fillOpacity: 0.3,
            },
            loop: {
              values: {
                scaleY: [1, 0.8, 1],
              },
              duration: 0.6,
              ease: "easeInOut",
              hoverDuration: 0.2,
            },
            origin: "17px 16px",
          },
        ],
      },
      {
        tag: "g",
        attrs: {
          transform: "rotate(15 24 12)",
        },
        children: [
          {
            tag: "ellipse",
            attrs: {
              cx: 24,
              cy: 12,
              rx: 6,
              ry: 2.8,
              fill: "#38bdf8",
              fillOpacity: 0.3,
            },
            loop: {
              values: {
                scaleY: [1, 0.8, 1],
              },
              duration: 0.6,
              ease: "easeInOut",
              hoverDuration: 0.2,
            },
            origin: "17px 16px",
          },
        ],
      },
      {
        tag: "g",
        attrs: {
          transform: "rotate(15 10 20)",
        },
        children: [
          {
            tag: "ellipse",
            attrs: {
              cx: 10,
              cy: 20,
              rx: 6,
              ry: 2.8,
              fill: "#38bdf8",
              fillOpacity: 0.3,
            },
            loop: {
              values: {
                scaleY: [1, 0.8, 1],
              },
              duration: 0.6,
              ease: "easeInOut",
              hoverDuration: 0.2,
            },
            origin: "17px 16px",
          },
        ],
      },
      {
        tag: "g",
        attrs: {
          transform: "rotate(-15 24 20)",
        },
        children: [
          {
            tag: "ellipse",
            attrs: {
              cx: 24,
              cy: 20,
              rx: 6,
              ry: 2.8,
              fill: "#38bdf8",
              fillOpacity: 0.3,
            },
            loop: {
              values: {
                scaleY: [1, 0.8, 1],
              },
              duration: 0.6,
              ease: "easeInOut",
              hoverDuration: 0.2,
            },
            origin: "17px 16px",
          },
        ],
      },
      {
        tag: "line",
        attrs: {
          x1: 17,
          y1: 8,
          x2: 17,
          y2: 29,
          strokeWidth: 2.5,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 5.5,
          r: 2,
          fill: "#38bdf8",
          stroke: "none",
        },
      },
    ],
  },
  dandelion: {
    accent: "#e4e4e7",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M15 15 V30",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 15,
          cy: 13,
          r: 8.8,
          opacity: 0.3,
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17.5 13.0 L21.7 13.0 M23.83 11.28 L21.7 13.0 L23.83 14.72",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M16.77 14.77 L19.74 17.74 M22.46 18.03 L19.74 17.74 L20.03 20.46",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M15.0 15.5 L15.0 19.7 M16.72 21.83 L15.0 19.7 L13.28 21.83",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M13.23 14.77 L10.26 17.74 M9.97 20.46 L10.26 17.74 L7.54 18.03",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12.5 13.0 L8.3 13.0 M6.17 14.72 L8.3 13.0 L6.17 11.28",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M13.23 11.23 L10.26 8.26 M7.54 7.97 L10.26 8.26 L9.97 5.54",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M15.0 10.5 L15.0 6.3 M13.28 4.17 L15.0 6.3 L16.72 4.17",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M16.77 11.23 L19.74 8.26 M20.03 5.54 L19.74 8.26 L22.46 7.97",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 15,
          cy: 13,
          r: 1.75,
          fill: "#e4e4e7",
          stroke: "none",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M26 14 L28 9 M25 8 L28 9 L30 7 M28 6 V9",
          strokeWidth: 1.75,
        },
        loop: {
          values: {
            x: [0, 0.5, 0],
            y: [0, -0.5, 0],
            opacity: [1, 1, 1],
          },
          duration: 4,
          ease: "easeInOut",
          static: {
            x: 0,
            y: 0,
            opacity: 1,
          },
          hoverValues: {
            x: [0, 2, 2],
            y: [0, -3, -3],
            opacity: [1, 1, 0],
          },
          hoverDuration: 1.8,
        },
        origin: "28px 9px",
      },
    ],
  },
  "moon-phase": {
    accent: "#a78bfa",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "mask",
            attrs: {
              id: "moon-phase-mask",
              maskUnits: "userSpaceOnUse",
              x: 0,
              y: 0,
              width: 34,
              height: 34,
            },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M17 5.5 A11.5 11.5 0 0 1 17 28.5 Z",
                  fill: "white",
                  stroke: "none",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 5.5 A11.5 11.5 0 0 1 17 28.5 Z",
                  fill: "black",
                  stroke: "none",
                },
                loop: {
                  values: {
                    scaleX: [0.65, 0, 0, 0, 0.65],
                  },
                  duration: 8,
                  ease: "easeInOut",
                  hoverDuration: 2.5,
                },
                origin: "17px 17px",
              },
              {
                tag: "path",
                attrs: {
                  d: "M17 5.5 A11.5 11.5 0 0 0 17 28.5 Z",
                  fill: "white",
                  stroke: "none",
                },
                loop: {
                  values: {
                    scaleX: [0, 0, 1, 0, 0],
                  },
                  duration: 8,
                  ease: "easeInOut",
                  hoverDuration: 2.5,
                },
                origin: "17px 17px",
              },
            ],
          },
        ],
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 11.5,
          stroke: "#e4e4e7",
          opacity: 0.5,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 11.5,
          fill: "#e4e4e7",
          stroke: "none",
          mask: "url(#moon-phase-mask)",
        },
      },
    ],
  },
  cassette: {
    accent: "#f59e0b",
    nodes: [
      {
        tag: "rect",
        attrs: {
          x: 3.5,
          y: 7,
          width: 27,
          height: 21,
          rx: 3,
          fill: "#f59e0b",
          fillOpacity: 0.1,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 11,
          cy: 14,
          r: 4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M9 14 H13 M11 12 V16",
        },
        loop: {
          values: {
            rotate: [0, 360],
          },
          duration: 3,
          ease: "linear",
          hoverDuration: 0.8,
        },
        origin: "11px 14px",
      },
      {
        tag: "circle",
        attrs: {
          cx: 23,
          cy: 14,
          r: 4,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M21 14 H25 M23 12 V16",
        },
        loop: {
          values: {
            rotate: [0, -360],
          },
          duration: 3,
          ease: "linear",
          hoverDuration: 0.8,
        },
        origin: "23px 14px",
      },
      {
        tag: "path",
        attrs: {
          d: "M9 28 L12 22 H22 L25 28",
        },
      },
    ],
  },
  domino: {
    accent: "#a3e635",
    nodes: [
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 11,
              y: 4,
              width: 12,
              height: 25,
              rx: 2.5,
              fill: "#a3e635",
              fillOpacity: 0.12,
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 12,
              y1: 16.5,
              x2: 22,
              y2: 16.5,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 10,
              r: 1.9,
              fill: "#a3e635",
              stroke: "none",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 15,
              cy: 21,
              r: 1.9,
              fill: "#a3e635",
              stroke: "none",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 19,
              cy: 25,
              r: 1.9,
              fill: "#a3e635",
              stroke: "none",
            },
          },
        ],
        loop: {
          values: {
            rotate: [-8, 18, -8],
          },
          duration: 3,
          ease: "easeInOut",
          hoverValues: {
            rotate: [-8, 40, -8],
          },
          hoverDuration: 1.7,
        },
        origin: "17px 17px",
      },
    ],
  },
  "newtons-cradle": {
    accent: "#e4e4e7",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M3 26 V7 H31 V26",
          opacity: 0.65,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 7,
              y1: 8,
              x2: 7,
              y2: 18,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 7,
              cy: 20,
              r: 1.65,
              fill: "#e4e4e7",
              fillOpacity: 0.65,
              strokeWidth: 1.75,
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 8, 0, 0, 0],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 16, 0, 0, 0],
          },
          hoverDuration: 1.7,
        },
        origin: "7px 8px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 12,
              y1: 8,
              x2: 12,
              y2: 18,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 12,
              cy: 20,
              r: 1.65,
              fill: "#e4e4e7",
              fillOpacity: 0.65,
              strokeWidth: 1.75,
            },
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 17,
              y1: 8,
              x2: 17,
              y2: 18,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 17,
              cy: 20,
              r: 1.65,
              fill: "#e4e4e7",
              fillOpacity: 0.65,
              strokeWidth: 1.75,
            },
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 22,
              y1: 8,
              x2: 22,
              y2: 18,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 22,
              cy: 20,
              r: 1.65,
              fill: "#e4e4e7",
              fillOpacity: 0.65,
              strokeWidth: 1.75,
            },
          },
        ],
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "line",
            attrs: {
              x1: 27,
              y1: 8,
              x2: 27,
              y2: 18,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 27,
              cy: 20,
              r: 1.65,
              fill: "#e4e4e7",
              fillOpacity: 0.65,
              strokeWidth: 1.75,
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 0, 0, -8, 0],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 0, 0, -16, 0],
          },
          hoverDuration: 1.7,
        },
        origin: "27px 8px",
      },
    ],
  },
  pinball: {
    accent: "#fb7185",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M6 30 V7 Q6 3 10 3 H24 Q28 3 28 7 V30 Z",
          fill: "#fb7185",
          fillOpacity: 0.08,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M24 5 V25",
          opacity: 0.7,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 12,
          cy: 11,
          r: 2.25,
          fill: "#fb7185",
          fillOpacity: 0.2,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M9 24 L15 26 L14 28 L8 26 Z",
          fill: "#fb7185",
          strokeWidth: 1.75,
        },
        loop: {
          values: {
            rotate: [0, -5, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, -30, 0],
          },
          hoverDuration: 0.7,
        },
        origin: "9px 25px",
      },
      {
        tag: "path",
        attrs: {
          d: "M23 24 L17 26 L18 28 L24 26 Z",
          fill: "#fb7185",
          strokeWidth: 1.75,
        },
        loop: {
          values: {
            rotate: [0, 5, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 30, 0],
          },
          hoverDuration: 0.7,
        },
        origin: "23px 25px",
      },
      {
        tag: "path",
        attrs: {
          d: "M24 27 H29 M26.5 27 V30",
          strokeWidth: 2.25,
        },
        loop: {
          values: {
            y: [0, 0.4, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            y: [0, 1, 0],
          },
          hoverDuration: 0.7,
        },
        origin: "17px 17px",
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 17,
          r: 2,
          fill: "#e4e4e7",
          stroke: "none",
        },
        loop: {
          values: {
            x: [0, -5, 4, 0],
            y: [0, 5, -9, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverDuration: 0.7,
        },
        origin: "17px 17px",
      },
    ],
  },
  yoyo: {
    accent: "#38bdf8",
    nodes: [
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 7,
          rx: 3.5,
          ry: 2.5,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 17,
          y1: 9.5,
          x2: 17,
          y2: 21.5,
        },
        loop: {
          values: {
            scaleY: [1, 1.1666666666666667, 1],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            scaleY: [1, 1.3333333333333333, 1],
          },
          hoverDuration: 1.1,
        },
        origin: "17px 9.5px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M12.5 15 H21.5 M12.5 28 H21.5",
              opacity: 0.7,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 12.5,
              cy: 21.5,
              rx: 3,
              ry: 6.5,
              fill: "#38bdf8",
              fillOpacity: 0.18,
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 21.5,
              cy: 21.5,
              rx: 3,
              ry: 6.5,
              fill: "#38bdf8",
              fillOpacity: 0.18,
            },
          },
          {
            tag: "line",
            attrs: {
              x1: 15.5,
              y1: 21.5,
              x2: 18.5,
              y2: 21.5,
              stroke: "#e4e4e7",
              strokeWidth: 2.25,
            },
          },
        ],
        loop: {
          values: {
            y: [0, 2, 0],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            y: [0, 4, 0],
          },
          hoverDuration: 1.1,
        },
      },
    ],
  },
  typewriter: {
    accent: "#f59e0b",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M8 17 H26 L30 29 H4 Z",
          fill: "#f59e0b",
          fillOpacity: 0.12,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 10,
              y: 3,
              width: 14,
              height: 10,
              rx: 1,
              fill: "#e4e4e7",
              fillOpacity: 0.22,
              stroke: "#e4e4e7",
            },
          },
          {
            tag: "rect",
            attrs: {
              x: 4,
              y: 12,
              width: 26,
              height: 5,
              rx: 2.5,
              fill: "#f59e0b",
              fillOpacity: 0.25,
            },
          },
        ],
        loop: {
          values: {
            x: [0, 0.5, 0],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            x: [0, 2, 0],
          },
          hoverDuration: 1.2,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 6,
          y: 24,
          width: 22,
          height: 3,
          rx: 1.5,
          fill: "#f59e0b",
          fillOpacity: 0.25,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 8,
          y: 21,
          width: 4,
          height: 3,
          rx: 0.8,
          fill: "#f59e0b",
          fillOpacity: 0.8,
        },
        loop: {
          values: {
            y: [0, 0.5, 0],
          },
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.0,
          hoverValues: {
            y: [0, 1.5, 0],
          },
          hoverDuration: 0.65,
        },
        origin: "17px 17px",
      },
      {
        tag: "rect",
        attrs: {
          x: 15,
          y: 21,
          width: 4,
          height: 3,
          rx: 0.8,
          fill: "#f59e0b",
          fillOpacity: 0.8,
        },
        loop: {
          values: {
            y: [0, 0.5, 0],
          },
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
          hoverValues: {
            y: [0, 1.5, 0],
          },
          hoverDuration: 0.65,
        },
        origin: "17px 17px",
      },
      {
        tag: "rect",
        attrs: {
          x: 22,
          y: 21,
          width: 4,
          height: 3,
          rx: 0.8,
          fill: "#f59e0b",
          fillOpacity: 0.8,
        },
        loop: {
          values: {
            y: [0, 0.5, 0],
          },
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.4,
          hoverValues: {
            y: [0, 1.5, 0],
          },
          hoverDuration: 0.65,
        },
        origin: "17px 17px",
      },
    ],
  },
  dial: {
    accent: "#2dd4bf",
    nodes: [
      {
        tag: "circle",
        attrs: {
          cx: 16,
          cy: 17,
          r: 13,
          fill: "#2dd4bf",
          fillOpacity: 0.08,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "circle",
            attrs: {
              cx: 23.54,
              cy: 11.72,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 18.38,
              cy: 8.11,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 12.11,
              cy: 8.66,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 7.66,
              cy: 13.11,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 7.11,
              cy: 19.38,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 10.72,
              cy: 24.54,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 16.8,
              cy: 26.16,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 22.51,
              cy: 23.51,
              r: 1.65,
              strokeWidth: 1.75,
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 35, 0],
          },
          duration: 4,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 115, 0],
          },
          hoverDuration: 2.2,
        },
        origin: "16px 17px",
      },
      {
        tag: "circle",
        attrs: {
          cx: 16,
          cy: 17,
          r: 4,
          fill: "#2dd4bf",
          fillOpacity: 0.12,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M25.5 20.5 L30.5 23 L32 19",
          stroke: "#e4e4e7",
          strokeWidth: 2.25,
        },
      },
    ],
  },
  "gear-train": {
    accent: "#f59e0b",
    nodes: [
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M18.35 16.0 L19.85 17.56 L19.39 19.06 L17.28 19.53 L16.49 20.49 L16.44 22.65 L15.06 23.39 L13.24 22.23 L12.0 22.35 L10.44 23.85 L8.94 23.39 L8.47 21.28 L7.51 20.49 L5.35 20.44 L4.61 19.06 L5.77 17.24 L5.65 16.0 L4.15 14.44 L4.61 12.94 L6.72 12.47 L7.51 11.51 L7.56 9.35 L8.94 8.61 L10.76 9.77 L12.0 9.65 L13.56 8.15 L15.06 8.61 L15.53 10.72 L16.49 11.51 L18.65 11.56 L19.39 12.94 L18.23 14.76 Z",
              stroke: "#e4e4e7",
              strokeWidth: 1.75,
              fill: "#e4e4e7",
              fillOpacity: 0.12,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 12,
              cy: 16,
              r: 2.2,
              fill: "#f59e0b",
              stroke: "none",
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 360],
          },
          duration: 5,
          ease: "linear",
          hoverDuration: 1.6,
        },
        origin: "12px 16px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M28.85 20.0 L30.31 21.42 L29.76 22.75 L27.72 22.72 L26.93 23.33 L26.42 25.31 L25.0 25.5 L24.0 23.72 L23.07 23.33 L21.11 23.89 L20.24 22.75 L21.28 21.0 L21.15 20.0 L19.69 18.58 L20.24 17.25 L22.28 17.28 L23.07 16.67 L23.58 14.69 L25.0 14.5 L26.0 16.28 L26.93 16.67 L28.89 16.11 L29.76 17.25 L28.72 19.0 Z",
              stroke: "#e4e4e7",
              strokeWidth: 1.75,
              fill: "#e4e4e7",
              fillOpacity: 0.12,
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 25,
              cy: 20,
              r: 2.2,
              fill: "#f59e0b",
              stroke: "none",
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, -360],
          },
          duration: 3.75,
          ease: "linear",
          hoverDuration: 1.2,
        },
        origin: "25px 20px",
      },
    ],
  },
  caliper: {
    accent: "#38bdf8",
    nodes: [
      {
        tag: "rect",
        attrs: {
          x: 4,
          y: 10,
          width: 26,
          height: 3,
          rx: 0.5,
          fill: "#38bdf8",
          fillOpacity: 0.22,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M10 4 H6 V29 H11",
          strokeWidth: 2,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M11 10 V12 M14 10 V12 M27 10 V12",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 18,
              y: 8,
              width: 5,
              height: 7,
              rx: 0.75,
              fill: "#38bdf8",
              fillOpacity: 0.4,
              stroke: "#e4e4e7",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M16 4 H20 V29 H15",
              strokeWidth: 2,
            },
          },
        ],
        loop: {
          values: {
            x: [0, -1, 0],
          },
          duration: 3.2,
          ease: "easeInOut",
          hoverValues: {
            x: [0, -4, 0],
          },
          hoverDuration: 1.8,
        },
      },
    ],
  },
  "drafting-compass": {
    accent: "#a78bfa",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M17 3 V7",
          strokeWidth: 2.25,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 17,
          cy: 8,
          r: 2,
          fill: "#a78bfa",
          stroke: "none",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M13 17 H21",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M17 8 L9 28",
          strokeWidth: 2.25,
        },
        loop: {
          values: {
            rotate: [0, -3, 0],
          },
          duration: 3,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 10, 0],
          },
          hoverDuration: 1.8,
        },
        origin: "17px 8px",
      },
      {
        tag: "path",
        attrs: {
          d: "M17 8 L25 28",
          strokeWidth: 2.25,
        },
        loop: {
          values: {
            rotate: [0, 3, 0],
          },
          duration: 3,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, -10, 0],
          },
          hoverDuration: 1.8,
        },
        origin: "17px 8px",
      },
    ],
  },
  oscilloscope: {
    accent: "#a3e635",
    nodes: [
      {
        tag: "rect",
        attrs: {
          x: 3,
          y: 4,
          width: 28,
          height: 26,
          rx: 3,
          stroke: "#e4e4e7",
          opacity: 0.5,
        },
      },
      {
        tag: "line",
        attrs: {
          x1: 5,
          y1: 17,
          x2: 29,
          y2: 17,
          opacity: 0.4,
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M6 17 C9 5 12 5 15 17 S21 29 24 17 S27 5 28 17",
          strokeWidth: 2.25,
        },
        loop: {
          values: {
            scaleY: [0.75, 1, 0.75],
          },
          duration: 2.4,
          ease: "easeInOut",
          hoverValues: {
            scaleY: [1, 1.35, 1],
          },
          hoverDuration: 1.4,
        },
        origin: "17px 17px",
      },
    ],
  },
  packet: {
    accent: "#38bdf8",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M4 23 V27 H30 V23",
          opacity: 0.55,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 2,
          y: 21,
          width: 4,
          height: 4,
          rx: 1,
          fill: "#38bdf8",
          fillOpacity: 0.3,
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 28,
          y: 21,
          width: 4,
          height: 4,
          rx: 1,
          fill: "#38bdf8",
          fillOpacity: 0.3,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M6 12 H9 M7 16 H9",
              opacity: 0.65,
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M15 8 H21 Q23 8 23 10 V17 H20 V20 H13 Q11 20 11 18 V11 H15 Z",
              fill: "#38bdf8",
              fillOpacity: 0.2,
              stroke: "#e4e4e7",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M16 13 H19 M16 16 H18",
              stroke: "#38bdf8",
            },
          },
        ],
        loop: {
          values: {
            x: [0, 3, 0, -2, 0],
            y: [0, -3, 0, -1, 0],
          },
          duration: 2.8,
          ease: "easeInOut",
          hoverDuration: 0.9,
        },
      },
    ],
  },
  seismograph: {
    accent: "#fb7185",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M4 13 V27 C4 31 28 31 28 27 V13",
          stroke: "#e4e4e7",
          fill: "#e4e4e7",
          fillOpacity: 0.04,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 16,
          cy: 13,
          rx: 12,
          ry: 3,
          stroke: "#e4e4e7",
          fill: "#09090b",
          strokeWidth: 1.75,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M6 22 H9 L11 18 L14 26 L17 19 L20 24 L23 22 H26",
          strokeWidth: 2,
        },
        loop: {
          values: {
            scaleY: [0.9, 1, 0.9],
          },
          duration: 1.8,
          ease: "easeInOut",
          hoverValues: {
            scaleY: [1, 1.25, 1],
          },
          hoverDuration: 0.75,
        },
        origin: "23px 22px",
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "path",
            attrs: {
              d: "M29 6 L20 17 L23 22",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 29,
              cy: 6,
              r: 2,
              fill: "#fb7185",
              fillOpacity: 0.25,
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 2, 0, -2, 0],
          },
          duration: 1.8,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 5, 0, -5, 0],
          },
          hoverDuration: 0.75,
        },
        origin: "29px 6px",
      },
    ],
  },
  kaleidoscope: {
    accent: "#a78bfa",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "linearGradient",
            attrs: {
              id: "kaleidoscope-bands",
              gradientUnits: "userSpaceOnUse",
              x1: 17,
              y1: 17,
              x2: 22.63,
              y2: 7.25,
            },
            children: [
              {
                tag: "stop",
                attrs: {
                  offset: 0,
                  stopColor: "#e4e4e7",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.2,
                  stopColor: "#e4e4e7",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.2,
                  stopColor: "#f59e0b",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.39,
                  stopColor: "#f59e0b",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.39,
                  stopColor: "#fb7185",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.6,
                  stopColor: "#fb7185",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.6,
                  stopColor: "#38bdf8",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.8,
                  stopColor: "#38bdf8",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 0.8,
                  stopColor: "#a78bfa",
                },
              },
              {
                tag: "stop",
                attrs: {
                  offset: 1,
                  stopColor: "#a78bfa",
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
              d: "M17 17 L17 4 L28.26 10.5 Z",
              transform: "rotate(0 17 17)",
              fill: "url(#kaleidoscope-bands)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 17 L17 4 L28.26 10.5 Z",
              transform: "rotate(120 17 17) translate(34 0) scale(-1 1)",
              fill: "url(#kaleidoscope-bands)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 17 L17 4 L28.26 10.5 Z",
              transform: "rotate(120 17 17)",
              fill: "url(#kaleidoscope-bands)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 17 L17 4 L28.26 10.5 Z",
              transform: "rotate(240 17 17) translate(34 0) scale(-1 1)",
              fill: "url(#kaleidoscope-bands)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 17 L17 4 L28.26 10.5 Z",
              transform: "rotate(240 17 17)",
              fill: "url(#kaleidoscope-bands)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 17 L17 4 L28.26 10.5 Z",
              transform: "rotate(360 17 17) translate(34 0) scale(-1 1)",
              fill: "url(#kaleidoscope-bands)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 7.5 L21.9 12 L17 16.5 L12.1 12 Z",
              transform: "rotate(0 17 17)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 7.5 L21.9 12 L17 16.5 L12.1 12 Z",
              transform: "rotate(120 17 17)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 7.5 L21.9 12 L17 16.5 L12.1 12 Z",
              transform: "rotate(240 17 17)",
              stroke: "#09090b",
              strokeWidth: 1.75,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 4 L28.26 10.5 V23.5 L17 30 L5.74 23.5 V10.5 Z",
              strokeWidth: 2,
              strokeLinejoin: "miter",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M17 13.5 L20.5 17 L17 20.5 L13.5 17 Z",
              fill: "#e4e4e7",
              stroke: "none",
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 360],
          },
          duration: 15,
          ease: "linear",
          hoverDuration: 4,
        },
      },
    ],
  },
  zen: {
    accent: "#e4e4e7",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M12.2 5.1 C18.4 2.1 25.3 6.6 28.2 12.2 C30.4 16.6 28.7 23.4 25.1 26.8 C21.2 32.5 13.2 31.5 7.8 26.8 C3.1 23.4 2.9 16.8 5.4 12.7 L7.4 9.9 L7.6 11.5 L6.7 11.1 L7.1 12.8 C5.8 17.1 8.9 23.4 13.5 25.3 C18.2 27.3 24.2 25.1 25.9 20 C28.2 14.4 23.7 7.3 18.9 6.6 C16.5 6.1 14.4 6.2 12.4 7.1 L11.1 6.4 L12.2 5.1 Z",
          fill: "#e4e4e7",
          stroke: "none",
        },
        loop: {
          values: {
            scale: [1, 1.015, 1],
          },
          duration: 4,
          ease: "easeInOut",
          hoverValues: {
            scale: [1, 1.075, 1],
          },
          hoverDuration: 2.4,
        },
        origin: "17px 17px",
      },
    ],
  },
  labyrinth: {
    accent: "#f59e0b",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M6 27 V6 H28 V28 H11 V11 H23 V23 H16 V16",
          strokeWidth: 2.25,
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 6,
          cy: 27,
          r: 1.35,
          fill: "#e4e4e7",
          stroke: "none",
        },
        loop: {
          values: {
            x: [
              0, 0, 22, 22, 5, 5, 17, 17, 10, 10, 10, 10, 10, 17, 17, 5, 5, 22,
              22, 0, 0,
            ],
            y: [
              0, -21, -21, 1, 1, -16, -16, -4, -4, -11, -11, -11, -4, -4, -16,
              -16, 1, 1, -21, -21, 0,
            ],
          },
          duration: 12,
          ease: "linear",
          hoverDuration: 5,
        },
      },
    ],
  },
  slinky: {
    accent: "#fb7185",
    nodes: [
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 8,
          rx: 9,
          ry: 2,
          strokeWidth: 2,
        },
        loop: {
          values: {
            y: [0, -1.0, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            y: [0, -2.0, 0],
          },
          hoverDuration: 1.25,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 12.5,
          rx: 9,
          ry: 2,
          strokeWidth: 2,
        },
        loop: {
          values: {
            y: [0, -0.5, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            y: [0, -1.0, 0],
          },
          hoverDuration: 1.25,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 17,
          rx: 9,
          ry: 2,
          strokeWidth: 2,
        },
        loop: {
          values: {
            y: [0, 0.0, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            y: [0, 0.0, 0],
          },
          hoverDuration: 1.25,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 21.5,
          rx: 9,
          ry: 2,
          strokeWidth: 2,
        },
        loop: {
          values: {
            y: [0, 0.5, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            y: [0, 1.0, 0],
          },
          hoverDuration: 1.25,
        },
      },
      {
        tag: "ellipse",
        attrs: {
          cx: 17,
          cy: 26,
          rx: 9,
          ry: 2,
          strokeWidth: 2,
        },
        loop: {
          values: {
            y: [0, 1.0, 0],
          },
          duration: 2,
          ease: "easeInOut",
          hoverValues: {
            y: [0, 2.0, 0],
          },
          hoverDuration: 1.25,
        },
      },
    ],
  },
  gyroscope: {
    accent: "#2dd4bf",
    nodes: [
      {
        tag: "defs",
        attrs: {},
        children: [
          {
            tag: "mask",
            attrs: {
              id: "gyroscope-outer-clearance",
              maskUnits: "userSpaceOnUse",
              x: 0,
              y: 0,
              width: 34,
              height: 34,
            },
            children: [
              {
                tag: "rect",
                attrs: {
                  x: 0,
                  y: 0,
                  width: 34,
                  height: 34,
                  fill: "white",
                  stroke: "none",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M13 6 L21 25",
                  stroke: "black",
                  strokeWidth: 5,
                },
              },
            ],
          },
          {
            tag: "mask",
            attrs: {
              id: "gyroscope-inner-clearance",
              maskUnits: "userSpaceOnUse",
              x: 0,
              y: 0,
              width: 34,
              height: 34,
            },
            children: [
              {
                tag: "rect",
                attrs: {
                  x: 0,
                  y: 0,
                  width: 34,
                  height: 34,
                  fill: "white",
                  stroke: "none",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M13 6 L21 25",
                  stroke: "black",
                  strokeWidth: 5,
                },
              },
            ],
          },
        ],
      },
      {
        tag: "path",
        attrs: {
          d: "M3 9 V23 Q3 28 9 28 H25 Q31 28 31 23 V9 M17 28 V31 M12 31 H22",
          stroke: "#e4e4e7",
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
              cy: 15.5,
              r: 10.5,
              strokeWidth: 2.25,
              mask: "url(#gyroscope-outer-clearance)",
            },
          },
          {
            tag: "ellipse",
            attrs: {
              cx: 17,
              cy: 15.5,
              rx: 8.5,
              ry: 4.5,
              transform: "rotate(-30 17 15.5)",
              strokeWidth: 2.25,
              mask: "url(#gyroscope-inner-clearance)",
            },
          },
          {
            tag: "path",
            attrs: {
              d: "M13 6 L21 25",
              stroke: "#e4e4e7",
              strokeWidth: 2.25,
            },
          },
        ],
        loop: {
          values: {
            rotate: [0, 5, 0, -5, 0],
          },
          duration: 6,
          ease: "easeInOut",
          hoverValues: {
            rotate: [0, 16, 0, -16, 0],
          },
          hoverDuration: 3,
        },
        origin: "17px 15.5px",
      },
    ],
  },
  "arcade-coin": {
    accent: "#f59e0b",
    nodes: [
      {
        tag: "path",
        attrs: {
          d: "M9 3 H25 L28 7 V16 L30 22 V31 H6 V22 L8 16 V7 Z",
          fill: "#f59e0b",
          fillOpacity: 0.08,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M11 9 H24 V15 H11 Z",
          stroke: "#e4e4e7",
          fill: "#38bdf8",
          fillOpacity: 0.14,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8 17 H26 L30 22 H6 Z",
          fill: "#f59e0b",
          fillOpacity: 0.15,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12 20 V17",
          stroke: "#e4e4e7",
        },
      },
      {
        tag: "circle",
        attrs: {
          cx: 12,
          cy: 17,
          r: 1.75,
          fill: "#f59e0b",
        },
      },
      {
        tag: "rect",
        attrs: {
          x: 13,
          y: 25,
          width: 10,
          height: 6,
          rx: 1,
          stroke: "#e4e4e7",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M18 26.5 V29",
          stroke: "#e4e4e7",
          strokeWidth: 2.25,
        },
      },
      {
        tag: "g",
        attrs: {},
        children: [
          {
            tag: "rect",
            attrs: {
              x: 12,
              y: 5,
              width: 10,
              height: 2,
              rx: 0.5,
              fill: "#a3e635",
              stroke: "none",
            },
          },
          {
            tag: "circle",
            attrs: {
              cx: 22,
              cy: 20,
              r: 1.8,
              fill: "#f59e0b",
            },
          },
        ],
        loop: {
          values: {
            opacity: [0.75, 1, 0.75],
          },
          duration: 3.2,
          ease: "easeInOut",
          static: {
            opacity: 1,
          },
          hoverValues: {
            opacity: [1, 0.35, 1],
          },
          hoverDuration: 0.65,
        },
      },
    ],
  },
};
