import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
  @Input() user: User
  @Input() contact: Contact
  constructor() { }

  ngOnInit(): void {

  }
  get lastMoves() {
    let moves = []
    if (!this.contact) {
      moves = this.user.moves.slice(0, 3)
    } else {
      moves = this.user.moves.filter(move => move.toId === this.contact._id)
    }
    return moves
  }
}