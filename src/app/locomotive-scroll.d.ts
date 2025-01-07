// src/types/locomotive-scroll.d.ts
declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth: boolean;
    multiplier?: number;
    class?: string;
    // Adicione outras opções conforme necessário
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);

    update(): void;
    destroy(): void;
    scrollTo(target: string | HTMLElement | number, options?: any): void;
    // Adicione outros métodos conforme necessário
  }
}
