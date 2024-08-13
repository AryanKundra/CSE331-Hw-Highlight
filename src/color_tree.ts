 import { List,len,split,nil } from './list';
 import { ColorDetails, COLORS } from './colors';
 import { ColorNode, empty,node } from './color_node';
import { findNameSetIn, getColorCssIn, ColorList} from './color_list';
// TODO: Uncomment, implement, and write JSDoc


/**
 * creat a BST from a sorted list of ColorDetails objects
 * @param L  the sorted list of objects from ColorDetails
 * @requires L is sorted by the name of colors
 * @returns 
 */
export const buildBst = (L: List<ColorDetails>): ColorNode => {
    if (L === nil) {
        return empty;
    }

    const m = BigInt(Math.floor(Number(len(L)) / 2));
    const [P, S] = split(m, L);

    if (S.kind !== "nil") {
        const [b, R] = [S.hd, S.tl];
        return node(b, buildBst(P), buildBst(R));
    } else {
        return buildBst(P);
    }
//    // Note: the implementation of this function requires you to use
//    //   Math.floor() which takes a number, so you will need to use BigInt()
//    //    and Number() to convert types as needed
};

/**
 * Searches for a color by its name in the color tree.
 * @param y The name of the color to search for.
 * @param root The root node of the color tree to search within.
 * @returns The ColorDetails object representing the found color, or undefined if not found.
 */
export const search = (y:string, root:ColorNode): ColorDetails | undefined =>{  
    if (root === empty){
        return undefined
    }
    if (root.kind === "node"){
        const[color] = root.details
        if (y === color){
            return root.details
        } else if (y < color){
            return search(y, root.before)
        }else{
            return search(y, root.after)
        }
    }
    return undefined
}




// TODO: add other classes or functions here as needed
/**
 * Represents a tree structure for managing colors and providing color-related operations.
 * Implements the ColorList interface.
 */
class ColorTree implements ColorList{

    /**
     * RI:TODO
     * AF:TODO
     */
    readonly colorDetailsList: List<ColorDetails>
    readonly colorTree: ColorNode

   /**
     * Constructs a ColorTree object.
     * @param colorDetailsList A list of ColorDetails objects to initialize the ColorTree.
     */
    constructor(colorDetailsList: List<ColorDetails>){
        this.colorDetailsList = colorDetailsList
        this.colorTree = buildBst(colorDetailsList)
    }

  /**
     * Finds a set of color names that match the given text.
     * @param text The text to search for matching color names.
     * @returns A list of color names that match the given text.
     */
    findNameSet= (text: string): List<string> => {
        return findNameSetIn(text, this.colorDetailsList)
    }

     /**
     * Gets the CSS representation of a color by its name.
     * @param name The name of the color to get the CSS representation for.
     * @returns A tuple containing the CSS class name and the CSS value of the color.
     * @throws Error if the color with the given name is not found.
     */
    getColorCss = (name: string): readonly [string, string] => {
        const colorInfo = search(name, this.colorTree);
        if (colorInfo) {
          return getColorCssIn(name, this.colorDetailsList);
        } else {
          throw new Error(`no color called "${name}"`);
        }
      }
}

/**
 * Factory function to create a ColorTree object.
 * @returns A new instance of the ColorTree class.
 */
export const makeColorTree = (): ColorTree => {
    return new ColorTree(COLORS);
};