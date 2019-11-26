import { memo, useRef, useEffect, createElement } from 'react';
import * as Nexus from 'nexusui';
import { Button as Button$1, Toggle as Toggle$1, Dial as Dial$1, Number as Number$1, Position as Position$1, Slider as Slider$1, Envelope as Envelope$1, Multislider as Multislider$1, Piano as Piano$1, RadioButton as RadioButton$1, Select as Select$1, Sequencer as Sequencer$1, TextButton as TextButton$1, Tilt as Tilt$1, Pan as Pan$1, Pan2D as Pan2D$1 } from 'nexusui';

let id = 0;
function getId() {
    id += 1;
    return id;
}
function NO_OP() { }

const Button = memo(function Button({ size, mode = "button", state, onChange = NO_OP, onReady = NO_OP }) {
    let button = useRef(null);
    let elementId = useRef(`nexus-ui-button-${getId()}`);
    useEffect(() => {
        button.current = new Button$1(elementId.current, {
            size,
            state,
            mode
        });
        onReady(button.current);
        button.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            button.current.destroy();
        };
    }, [size, state, mode, onChange, onReady]);
    return createElement("div", { id: elementId.current });
});

const Toggle = memo(function Toggle({ size = [120, 40], state, onChange = NO_OP, onReady = NO_OP }) {
    let toggle = useRef(null);
    let elementId = useRef(`nexus-ui-toggle-${getId()}`);
    useEffect(() => {
        toggle.current = new Toggle$1(elementId.current, {
            size,
            state
        });
        onReady(toggle.current);
        toggle.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            toggle.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (toggle.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        toggle.current.resize(...size);
    }, size);
    useEffect(() => {
        if (toggle.current === null)
            return;
        if (toggle.current.state != state) {
            toggle.current.flip();
        }
    }, [state]);
    return createElement("div", { id: elementId.current });
});

const Dial = memo(function Dial({ size, interaction, max, min, mode, value, onChange = NO_OP, onReady = NO_OP }) {
    let dial = useRef(null);
    let elementId = useRef(`nexus-ui-dial-${getId()}`);
    useEffect(() => {
        dial.current = new Dial$1(elementId.current, {
            size,
            interaction,
            max,
            min,
            mode
        });
        onReady(dial.current);
        dial.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            dial.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (dial.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        dial.current.resize(...size);
    }, size);
    useEffect(() => {
        if (dial.current === null)
            return;
        if (value === undefined)
            return;
        dial.current.value = value;
    }, [value]);
    useEffect(() => {
        if (dial.current === null)
            return;
        if (min === undefined)
            return;
        dial.current.min = min;
    }, [min]);
    useEffect(() => {
        if (dial.current === null)
            return;
        if (max === undefined)
            return;
        dial.current.max = max;
    }, [max]);
    useEffect(() => {
        if (dial.current === null)
            return;
        if (interaction === undefined)
            return;
        dial.current.interaction = interaction;
    }, [interaction]);
    return createElement("div", { key: elementId.current, id: elementId.current });
});

const DEFAULT_SIZE = [120, 80];

const Number = memo(function Number({ size = DEFAULT_SIZE, value, min, max, step, onChange = NO_OP, onReady = NO_OP }) {
    let number = useRef(null);
    let elementId = useRef(`nexus-ui-number-${getId()}`);
    useEffect(() => {
        number.current = new Number$1(elementId.current, {
            size,
            value,
            min,
            max,
            step
        });
        onReady(number.current);
        number.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            number.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (number.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        number.current.resize(...size);
    }, size);
    useEffect(() => {
        if (number.current === null)
            return;
        if (value === undefined)
            return;
        number.current.value = value;
    }, [value]);
    useEffect(() => {
        if (number.current === null)
            return;
        if (min === undefined)
            return;
        number.current.min = min;
    }, [min]);
    useEffect(() => {
        if (number.current === null)
            return;
        if (max === undefined)
            return;
        number.current.max = max;
    }, [max]);
    return createElement("div", { id: elementId.current });
});

const Position = memo(function Position({ size = DEFAULT_SIZE, x, y, minX, minY, maxX, maxY, stepX, stepY, onChange = NO_OP, onReady = NO_OP }) {
    let position = useRef(null);
    let elementId = useRef(`nexus-ui-position-${getId()}`);
    useEffect(() => {
        position.current = new Position$1(elementId.current, {
            size,
            x,
            y,
            minX,
            minY,
            maxX,
            maxY,
            stepX,
            stepY
        });
        onReady(position.current);
        position.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            position.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        position.current.resize(...size);
    }, size);
    useEffect(() => {
        if (position.current === null)
            return;
        if (minX === undefined)
            return;
        position.current.minX = minX;
    }, [minX]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (minY === undefined)
            return;
        position.current.minY = minY;
    }, [minY]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (maxX === undefined)
            return;
        position.current.maxX = maxX;
    }, [maxX]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (maxY === undefined)
            return;
        position.current.maxY = maxY;
    }, [maxY]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (stepX === undefined)
            return;
        position.current.stepX = stepX;
    }, [stepX]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (stepY === undefined)
            return;
        position.current.stepY = stepY;
    }, [stepY]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (x === undefined)
            return;
        position.current.x = x;
    }, [x]);
    useEffect(() => {
        if (position.current === null)
            return;
        if (y === undefined)
            return;
        position.current.y = y;
    }, [y]);
    return createElement("div", { id: elementId.current });
});

