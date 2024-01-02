const destructibleWallCanvas = document.createElement('canvas');
   const destructibleWall = destructibleWallCanvas.getContext('2d');
   destructibleWallCanvas.width = destructibleWallCanvas.height = grid;

   destructibleWall.fillStyle = 'black';
   destructibleWall.fillRect(0, 0, grid, grid);
   destructibleWall.fillStyle = '#ab783a';

   destructibleWall.fillRect(1, 1, grid - 2, 20);

   destructibleWall.fillRect(0, 23, 20, 18);
   destructibleWall.fillRect(22, 23, 42, 18);

   destructibleWall.fillRect(0, 43, 42, 20);
   destructibleWall.fillRect(44, 43, 20, 20);

   const indestructibleWallCanvas = document.createElement('canvas');
   const indestructibleWall = indestructibleWallCanvas.getContext('2d');
   indestructibleWallCanvas.width = indestructibleWallCanvas.height = grid;

   indestructibleWall.fillStyle = 'black';
   indestructibleWall.fillRect(0, 0, grid, grid);
   indestructibleWall.fillStyle = 'white';
   indestructibleWall.fillRect(0, 0, grid - 2, grid - 2);
   indestructibleWall.fillStyle = '#ab783a';
   indestructibleWall.fillRect(2, 2, grid - 4, grid - 4);

   function generateLevel() {
    cells = [];

    for (let row = 0; row < numRows; row++) {
        cells[row] = [];

        for (let col = 0; col < numCols; col++) {

            if (!template[row][col] && Math.random() < 0.85) {
                cells[row][col] = types.softWall;
            }
            else if (template[row][col] === types.wall) {
                cells[row][col] = types.wall;
            }
         }
      }
 }

 const player = {
    row: 1,
    col: 1,
    numBombs: 1,
    bombSize: 3,
    radius: grid * 0.35,
    render() {
        const x = (this.col + 0.5) * grid;
        const y = (this.row + 0.5) * grid;

        context.save();
        context.fillStyle = '#4d4fd6';
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}