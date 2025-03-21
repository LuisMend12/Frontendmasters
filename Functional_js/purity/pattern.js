
export function diamondPattern(color1, color2, width) {
    if (width <= 20) {
   // BASE CASE
   // TODO return a string representing a color1-filled square with the given width
   return `<rect x=0 y=0 width=${width} height=${width} fill=${color1} />`;
 } else {
   // RECURSIVE CASE
   const smallerWidth = width * Math.SQRT2 / 2
   // TODO 
   // Return a string representing the color1-width square, along with the rest of the recursive pattern
   // At each recursive step, alternate the colors and translate & rotate the rest of the pattern to create the nested alternating diamonds effect
   return `<rect x=0 y=0 width=${width} height=${width} fill=${color1} />
       <g transform="translate(${width/2}) rotate(45)">
       ${diamondPattern(color2, color1, smallerWidth)}
       </g>
       `;
        
 }

}

