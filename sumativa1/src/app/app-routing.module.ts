import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pages/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'pokedex/:index',
    loadChildren: () => import('./pages/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'juegospoke',
    loadChildren: () => import('./pages/juegospoke/juegospoke.module').then( m => m.JuegospokePageModule)
  },
  {
    path: 'agregarjuego',
    loadChildren: () => import('./pages/agregarjuego/agregarjuego.module').then( m => m.AgregarjuegoPageModule)
  },
  {
    path: 'modificarjuego',
    loadChildren: () => import('./pages/modificarjuego/modificarjuego.module').then( m => m.ModificarjuegoPageModule)
  },
  {
    path: 'quepokeeres',
    loadChildren: () => import('./pages/quepokeeres/quepokeeres.module').then( m => m.QuepokeeresPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
