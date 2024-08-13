import { List, explode_array } from "./list";

/**
 * A color name, its CSS description, and whether the foreground color should be
 * white if this is the background color.
 */
export type ColorDetails = readonly [string, string, boolean];

/** List of color names supported in all browsers. (Could be longer, actually.) */
export const COLORS: List<ColorDetails> = explode_array([
    ['aliceblue', '#F0F8FF', false],
    ['antiquewhite', '#FAEBD7', false],
    ['aqua', '#00FFFF', false],
    ['aquamarine', '#7FFFD4', false],
    ['azure', '#F0FFFF', false],
    ['beige', '#F5F5DC', false],
    ['bisque', '#FFE4C4', false],
    ['black', '#000000', true],
    ['blanchedalmond', '#FFEBCD', false],
    ['blue', '#0000FF', true],
    ['blueviolet', '#8A2BE2', true],
    ['brown', '#A52A2A', true],
    ['burlywood', '#DEB887', false],
    ['cadetblue', '#5F9EA0', true],
    ['chartreuse', '#7FFF00', false],
    ['chocolate', '#D2691E', true],
    ['coral', '#FF7F50', true],
    ['cornflowerblue', '#6495ED', true],
    ['cornsilk', '#FFF8DC', false],
    ['crimson', '#DC143C', true],
    ['cyan', '#00FFFF', false],
    ['darkblue', '#00008B', true],
    ['darkcyan', '#008B8B', true],
    ['darkgoldenrod', '#B8860B', true],
    ['darkgreen', '#006400', true],
    ['darkgrey', '#A9A9A9', true],
    ['darkkhaki', '#BDB76B', false],
    ['darkmagenta', '#8B008B', true],
    ['darkolivegreen', '#556B2F', true],
    ['darkorange', '#FF8C00', true],
    ['darkorchid', '#9932CC', true],
    ['darkred', '#8B0000', true],
    ['darksalmon', '#E9967A', true],
    ['darkseagreen', '#8FBC8F', true],
    ['darkslateblue', '#483D8B', true],
    ['darkslategrey', '#2F4F4F', true],
    ['darkturquoise', '#00CED1', false],
    ['darkviolet', '#9400D3', true],
    ['deeppink', '#FF1493', true],
    ['deepskyblue', '#00BFFF', false],
    ['dimgray', '#696969', true],
    ['dodgerblue', '#1E90FF', true],
    ['firebrick', '#B22222', true],
    ['floralwhite', '#FFFAF0', false],
    ['forestgreen', '#228B22', true],
    ['fuchsia', '#FF00FF', true],
    ['gainsboro', '#DCDCDC', false],
    ['ghostwhite', '#F8F8FF', false],
    ['gold', '#FFD700', false],
    ['goldenrod', '#DAA520', true],
    ['green', '#008000', true],
    ['greenyellow', '#ADFF2F', false],
    ['grey', '#808080', true],
    ['honeydew', '#F0FFF0', false],
    ['hotpink', '#FF69B4', true],
    ['indigo', '#4B0082', true],
    ['ivory', '#FFFFF0', false],
    ['khaki', '#F0E68C', false],
    ['lavender', '#E6E6FA', false],
    ['lavenderblush', '#FFF0F5', false],
    ['lawngreen', '#7CFC00', false],
    ['lemonchiffon', '#FFFACD', false],
    ['lightblue', '#ADD8E6', false],
    ['lightcoral', '#F08080', true],
    ['lightcyan', '#E0FFFF', false],
    ['lightgoldenrodyellow', '#FAFAD2', false],
    ['lightgreen', '#90EE90', false],
    ['lightgrey', '#D3D3D3', false],
    ['lightpink', '#FFB6C1', false],
    ['lightsalmon', '#FFA07A', false],
    ['lightseagreen', '#20B2AA', true],
    ['lightskyblue', '#87CEFA', false],
    ['lightslategrey', '#778899', true],
    ['lightsteelblue', '#B0C4DE', false],
    ['lightyellow', '#FFFFE0', false],
    ['lime', '#00FF00', false],
    ['limegreen', '#32CD32', false],
    ['linen', '#FAF0E6', false],
    ['magenta', '#FF00FF', true],
    ['maroon', '#800000', true],
    ['mediumaquamarine', '#66CDAA', false],
    ['mediumblue', '#0000CD', true],
    ['mediumorchid', '#BA55D3', true],
    ['mediumpurple', '#9370D8', true],
    ['mediumseagreen', '#3CB371', true],
    ['mediumslateblue', '#7B68EE', true],
    ['mediumspringgreen', '#00FA9A', false],
    ['mediumturquoise', '#48D1CC', false],
    ['mediumvioletred', '#C71585', true],
    ['midnightblue', '#191970', true],
    ['mintcream', '#F5FFFA', false],
    ['mistyrose', '#FFE4E1', false],
    ['moccasin', '#FFE4B5', false],
    ['navajowhite', '#FFDEAD', false],
    ['navy', '#000080', true],
    ['oldlace', '#FDF5E6', false],
    ['olive', '#808000', true],
    ['olivedrab', '#6B8E23', true],
    ['orange', '#FFA500', false],
    ['orangered', '#FF4500', true],
    ['orchid', '#DA70D6', true],
    ['palegoldenrod', '#EEE8AA', false],
    ['palegreen', '#98FB98', false],
    ['paleturquoise', '#AFEEEE', false],
    ['palevioletred', '#D87093', true],
    ['papayawhip', '#FFEFD5', false],
    ['peachpuff', '#FFDAB9', false],
    ['peru', '#CD853F', true],
    ['pink', '#FFC0CB', false],
    ['plum', '#DDA0DD', false],
    ['powderblue', '#B0E0E6', false],
    ['purple', '#800080', true],
    ['red', '#FF0000', true],
    ['rosybrown', '#BC8F8F', true],
    ['royalblue', '#4169E1', true],
    ['saddlebrown', '#8B4513', true],
    ['salmon', '#FA8072', true],
    ['sandybrown', '#F4A460', false],
    ['seagreen', '#2E8B57', true],
    ['seashell', '#FFF5EE', false],
    ['sienna', '#A0522D', true],
    ['silver', '#C0C0C0', false],
    ['skyblue', '#87CEEB', false],
    ['slateblue', '#6A5ACD', true],
    ['slategrey', '#708090', true],
    ['snow', '#FFFAFA', false],
    ['springgreen', '#00FF7F', false],
    ['steelblue', '#4682B4', true],
    ['tan', '#D2B48C', false],
    ['teal', '#008080', true],
    ['thistle', '#D8BFD8', false],
    ['tomato', '#FF6347', true],
    ['turquoise', '#40E0D0', false],
    ['violet', '#EE82EE', true],
    ['wheat', '#F5DEB3', false],
    ['white', '#FFFFFF', false],
    ['whitesmoke', '#F5F5F5', false],
    ['yellow', '#FFFF00', false],
    ['yellowgreen', '#9ACD32', false]
  ]);