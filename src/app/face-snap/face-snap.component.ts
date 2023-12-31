import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;

  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService,
              private router: Router){}

  ngOnInit(): void {
      this.buttonText = 'Oh Snap!!'
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
  
 onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
