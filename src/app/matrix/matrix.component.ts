import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Matrix, initMatrixIntRandom, getMatrixLine, getMatrixColumn } from '../matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixComponent {

  @Input({required: true}) matrix: Matrix<number, number, number> = initMatrixIntRandom<number, number>(0, 0);

  @Input() highlight: Highlight;

  @Output() pointerOver = new EventEmitter<[line: number, column: number]>(); 

  range(n: number): number[] {
    let array = [];
    for (let i = 0; i < n; i++)
      array[i] = i;
    return array;
  }

  isHighlighted(line: number, column: number): boolean {
    if ('cell' in this.highlight! && this.highlight.cell[0] === line && this.highlight.cell[1] === column)
      return true;
    else if ('line' in this.highlight! && this.highlight.line === line)
      return true;
    else if ('column' in this.highlight! && this.highlight.column === column)
      return true;
    return false;
  }

  getMatrixLine = getMatrixLine;
  getMatrixColumn = getMatrixColumn;
}

export type HighlightLine = {line: number};
export type HighlightColumn = {column: number};
export type HighlightCell = {cell: [line: number, column: number]};
export type Highlight = undefined
                      | HighlightLine
                      | HighlightColumn
                      | HighlightCell;
