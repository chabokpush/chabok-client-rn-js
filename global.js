const global = require("global")
import {Buffer} from "buffer";
import process from "process";


global.Buffer = Buffer;
global.process = process;
