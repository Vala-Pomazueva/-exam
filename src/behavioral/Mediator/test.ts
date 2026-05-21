class ChatRoom {
  showMessage(user: User, message: string) {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${user.getName()}: ${message}`);
  }
}

class User {
  constructor(private name: string, private chat: ChatRoom) {}

  getName() {
    return this.name;
  }

  send(message: string) {
    this.chat.showMessage(this, message);
  }
}

// DEMO
const room = new ChatRoom();

const user1 = new User("Alex", room);
const user2 = new User("Bob", room);

user1.send("Hi Bob!");
user2.send("Hello Alex!");
