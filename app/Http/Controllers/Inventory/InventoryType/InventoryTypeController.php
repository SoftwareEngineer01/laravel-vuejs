<?php

namespace App\Http\Controllers\Inventory\InventoryType;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Inventory\InventoryType;
use Illuminate\Support\Facades\Validator;

class InventoryTypeController extends ResponseApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $message = null;

        try {
            $inventory_types = InventoryType::orderBy('created_at', 'desc')->get();

            if($inventory_types->isEmpty()) {
                $message = $this->sendError('No hay datos', ['No hay inventarios registrados'], 422);
            }else {
                $message = $this->sendResponse($inventory_types, 'Datos recuperados correctamente');
            }
        } catch (\Throwable $e) {
            $message = $this->sendError($e->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return  $message;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $message = null;

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'code' => 'required|unique:inventory_types'
        ]);

        try {
           if ($validator->fails()) {
               $message = $this->sendError('Error de validación', [$validator->errors()], 422);
           }else {
               $inventory_types = new InventoryType();
               $inventory_types->name = $request->get('name');
               $inventory_types->code = $request->get('code');
               $inventory_types->save();

               $message = $this->sendResponse($inventory_types, 'Registro agregado correctamente');
           }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $message = null;

        try {
            $inventory_type = InventoryType::find($id);

            if($inventory_type === null) {
                $message = $this->sendError('Error en la consulta', ['No existe el tipo de inventario']);
            }else {
                $message = $this->sendResponse($inventory_type, 'Registro encontrado');
            }

        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $message = null;

        $validator = Validator::make($request->all(), [
            'name' => 'required'
        ]);

        try {
            $inventory_type = InventoryType::find($id);

            if ($validator->fails()) {
                $message = $this->sendError('Error de validación', [$validator->errors()], 422);
            }elseif ($inventory_type === null) {
                $message = $this->sendError('Error en la consulta', ['El registro no existe']);
            }else {
                $inventory_type->name = $request->get('name');
                $inventory_type->save();

                $message = $this->sendResponse($inventory_type, 'Registro actualizado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $message = null;

       try {
            $inventory_type = InventoryType::find($id);

            if($inventory_type === null) {
                $message = $this->sendError('Error en la consulta', ['El registro no existe']);
            }else {
                $inventory_type->delete();
                $message = $this->sendResponse($inventory_type, 'Registro eliminado correctamente');
            }
       } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
       }

       return $message;
    }
}
