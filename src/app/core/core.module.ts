import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MoviesService } from './services/movies.service';

@NgModule({
  providers: [MoviesService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
