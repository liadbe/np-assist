import { detailInterface } from '../types/types';

export const detailsInfo: Array<detailInterface> = [
  {
    name: 'Detail 1',
    element: 'Vertical Cross',
    description: 'The cross at the upper left corner, outside of the rectangle. The cross must come down to the horizontal midline of the rectangle and must extend above the rectangle. The line that joins the cross to the rectangle must be approximately in the middle of the cross and must come between Detail 7 and the top of the rectangle.',
  }, {
    name: 'Detail 2',
    element: 'Large Rectangle',
    description: 'The large rectangle. The horizontal dimensions of the rectangle must not be greater than twice the vertical dimensions of the rectangle, nor must the rectangle resemble a square. Because there are so many possibilities of distorting the rectangle and it is not possible to score for position, a score of 1⁄2 point is given if the rectangle is incomplete or distorted in any way.',
  }, {
    name: 'Detail 3',
    element: 'Diagonal Cross',
    description: 'The diagonal cross must touch each of the four corners of the rectangle and must intersect in the middle of the rectangle.',
  }, {
    name: 'Detail 4',
    element: 'Horizontal Midline of Large Rectangle',
    description: 'The horizontal midline of the rectangle must go clearly across from the midpoint of the left side of the rectangle to the midpoint of the right side of the rectangle in one unbroken line.',
  }, {
    name: 'Detail 5',
    element: 'Vertical Midline of Large Rectangle',
    description: 'The vertical midline must start at the midpoint of the bottom of the rectangle and go through in one unbroken line to the midpoint at the top of the rectangle. In scoring for position of details 4, 5, and 6, they should intersect at the midpoint of the rectangle. Usually, if they do not, only one of them is scored as incorrect for position. Very seldom are all three scored as incorrect for not being in position.'
  }, {
    name: 'Detail 6',
    element: 'Small Rectangle',
    description: 'The small rectangle within the large rectangle and to the left side of it. The boundaries of Detail 6 are defined by the top of the rectangle falling between lines 2 and 3 of the parallel lines that make up Detail 8, and the width of the small rectangle must be approximately one-quarter of the width of the large rectangle; that is, it should come to the midpoint between the left side of the large rectangle and the vertical midpoint of the rectangle. The cross within Detail 6 must come from the four corners of the rectangle and should intersect at the midpoint of the rectangle (i.e., words intersecting on Detail 4).'
  }, {
    name: 'Detail 7',
    element: 'Small Horizontal Line above Small Rectangle',
    description: 'The straight line above Detail 6 must be shorter than the horizontal aspect of Detail 6 and must fall between the top of Detail 6 and the second line of Detail 8.'
  }, {
    name: 'Detail 8',
    element: 'Four Parallel Lines',
    description: 'The four parallel lines within the rectangle in the upper left corner should be parallel, with the spaces between them approximately equal. If the lines are unduly slanted or, of course, if there are more or less than four of them, then the scoring is penalized.'
  }, {
    name: 'Detail 9',
    element: 'Small Triangle above Large Rectangle',
    description: 'The triangle above the rectangle on the upper right, with the height less than the base.',
  }, {
    name: 'Detail 10',
    element: 'Small Vertical Line within Large Rectangle',
    description: 'The small vertical line within the rectangle just below Detail 9. The line should be clearly shifted to the left within the upper right quadrangle in the rectangle.',
  }, {
    name: 'Detail 11',
    element: 'Circle with Three Dots',
    description: 'The circle with three dots must be in the lower right half of the upper right quadrangle. It must not touch any of the three sides of the triangular area in which it is placed, and the positioning of the dots should be such that there are two above and one below, so that it resembles a face.',
  }, {
    name: 'Detail 12',
    element: 'Five Parallel Lines',
    description: 'The five parallel lines that are crossing the lower right aspect of Detail 3 must all be within the lower right quadrangle. They must not touch any sides of the quadrangle, and they should be approximately equidistant from one another.',
  }, {
    name: 'Detail 13',
    element: 'Sides of Large Triangle attached to Large Rectangle',
    description: 'The triangle on the right end of the large rectangle. The height of the triangle must not be greater than half of the horizontal mid- line of the rectangle and, as already mentioned, the slope of the sides of the triangle must not be a continuation of the slope of Detail 9.',
  }, {
    name: 'Detail 14',
    element: 'Diamond',
    description: 'The diamond attached to the end of Detail 13 should be diamond-shaped and must be attached to the end of Detail 13; it must not extend down below the bottom of the large rectangle, Detail 2.',
  }, {
    name: 'Detail 15',
    element: 'Vertical Line within Sides of Large Triangle',
    description: 'The vertical line within triangle 13 must be parallel to the right vertical of Detail 2, the large rectangle, and it must be shifted to the left within Detail 13.',
  }, {
    name: 'Detail 16',
    element: 'Horizontal Line within Sides of Large Triangle',
    description: 'The horizontal line within Detail 13, which is a continuation of Detail 4 to the right, must come from the midpoint of the right side of the large rectangle and extend to the top of triangle 13. If triangle 13 is slightly askew, or if Detail 4 does not meet the midpoint of the right side of the rectangle, Detail 16 should still be scored as a full 2 points if it went to the top of the triangle from the midpoint of the right side of the rectangle.',
  }, {
    name: 'Detail 17',
    element: 'Horizontal Cross',
    description: 'The cross attached to the lower center area of the rectangle. The right side of the cross must be clearly longer than the left side of the cross but must not extend beyond the right end of the large rectangle. It should also, at its left end, commence at the midpoint of the right side of the square, which is Detail 18.',
  }, {
    name: 'Detail 18',
    element: 'Square attached to Large Rectangle',
    description: 'The square on the lower left corner of Detail 2. It must clearly be a square, as opposed to the rectangular shape of Detail 6, and its sides should be the same size as the vertical aspect of Detail 6, extending halfway between the left side of the rectangle and the vertical midline of the rectangle.',
  }
];