import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Juegos } from './juegos';




@Injectable({
  providedIn: 'root'
})
export class ServicioDBService {

  public database! : SQLiteObject;

  tablaJuego: string = "CREATE TABLE IF NOT EXISTS juego(id_juego INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100) NOT NULL, anno_lanzamiento NUMBER(5) NOT NULL, plataforma VARCHAR(100) NOT NULL, descripcion TEXT NOT NULL);";

  registroJuego: string = "INSERT or IGNORE INTO juego(id_juego, nombre, anno_lanzamiento, plataforma, descripcion) VALUES (1, 'Pokemon Rojo','1996','Game Boy','El primer juego de pokemon.');";
  
  listaJuegos = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.crearBD();
   }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message:msj,
      duration: 3000,
      icon: 'globe'
    });

    await toast.present();

  }

  async presentAlert(msj:string){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();

  }

  crearBD() {
    this.platform.ready().then(() =>{
      this.sqlite.create({
        name: 'bdjuegos.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        this.database = db;
        this.crearTablas();

      }).catch(e => {
        this.presentToast("Error BD:" + e);
      })
    })
  }

  async crearTablas(){
    try {
      await this.database.executeSql(this.tablaJuego, []);

      await this.database.executeSql(this.registroJuego, []);

      this.buscarJuegos();
      this.isDBReady.next(true);

    } catch (e) {
      this.presentToast("Error Tablas: " + e);
    }
  }

  buscarJuegos() {
    return this.database.executeSql('SELECT * FROM juego', []).then(res => {
      let items: Juegos[] = [];
      if (res.rows.length > 0){
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id_juego,
            nombre: res.rows.item(i).nombre,
            anno: res.rows.item(i).anno_lanzamiento,
            plataforma: res.rows.item(i).plataforma,
            descripcion: res.rows.item(i).descripcion
          })

        }
      }
      this.listaJuegos.next(items as any);
    })
  }

  dbState() {
    return this.isDBReady.asObservable();
  }
  fetchJuegos(): Observable<Juegos[]> {
    return this.listaJuegos.asObservable();
  }


  insertaJuegos(nombre: any, anno: any, plataforma: any, descripcion: any){
    let data = [nombre, anno, plataforma, descripcion];
    return this.database.executeSql('INSERT INTO juego(nombre, anno_lanzamiento, plataforma, descripcion) VALUES (?,?,?,?)', data).then(res =>{
      this.buscarJuegos();
    });
  }

  modificarJuegos(id: any, nombre: any, anno: any, plataforma: any, descripcion: any){
    let data = [nombre, anno, plataforma, descripcion, id];
    return this.database.executeSql('UPDATE juego SET nombre = ?, anno_lanzamiento = ?, plataforma = ?, descripcion = ? WHERE id_juego = ?',data).then(data2=>{
      this.buscarJuegos();
    })
  }


  eliminarJuegos(id: any){
    
    return this.database.executeSql('DELETE FROM juego WHERE id_juego = ?',[id]).then(a=>{
      this.buscarJuegos();
    })
  }


}