const Slider = memo(function Slider({ size = DEFAULT_SIZE, value, min, max, step, onChange = NO_OP, onReady = NO_OP }) {
    let slider = useRef(null);
    let elementId = useRef(`nexus-ui-slider-${getId()}`);
    useEffect(() => {
        slider.current = new Slider$1(elementId.current, {
            size,
            value,
            min,
            max,
            step
        });
        onReady(slider.current);
        slider.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            slider.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (slider.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        slider.current.resize(...size);
    }, size);
    useEffect(() => {
        if (slider.current === null)
            return;
        if (value === undefined)
            return;
        slider.current.value = value;
    }, [value]);
    useEffect(() => {
        if (slider.current === null)
            return;
        if (min === undefined)
            return;
        slider.current.min = min;
    }, [min]);
    useEffect(() => {
        if (slider.current === null)
            return;
        if (max === undefined)
            return;
        slider.current.max = max;
    }, [max]);
    return createElement("div", { id: elementId.current });
});

const Envelope = memo(function Envelope({ size, noNewPoints, points = [], onChange = NO_OP, onReady = NO_OP }) {
    let envelope = useRef(null);
    let elementId = useRef(`nexus-ui-envelope-${getId()}`);
    useEffect(() => {
        if (points.length === 0) {
            console.warn("Can't render envelope without points. Make sure points contains at least one element.");
            return;
        }
        envelope.current = new Envelope$1(elementId.current, {
            size,
            noNewPoints,
            points
        });
        envelope.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            envelope.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (envelope.current === null)
            return;
        if (!Array.isArray(points)) {
            return;
        }
        envelope.current.setPoints(points);
    }, [points]);
    return createElement("div", { id: elementId.current });
});

const Multislider = memo(function Multislider({ size, max, min, smoothing, step, values, candycane, onChange = NO_OP, onReady = NO_OP }) {
    let multislider = useRef(null);
    let elementId = useRef(`nexus-ui-multislider-${getId()}`);
    useEffect(() => {
        multislider.current = new Multislider$1(elementId.current, {
            size,
            max,
            min,
            smoothing,
            step,
            values,
            candycane
        });
        onReady(multislider.current);
        multislider.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            multislider.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        multislider.current.resize(...size);
    }, size);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (min === undefined)
            return;
        multislider.current.min = min;
    }, [min]);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (max === undefined)
            return;
        multislider.current.max = max;
    }, [max]);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (smoothing === undefined)
            return;
        multislider.current.smoothing = smoothing;
    }, [smoothing]);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (step === undefined)
            return;
        multislider.current.step = step;
    }, [step]);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (values === undefined || !Array.isArray(values))
            return;
        multislider.current.setAllSliders(values);
    }, values);
    useEffect(() => {
        if (multislider.current === null)
            return;
        if (values === undefined)
            return;
        multislider.current.values = values;
    }, [candycane]);
    return createElement("div", { id: elementId.current });
});

