import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'product' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'cart' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'register' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'profile' }
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: { title: 'payment' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
