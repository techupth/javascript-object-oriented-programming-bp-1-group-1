class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phonNumber) {
    super(notificationId, createdTime, content, phonNumber);
    this.phonNumber = phonNumber;
  }
}

let email = new EmailNotification(
  "gritsakan@gmail.com",
  "10.30PM",
  "Hello",
  "Fadai@gmail.com"
);
let sms = new SMSNotification(
  "gritsakan@gmail.com",
  "10.30PM",
  "Hello",
  "Fadai@gmail.com",
  "0808840857"
);

sms.send();
email.send();
