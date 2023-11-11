import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;

  buttonText!: string;

  ngOnInit(): void {
      this.buttonText = 'Oh Snap!!'
  }
  
  onSnapped() {
    
   if(this.buttonText === 'Oh Snap!!' ) {
    this.faceSnap.snaps++;
    this.buttonText = 'Oops, un Snap!';
    this.faceSnap.isCliqued = true;
   }else {
    this.faceSnap.snaps--;
    this.buttonText = 'Oh Snap!!';
    this.faceSnap.isCliqued = false;

   }

  }

}
