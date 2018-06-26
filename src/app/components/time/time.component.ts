import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time/time.service';
import { ITime } from '../../time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  currentTime$: ITime;

  constructor(private _timeService: TimeService) { }

  ngOnInit() {
    this._timeService.getTime().subscribe(
      data => this.currentTime$ = data
    );
  }
}
