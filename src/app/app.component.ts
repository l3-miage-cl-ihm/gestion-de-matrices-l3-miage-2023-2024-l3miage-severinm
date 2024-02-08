import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Matrix, initMatrixIntRandom, addIntMatrixes, multiplyIntMatrixes } from './matrix';

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
}
