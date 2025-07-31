import React, { useEffect, useRef } from "react";
import p5 from "p5";

import './style.scss';

const Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      const CELL_SIZE = 25;
      const STARTING_ALPHA = 0;
      const PROB_OF_NEIGHBOR = 0.3;
      const AMT_FADE_PER_FRAME = 4;
      const COLOR_R = 255;
      const COLOR_G = 255;
      const COLOR_B = 255;
      const SIZE = 1;

      let numRows, numCols;
      let bgGraphics;
      let allNeighbors = [];
      let colorWithAlpha;
      let isTouchDevice = false;

    //   p.setup = () => {
    //     p.createCanvas(p.windowWidth, p.windowHeight);
    //     p.noFill();
    //     colorWithAlpha = p.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
    //     p.stroke(colorWithAlpha);
    //     p.strokeWeight(1);

    //     numRows = Math.ceil(p.windowHeight / CELL_SIZE);
    //     numCols = Math.ceil(p.windowWidth / CELL_SIZE);

    //     bgGraphics = p.createGraphics(p.width, p.height);
    //     bgGraphics.noFill();
    //     bgGraphics.stroke(197, 182, 175, 7);
    //     bgGraphics.strokeWeight(1);

    //     for (let col = 0; col < numCols; col++) {
    //       for (let row = 0; row < numRows; row++) {
    //         bgGraphics.rect(CELL_SIZE * col, CELL_SIZE * row, CELL_SIZE, CELL_SIZE);
    //       }
    //     }

    //     // Определяем, является ли устройство сенсорным
    //     isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    //     if (isTouchDevice) {
    //       setInterval(() => {
    //         const randomRow = Math.floor(Math.random() * numRows);
    //         const randomCol = Math.floor(Math.random() * numCols);
    //         allNeighbors.push({ row: randomRow, col: randomCol, opacity: 150 });
    //       }, 150); // Интервал подсвечивания случайных клеток
    //     }
    //   };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noFill();
        colorWithAlpha = p.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
        p.stroke(colorWithAlpha);
        p.strokeWeight(1);

        numRows = Math.ceil(p.windowHeight / CELL_SIZE);
        numCols = Math.ceil(p.windowWidth / CELL_SIZE);

        bgGraphics = p.createGraphics(p.width, p.height);
        bgGraphics.noFill();
        bgGraphics.stroke(197, 182, 175, 7);
        bgGraphics.strokeWeight(1);

        for (let col = 0; col < numCols; col++) {
          for (let row = 0; row < numRows; row++) {
            bgGraphics.rect(CELL_SIZE * col, CELL_SIZE * row, CELL_SIZE, CELL_SIZE);
          }
        }
      };

          //   p.setup = () => {
    //     p.createCanvas(p.windowWidth, p.windowHeight);
    //     p.noFill();
    //     colorWithAlpha = p.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
    //     p.stroke(colorWithAlpha);
    //     p.strokeWeight(1);
      
    //     numRows = Math.ceil(p.windowHeight / CELL_SIZE);
    //     numCols = Math.ceil(p.windowWidth / CELL_SIZE);
      
    //     bgGraphics = p.createGraphics(p.width, p.height);
    //     bgGraphics.noFill();
    //     bgGraphics.stroke(197, 182, 175, 7);
    //     bgGraphics.strokeWeight(1);
      
    //     // Основной цикл для отрисовки клеток
    //     for (let col = 0; col < numCols; col++) {
    //       for (let row = 0; row < numRows; row++) {
    //         // Рисуем стандартную клетку
    //         bgGraphics.rect(CELL_SIZE * col, CELL_SIZE * row, CELL_SIZE, CELL_SIZE);
      
    //         // Если колонка кратна 6, рисуем толстую правую границу
    //         if ((col + 1) % 6 === 0) {
    //           bgGraphics.stroke(255, 255, 255, 20); // Цвет толстой границы
    //           bgGraphics.strokeWeight(2); // Толщина границы
    //           bgGraphics.line(
    //             CELL_SIZE * (col + 1), // Начало X
    //             CELL_SIZE * row, // Начало Y
    //             CELL_SIZE * (col + 1), // Конец X
    //             CELL_SIZE * (row + 1) // Конец Y
    //           );
    //         }
      
    //         // Если строка кратна 6, рисуем толстую нижнюю границу
    //         if ((row + 1) % 6 === 0) {
    //           bgGraphics.stroke(255, 255, 255, 20); // Цвет толстой границы
    //           bgGraphics.strokeWeight(2); // Толщина границы
    //           bgGraphics.line(
    //             CELL_SIZE * col, // Начало X
    //             CELL_SIZE * (row + 1), // Начало Y
    //             CELL_SIZE * (col + 1), // Конец X
    //             CELL_SIZE * (row + 1) // Конец Y
    //           );
    //         }
      
    //         // Сбрасываем толщину линии для стандартных клеток
    //         bgGraphics.stroke(197, 182, 175, 7); // Цвет обычных границ
    //         bgGraphics.strokeWeight(1); // Толщина обычных линий
    //       }
    //     }
    //   };

      p.draw = () => {
        p.background(19, 19, 19);
        p.image(bgGraphics, 0, 0, p.width, p.height);

        if (!isTouchDevice && !mouseIsOverNoTrailElement()) {
          const row = Math.floor(p.mouseY / CELL_SIZE);
          const col = Math.floor(p.mouseX / CELL_SIZE);

          if (!allNeighbors.some((n) => n.row === row && n.col === col)) {
            allNeighbors.push(...getRandomNeighbors(row, col));
          }
        }

        allNeighbors.forEach((neighbor) => {
          const x = CELL_SIZE * neighbor.col;
          const y = CELL_SIZE * neighbor.row;

          neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
          p.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
          p.rect(x, y, CELL_SIZE, CELL_SIZE);
        });

        allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        numRows = Math.ceil(p.windowHeight / CELL_SIZE);
        numCols = Math.ceil(p.windowWidth / CELL_SIZE);

        bgGraphics = p.createGraphics(p.width, p.height);
        bgGraphics.noFill();
        bgGraphics.stroke(197, 182, 175, 7);
        bgGraphics.strokeWeight(1);

        for (let col = 0; col < numCols; col++) {
          for (let row = 0; row < numRows; row++) {
            bgGraphics.rect(CELL_SIZE * col, CELL_SIZE * row, CELL_SIZE, CELL_SIZE);
          }
        }
      };

      const getRandomNeighbors = (row, col) => {
        const neighbors = [];

        for (let i = -SIZE; i <= SIZE; i++) {
          for (let j = -SIZE; j <= SIZE; j++) {
            const newRow = row + i;
            const newCol = col + j;

            const isInBounds =
              newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols;

            if (!(i === 0 && j === 0) && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
              neighbors.push({ row: newRow, col: newCol, opacity: 150 });
            }
          }
        }

        return neighbors;
      };

      const mouseIsOverNoTrailElement = () => {
        const noTrailElements = document.querySelectorAll("[no-trail]");
        return Array.from(noTrailElements).some((el) => {
          const rect = el.getBoundingClientRect();
          return (
            p.mouseX >= rect.left &&
            p.mouseX <= rect.right &&
            p.mouseY >= rect.top &&
            p.mouseY <= rect.bottom
          );
        });
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="back_sketch" ref={sketchRef}></div>;
};

export default Sketch;
