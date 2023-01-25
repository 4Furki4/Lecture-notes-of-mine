# Events And Delegates

## Events

* It's a mechanism of communication between objects.
  * When something happens inside of an object, it notifies other objects.

* It helps building Loosly Coupled Applications.

* Example:
* We have a video encoder and it sends e mail to notify. However we want to also send message. If we add messageservice.add bla bla, all encode and its the couplers have to be recomplied which is broud cost. We need to reduce this cost. On the other hand, adding new features like that can break the application.

* So, imagine that we have VideoEncoder class and it has VideoEncoded EVENT. Also we have a mail service. VideoEncoder is publisher (event sender) and the mail service is its subscriber. The point is that VideoEncoder knows nothing about the mail service, so when we add new services, it doesn't need to be recomplied which also reduces coupling.

* how VideoEncoder know what to call is sending message in c# practical, means invoking a method in the subscriber. It's came over on aggreements which is a method has a specific signature. We call them event handler and they look like this:

`
public void OnVideoEncoded(object source, EventArgs e){}
`

but again, videoencoder have no clue about services but method. So, how does VideoEncoder know what method to call ?.. TIME TO DELEGATES !

## Delegates

Aggreement / Contract between Publisher and Subscriber
Determines the signature of the event handler method inside of Publisher.

* Delegate should be void and have object source and eventArgs parameters.

-----------------------

* First off, we need to define Delegate as a contract between publisher and subscriber.

* Define an event based on this delegate.

* raise the event.

* 1- public delegate void VideoEncodedEventHandler(object source, EventArgs args);
  * source is the source of delegate and args is additional values. EventArgs can be changed another class derived by EventArgs.
  * Name is conventional

* 2- public event VideoEncodedEventHandler VideoEncoded; is the event defined based on the delegate

* 3- protected event OnVideoEncoded(){VideoEncoded(this, null)} is the method call methods subscribed to our publisher.

--------------

* we add subscribers to our publisher using event property like this
  * videoEncoder.VideoEncoded += messageService.OnVideoEncoded; which is apt to our delegate signature.

* Despite of creating delegates for each event, we can use EventHandlers and EventHandlers<.T>
