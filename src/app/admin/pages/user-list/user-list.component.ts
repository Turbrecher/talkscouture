import { Component } from '@angular/core';
import { Urls } from '../../../shared/urls/urls';
import { UserAdminService } from '../../services/user-admin.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserCardComponent } from '../../components/user-card/user-card.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent {

  users: Array<any> = []
  public imgURL = Urls.IMAGES

  constructor(private userAdminService: UserAdminService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    

    this.users = []

    this.userAdminService.listUsers().subscribe({
      next: (response) => {


        //LOADING USERS
        response.forEach((user: any) => {
          this.users.push(user)
        })


      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
