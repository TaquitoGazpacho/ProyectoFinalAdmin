@extends('user.userMaster')
@section('css')
    <style>
        #wrapper{
            padding-left: 0px;
        }
    </style>
@endsection
@section('contenido')
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Verifica</div>

                <div class="panel-body">
                    <h3>No has verificado tu correo, por favor, hazlo antes de seguir adelante.</h3>
                </div>
            </div>
        </div>
    </div>
@endsection