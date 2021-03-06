@extends('user.userMaster')

@section('css')
    <style>
        #wrapper{
            padding-left: 0px;
        }
    </style>
@endsection

@section('contenido')
    <div class="container">
        <div class="text-center">
            <h1>Inicio de sesión de empresas</h1>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">

                    <div class="panel-body sombras">
                        <form class="form-horizontal" method="POST" action="{{ route('empresa.login.submit') }}">
                            {{ csrf_field() }}
                            <div class="panel-form">
                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <label for="email" class="col-md-12 control-label">E-Mail</label>

                                    <div class="col-md-12 control-label">
                                        <input id="email" type="email" class="col-md-12 control-label inputText" name="email" value="{{ old('email') }}" required autofocus>

                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="col-md-12 control-label">Contraseña</label>

                                    <div class="col-md-12 text-center">
                                        <input id="password" type="password" class="form-control inputText" name="password" required>

                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12 text-center">
                                        <button type="submit" class="btn btn-primary">
                                            Iniciar sesión
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
