/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // const [ x11, y11, x21, y21 ] = rec1;
	// const [ x12, y12, x22, y22 ] = rec2;
    // const isOverlapOnY  = (y12 >= y11 && y21 > y12) || (y11 >= y12 && y22 > y11);
    // const isOverlapOnX = (x12 >= x11 && x21 > x12) || (x11 >= x12 && x22 > x11);
	// return isOverlapOnX && isOverlapOnY;
    const [ x11, y11, x21, y21 ] = rec1;
    const [ x12, y12, x22, y22 ] = rec2;
    const isOverlapOnY = (y12 > y11 && y21 > y12) || (y11 >= y12 && y22 > y11);
    const isOverlapOnX = (x12 >= x11 && x21 > x12) || (x11 >= x12 && x22 > x11);
    return  isOverlapOnX && isOverlapOnY;
};