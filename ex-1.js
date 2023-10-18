class EmailNotification {
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

class SMSNotification extends EmailNotification {
  constructor(notificationId, createdTime, content, receiver, phoneNumber) {
    super(notificationId, createdTime, content, receiver);
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
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
