import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { NgModule } from '@angular/core';
import { AddquipmentComponent } from './pages/admin/addequipment/addquipment.component';
import { AddmembershipComponent } from './pages/admin/addmembership/addmembership.component';
import { AddoffersComponent } from './pages/admin/addoffers/addoffers.component';
import { AddtrainerComponent } from './pages/admin/addtrainer/addtrainer.component';
import { AdminequipmentComponent } from './pages/admin/adminequipment/adminequipment.component';
import { AdminmembershipComponent } from './pages/admin/adminmembership/adminmembership.component';
import { AdminoffersComponent } from './pages/admin/adminoffers/adminoffers.component';
import { AdmintrainerComponent } from './pages/admin/admintrainer/admintrainer.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdatetrainerComponent } from './pages/admin/updatetrainer/updatetrainer.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OffersComponent } from './pages/offers/offers.component';
import { authGuard } from './services/auth.guard';
import { RegistermembershipComponent } from './pages/registermembership/registermembership.component';
import { adminGuard } from './admin.guard';



export const routes: Routes = [
    
    {path:'homepage',component:HomepageComponent},
    {path:'trainer',component:TrainerComponent,canActivate:[authGuard],pathMatch:'full'},
    {path:'equipment',component:EquipmentComponent,canActivate:[authGuard]},
    {path:'membership',component:MembershipComponent,canActivate:[authGuard]},
    {path:'offer',component:OffersComponent,canActivate:[authGuard]},

    {path:'addequipment',component:AddquipmentComponent,pathMatch:'full',canActivate:[adminGuard]},
    {path:'addmembership',component:AddmembershipComponent,pathMatch:'full',canActivate:[adminGuard]},
    {path:'addoffers',component:AddoffersComponent,pathMatch:'full',canActivate:[adminGuard]},
    {path:'addtrainer',component:AddtrainerComponent,pathMatch:'full',canActivate:[adminGuard]},

   
    {path:'adminequipment',component:AdminequipmentComponent,pathMatch:'full',canActivate:[adminGuard]},
    {path:'adminmembership',component:AdminmembershipComponent,pathMatch:'full',canActivate:[adminGuard]},
    {path:'adminoffers',component:AdminoffersComponent,pathMatch:'full',canActivate:[adminGuard]},
    {path:'admintrainer',component:AdmintrainerComponent,pathMatch:'full',canActivate:[adminGuard]},

    {path:'admin',component:AdminDashboardComponent,canActivate:[adminGuard]},

    {path:'updatetrainer',component:UpdatetrainerComponent},

   
    {path:'',
    component:SigninComponent,
    pathMatch:'full'
    },
    {path:'signup',component:SignupComponent,pathMatch:'full'},
    {path:'register',component:RegistermembershipComponent}
];

// @NgModule({
//     declarations:[AppComponent],
//     imports: [RouterModule.forRoot(routes),FormsModule,CommonModule,NgModule,NgModel],
//     providers:[],
//     exports: [RouterModule],
//   })
//   export class AppRoutingModule {}