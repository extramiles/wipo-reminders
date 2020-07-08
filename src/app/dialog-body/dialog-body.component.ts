import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<DialogBodyComponent>) { }

  ngOnInit() {
  }

  onLoginClick(): void {
    this.dialogRef.close();
    this.router.navigate(['login']);
  }
}
