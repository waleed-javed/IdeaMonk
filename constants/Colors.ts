export default {
  primary: '#878af5',
  // primary: '#71446c', //test colors for app
  secondary: '#666af6',
  accent: '#9333ea',
  support: '#31446c',
  yellow: '#f5a921',
  orange: '#f4863c',
};


export function getSecondaryColor(primaryColor:string) {
 // Remove '#' if present
 primaryColor = primaryColor.replace('#', '');

 // Convert hexadecimal color to RGB
 var r = parseInt(primaryColor.substring(0, 2), 16);
 var g = parseInt(primaryColor.substring(2, 4), 16);
 var b = parseInt(primaryColor.substring(4, 6), 16);

 // Calculate the secondary color
 var r2 = (r < 127) ? r + 60 : r - 60; // Adjusting the red component
 var g2 = (g < 127) ? g + 60 : g - 60; // Adjusting the green component
 var b2 = (b < 127) ? b + 60 : b - 60; // Adjusting the blue component

 // Ensure the values stay within the valid range
 r2 = Math.min(255, Math.max(0, r2));
 g2 = Math.min(255, Math.max(0, g2));
 b2 = Math.min(255, Math.max(0, b2));

 // Convert back to hexadecimal
 var secondaryColor = "#" + componentToHex(r2) + componentToHex(g2) + componentToHex(b2);
 
 return secondaryColor;
}

// Function to convert a single RGB component to hexadecimal
function componentToHex(c: number) {
 var hex = c.toString(16);
 return hex.length == 1 ? "0" + hex : hex;
}