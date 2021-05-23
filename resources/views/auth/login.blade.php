@extends('layouts.app')

@section('content')
<div class="container">
  <div class="card login-card">
     <div class="row no-gutters">
         <div class="col-md-5">
         <img src="images/expo.jpg" alt="login"  >
       </div>
       <div class="col-md-7">
         <div class="card-body">
           <div class="brand-wrapper">
             <img src="images/logis.png" alt="logo" >
           </div>
           <p class="login-card-description">Logearse</p>
           <form method="POST" action="{{ route('login') }}">
               @csrf
               <div class="form-group">
                 <label for="email" value="{{ __('Email') }}" />
                 <input id="email" class="form-control" type="email" name="email" :value="old('email')" required autofocus />
               </div>
               <div class="form-group mb-4">
                 <label for="password" value="{{ __('Contraseña') }}" />
                 <input id="password" class="form-control" type="password" name="password" required autocomplete="current-password" />

                               @error('password')
                                   <span class="invalid-feedback" role="alert">
                                       <strong>{{ $message }}</strong>
                                        <p class="login-card-description">{{ $message }}</p>
                                   </span>
                               @enderror
               </div>
               <div class="block mt-4">
                   <label for="remember_me" class="flex items-center">
                       <input id="remember_me" type="checkbox" class="form-checkbox" name="remember">
                       <span class="ml-2 text-sm text-gray-600">{{ __('Recordarme') }}</span>
                   </label>
               </div>

               <button class="btn btn-block login-btn mb-4">
                   {{ __('Login') }}
               </button>

               @if (Route::has('password.request'))
                <p class="login-card-footer-text">
                   <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                       {{ __('Recuperar contraseña?') }}
                   </a>
                   </p>
               @endif
             </form>



         </div>
       </div>

     </div>
   </div>
    <!--termina-->
</div>
@endsection
