import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



declare var SockJS: any;
declare var Stomp: any;

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: any;
  private sensorSubject = new Subject<any>();
  private connected = false;
  private wsUrl = 'http://localhost:8091/ws';


  constructor() {}

  connect(): Observable<boolean> {
    const connectionSubject = new Subject<boolean>();

    if (this.connected) {
      connectionSubject.next(true);
      connectionSubject.complete();
      return connectionSubject.asObservable();
    }

    const socket = new SockJS(this.wsUrl, null, {
      transports: ['websocket'],
      withCredentials: true
    });

    this.stompClient = Stomp.over(socket);
    this.stompClient.debug = null;

    this.stompClient.connect({},
      (frame: any) => {
        console.log('Conectado a WebSocket: ' + frame);
        this.connected = true;

        // Suscripción al tópico de sensores
        this.stompClient.subscribe('/topic/sensors', (message: any) => {
          try {
            const data = JSON.parse(message.body);
            this.sensorSubject.next(data);
          } catch (e) {
            console.error('Error al procesar mensaje: ', e);
          }
        });

        connectionSubject.next(true);
        connectionSubject.complete();
      },
      (error: any) => {
        console.error('Error de conexión WebSocket: ', error);
        this.connected = false;
        connectionSubject.next(false);
        connectionSubject.complete();
      }
    );

    return connectionSubject.asObservable();
  }

  disconnect(): void {
    if (this.stompClient && this.connected) {
      this.stompClient.disconnect();
      this.connected = false;
      console.log('Desconectado de WebSocket');
    }
  }

  getSensorUpdates(): Observable<any> {
    return this.sensorSubject.asObservable();
  }

  isConnected(): boolean {
    return this.connected;
  }
}
