import * as assert from 'assert';
import { explode_array, nil, cons } from "./list";
import { buildBst, search, makeColorTree } from "./color_tree";
import { node, empty } from "./color_node";
import { ColorList } from './color_list';


const colorTree: ColorList = makeColorTree()

describe('color_tree', function() {

    // TODO: Uncomment given examples and add more test cases in 3

    it('buildBst', function() {
    // Testing base case
    assert.deepStrictEqual(buildBst(nil), empty);

    // 0-1 many heuristic
    assert.deepEqual(buildBst(explode_array([['Crimson', '#DC143C', true]])), node(['Crimson', '#DC143C', true], empty, empty));
    assert.deepStrictEqual(buildBst(explode_array([['Aquamarine', '#7FFFD4', true]])), node(['Aquamarine', '#7FFFD4', true], empty, empty));

    // 0-1 many heuristic many recursive calls
    assert.deepStrictEqual(buildBst(explode_array([['Indigo', '#4B0082', true], ['Turquoise', '#40E0D0', true]])), node(['Turquoise', '#40E0D0', true], node(['Indigo', '#4B0082', true], empty, empty), empty));
    assert.deepStrictEqual(buildBst(explode_array([['Coral', '#FF7F50', false], ['Khaki', '#F0E68C', false], ['Plum', '#DDA0DD', false]])), node(['Khaki', '#F0E68C', false], node(['Coral', '#FF7F50', false], empty, empty), node(['Plum', '#DDA0DD', false], empty, empty)));


    });

    it('search', function() {
     // base case
     assert.deepStrictEqual(search('purple', empty), undefined);

     //0-1 many heuristic 1 recursive call
     assert.deepEqual(search('red', node(['red', '#FF0000', false], empty, empty)), ['red', '#FF0000', false]);
     assert.deepStrictEqual(search('blue', node(['green', '#008000', false], empty, empty)), undefined);
 
     //tree height 1
     assert.deepStrictEqual(search('yellow', node(['orange', '#FFA500', true], empty, empty)), undefined);
 
     //tree height 2
     assert.deepStrictEqual(search('pink', node(['white', '#FFFFFF', true], node(['pink', '#FFC0CB', false], empty, empty), empty)), ['pink', '#FFC0CB', false]);
 
     //tree height 3 and 0-1 many heuristic, many recursive calls
     assert.deepStrictEqual(search('black', node(['gray', '#808080', true], node(['brown', '#A52A2A', false], node(['black', '#000000', true], empty, empty), empty), empty)), ['black', '#000000', true]);

        
    });

    // TODO: copy some tests over here in 3g
    it('findMatchingNames', function() {
        assert.deepStrictEqual(colorTree.findNameSet("doesnotexist"), nil);
        assert.deepStrictEqual(colorTree.findNameSet("indigo"), cons("indigo", nil));
        assert.deepStrictEqual(colorTree.findNameSet("azure"), cons("azure", nil));
        assert.deepStrictEqual(colorTree.findNameSet("lavender"),
            cons("lavender", cons("lavenderblush", nil)));
        assert.deepStrictEqual(colorTree.findNameSet("pink"),
            cons("deeppink", cons("hotpink", cons("lightpink", cons("pink", nil)))));
});
it('getColorCss', function() {
    assert.deepStrictEqual(colorTree.getColorCss("lavender"), ['#E6E6FA', '#101010']);
    assert.deepStrictEqual(colorTree.getColorCss("indigo"), ['#4B0082', '#F0F0F0']);
    });
});