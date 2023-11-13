import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.html',
  styleUrls: ['./single-face-snap-component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
    faceSnap!:FaceSnap;
    buttonText!: string;

    constructor(private faceSnapService: FaceSnapService, 
                private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.buttonText = 'Oh Snap!!'
        const snapId = +this.route.snapshot.params['id'];
        this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
    }
    
    onSnapped() {
      
    if(this.buttonText === 'Oh Snap!!' ) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!';
      this.faceSnap.isCliqued = true;
    }else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!!';
      this.faceSnap.isCliqued = false;
    }
}
}