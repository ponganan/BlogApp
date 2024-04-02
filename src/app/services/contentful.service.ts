import { Injectable } from '@angular/core';
//import contentful
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  //create private field for connect to Contentful
  private client = createClient(
    {
      space: '596z6v91s5am',
      accessToken: 'tPkvzVzyp4Hki5UB3R6Fau2xLzqBRyUIzkTUee515G0'
    }
  )

  // get all Entries from contentful
  getAllEntries() {
    // this.client.getEntries()
    //   .then(entries => console.log(entries));

    const promise = this.client.getEntries()
    return from(promise);
  }
}
