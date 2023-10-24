/* 
Filename: sophisticated_code.js
Description: This code implements a complex algorithm to generate a random maze using the Depth-First Search algorithm.
*/

// Constants
const GRID_SIZE = 20; // Size of the grid (20x20)
const WALL = '#'; // Character representing a wall
const PATH = '.'; // Character representing a path
const START = 'S'; // Character representing the start point
const END = 'E'; // Character representing the end point

// Function to create a two-dimensional array
const createGrid = (rows, cols) => {
  const grid = new Array(rows);
  
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols).fill(WALL);
  }
  
  return grid;
}

// Function to get the neighbors of a given cell
const getNeighbors = (grid, row, col) => {
  const neighbors = [];
  
  if (row > 1 && grid[row - 2][col] === WALL) {
    neighbors.push([row - 2, col]);
  }
  
  if (row < grid.length - 2 && grid[row + 2][col] === WALL) {
    neighbors.push([row + 2, col]);
  }
  
  if (col > 1 && grid[row][col - 2] === WALL) {
    neighbors.push([row, col - 2]);
  }
  
  if (col < grid[0].length - 2 && grid[row][col + 2] === WALL) {
    neighbors.push([row, col + 2]);
  }
  
  return neighbors;
}

// Function to connect two cells
const connectCells = (grid, row1, col1, row2, col2) => {
  grid[row1][col1] = PATH;
  grid[row2][col2] = PATH;
  
  if (row1 === row2) {
    grid[row1][(col1 + col2) / 2] = PATH;
  } else {
    grid[(row1 + row2) / 2][col1] = PATH;
  }
}

// Function to generate the maze
const generateMaze = (grid, row, col) => {
  const stack = [];
  stack.push([row, col]);
  
  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop();
    grid[currentRow][currentCol] = PATH;
    
    const neighbors = getNeighbors(grid, currentRow, currentCol);
    if (neighbors.length === 0) continue;
    
    stack.push([currentRow, currentCol]);
    
    const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
    connectCells(grid, currentRow, currentCol, randomNeighbor[0], randomNeighbor[1]);
    stack.push(randomNeighbor);
  }
}

// Function to print the maze
const printMaze = (grid) => {
  for (let i = 0; i < GRID_SIZE; i++) {
    console.log(grid[i].join(' '));
  }
}

// Function to execute the program
const main = () => {
  // Create the initial grid
  const grid = createGrid(GRID_SIZE, GRID_SIZE);
  
  // Set the start and end points
  const startRow = Math.floor(Math.random() * GRID_SIZE);
  const startCol = 0;
  const endRow = Math.floor(Math.random() * GRID_SIZE);
  const endCol = GRID_SIZE - 1;
  grid[startRow][startCol] = START;
  grid[endRow][endCol] = END;
  
  // Generate the maze
  generateMaze(grid, startRow, startCol);
  
  // Print the maze
  printMaze(grid);
}

// Execute the program
main();