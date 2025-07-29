declare module "vanta/dist/vanta.cells.min" {
  import type * as THREE from "three";

  type VantaEffectOptions = {
    el: HTMLElement;
    THREE: typeof THREE;
    color1?: number;
    color2?: number;
    scale?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
  };

  interface VantaEffectInstance {
    destroy: () => void;
  }

  function CELLS(options: VantaEffectOptions): VantaEffectInstance;

  export default CELLS;
}