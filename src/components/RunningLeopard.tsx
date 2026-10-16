import React, { useState, useEffect, useRef } from 'react';

export interface RunningLeopardProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  speedMs?: number; // duration per frame in ms (e.g., 90ms)
  showDust?: boolean;
  showSpeedLines?: boolean;
  showShadow?: boolean;
  isPaused?: boolean;
  invertColors?: boolean;
  accentColor?: string;
}

// 8 anatomical gallop cycle frames for a running big cat (Leopard)
// ViewBox: 0 0 380 180 (Ground level ~ 156)
interface LeopardFrame {
  phase: number;
  body: string;
  headDetail: string;
  earInner: string;
  eye: { x: number; y: number };
  farFrontLeg: string;
  nearFrontLeg: string;
  farHindLeg: string;
  nearHindLeg: string;
  tail: string;
  shadow: { cx: number; cy: number; rx: number; ry: number; opacity: number };
  bobY: number; // rhythmic vertical gallop displacement
  spots: Array<{ x: number; y: number; scale?: number; rot?: number; isSolid?: boolean }>;
}

const GALLOP_FRAMES: LeopardFrame[] = [
  // Frame 0: Maximum Extension Flight (Airborne Reach)
  {
    phase: 0,
    body: "M 130 86 C 145 78 175 74 210 74 C 235 74 255 77 275 73 C 285 71 296 64 304 65 C 310 66 314 70 311 75 C 308 79 301 81 295 83 C 291 85 284 89 278 94 C 265 106 250 108 232 106 C 210 104 185 96 168 97 C 150 98 138 97 130 94 Z",
    headDetail: "M 292 63 C 294 59 299 58 302 61 C 303 63 301 66 298 67 Z",
    earInner: "M 294 62 C 296 60 299 60 300 62 C 300 64 298 65 296 65 Z",
    eye: { x: 301, y: 70 },
    farFrontLeg: "M 268 88 C 275 97 286 109 298 120 C 304 125 311 130 317 132 C 321 133 325 131 323 128 C 318 124 309 116 301 106 C 293 96 284 87 277 84 Z",
    nearFrontLeg: "M 255 92 C 265 104 280 118 300 131 C 310 137 322 142 332 143 C 337 143 338 139 334 136 C 324 130 310 120 295 108 C 285 100 274 91 262 88 Z",
    farHindLeg: "M 135 84 C 120 86 105 91 92 98 C 84 102 75 106 66 108 C 61 109 59 106 62 103 C 70 97 82 91 96 84 C 110 77 124 78 133 81 Z",
    nearHindLeg: "M 142 87 C 128 89 110 97 95 107 C 82 115 68 122 55 125 C 50 126 48 122 52 118 C 64 110 80 100 98 90 C 115 80 132 80 142 84 Z",
    tail: "M 132 87 C 110 89 85 88 62 82 C 45 77 32 68 20 66 C 16 65 16 69 19 72 C 30 76 43 83 58 88 C 82 94 108 95 130 91 Z",
    shadow: { cx: 200, cy: 156, rx: 75, ry: 7, opacity: 0.2 },
    bobY: 0,
    spots: [
      { x: 155, y: 88, scale: 0.8 }, { x: 175, y: 84, scale: 1 }, { x: 195, y: 82, scale: 1.1 },
      { x: 215, y: 83, scale: 1 }, { x: 235, y: 84, scale: 0.9 }, { x: 255, y: 88, scale: 0.75 },
      { x: 185, y: 92, scale: 0.9 }, { x: 208, y: 93, scale: 0.9 }, { x: 228, y: 94, scale: 0.8 },
      { x: 90, y: 78, scale: 0.6, isSolid: true }, { x: 60, y: 77, scale: 0.5, isSolid: true },
      { x: 275, y: 104, scale: 0.5, isSolid: true }, { x: 295, y: 118, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 1: Front Foot Landing & Impact
  {
    phase: 1,
    body: "M 133 87 C 147 80 176 77 210 78 C 235 79 256 83 274 81 C 284 80 295 73 303 74 C 309 75 313 79 310 84 C 307 88 300 90 294 92 C 289 95 281 101 274 108 C 260 117 245 118 228 113 C 206 107 182 101 166 101 C 148 101 138 98 133 94 Z",
    headDetail: "M 291 72 C 293 68 298 67 301 70 C 302 72 300 75 297 76 Z",
    earInner: "M 293 71 C 295 69 298 69 299 71 C 299 73 297 74 295 74 Z",
    eye: { x: 300, y: 79 },
    farFrontLeg: "M 264 94 C 272 105 282 118 290 131 C 295 139 300 146 304 149 C 308 150 311 147 308 143 C 303 135 295 124 286 112 C 278 102 271 94 266 90 Z",
    nearFrontLeg: "M 252 98 C 260 109 269 122 277 136 C 281 144 284 151 286 153 C 289 154 293 151 292 147 C 288 139 281 127 273 114 C 265 103 258 96 251 93 Z",
    farHindLeg: "M 138 86 C 126 89 113 95 104 105 C 97 112 90 120 83 126 C 79 129 76 127 78 123 C 84 116 93 106 104 97 C 116 87 128 85 137 84 Z",
    nearHindLeg: "M 144 89 C 132 94 118 102 108 114 C 100 123 93 133 85 140 C 81 143 78 141 81 136 C 88 127 98 115 110 103 C 122 92 134 88 143 87 Z",
    tail: "M 134 88 C 112 89 87 86 64 78 C 47 71 34 60 21 54 C 17 52 17 56 20 60 C 31 66 45 76 60 83 C 83 92 109 95 132 92 Z",
    shadow: { cx: 215, cy: 156, rx: 82, ry: 8, opacity: 0.35 },
    bobY: 4,
    spots: [
      { x: 156, y: 90, scale: 0.8 }, { x: 177, y: 86, scale: 1 }, { x: 198, y: 85, scale: 1.1 },
      { x: 218, y: 86, scale: 1 }, { x: 238, y: 89, scale: 0.9 }, { x: 257, y: 94, scale: 0.75 },
      { x: 188, y: 96, scale: 0.9 }, { x: 210, y: 97, scale: 0.9 }, { x: 232, y: 100, scale: 0.8 },
      { x: 92, y: 81, scale: 0.6, isSolid: true }, { x: 55, y: 70, scale: 0.5, isSolid: true },
      { x: 268, y: 116, scale: 0.5, isSolid: true }, { x: 278, y: 135, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 2: Front Support & Spine Compression
  {
    phase: 2,
    body: "M 136 86 C 150 78 178 72 208 72 C 231 72 251 77 267 79 C 277 80 288 75 296 77 C 302 79 305 84 301 89 C 297 92 290 94 283 95 C 276 98 268 106 259 114 C 244 124 227 123 211 116 C 190 106 170 99 156 100 C 144 101 138 98 135 93 Z",
    headDetail: "M 284 75 C 286 71 291 70 294 73 C 295 75 293 78 290 79 Z",
    earInner: "M 286 74 C 288 72 291 72 292 74 C 292 76 290 77 288 77 Z",
    eye: { x: 293, y: 83 },
    farFrontLeg: "M 256 94 C 259 106 261 121 262 135 C 263 144 264 151 267 153 C 270 154 273 151 272 146 C 269 137 267 124 266 111 C 265 101 261 95 257 91 Z",
    nearFrontLeg: "M 245 97 C 245 109 243 124 240 138 C 238 147 237 153 240 154 C 244 155 247 151 248 145 C 251 135 253 121 254 108 C 254 99 250 94 245 92 Z",
    farHindLeg: "M 140 85 C 131 91 122 101 116 114 C 112 124 109 135 106 142 C 103 146 100 144 101 139 C 105 130 110 118 119 106 C 127 96 136 89 142 85 Z",
    nearHindLeg: "M 147 87 C 137 94 128 106 122 120 C 117 131 114 143 111 150 C 108 154 105 152 106 147 C 110 137 116 123 125 110 C 134 98 143 90 149 86 Z",
    tail: "M 137 87 C 115 87 90 82 66 71 C 49 61 36 48 24 39 C 20 36 19 40 22 45 C 33 53 47 66 63 75 C 86 86 112 92 135 90 Z",
    shadow: { cx: 210, cy: 156, rx: 80, ry: 9, opacity: 0.4 },
    bobY: 5,
    spots: [
      { x: 160, y: 88, scale: 0.8 }, { x: 180, y: 82, scale: 1 }, { x: 200, y: 80, scale: 1.1 },
      { x: 220, y: 83, scale: 1 }, { x: 240, y: 87, scale: 0.9 }, { x: 255, y: 92, scale: 0.75 },
      { x: 188, y: 92, scale: 0.9 }, { x: 212, y: 95, scale: 0.9 }, { x: 232, y: 101, scale: 0.8 },
      { x: 92, y: 78, scale: 0.6, isSolid: true }, { x: 50, y: 56, scale: 0.5, isSolid: true },
      { x: 248, y: 114, scale: 0.5, isSolid: true }, { x: 242, y: 136, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 3: Gathered Suspension Flight (Full Arch / Coil)
  {
    phase: 3,
    body: "M 140 84 C 153 73 178 61 206 59 C 228 58 248 64 263 68 C 273 70 283 66 291 69 C 297 71 299 76 295 81 C 291 84 285 86 278 87 C 271 91 262 98 252 104 C 238 111 222 107 206 97 C 187 85 168 83 155 87 C 145 90 140 89 138 86 Z",
    headDetail: "M 279 67 C 281 63 286 62 289 65 C 290 67 288 70 285 71 Z",
    earInner: "M 281 66 C 283 64 286 64 287 66 C 287 68 285 69 283 69 Z",
    eye: { x: 288, y: 74 },
    farFrontLeg: "M 248 88 C 246 98 241 108 235 117 C 231 123 226 128 221 129 C 218 130 216 127 218 124 C 223 118 229 110 234 101 C 238 93 243 87 247 85 Z",
    nearFrontLeg: "M 238 92 C 234 103 227 114 220 124 C 215 131 209 136 204 137 C 201 138 199 134 201 131 C 207 124 214 114 221 103 C 226 94 232 89 237 87 Z",
    farHindLeg: "M 148 83 C 144 91 141 101 141 112 C 141 120 143 129 146 133 C 148 136 146 138 143 136 C 139 131 136 122 135 112 C 134 101 138 91 144 83 Z",
    nearHindLeg: "M 156 84 C 153 94 151 105 152 118 C 153 127 157 137 161 142 C 163 145 161 147 157 145 C 152 139 147 128 146 116 C 145 103 148 91 154 84 Z",
    tail: "M 139 85 C 117 84 92 76 68 62 C 51 50 37 34 25 22 C 21 19 20 23 23 28 C 34 37 48 53 64 65 C 88 80 114 89 138 88 Z",
    shadow: { cx: 200, cy: 156, rx: 55, ry: 6, opacity: 0.2 },
    bobY: -4,
    spots: [
      { x: 165, y: 78, scale: 0.8 }, { x: 185, y: 70, scale: 1 }, { x: 205, y: 68, scale: 1.1 },
      { x: 225, y: 71, scale: 1 }, { x: 243, y: 78, scale: 0.9 }, { x: 256, y: 84, scale: 0.75 },
      { x: 195, y: 82, scale: 0.9 }, { x: 218, y: 84, scale: 0.9 }, { x: 236, y: 92, scale: 0.8 },
      { x: 95, y: 70, scale: 0.6, isSolid: true }, { x: 50, y: 44, scale: 0.5, isSolid: true },
      { x: 220, y: 104, scale: 0.5, isSolid: true }, { x: 208, y: 122, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 4: Hind Landing & Coil Unwinding
  {
    phase: 4,
    body: "M 135 84 C 150 75 177 67 207 67 C 230 67 251 72 268 74 C 278 75 289 70 297 72 C 303 74 306 79 302 84 C 298 87 291 89 284 90 C 277 94 269 101 260 108 C 245 116 228 116 211 110 C 190 101 170 96 156 97 C 144 98 138 95 135 91 Z",
    headDetail: "M 285 70 C 287 66 292 65 295 68 C 296 70 294 73 291 74 Z",
    earInner: "M 287 69 C 289 67 292 67 293 69 C 293 71 291 72 289 72 Z",
    eye: { x: 294, y: 78 },
    farFrontLeg: "M 255 89 C 261 98 269 109 278 120 C 284 126 290 131 295 133 C 298 134 300 131 297 128 C 292 122 284 114 277 104 C 270 95 264 89 257 85 Z",
    nearFrontLeg: "M 244 93 C 251 103 260 116 270 128 C 277 135 285 141 292 143 C 296 144 298 140 294 137 C 286 130 277 120 268 108 C 260 97 252 91 245 88 Z",
    farHindLeg: "M 142 85 C 142 96 146 109 153 123 C 158 132 165 142 171 147 C 174 150 174 152 170 151 C 163 147 156 137 149 126 C 142 113 138 100 139 88 Z",
    nearHindLeg: "M 150 86 C 151 98 157 113 166 128 C 172 138 181 148 188 153 C 192 155 191 157 186 156 C 178 152 169 141 161 129 C 153 115 148 101 147 88 Z",
    tail: "M 136 86 C 114 86 89 81 65 72 C 48 64 34 53 22 47 C 18 45 18 49 21 53 C 32 59 46 70 61 78 C 84 87 111 92 134 90 Z",
    shadow: { cx: 205, cy: 156, rx: 78, ry: 8, opacity: 0.35 },
    bobY: 2,
    spots: [
      { x: 158, y: 83, scale: 0.8 }, { x: 178, y: 76, scale: 1 }, { x: 200, y: 74, scale: 1.1 },
      { x: 222, y: 77, scale: 1 }, { x: 242, y: 83, scale: 0.9 }, { x: 257, y: 89, scale: 0.75 },
      { x: 188, y: 88, scale: 0.9 }, { x: 212, y: 91, scale: 0.9 }, { x: 232, y: 97, scale: 0.8 },
      { x: 92, y: 75, scale: 0.6, isSolid: true }, { x: 50, y: 55, scale: 0.5, isSolid: true },
      { x: 265, y: 110, scale: 0.5, isSolid: true }, { x: 280, y: 126, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 5: Explosive Hind Propulsion (Drive)
  {
    phase: 5,
    body: "M 132 85 C 146 77 175 72 208 72 C 232 72 253 76 271 74 C 281 73 292 67 300 68 C 306 70 310 74 306 79 C 303 83 296 85 289 87 C 283 90 275 97 267 104 C 253 113 236 113 218 108 C 197 101 175 96 160 97 C 146 98 138 95 133 91 Z",
    headDetail: "M 288 66 C 290 62 295 61 298 64 C 299 66 297 69 294 70 Z",
    earInner: "M 290 65 C 292 63 295 63 296 65 C 296 67 294 68 292 68 Z",
    eye: { x: 297, y: 74 },
    farFrontLeg: "M 261 88 C 270 98 281 109 293 121 C 300 127 308 132 314 135 C 318 136 321 133 318 130 C 312 124 303 116 294 106 C 285 96 277 89 269 85 Z",
    nearFrontLeg: "M 249 92 C 259 103 273 117 289 130 C 298 137 309 143 318 145 C 323 146 324 142 320 139 C 311 133 299 123 286 112 C 276 102 266 94 256 90 Z",
    farHindLeg: "M 136 84 C 127 88 117 96 109 108 C 103 117 97 127 92 136 C 89 140 87 141 85 137 C 88 130 94 119 102 108 C 112 96 124 88 133 83 Z",
    nearHindLeg: "M 142 86 C 131 92 119 102 109 116 C 101 127 94 139 87 149 C 84 153 82 153 80 149 C 84 140 92 127 102 114 C 114 100 128 90 139 85 Z",
    tail: "M 133 86 C 111 87 86 84 63 76 C 46 69 33 60 21 56 C 17 54 17 58 20 62 C 31 68 44 77 59 84 C 82 92 108 94 131 91 Z",
    shadow: { cx: 200, cy: 156, rx: 80, ry: 7, opacity: 0.3 },
    bobY: 1,
    spots: [
      { x: 154, y: 85, scale: 0.8 }, { x: 175, y: 80, scale: 1 }, { x: 196, y: 78, scale: 1.1 },
      { x: 218, y: 80, scale: 1 }, { x: 238, y: 85, scale: 0.9 }, { x: 254, y: 90, scale: 0.75 },
      { x: 184, y: 91, scale: 0.9 }, { x: 208, y: 93, scale: 0.9 }, { x: 230, y: 98, scale: 0.8 },
      { x: 92, y: 78, scale: 0.6, isSolid: true }, { x: 52, y: 64, scale: 0.5, isSolid: true },
      { x: 275, y: 110, scale: 0.5, isSolid: true }, { x: 300, y: 128, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 6: Lift-off & Body Expansion (Airborne Ascent)
  {
    phase: 6,
    body: "M 131 85 C 145 77 175 73 209 73 C 233 73 254 76 273 73 C 283 71 294 65 302 66 C 308 68 312 72 308 77 C 305 81 298 83 291 85 C 286 88 278 95 271 102 C 257 112 241 113 223 109 C 202 103 180 97 164 97 C 148 98 138 96 132 92 Z",
    headDetail: "M 290 64 C 292 60 297 59 300 62 C 301 64 299 67 296 68 Z",
    earInner: "M 292 63 C 294 61 297 61 298 63 C 298 65 296 66 294 66 Z",
    eye: { x: 299, y: 72 },
    farFrontLeg: "M 264 88 C 272 97 283 109 295 120 C 302 126 310 131 316 133 C 320 134 322 131 320 128 C 314 122 305 114 296 104 C 287 95 279 88 271 85 Z",
    nearFrontLeg: "M 252 92 C 262 103 276 117 294 130 C 304 137 316 142 325 144 C 330 145 331 141 327 138 C 317 132 304 122 290 110 C 280 101 270 93 259 89 Z",
    farHindLeg: "M 135 84 C 122 87 108 93 96 102 C 87 108 78 114 70 118 C 65 120 63 118 66 114 C 73 108 84 100 97 92 C 111 83 124 81 133 83 Z",
    nearHindLeg: "M 142 86 C 129 90 112 98 98 110 C 86 119 73 128 61 133 C 56 135 54 132 58 127 C 69 119 84 108 101 97 C 117 86 132 83 141 85 Z",
    tail: "M 132 86 C 110 87 85 86 62 80 C 45 74 32 64 20 61 C 16 60 16 64 19 68 C 30 73 44 81 59 87 C 82 94 108 95 130 91 Z",
    shadow: { cx: 200, cy: 156, rx: 70, ry: 6, opacity: 0.22 },
    bobY: -2,
    spots: [
      { x: 154, y: 86, scale: 0.8 }, { x: 174, y: 82, scale: 1 }, { x: 195, y: 80, scale: 1.1 },
      { x: 215, y: 81, scale: 1 }, { x: 236, y: 84, scale: 0.9 }, { x: 254, y: 88, scale: 0.75 },
      { x: 184, y: 91, scale: 0.9 }, { x: 208, y: 92, scale: 0.9 }, { x: 228, y: 95, scale: 0.8 },
      { x: 92, y: 80, scale: 0.6, isSolid: true }, { x: 55, y: 72, scale: 0.5, isSolid: true },
      { x: 275, y: 106, scale: 0.5, isSolid: true }, { x: 300, y: 122, scale: 0.45, isSolid: true }
    ]
  },

  // Frame 7: Transition into Full Extension Reach
  {
    phase: 7,
    body: "M 130 85 C 145 77 175 73 209 73 C 234 73 254 76 274 73 C 284 71 295 64 303 65 C 309 67 313 71 310 76 C 307 80 300 82 293 84 C 288 87 281 94 274 101 C 261 111 245 112 227 108 C 206 102 182 96 166 97 C 149 98 138 96 131 92 Z",
    headDetail: "M 291 63 C 293 59 298 58 301 61 C 302 63 300 66 297 67 Z",
    earInner: "M 293 62 C 295 60 298 60 299 62 C 299 64 297 65 295 65 Z",
    eye: { x: 300, y: 71 },
    farFrontLeg: "M 266 88 C 273 97 284 109 296 120 C 303 125 310 130 316 132 C 320 133 323 131 321 128 C 316 123 307 115 298 105 C 290 96 281 88 274 84 Z",
    nearFrontLeg: "M 253 92 C 263 103 278 117 297 130 C 307 137 319 142 328 143 C 333 144 334 140 330 137 C 320 131 307 121 292 109 C 282 100 272 92 260 88 Z",
    farHindLeg: "M 135 84 C 121 86 106 92 94 100 C 85 105 76 110 68 113 C 63 114 61 112 64 108 C 71 102 83 95 96 88 C 110 80 124 79 133 82 Z",
    nearHindLeg: "M 142 86 C 128 89 111 97 96 108 C 84 117 70 125 58 129 C 53 130 51 127 55 122 C 66 114 82 104 99 93 C 116 83 132 81 141 84 Z",
    tail: "M 132 86 C 110 88 85 87 62 81 C 45 76 32 66 20 64 C 16 63 16 67 19 70 C 30 75 43 82 58 87 C 82 94 108 95 130 91 Z",
    shadow: { cx: 200, cy: 156, rx: 72, ry: 6.5, opacity: 0.24 },
    bobY: -1,
    spots: [
      { x: 155, y: 87, scale: 0.8 }, { x: 175, y: 83, scale: 1 }, { x: 195, y: 81, scale: 1.1 },
      { x: 216, y: 82, scale: 1 }, { x: 236, y: 85, scale: 0.9 }, { x: 254, y: 89, scale: 0.75 },
      { x: 185, y: 91, scale: 0.9 }, { x: 208, y: 92, scale: 0.9 }, { x: 228, y: 96, scale: 0.8 },
      { x: 91, y: 79, scale: 0.6, isSolid: true }, { x: 58, y: 74, scale: 0.5, isSolid: true },
      { x: 275, y: 105, scale: 0.5, isSolid: true }, { x: 298, y: 120, scale: 0.45, isSolid: true }
    ]
  }
];

export const RunningLeopard: React.FC<RunningLeopardProps> = ({
  className = '',
  size = 'md',
  speedMs = 95,
  showDust = true,
  showSpeedLines = true,
  showShadow = true,
  isPaused = false,
  invertColors = false,
  accentColor = '#F8F1E7',
}) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [dustParticles, setDustParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  const dustIdCounter = useRef(0);

  // Gallop stride frame sequencer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        const next = (prev + 1) % GALLOP_FRAMES.length;

        // Paw impact events (Frame 1: front paw strike, Frame 4: rear paw strike)
        if (showDust && (next === 1 || next === 4)) {
          const impactX = next === 1 ? 286 : 188;
          const impactY = 153;
          const newDust = Array.from({ length: 3 }).map(() => ({
            id: dustIdCounter.current++,
            x: impactX + (Math.random() * 16 - 8),
            y: impactY + (Math.random() * 4 - 2),
            size: Math.random() * 3 + 1.5,
            opacity: 0.8,
          }));

          setDustParticles((prevDust) => [...prevDust.slice(-12), ...newDust]);
        }

        return next;
      });
    }, speedMs);

    return () => clearInterval(interval);
  }, [isPaused, speedMs, showDust]);

  // Decay dust particles over time
  useEffect(() => {
    if (!showDust) return;
    const dustTimer = setInterval(() => {
      setDustParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x - 3.5, // blow backward relative to running leopard
            y: p.y - 0.8,
            opacity: p.opacity - 0.08,
            size: p.size * 0.95,
          }))
          .filter((p) => p.opacity > 0.05)
      );
    }, 50);

    return () => clearInterval(dustTimer);
  }, [showDust]);

  const currentFrame = GALLOP_FRAMES[frameIndex];

  // Dimension scaling
  const sizeClasses = {
    sm: 'w-36 h-auto',
    md: 'w-64 sm:w-72 h-auto',
    lg: 'w-80 sm:w-96 md:w-[420px] h-auto',
    xl: 'w-96 sm:w-[480px] md:w-[560px] h-auto',
    hero: 'w-full max-w-[620px] h-auto',
  };

  // Color mappings
  const primaryCoat = invertColors ? '#2A060B' : accentColor;
  const farCoat = invertColors ? '#1A0407' : '#D5C1A7';
  const spotColor = invertColors ? '#F8F1E7' : '#2A060B';
  const rosetteCenter = invertColors ? '#C8B39B' : '#C8A27A';
  const eyeColor = '#FFE27A';

  return (
    <div className={`relative inline-block select-none ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 380 180"
        className="w-full h-full overflow-visible drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Coat Gradient for predatory depth */}
          <linearGradient id="leopardSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.9" />
            <stop offset="60%" stopColor={primaryCoat} stopOpacity="1" />
            <stop offset="100%" stopColor={farCoat} stopOpacity="0.95" />
          </linearGradient>

          {/* Far Leg Shadow Gradient */}
          <linearGradient id="farLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={farCoat} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1E0407" stopOpacity="0.8" />
          </linearGradient>

          {/* Golden Eye Radiance */}
          <radialGradient id="eyeGleam" cx="40%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFFBE6" />
            <stop offset="60%" stopColor={eyeColor} />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>

          {/* Ground Dust Puff */}
          <radialGradient id="dustGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8F1E7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3D0A10" stopOpacity="0" />
          </radialGradient>

          {/* Speed Streak Gradient */}
          <linearGradient id="streakGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F8F1E7" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#F8F1E7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F8F1E7" stopOpacity="0" />
          </linearGradient>

          {/* Rosette Component Template */}
          <g id="leopard-rosette">
            <ellipse cx="0" cy="0" rx="4" ry="3.2" fill={rosetteCenter} opacity="0.45" />
            <path d="M -3 -4 C -1 -5, 2 -5, 3 -3 C 2 -1, -1 -2, -3 -4 Z" fill={spotColor} opacity="0.88" />
            <path d="M 3 -3 C 5 -1, 5 3, 2 4 C 1 2, 2 -1, 3 -3 Z" fill={spotColor} opacity="0.88" />
            <path d="M -2 4 C 1 5, -1 3, -4 1 C -5 -1, -4 3, -2 4 Z" fill={spotColor} opacity="0.88" />
          </g>
        </defs>

        {/* 1. Dynamic Speed Streaks rushing backward */}
        {showSpeedLines && (
          <g className="speed-lines pointer-events-none" opacity="0.65">
            {/* Upper wind streak */}
            <line
              x1="360"
              y1="55"
              x2="220"
              y2="55"
              stroke="url(#streakGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-pulse"
            />
            {/* Mid body speed line */}
            <line
              x1="340"
              y1="82"
              x2="150"
              y2="82"
              stroke="url(#streakGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Flank slipstream */}
            <line
              x1="290"
              y1="112"
              x2="110"
              y2="112"
              stroke="url(#streakGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Low terrain streak */}
            <line
              x1="380"
              y1="148"
              x2="70"
              y2="148"
              stroke="url(#streakGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* 2. Ground Running Track / Horizon Line */}
        <line
          x1="15"
          y1="156"
          x2="365"
          y2="156"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />

        {/* 3. Dynamic Ground Shadow */}
        {showShadow && (
          <ellipse
            cx={currentFrame.shadow.cx}
            cy={currentFrame.shadow.cy}
            rx={currentFrame.shadow.rx}
            ry={currentFrame.shadow.ry}
            fill="#120204"
            opacity={currentFrame.shadow.opacity}
            style={{ transition: 'all 0.08s ease-out' }}
          />
        )}

        {/* 4. Paw Dust Particles on impact */}
        {showDust &&
          dustParticles.map((p) => (
            <circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={p.size}
              fill="url(#dustGrad)"
              opacity={p.opacity}
            />
          ))}

        {/* 5. The Galloping Big Cat (Leopard) with natural vertical displacement bobY */}
        <g
          transform={`translate(0, ${currentFrame.bobY})`}
          style={{ transition: 'transform 0.08s ease-out' }}
        >
          {/* Far Hind Leg (Back leg on other side of body) */}
          <path
            d={currentFrame.farHindLeg}
            fill="url(#farLegGrad)"
            opacity="0.82"
          />

          {/* Far Front Leg (Lead arm on other side of body) */}
          <path
            d={currentFrame.farFrontLeg}
            fill="url(#farLegGrad)"
            opacity="0.82"
          />

          {/* Tail with counter-balance movement */}
          <path
            d={currentFrame.tail}
            fill="url(#leopardSpineGrad)"
          />
          {/* Tail spots / tip markings */}
          <circle cx="32" cy="70" r="1.8" fill={spotColor} opacity="0.6" />
          <circle cx="48" cy="77" r="2.2" fill={spotColor} opacity="0.6" />
          <circle cx="68" cy="83" r="2.5" fill={spotColor} opacity="0.65" />
          <circle cx="95" cy="88" r="2.8" fill={spotColor} opacity="0.7" />

          {/* Main Leopard Torso, Neck & Cranium */}
          <path
            d={currentFrame.body}
            fill="url(#leopardSpineGrad)"
            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          />

          {/* Leopard Head & Ear Details */}
          <path
            d={currentFrame.headDetail}
            fill="#3D0A10"
            opacity="0.6"
          />
          <path
            d={currentFrame.earInner}
            fill="#FFFDF9"
            opacity="0.85"
          />

          {/* Near Hind Leg (Foreground hip & hock) */}
          <path
            d={currentFrame.nearHindLeg}
            fill="url(#leopardSpineGrad)"
          />

          {/* Near Front Leg (Foreground shoulder & paw) */}
          <path
            d={currentFrame.nearFrontLeg}
            fill="url(#leopardSpineGrad)"
          />

          {/* Signature Leopard Rosette Patterns on Body & Legs */}
          {currentFrame.spots.map((spot, idx) => {
            if (spot.isSolid) {
              return (
                <circle
                  key={`spot-${idx}`}
                  cx={spot.x}
                  cy={spot.y}
                  r={(spot.scale || 1) * 3}
                  fill={spotColor}
                  opacity="0.78"
                />
              );
            }
            return (
              <g
                key={`rosette-${idx}`}
                transform={`translate(${spot.x}, ${spot.y}) scale(${spot.scale || 1})`}
              >
                <use href="#leopard-rosette" />
              </g>
            );
          })}

          {/* Sleek Feline Muzzle & Whiskers */}
          <circle cx="308" cy="79" r="1.2" fill="#2A060B" opacity="0.65" />
          {/* Whiskers extending forward */}
          <line
            x1="307"
            y1="80"
            x2="322"
            y2="78"
            stroke="#FFFDF9"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />
          <line
            x1="307"
            y1="81"
            x2="324"
            y2="83"
            stroke="#FFFDF9"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />

          {/* Predatory Glowing Amber Leopard Eye */}
          <ellipse
            cx={currentFrame.eye.x}
            cy={currentFrame.eye.y}
            rx="2.6"
            ry="2.1"
            fill="url(#eyeGleam)"
          />
          {/* Feline Vertical Slit Pupil */}
          <line
            x1={currentFrame.eye.x}
            y1={currentFrame.eye.y - 1.5}
            x2={currentFrame.eye.x}
            y2={currentFrame.eye.y + 1.5}
            stroke="#120204"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          {/* Eye Spark Glint */}
          <circle
            cx={currentFrame.eye.x - 0.7}
            cy={currentFrame.eye.y - 0.7}
            r="0.6"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );
};
