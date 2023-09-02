import { Component, OnInit } from '@angular/core';
import { SupernaturalService } from '../supernatural.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private supernaturalService: SupernaturalService) { }

  ngOnInit(): void {
    this.supernaturalService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
