
import { Component, ElementRef, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { AnimationController, GestureController, IonCard } from '@ionic/angular';
import type { Animation, Gesture, GestureDetail } from '@ionic/angular';


@Component({
  selector: 'app-quepokeeres',
  templateUrl: './quepokeeres.page.html',
  styleUrls: ['./quepokeeres.page.scss'],
})
export class QuepokeeresPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;
  private gesture!: Gesture;
  private started = false;
  private initialStep = 0;

  /**
   * The track is 344px wide.
   * The card is 100px wide.
   * We want 16px of margin on each end of the track.
   */
  private readonly MAX_TRANSLATE = 344 - 100 - 32;

  pokemon = [
    { nombre: 'Pikachu', imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png' },
    { nombre: 'Bulbasaur', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
    { nombre: 'Charmander', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
    //Mas proximamente
  ];

  randomPokemon: { nombre: string; imagen: string } = {nombre: '', imagen: ''};

  constructor(private animationCtrl: AnimationController, private gestureCtrl: GestureController) { 
    this.randomPokemon = {
      nombre: 'ERES UN.........',
      imagen: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pokemon-icon.png',
    };
  }

  ngOnInit() {
  }

  getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * this.pokemon.length);
    this.randomPokemon = this.pokemon[randomIndex];
  }



  private onMove(ev: GestureDetail) {
    if (!this.started) {
      this.animation.progressStart();
      this.started = true;
    }

    this.animation.progressStep(this.getStep(ev));
  }

  private onEnd(ev: GestureDetail) {
    if (!this.started) {
      return;
    }

    this.gesture.enable(false);

    const step = this.getStep(ev);
    const shouldComplete = step > 0.5;

    this.animation.progressEnd(shouldComplete ? 1 : 0, step).onFinish(() => {
      this.gesture.enable(true);
    });

    this.initialStep = shouldComplete ? this.MAX_TRANSLATE : 0;
    this.started = false;
  }

  private clamp(min: number, n: number, max: number) {
    return Math.max(min, Math.min(n, max));
  }

  private getStep(ev: GestureDetail) {
    const delta = this.initialStep + ev.deltaX;
    return this.clamp(0, delta / this.MAX_TRANSLATE, 1);
  }

  ionViewDidEnter() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(0)', `translateX(${this.MAX_TRANSLATE}px)`);

    const gesture = (this.gesture = this.gestureCtrl.create({
      el: this.card.nativeElement,
      threshold: 0,
      gestureName: 'card-drag',
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    }));

    gesture.enable(true);
  }


}
