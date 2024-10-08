import { ColorDetails, COLORS } from './colors';
import { List, cons, nil } from './list';

// TODO: add interfaces and classes here in part 1

/**
 * our interface for list of colors
 */
export interface ColorList {  
  /**
   * Return a list of all color names in the given text
   * @param text to look for in the names of colors
   * @returns List of all color names in the given text
   */
  findNameSet: (text: string) => List<string>;
  /**
   * return the background/foreground CSS colors to highlight with
   * @param name of the color 
   * @returns Tuple that cointaisn background/foreground CSS colors.
   */

  getColorCss: (name: string) => readonly[string, string];

}


/**
 * Returns a list of all color names that include the given text
 * @param text Text to look for in the names of the colors (case insensitive)
 * @returns list of all color names that include the given text
 */
export const findNameSet = (text: string): List<string> => {
  return findNameSetIn(text, COLORS);
};

/**Returns a new list containing just the names of those colors that include the
// given text.
// @param text The text in question
// @param colors The full list of colors
// @returns The sublist of colors containing those colors whose names contain
//    the given text.
**/
 export const findNameSetIn =
    (text: string, colors: List<ColorDetails>): List<string> => {
  if (colors.kind === "nil") {
    return nil;
  } else {
    // Note: the _ keeps the typechecker from complaining about our not using
    // these variables (but we must define them to avoid tuple indexing)
    const [color, _css, _foreground] = colors.hd;
    if (color.includes(text)) {
      return cons(color, findNameSetIn(text, colors.tl));
    } else {
      return findNameSetIn(text, colors.tl);
    }
  }
};


/**
 * Returns the background and foreground CSS colors to highlight with this color.
 * @param name Name of the color to look for
 * @throws Error if there is no such color
 * @returns (bg, fg) where bg is the CSS background color and fg is foreground
 */
export const getColorCss = (name: string): readonly [string, string] => {
  return getColorCssIn(name, COLORS);
};

/** Returns the colors from the (first) list entry with this color name. Throws
// an Error none is found (i.e., we hit the end of the list).
// @param name The name in question.
// @param colors The full list of colors.
// @throws Error if no item in colors has the given name.
 @return The first item in colors whose name matches the given name.
**/
export const getColorCssIn =
    (name: string, colors: List<ColorDetails>): readonly [string, string] => {
  if (colors.kind === "nil") {
    throw new Error(`no color called "${name}"`);
  } else {
    const [color, css, foreground] = colors.hd;
    if (color === name) {
      return [css, foreground ? '#F0F0F0' : '#101010'];
    } else {
      return getColorCssIn(name, colors.tl);
    }
  }
};

class SimpleColorList implements ColorList{
  readonly colors: List<ColorDetails>
/**
 *construct a SimpleColorList with the list obtained from ColorDetails
 * @param colors a list from ColorInfo
 */
  constructor(colors: List<ColorDetails>){
    this.colors = colors
  }
  
  /**
   * returns a list of all color names that are inside the given text
   * @param text the text thats used to look for in the names of other colors
   * @returns list of all color names that have the text provided
   */
  findNameSet = (text: string): List<string> => {
    return this.findNameSetIn(text, this.colors)
  }
  /**
   * returns both fore and background colros to highlight with 
   * @param name Name of the color
   * @returns a tuple where the background is css background color and foreground being the css foreground color
   */
  getColorCss = (name: string): readonly [string, string] =>{
    return this.getColorCssIn(name, this.colors)
  }

  private findNameSetIn = (text: string, colors: List<ColorDetails> | { readonly kind: "nil"; }): List<string> => {
    if (colors.kind === "nil") {
      return nil;
    } else {
      const [color, _css, _foreground] = colors.hd;
      if (color.includes(text)) {
        return cons(color, this.findNameSetIn(text, colors.tl));
      } else {
        return this.findNameSetIn(text, colors.tl);
      }
    }
  }
 
private getColorCssIn = (name: string, colors: List<ColorDetails> | { readonly kind: "nil"; }): readonly [string, string] => {
  if (colors.kind === "nil") {
    throw new Error(`no color was called "${name}"`);
  } else {
    const [color, css, foreground] = colors.hd;
    if (color === name) {
      return [css, foreground ? '#F0F0F0' : '#101010'];
    } else {
      return this.getColorCssIn(name, colors.tl);
    }
  }
}
}

/**
 * creates a instance of simple color list andd returns it, uses colors from COLORS. used to import to other files
 * @returns an instance of SimpleColorList
 */
export const makeSimpleColorList = (): ColorList => {
  return new SimpleColorList(COLORS);;
};