const Piano = memo(function Piano({ size = [500, 125], mode = "button", lowNote = 24, highNote = 60, onChange = () => { }, onReady = nexusElement => { } }) {
    let piano = useRef(null);
    let elementId = useRef(`nexus-ui-piano-${getId()}`);
    useEffect(() => {
        piano.current = new Piano$1(elementId.current, {
            size,
            mode,
            lowNote,
            highNote
        });
        onReady(piano.current);
        piano.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            piano.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (piano.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        piano.current.resize(...size);
    }, size);
    return createElement("div", { id: elementId.current });
});

const RadioButton = memo(function RadioButton({ size = [120, 25], numberOfButtons = 1, active, onReady = () => { }, onChange = () => { } }) {
    let radiobutton = useRef(null);
    let elementId = useRef(`nexus-ui-radiobutton-${getId()}`);
    useEffect(() => {
        radiobutton.current = new RadioButton$1(elementId.current, {
            size,
            numberOfButtons,
            active
        });
        const timeoutid = setTimeout(() => {
            radiobutton.current.resize(...size);
        }, 0);
        onReady(radiobutton.current);
        radiobutton.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            radiobutton.current.destroy();
            clearTimeout(timeoutid);
        };
    }, [onChange]);
    useEffect(() => {
        if (radiobutton.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        radiobutton.current.resize(...size);
    }, size);
    useEffect(() => {
        if (radiobutton.current === null)
            return;
        radiobutton.current.numberOfButtons = numberOfButtons;
    }, [numberOfButtons]);
    return createElement("div", { id: elementId.current });
});

const Select = memo(function Select({ size = [120, 25], options = ["default", "options"], value, selectedIndex, onReady = () => { }, onChange = () => { } }) {
    let select = useRef(null);
    let elementId = useRef(`nexus-ui-select-${getId()}`);
    useEffect(() => {
        select.current = new Select$1(elementId.current, {
            size,
            options
        });
        onReady(select.current);
        select.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            select.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (select.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        select.current.resize(...size);
    }, size);
    useEffect(() => {
        if (value === undefined || select.current === null)
            return;
        select.current.value = value;
    }, [value]);
    useEffect(() => {
        if (selectedIndex === undefined || select.current === null)
            return;
        select.current.selectedIndex = selectedIndex;
    }, [selectedIndex]);
    return createElement("div", { id: elementId.current });
});

const Sequencer = memo(function Sequencer({ size = [400, 200], mode = "toggle", rows = 5, columns = 10, color = '#000', note = 60, onChange = () => { }, onStep = () => { }, onReady = () => { } }, ref) {
    let sequencer = useRef(null);
    let elementId = useRef(`nexus-ui-sequencer-${getId()}`);
    useEffect(() => {
        window.Nexus = Nexus;
        sequencer.current = new Sequencer$1(elementId.current, {
            size,
            mode,
            columns,
            rows
        });
        sequencer.current.colors.accent = color;
        onReady(sequencer.current);
        sequencer.current.on("change", (newState) => {
            onChange(newState);
        });
        sequencer.current.on("step", (newState) => {
            onStep(newState, note);
        });
        return () => {
            sequencer.current.destroy();
        };
    }, [onChange, onStep]);
    useEffect(() => {
        if (sequencer.current === null || !Array.isArray(size))
            return;
        sequencer.current.resize(...size);
    }, size);
    useEffect(() => {
        if (sequencer.current === null)
            return;
        sequencer.current.columns = columns;
    }, [columns]);
    useEffect(() => {
        if (sequencer.current === null)
            return;
        sequencer.current.rows = rows;
    }, [rows]);
    return createElement("div", { id: elementId.current });
});

const TextButton = memo(function TextButton({ size, onReady = NO_OP, onChange = NO_OP, state, alternateText, text }) {
    const elementId = useRef(`nexus-ui-textbutton-${getId()}`);
    const textbutton = useRef(null);
    useEffect(() => {
        window.Nexus = Nexus;
        textbutton.current = new TextButton$1(elementId.current, {
            size,
            state,
            alternateText,
            text
        });
        onReady(textbutton.current);
        textbutton.current.on("change", (buttonText) => {
            onChange(buttonText);
        });
        return () => {
            textbutton.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        textbutton.current.state = state;
    }, [state]);
    useEffect(() => {
        textbutton.current.text = text;
    }, [text]);
    useEffect(() => {
        textbutton.current.alternateText = alternateText;
    }, [alternateText]);
    return createElement("div", { id: elementId.current });
});

const Tilt = memo(function Tilt({ size, active, onChange = () => { }, onReady = () => { } }) {
    let tilt = useRef(null);
    let elementId = useRef(`nexus-ui-tilt-${getId()}`);
    useEffect(() => {
        tilt.current = new Tilt$1(elementId.current, { size, active });
        onReady(tilt.current);
        tilt.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            tilt.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (tilt.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        tilt.current.resize(...size);
    }, size);
    useEffect(() => {
        if (tilt.current === null)
            return;
        tilt.current.active = active;
    }, [active]);
    return createElement("div", { id: elementId.current });
});

const Pan = memo(function Pan({ size = [120, 30], value = 0, onChange = () => { }, onReady = () => { } }) {
    let pan = useRef(null);
    let elementId = useRef(`nexus-ui-pan-${getId()}`);
    useEffect(() => {
        pan.current = new Pan$1(elementId.current, { size, value });
        onReady(pan.current);
        pan.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            pan.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (pan.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        pan.current.resize(...size);
    }, size);
    useEffect(() => {
        if (pan.current === null)
            return;
        pan.current.value = value;
    }, [value]);
    return createElement("div", { id: elementId.current });
});

const Pan2D = memo(function Pan2D({ size = [200, 200], onChange = () => { }, onReady = () => { }, range = 0.5, mode, speakers }) {
    let pan2D = useRef(null);
    let elementId = useRef(`nexus-ui-pan2D-${getId()}`);
    useEffect(() => {
        const options = {
            size,
            range,
            mode
        };
        if (Array.isArray(speakers)) {
            options["speakers"] = speakers;
        }
        pan2D.current = new Pan2D$1(elementId.current, options);
        onReady(pan2D.current);
        pan2D.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            pan2D.current.destroy();
        };
    }, [onChange]);
    useEffect(() => {
        if (pan2D.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        pan2D.current.resize(...size);
    }, size);
    return createElement("div", { id: elementId.current });
});

export { Button, Dial, Envelope, Multislider, Number, Pan, Pan2D, Piano, Position, RadioButton, Select, Sequencer, Slider, TextButton, Tilt, Toggle };
