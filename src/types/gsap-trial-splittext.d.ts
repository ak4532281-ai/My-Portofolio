// Add minimal typings for GSAP plugins that don't provide their own TypeScript declarations.
// This prevents TS7016 errors when importing from "gsap/…".

declare module "gsap/SplitText" {
  export interface SplitTextConfig {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    [key: string]: any;
  }

  export class SplitText {
    constructor(targets: any, vars?: SplitTextConfig);
    revert(): void;
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
  }
}

declare module "gsap/ScrollSmoother" {
  export interface ScrollSmootherConfig {
    wrapper?: string | HTMLElement;
    content?: string | HTMLElement;
    smooth?: number;
    speed?: number;
    effects?: boolean;
    autoResize?: boolean;
    ignoreMobileResize?: boolean;
    [key: string]: any;
  }

  export class ScrollSmoother {
    constructor(config?: ScrollSmootherConfig);

    // Static helpers
    static create(config?: ScrollSmootherConfig): ScrollSmoother;
    static refresh(force?: boolean): void;

    // Instance methods
    scrollTop(value: number, vars?: any): void;
    scrollTo(
      target: string | HTMLElement | number,
      preventScroll?: boolean,
      position?: string
    ): void;
    paused(value: boolean): void;
  }
}
