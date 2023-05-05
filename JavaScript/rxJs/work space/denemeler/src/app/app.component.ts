import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    // }).subscribe(console.log)
    // const subject = new Subject();
    // subject.subscribe(data => console.log(`observer1:  ${data}`))
    // subject.next(1)
    // subject.next(2)
    // subject.next(3)
    // subject.subscribe(data => console.log(`observer2:  ${data}`))
    // subject.next(4)
    // subject.next(5)
    // subject.next(6)
    // subject.next(7)

    // const behaviorSubject = new BehaviorSubject(1);
    // behaviorSubject.subscribe(data => console.log(`observer1:  ${data}`))
    // behaviorSubject.next(2)
    // behaviorSubject.next(3)
    // behaviorSubject.subscribe(data => console.log(`observer2:  ${data}`))

    // const replaySubject = new ReplaySubject(2);
    // replaySubject.subscribe(data => console.log(`observer1:  ${data}`))
    // replaySubject.next(2)
    // replaySubject.next(3)
    // replaySubject.subscribe(data => console.log(`observer2:  ${data}`))
    const asyncSubject = new AsyncSubject();
    asyncSubject.subscribe(data => console.log(`observer1:  ${data}`))
    asyncSubject.next(2)
    asyncSubject.next(3)
    asyncSubject.next(4)
    asyncSubject.next(5)
    asyncSubject.next(6)
    asyncSubject.next(7)
    asyncSubject.next(8)
    asyncSubject.next(9)
    asyncSubject.next(10)
    asyncSubject.complete()
    asyncSubject.subscribe(data => console.log(`observer2:  ${data}`))
  }
  title = 'denemeler';
}
