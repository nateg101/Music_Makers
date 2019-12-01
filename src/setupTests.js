import './__mocks__/AudioContext'
import React from "react";
import Enzyme, { shallow, render, mount, configure } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Define globals to cut down on imports in test files
global.sinon = sinon;