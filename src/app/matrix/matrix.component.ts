import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Matrix, initMatrixIntRandom, getMatrixLine, getMatrixColumn } from '../matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixComponent {

  @Input({required: true}) matrix: Matrix<number, number, number> = initMatrixIntRandom<number, number>(0, 0);

  range(n: number): number[] {
    let array = [];
    for (let i = 0; i < n; i++)
      array[i] = i;
    return array;
  }

  getMatrixLine = getMatrixLine;
  getMatrixColumn = getMatrixColumn;
}
