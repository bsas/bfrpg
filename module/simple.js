/**
 * A simple and flexible system for world-building using an arbitrary collection of character and item attributes
 * Author: Atropos
 * Software License: GNU GPLv3
 */

// Import Modules
import { BFRPG } from './util.js';
import BFRGItemSheet from "./item-sheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Init hook.
 */
Hooks.once("init", async function() {
  console.log(`bfrpg | Initializing Basic Fantasy Role-Playing Game`);

  /**
   * Set global constants
   */
  CONFIG.BFRPG = BFRPG;

  /**
   * Set an initiative formula for the system. This will be updated later.
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d6 + @attributes.dex.bonus",
    decimals: 2
  };

  /**
   * Register items
   */
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('bfrpg', BFRGItemSheet, { makeDefault: true });
});
