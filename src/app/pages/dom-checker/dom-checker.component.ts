import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User, UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-dom-checker',
  standalone: true,
  imports: [JsonPipe, UserComponent],
  templateUrl: './dom-checker.component.html',
  styleUrl: './dom-checker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomCheckerComponent {
  name = 'Alice';
  age = 20;
  user: User = {
    name: 'Alice',
    age: 20,
    address: 'America',
  };

  getName() {
    console.log('getName called');
    return this.name;
  }

  getAge() {
    console.log('getAge called');
    return this.age;
  }

  getProfile() {
    console.log('getProfile called');
    return `${this.name} (${this.age})`;
  }

  getUser() {
    console.log('getUser called');
    return this.user;
  }

  updateName() {
    this.name = 'Bob';
  }

  updateAge() {
    this.age++;
  }

  updateUserName() {
    this.user.name = 'Bob';
  }

  updateUserNameDelay() {
    setTimeout(() => {
      this.user.name = 'Joy';
    }, 1000)
  }

  updateUserAge() {
    this.user.age++;
  }
}
