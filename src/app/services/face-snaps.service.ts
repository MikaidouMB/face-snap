import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {

    faceSnaps: FaceSnap[] =
    [
      {
      title:   'Crazy Snow',
      description: 'Le snow c\'est la folie !!',
      createdDate:  new Date(),
      snaps: 15,
      imagePath: 'assets/22.jpg',
      location: 'London',
      },
      {
        title: 'Yellow Bird',
        description: 'Colorado rider',
        createdDate: new Date(),
        snaps: 25,
        imagePath: 'assets/5-Resorts-That-Colorado-Locals-Love-to-Ride.jpg',
        location: 'Kuala Lumpur',
      },
      {  
        title: 'Skiing in the sky',
        description: 'Sky rider',
        createdDate: new Date(),
        snaps: 50,
        imagePath: 'assets/877546.jpg',
      }
    ];
}