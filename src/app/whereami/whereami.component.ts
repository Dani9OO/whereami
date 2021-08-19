import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { WhereamiService } from './whereami.service';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-whereami',
  templateUrl: './whereami.component.html',
  styleUrls: ['./whereami.component.scss']
})
export class WhereamiComponent implements OnInit {

  estadosStore$: Observable<string[]>;
  estados$: Observable<string[]>;
  municipiosStore$: Observable<string[]>;
  municipios$: Observable<string[]>;
  coloniasStore$: Observable<string[]>;
  colonias$: Observable<string[]>;

  estadosFormControl = new FormControl('');
  municipiosFormControl = new FormControl('');
  coloniasFormControl = new FormControl('');

  constructor(
    private whereamiService: WhereamiService
  ) {
    this.whereamiService.init();
    this.estadosStore$ = this.whereamiService.getEstados
    this.municipiosStore$ = this.whereamiService.getMunicipios
    this.coloniasStore$ = this.whereamiService.getColonias
    this.estados$ = this.estadosFormControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(value, this.estadosStore$))
    );
    this.municipios$ = this.municipiosFormControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(value, this.municipiosStore$))
    );
    this.colonias$ = this.coloniasFormControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(value, this.coloniasStore$))
    );
  }

  ngOnInit(): void {

  }

  private _filter(value: string, observable: Observable<string[]>) {
    const filterValue = value.toLowerCase();
    return observable.pipe(
      map(response => response.filter(e => e.toLowerCase().includes(filterValue)))
    );
  }

  public setFilter() {
    if (this.estadosFormControl.value && !this.municipiosFormControl.value) {
      this.whereamiService.requestMunicipios(this.estadosFormControl.value);
      this.municipiosStore$ = this.whereamiService.getMunicipios;
    } else {
      this.whereamiService.requestColonias(this.estadosFormControl.value, this.municipiosFormControl.value)
      this.coloniasStore$ = this.whereamiService.getColonias;
    }
  }

}
