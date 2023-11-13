import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    
    faceSnaps: FaceSnap[] =
    [
      {
        id: 1,
        title:   'Crazy Snow',
        description: 'Le snow c\'est la folie !!',
        createdDate:  new Date(),
        snaps: 15,
        imagePath: 'assets/22.jpg',
        location: 'London',
      },
      {
        id: 2,
        title: 'Yellow Bird',
        description: 'Colorado rider',
        createdDate: new Date(),
        snaps: 25,
        imagePath: 'assets/5-Resorts-That-Colorado-Locals-Love-to-Ride.jpg',
        location: 'Kuala Lumpur',
      },
      { id: 3,  
        title: 'Skiing in the sky',
        description: 'Sky rider',
        createdDate: new Date(),
        snaps: 50,
        imagePath: 'assets/877546.jpg',
      }
    ];


    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = 
        this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found');
        }else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}