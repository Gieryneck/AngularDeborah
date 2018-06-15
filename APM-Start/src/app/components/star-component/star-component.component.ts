import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star-component',
    templateUrl: './star-component.component.html',
    styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit {

    @Input() rating: number;
    starWidth: number;

    @Output() sendRating: EventEmitter<number> = new EventEmitter<number>();
    onClick(): void {
        this.sendRating.emit(this.rating);
    }

    constructor() { }

    ngOnInit() :void {
       
    }

    ngOnChanges() :void {
        this.starWidth = this.rating * 86/5;    
    }

}
