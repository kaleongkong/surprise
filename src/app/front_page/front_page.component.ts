import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front_page.component.html',
  styleUrls: ['./front_page.component.css']
})
export class FrontPageComponent implements OnInit {
	private keys = [];
	private images = [
	'assets/images/a.jpg',
	'assets/images/b.jpg',
	'assets/images/c.jpg',
	'assets/images/d.jpg',
	'assets/images/e.jpg',
	'assets/images/f.jpg',
	'assets/images/g.jpg',
	];
	private imageIdx = 0;
	private switchOn = false;
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
  	if(this.switchOn) return;
  	console.log(event);
  	if (event.code === 'Backspace') {
  		this.keys.pop();
  	} else if ( event.code === 'Enter') {
  		if (this.keys.join('') === '19890816') this.switchOn = !this.switchOn;
  	} else if (this.keys.length < 8) {
    	this.keys.push(event.key.toUpperCase());
    }
    console.log(this.keys);
  } 

  constructor() { 
  }

  ngOnInit() {
  	setInterval(function() {
  		this.imageIdx++;
  		this.imageIdx = this.imageIdx % this.images.length;
  		console.log(this.imageIdx);
  	}.bind(this), 3000);
  }

}
