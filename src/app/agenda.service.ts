import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    private baseURL = "http://localhost:8080/api/v1/agenda";

    constructor(private httpClient: HttpClient) { }

    obtenerListaAgenda(): Observable<Agenda[]> {
        return this.httpClient.get<Agenda[]>(`${this.baseURL}`);
    }

    crearAgenda(agenda: Agenda): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, agenda);
    }

    obtenerAgendaPorId(id: number): Observable<Agenda> {
        return this.httpClient.get<Agenda>(`${this.baseURL}/${id}`);
    }

    actualizarAgenda(id: number, agenda: Agenda): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}/${id}`, agenda);
    }

    eliminarAgenda(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}