import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amp';
  isHidden: boolean = false;
  progress: number = 0;
  btn : boolean = false
  panelOpenState = true;
 


  ngOnInit(): void {

  }

  startMigration() {
    this.panelOpenState = false;
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 10;
      } else {
        clearInterval(interval);
        this.completeMigration();
      }

    }, 1000);
    this.btn=true;
   
  }

  completeMigration() {
    this.isHidden = true;
    const a = setTimeout(() =>{
      alert('Migration process has been completed.');
    },1000);
    const b = setTimeout(()=>{
      window.location.reload()
    },2000)
   
    
  }

  
 
}
