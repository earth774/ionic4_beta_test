import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  file: File
  imgdata: any
  selectedFileName: any
  userLogin: any;
  @ViewChild('filess') filess;
  constructor(
    @Inject('IMG_URL') public img_url: string,
    private userServiceService: UserServiceService
  ) {
    this.userLogin = JSON.parse(localStorage.getItem('userlogin'));
  }

  ngOnInit() {
  }
  changeImage($event): void {
    // debugger; // uncomment this for debugging purposes
    // this.readThis($event.target);
    console.log($event.target)
    this.readThis();
  }

  readThis(): void {
    var inputFile = this.filess.nativeElement;
    this.file = inputFile.files[0];
    console.log(inputFile);
    this.userServiceService.UploadProfileImage(this.file);
    // var myReader: FileReader = new FileReader();

    // myReader.onload = (e: any) => {
    //   this.imgdata = e.target.result;
    //   this.selectedFileName = this.file.name;
    // }
    // myReader.readAsDataURL

    // myReader.readAsDataURL(this.file);
  }
  uploadImage() {
    document.getElementById('fileinput').click();
  }


}
