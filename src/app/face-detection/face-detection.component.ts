import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.scss']
})
export class FaceDetectionComponent implements OnInit {

  @ViewChild('video', {static: false}) video: HTMLVideoElement;

  // public video = document.getElementById('video');
  public stream: MediaStream;

  constructor() { }

  ngOnInit() {
  }



  public async startVideo() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });


    }
    catch (err) {
      console.log(err);
    }
  }

  public onStartVideo() {
    this.startVideo();
    this.video.srcObject = this.stream;
  }

}
