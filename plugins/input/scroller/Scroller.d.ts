export default Scroller;

declare namespace Scroller {

    type OrientationType = 0 | 1 | 'x' | 'y' | 'v' | 'vertical' | 'h' | 'horizontal';
    type ValuechangeCallbackType = (newValue: number, oldValue: number) => void

    interface IConfig {
        bounds?: [
            bottomBound: number,
            topBound: number
        ],
        value?: number,
        threshold?: number,
        slidingDeceleration?: number,
        backDeceleration?: number,
        enable?: boolean,
        orientation?: OrientationType,

        valuechangeCallback?: ValuechangeCallbackType,
        valuechangeCallbackScope?: Object,

        overmaxCallback?: ValuechangeCallbackType,
        overmaxCallbackScope?: Object,

        overminCallback?: ValuechangeCallbackType,
        overminCallbackScope?: Object,
    }
}

declare class Scroller extends Phaser.Events.EventEmitter {
    constructor(
        gameObject: Phaser.GameObjects.GameObject,
        config?: Scroller.IConfig
    )

    setEnable(enable?: boolean): this;
    toggleEnable(): this;
    enable: boolean;

    setBounds(bound0: number, bound1: number): this;
    setBounds(bounds: [bottomBound: number, topBound: number]): this;

    setSlidingDeceleration(dec: number | false): this;
    setBackDeceleration(dec: number | false): this;

    setValue(newValue: number): this;
    value: number;

    readonly isDragging: boolean;

    readonly state: string;
}