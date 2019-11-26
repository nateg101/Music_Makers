declare namespace Nexus {
    type Toggle = any;
    type Button = any;
    type Dial = any;
    type Number = any;
    type Position = any;
    type Slider = any;
    type Envelope = any;
    type Multislider = any;
    type Piano = any;
    type RadioButton = any;
    type Select = any;
    type Sequencer = any;
    type TextButton = any;
    type Tilt = any;
    type Pan = any;
    type Pan2D = any;
}
export declare type Size = [number, number];
export declare type ToggleProps = {
    size?: Size;
    state?: boolean;
    onChange?: (state: boolean) => any;
    onReady?: (toggle: Nexus.Toggle) => any;
};
export declare type ButtonMode = "button" | "aftertouch" | "impulse" | "toggle";
export declare type ButtonProps = {
    size?: Size;
    mode?: ButtonMode;
    state?: boolean | number;
    onChange?: (state: boolean | number) => any;
    onReady?: (button: Nexus.Button) => any;
};
export declare type DialProps = {
    size?: Size;
    interaction?: "radial" | "vertical" | "horizontal";
    mode?: "absolute" | "relative";
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => any;
    onReady?: (dial: Nexus.Dial) => any;
};
export declare type NumberProps = {
    size?: Size;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => any;
    onReady?: (number: Nexus.Number) => any;
};
export declare type PositionProps = {
    size?: Size;
    mode?: "absolute" | "relative";
    x?: number;
    y?: number;
    minX?: number;
    minY?: number;
    maxX?: number;
    maxY?: number;
    stepX?: number;
    stepY?: number;
    onChange?: (value: {
        x: number;
        y: number;
    }) => any;
    onReady?: (position: Nexus.Position) => any;
};
export declare type SliderProps = {
    size?: Size;
    mode?: "absolute" | "relative";
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => any;
    onReady?: (slider: Nexus.Slider) => any;
};
export declare type EnvelopeProps = {
    size?: Size;
    noNewPoints?: boolean;
    points?: {
        x: number;
        y: number;
    }[];
    onChange?: (points: {
        x: number;
        y: number;
    }[]) => any;
    onReady?: (envelope: Nexus.Envelope) => any;
};
export declare type MultisliderProps = {
    size?: Size;
    numberOfSliders?: number;
    min?: number;
    max?: number;
    step?: number;
    candycane?: number;
    values?: number[];
    smoothing?: number;
    mode?: "bar" | "line";
    onChange?: (change: {
        index: number;
        value: number;
    }) => any;
    onReady?: (multislider: Nexus.Multislider) => any;
};
export declare type PianoProps = {
    size?: Size;
    mode?: "button" | "toggle" | "impulse";
    lowNote?: number;
    highNote?: number;
    onChange?: (change: {
        note: number;
        state: boolean;
    }) => any;
    onReady?: (piano: Nexus.Piano) => any;
};
export declare type RadioButtonProps = {
    size?: Size;
    numberOfButtons?: number;
    active?: number;
    onReady?: (button: Nexus.RadioButton) => any;
    onChange?: (change: number) => any;
};
export declare type SelectChange = {
    value: string;
    index: number;
};
export declare type SelectProps = {
    size?: Size;
    options: string[];
    value?: string;
    selectedIndex?: number;
    onReady?: (select: Nexus.Select) => any;
    onChange?: (change: SelectChange) => any;
};
export declare type SequencerProps = {
    size?: Size;
    mode?: ButtonProps["mode"];
    rows?: number;
    columns?: number;
    color?: string;
    note?: number;
    onChange?: (change: SequencerChange) => any;
    onStep?: (change: boolean[], note: number) => any;
    onReady?: (select: Nexus.Sequencer) => any;
};
export declare type SequencerChange = {
    row: number;
    column: number;
    state: boolean;
};
export declare type TextButtonProps = {
    size?: Size;
    state?: boolean;
    text?: string;
    alternateText?: string;
    onChange?: (change: string) => any;
    onReady?: (textbutton: Nexus.TextButton) => any;
};
export declare type TiltProps = {
    size?: Size;
    active?: boolean;
    onChange?: (change: {
        x: number;
        y: number;
        z: number;
    }) => any;
    onReady?: (tilt: Nexus.Tilt) => any;
};
export declare type PanProps = {
    size?: Size;
    value?: number;
    onChange?: (change: PanChange) => any;
    onReady?: (pan: Nexus.Pan) => any;
};
export declare type PanChange = {
    value: number;
    L: number;
    R: number;
};
export declare type Pan2DProps = {
    size?: Size;
    range?: number;
    mode?: "absolute" | "relative";
    speakers?: [number, number][];
    onChange?: (change: Pan2DChange) => any;
    onReady?: (pan: Nexus.Pan2D) => any;
};
export declare type Pan2DChange = number[];
export {};
