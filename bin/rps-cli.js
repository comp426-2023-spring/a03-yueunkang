#!/usr/bin/env node

import {rps} from "../lib/rpsls.js"
import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));
// console.log(argv)
// argv looks like { _: [ 1, 2, 3, 4, 'hello', 'world' ], h: true, d: true }
// argv._ returns array of positional args
// argv.opt returns what's after the opt

if (argv.h || argv.help) {
    console.log(`Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    process.exit(0);
}

if (argv.r || argv.rules) {
    console.log(`Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`);
    process.exit(0);
}

try {
  const res = rps(argv._[0]);
  console.log(JSON.stringify(res));
} catch (error) {
  if (error instanceof RangeError) {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    process.exit(1);
  }
}
