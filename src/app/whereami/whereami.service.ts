import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhereamiService {

  estadosSubject = new BehaviorSubject<string[]>([]);
  estados$ = this.estadosSubject.asObservable();
  municipiosSubject = new BehaviorSubject<string[]>([]);
  municipios$ = this.municipiosSubject.asObservable();
  coloniasSubject = new BehaviorSubject<string[]>([]);
  colonias$ = this.coloniasSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  init() {
    this.http
      .get<string[]>(`https://whereami-api.dani9oo.repl.co`)
      .subscribe((estados) => this.estadosSubject.next(estados));
  }

  get getEstados(): Observable<string[]> {
    return this.estados$;
  }

  public requestMunicipios(estado: string) {
    this.http
      .get<string[]>(`https://whereami-api.dani9oo.repl.co`, { params: { estado }})
      .subscribe((municipios) => this.municipiosSubject.next(municipios));
  }

  public requestColonias(estado: string, municipio: string) {
    this.http
      .get<string[]>(`https://whereami-api.dani9oo.repl.co`, { params: { estado, municipio }})
      .subscribe((municipios) => this.coloniasSubject.next(municipios));
  }

  get getMunicipios(): Observable<string[]> {
    return this.municipios$;
  }

  get getColonias(): Observable<string[]> {
    return this.colonias$;
  }

}
