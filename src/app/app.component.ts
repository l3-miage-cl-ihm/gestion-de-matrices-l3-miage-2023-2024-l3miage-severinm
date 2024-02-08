import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Matrix, initMatrixIntRandom, addIntMatrixes, multiplyIntMatrixes } from './matrix';
import { Highlight } from './matrix/matrix.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  
  readonly sigL1 = signal<number>(5);
  readonly sigH1 = signal<number>(5);
  readonly sigM1 = computed<Matrix<number, number, number>>(() => initMatrixIntRandom<number, number>(this.sigH1(), this.sigL1()));

  readonly sigL2 = signal<number>(10);
  readonly sigH2 = signal<number>(10);
  readonly sigM2 = computed<Matrix<number, number, number>>(() => initMatrixIntRandom<number, number>(this.sigH2(), this.sigL2()));

  readonly sigM1plusM2 = computed<Matrix<number, number, number>>(() => addIntMatrixes(this.sigM1(), this.sigM2()));
  readonly sigM1xM2 = computed<Matrix<number, number, number>>(() => multiplyIntMatrixes(this.sigM1(), this.sigM2()));

  readonly sigHhilightInM1 = signal<Highlight>(undefined);
  readonly sigHhilightInM2 = signal<Highlight>(undefined);
  readonly sigHhilightInM1plusM2 = signal<Highlight>(undefined);
  readonly sigHhilightInM1xM2 = signal<Highlight>(undefined);

  overM1plusM2( c?: [line: number, column: number] ): void {
    this.sigHhilightInM1plusM2.set(c === undefined ? undefined : {cell: [c[0], c[1]]});
    this.sigHhilightInM1.set(c === undefined ? undefined : {cell: [c[0], c[1]]});
    this.sigHhilightInM2.set(c === undefined ? undefined : {cell: [c[0], c[1]]});
  }

  overM1xM2( c?: [line: number, column: number] ): void {
    this.sigHhilightInM1xM2.set(c === undefined ? undefined : {cell: [c[0], c[1]]});
    this.sigHhilightInM1.set(c === undefined ? undefined : {line: c[0]});
    this.sigHhilightInM2.set(c === undefined ? undefined : {column: c[1]});
  }
}
