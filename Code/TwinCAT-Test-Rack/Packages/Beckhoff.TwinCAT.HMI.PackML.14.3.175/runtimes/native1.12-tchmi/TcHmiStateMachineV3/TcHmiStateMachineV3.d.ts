import { TcHmiStateMachineV2, State, type StateInformation } from '../dist/TcHmiStateMachineV2.esm.js';
export declare class TcHmiStateMachineV3 extends TcHmi.Controls.Beckhoff.TcHmiPackML.TcHmiStateMachineV2 {
    #private;
    /**
     * Constructor Creates a new control instance.
     * @param element The element that hosts the control.
     * @param pcElement Precompiled element.
     * @param attrs The control attributes.
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** A map that stores information for each possible state */
    protected __stateInformation: Map<State, StateInformation>;
    /** Colors used througout in the canvas */
    protected __canvasResources: {
        stateTextcolor: string;
        stateTextcolorHovered: string;
        stateTextcolorSelectable: string;
        stateColorHovered: string;
        stateColorSelectable: string;
        stateBorderColor: string;
        stateBorderColorSelectable: string;
        transitionColor: string;
        transitionTextColor: string;
        transitionCommandColor: string;
        transitionCommandTextColor: string;
        borderColor: string;
        baseColor: string;
        innerBaseColor: string;
        rectangleColor: string;
        innerRectangleColor: string;
    };
    /** Width of a state */
    protected __stateWidth: number;
    /** Height of a state */
    protected __stateHeight: number;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     * Call attribute processor functions here to initialize default values!
     */
    __previnit(): void;
    /**
     * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by tachcontrol() after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Draws the basis of the control
     */
    protected __drawBasis(): void;
    /**
     * A function to draw the arrows between the states
     */
    protected __drawCircle(context: CanvasRenderingContext2D, xCenter: number, yCenter: number, radius: number, startAngle: number, endAngle: number, fillColor?: string): void;
}
declare const _TcHmiStateMachineV3: typeof TcHmiStateMachineV3;
type tTcHmiStateMachineV3 = TcHmiStateMachineV3;
declare global {
    namespace TcHmi.Controls.Beckhoff.TcHmiPackML {
        const TcHmiStateMachineV3: typeof _TcHmiStateMachineV3;
        type TcHmiStateMachineV3 = tTcHmiStateMachineV3;
    }
}
export {};