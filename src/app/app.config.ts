import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideRouter } from '@angular/router';

import { environment } from 'src/environments/environment.development';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    //definir la configurartion de notre projet firebase
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideStorage(() => getStorage()), 
    //initialisatin de mon application en ligne et en locale
    provideFirestore(() => initializeFirestore(getApp(), {
        localCache: persistentLocalCache({
            tabManager: persistentMultipleTabManager()
        })
    }))), provideAnimations()]
};
