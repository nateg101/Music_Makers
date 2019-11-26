'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Nexus = require('nexusui');

let id = 0;
function getId() {
    id += 1;
    return id;
}
function NO_OP() { }

const Button = React.memo(function Button({ size, mode = "button", state, onChange = NO_OP, onReady = NO_OP }) {
    let button = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-button-${getId()}`);
    React.useEffect(() => {
        button.current = new Nexus.Button(elementId.current, {
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
    return React.createElement("div", { id: elementId.current });
});

const Toggle = React.memo(function Toggle({ size = [120, 40], state, onChange = NO_OP, onReady = NO_OP }) {
    let toggle = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-toggle-${getId()}`);
    React.useEffect(() => {
        toggle.current = new Nexus.Toggle(elementId.current, {
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
    React.useEffect(() => {
        if (toggle.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        toggle.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (toggle.current === null)
            return;
        if (toggle.current.state != state) {
            toggle.current.flip();
        }
    }, [state]);
    return React.createElement("div", { id: elementId.current });
});

const Dial = React.memo(function Dial({ size, interaction, max, min, mode, value, onChange = NO_OP, onReady = NO_OP }) {
    let dial = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-dial-${getId()}`);
    React.useEffect(() => {
        dial.current = new Nexus.Dial(elementId.current, {
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
    React.useEffect(() => {
        if (dial.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        dial.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (dial.current === null)
            return;
        if (value === undefined)
            return;
        dial.current.value = value;
    }, [value]);
    React.useEffect(() => {
        if (dial.current === null)
            return;
        if (min === undefined)
            return;
        dial.current.min = min;
    }, [min]);
    React.useEffect(() => {
        if (dial.current === null)
            return;
        if (max === undefined)
            return;
        dial.current.max = max;
    }, [max]);
    React.useEffect(() => {
        if (dial.current === null)
            return;
        if (interaction === undefined)
            return;
        dial.current.interaction = interaction;
    }, [interaction]);
    return React.createElement("div", { key: elementId.current, id: elementId.current });
});

const DEFAULT_SIZE = [120, 80];

const Number = React.memo(function Number({ size = DEFAULT_SIZE, value, min, max, step, onChange = NO_OP, onReady = NO_OP }) {
    let number = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-number-${getId()}`);
    React.useEffect(() => {
        number.current = new Nexus.Number(elementId.current, {
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
    React.useEffect(() => {
        if (number.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        number.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (number.current === null)
            return;
        if (value === undefined)
            return;
        number.current.value = value;
    }, [value]);
    React.useEffect(() => {
        if (number.current === null)
            return;
        if (min === undefined)
            return;
        number.current.min = min;
    }, [min]);
    React.useEffect(() => {
        if (number.current === null)
            return;
        if (max === undefined)
            return;
        number.current.max = max;
    }, [max]);
    return React.createElement("div", { id: elementId.current });
});

const Position = React.memo(function Position({ size = DEFAULT_SIZE, x, y, minX, minY, maxX, maxY, stepX, stepY, onChange = NO_OP, onReady = NO_OP }) {
    let position = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-position-${getId()}`);
    React.useEffect(() => {
        position.current = new Nexus.Position(elementId.current, {
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
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        position.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (minX === undefined)
            return;
        position.current.minX = minX;
    }, [minX]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (minY === undefined)
            return;
        position.current.minY = minY;
    }, [minY]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (maxX === undefined)
            return;
        position.current.maxX = maxX;
    }, [maxX]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (maxY === undefined)
            return;
        position.current.maxY = maxY;
    }, [maxY]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (stepX === undefined)
            return;
        position.current.stepX = stepX;
    }, [stepX]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (stepY === undefined)
            return;
        position.current.stepY = stepY;
    }, [stepY]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (x === undefined)
            return;
        position.current.x = x;
    }, [x]);
    React.useEffect(() => {
        if (position.current === null)
            return;
        if (y === undefined)
            return;
        position.current.y = y;
    }, [y]);
    return React.createElement("div", { id: elementId.current });
});

const Slider = React.memo(function Slider({ size = DEFAULT_SIZE, value, min, max, step, onChange = NO_OP, onReady = NO_OP }) {
    let slider = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-slider-${getId()}`);
    React.useEffect(() => {
        slider.current = new Nexus.Slider(elementId.current, {
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
    React.useEffect(() => {
        if (slider.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        slider.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (slider.current === null)
            return;
        if (value === undefined)
            return;
        slider.current.value = value;
    }, [value]);
    React.useEffect(() => {
        if (slider.current === null)
            return;
        if (min === undefined)
            return;
        slider.current.min = min;
    }, [min]);
    React.useEffect(() => {
        if (slider.current === null)
            return;
        if (max === undefined)
            return;
        slider.current.max = max;
    }, [max]);
    return React.createElement("div", { id: elementId.current });
});

const Envelope = React.memo(function Envelope({ size, noNewPoints, points = [], onChange = NO_OP, onReady = NO_OP }) {
    let envelope = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-envelope-${getId()}`);
    React.useEffect(() => {
        if (points.length === 0) {
            console.warn("Can't render envelope without points. Make sure points contains at least one element.");
            return;
        }
        envelope.current = new Nexus.Envelope(elementId.current, {
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
    React.useEffect(() => {
        if (envelope.current === null)
            return;
        if (!Array.isArray(points)) {
            return;
        }
        envelope.current.setPoints(points);
    }, [points]);
    return React.createElement("div", { id: elementId.current });
});

const Multislider = React.memo(function Multislider({ size, max, min, smoothing, step, values, candycane, onChange = NO_OP, onReady = NO_OP }) {
    let multislider = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-multislider-${getId()}`);
    React.useEffect(() => {
        multislider.current = new Nexus.Multislider(elementId.current, {
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
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        multislider.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (min === undefined)
            return;
        multislider.current.min = min;
    }, [min]);
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (max === undefined)
            return;
        multislider.current.max = max;
    }, [max]);
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (smoothing === undefined)
            return;
        multislider.current.smoothing = smoothing;
    }, [smoothing]);
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (step === undefined)
            return;
        multislider.current.step = step;
    }, [step]);
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (values === undefined || !Array.isArray(values))
            return;
        multislider.current.setAllSliders(values);
    }, values);
    React.useEffect(() => {
        if (multislider.current === null)
            return;
        if (values === undefined)
            return;
        multislider.current.values = values;
    }, [candycane]);
    return React.createElement("div", { id: elementId.current });
});

const Piano = React.memo(function Piano({ size = [500, 125], mode = "button", lowNote = 24, highNote = 60, onChange = () => { }, onReady = nexusElement => { } }) {
    let piano = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-piano-${getId()}`);
    React.useEffect(() => {
        piano.current = new Nexus.Piano(elementId.current, {
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
    React.useEffect(() => {
        if (piano.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        piano.current.resize(...size);
    }, size);
    return React.createElement("div", { id: elementId.current });
});

const RadioButton = React.memo(function RadioButton({ size = [120, 25], numberOfButtons = 1, active, onReady = () => { }, onChange = () => { } }) {
    let radiobutton = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-radiobutton-${getId()}`);
    React.useEffect(() => {
        radiobutton.current = new Nexus.RadioButton(elementId.current, {
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
    React.useEffect(() => {
        if (radiobutton.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        radiobutton.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (radiobutton.current === null)
            return;
        radiobutton.current.numberOfButtons = numberOfButtons;
    }, [numberOfButtons]);
    return React.createElement("div", { id: elementId.current });
});

const Select = React.memo(function Select({ size = [120, 25], options = ["default", "options"], value, selectedIndex, onReady = () => { }, onChange = () => { } }) {
    let select = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-select-${getId()}`);
    React.useEffect(() => {
        select.current = new Nexus.Select(elementId.current, {
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
    React.useEffect(() => {
        if (select.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        select.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (value === undefined || select.current === null)
            return;
        select.current.value = value;
    }, [value]);
    React.useEffect(() => {
        if (selectedIndex === undefined || select.current === null)
            return;
        select.current.selectedIndex = selectedIndex;
    }, [selectedIndex]);
    return React.createElement("div", { id: elementId.current });
});

const Sequencer = React.memo(function Sequencer({ size = [400, 200], mode = "toggle", rows = 5, columns = 10, color = '#000', onChange = () => { }, onStep = () => { }, onReady = () => { } }, ref) {
    let sequencer = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-sequencer-${getId()}`);
    React.useEffect(() => {
        window.Nexus = Nexus;
        sequencer.current = new Nexus.Sequencer(elementId.current, {
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
            onStep(newState);
        });
        return () => {
            sequencer.current.destroy();
        };
    }, [onChange, onStep]);
    React.useEffect(() => {
        if (sequencer.current === null || !Array.isArray(size))
            return;
        sequencer.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (sequencer.current === null)
            return;
        sequencer.current.columns = columns;
    }, [columns]);
    React.useEffect(() => {
        if (sequencer.current === null)
            return;
        sequencer.current.rows = rows;
    }, [rows]);
    return React.createElement("div", { id: elementId.current });
});

const TextButton = React.memo(function TextButton({ size, onReady = NO_OP, onChange = NO_OP, state, alternateText, text }) {
    const elementId = React.useRef(`nexus-ui-textbutton-${getId()}`);
    const textbutton = React.useRef(null);
    React.useEffect(() => {
        window.Nexus = Nexus;
        textbutton.current = new Nexus.TextButton(elementId.current, {
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
    React.useEffect(() => {
        textbutton.current.state = state;
    }, [state]);
    React.useEffect(() => {
        textbutton.current.text = text;
    }, [text]);
    React.useEffect(() => {
        textbutton.current.alternateText = alternateText;
    }, [alternateText]);
    return React.createElement("div", { id: elementId.current });
});

const Tilt = React.memo(function Tilt({ size, active, onChange = () => { }, onReady = () => { } }) {
    let tilt = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-tilt-${getId()}`);
    React.useEffect(() => {
        tilt.current = new Nexus.Tilt(elementId.current, { size, active });
        onReady(tilt.current);
        tilt.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            tilt.current.destroy();
        };
    }, [onChange]);
    React.useEffect(() => {
        if (tilt.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        tilt.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (tilt.current === null)
            return;
        tilt.current.active = active;
    }, [active]);
    return React.createElement("div", { id: elementId.current });
});

const Pan = React.memo(function Pan({ size = [120, 30], value = 0, onChange = () => { }, onReady = () => { } }) {
    let pan = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-pan-${getId()}`);
    React.useEffect(() => {
        pan.current = new Nexus.Pan(elementId.current, { size, value });
        onReady(pan.current);
        pan.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            pan.current.destroy();
        };
    }, [onChange]);
    React.useEffect(() => {
        if (pan.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        pan.current.resize(...size);
    }, size);
    React.useEffect(() => {
        if (pan.current === null)
            return;
        pan.current.value = value;
    }, [value]);
    return React.createElement("div", { id: elementId.current });
});

const Pan2D = React.memo(function Pan2D({ size = [200, 200], onChange = () => { }, onReady = () => { }, range = 0.5, mode, speakers }) {
    let pan2D = React.useRef(null);
    let elementId = React.useRef(`nexus-ui-pan2D-${getId()}`);
    React.useEffect(() => {
        const options = {
            size,
            range,
            mode
        };
        if (Array.isArray(speakers)) {
            options["speakers"] = speakers;
        }
        pan2D.current = new Nexus.Pan2D(elementId.current, options);
        onReady(pan2D.current);
        pan2D.current.on("change", (newState) => {
            onChange(newState);
        });
        return () => {
            pan2D.current.destroy();
        };
    }, [onChange]);
    React.useEffect(() => {
        if (pan2D.current === null)
            return;
        if (!Array.isArray(size)) {
            return;
        }
        pan2D.current.resize(...size);
    }, size);
    return React.createElement("div", { id: elementId.current });
});

exports.Button = Button;
exports.Dial = Dial;
exports.Envelope = Envelope;
exports.Multislider = Multislider;
exports.Number = Number;
exports.Pan = Pan;
exports.Pan2D = Pan2D;
exports.Piano = Piano;
exports.Position = Position;
exports.RadioButton = RadioButton;
exports.Select = Select;
exports.Sequencer = Sequencer;
exports.Slider = Slider;
exports.TextButton = TextButton;
exports.Tilt = Tilt;
exports.Toggle = Toggle;
