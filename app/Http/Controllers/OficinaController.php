<?php

namespace App\Http\Controllers;

use App\Models\Oficina;
use Illuminate\Support\Facades\DB;
use \Validator;
use Illuminate\Http\Request;

class OficinaController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function oficinas()
    {
        return view('admin.oficinas');
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'ciudad' => 'required|string|max:255',
            'calle' => 'required|string|max:255',
            'num_calle' => 'required|integer',
        ]);
    }
    protected function create(array $data)
    {
        return Oficina::create([
            'ciudad' => $data['ciudad'],
            'calle' => $data['calle'],
            'num_calle' => $data['num_calle'],
        ]);
    }
    public function store(Request $request)
    {
        $this->validator($request->all())->validate();
        $oficina= new Oficina();
        $oficina->setPais($request->pais);
        $oficina->setCalle($request->calle);
        $oficina->setCiudad($request->ciudad);
        $oficina->setNumCalle($request->num_calle);
        $oficina->setLat($request->lat);
        $oficina->setAlt($request->alt);
        $oficina->save();
        //se cambiara
        $datosOficina = $this->mostrarDatos($oficina->id);
        $oficinaRegistrada = true;
        return redirect()->route('admin.oficinas');
    }
    public function index($id_request)
    {
        $id = $id_request;
        $datosOficina = $this->mostrarDatos($id);
        return view('admin.editarOficina', ['datosOficina' => $datosOficina]);
    }
    public function mostrarDatos($id)
    {
        return $datosOficina =DB::table('oficinas')->select('id','ciudad', 'calle', 'num_calle')->where('id', $id)->get();
    }
    public function calculaTaquillas($id)
    {
        return $taquillas = DB::table('taquillas')->select('id')->where('oficina_id',$id)->count();
    }
    public function actualizar(Request $request)
    {
        DB::table('oficinas')
            ->where('id', $request->id)
            ->update([  'ciudad' => $request->ciudad,
                'calle' => $request->calle,
                'num_calle' => $request->num_calle,
            ]);
    }
    public function dropOficinas(Request $request){
        for ($i=0; $i<sizeof($request->delete); $i++){
            DB::table('oficinas')->where('id',$request->delete[$i])->delete();
        }

        session()->put('success','oficinas eliminadas correctamente');

        return redirect()->route('admin.oficinas');
    }

    public function showTaquillas($oficina_id){
        $taquillas= DB::table('taquillas')
            ->where('oficina_id', $oficina_id)
            ->get();
        return view( 'admin.taquillas',['taquillas' => $taquillas, 'ofi_id' => $oficina_id]);
    }
}