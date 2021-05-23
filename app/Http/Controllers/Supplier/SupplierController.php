<?php

namespace App\Http\Controllers\Supplier;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Supplier\Supplier;
use Illuminate\Support\Facades\Validator;

class SupplierController extends ResponseApiController
{

    public function index()
    {
        $message = null;

        $suppliers = Supplier::orderBy('created_at', 'desc')->get();

        try {
            if ($suppliers->isEmpty()) {
                $message = $this->sendError('Error en la consulta', ['No hay proveedores registrados'], 422);
             }else {
                $message = $this->sendResponse($suppliers, 'Datos recuperados correctamente');
             }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos'], 500);
        }

        return $message;
    }

    public function store(Request $request)
    {
        $message = null;

        $validator = Validator::make($request->all(), [
            'business_name' => 'required',
            'direction'     => 'required',
            'telephone'     => 'required',
            'nit'           => 'required',
            'email'         => 'required|email',
            'branch_office' => 'required',
            'supplier_type' => 'required'
        ]);

        try {
            if ($validator->fails()) {
                $message = $this->sendError('Error de validación', [$validator->errors()], 422);
            } else {
                $supplier = new Supplier();
                $supplier->business_name = $request->get('business_name');
                $supplier->direction = $request->get('direction');
                $supplier->telephone = $request->get('telephone');
                $supplier->nit = $request->get('nit');
                $supplier->email = $request->get('email');
                $supplier->account = $request->get('account');
                $supplier->branch_office = $request->get('branch_office');
                $supplier->supplier_type = $request->get('supplier_type');
                $supplier->save();

                $message = $this->sendResponse($supplier, 'Registro agregado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos'], 500);
        }

        return $message;
    }

    public function show($id)
    {
        $message = null;

        try {
            $supplier = Supplier::find($id);

            if($supplier === null) {
                $message = $this->sendError('Error de validación', ['El registro no existe'], 422);
            }else {
                $message = $this->sendResponse($supplier, 'Registro encontrado');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;

    }

    public function update(Request $request, $id)
    {
        $message = null;

        $validator = Validator::make($request->all(), [
            'business_name' => 'required',
            'direction'     => 'required',
            'telephone'     => 'required',
            'nit'           => 'required',
            'email'         => 'required|email',
            'branch_office' => 'required',
            'supplier_type' => 'required'
        ]);

        try {
            $supplier = Supplier::find($id);

            if ($validator->fails()) {
                $message = $this->sendError('Error de validación', [$validator->errors()], 422);
            } elseif ($supplier === null){
                $message = $this->sendError('Error en la consulta', ['El registro no existe']);
            } else {
                $supplier->business_name = $request->get('business_name');
                $supplier->direction = $request->get('direction');
                $supplier->telephone = $request->get('telephone');
                $supplier->nit = $request->get('nit');
                $supplier->email = $request->get('email');
                $supplier->account = $request->get('account');
                $supplier->branch_office = $request->get('branch_office');
                $supplier->supplier_type = $request->get('supplier_type');
                $supplier->save();

                $message = $this->sendResponse($supplier, 'Registro actualizado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos'], 500);
        }

        return $message;
    }

    public function destroy($id)
    {
        $message = null;

        try {
            $supplier = Supplier::find($id);

            if($supplier === null) {
                $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
            } else {
                $supplier->delete();
                $message = $this->sendResponse($supplier, 'Registro eliminado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos o en la consulta'], 500);
        }

        return $message;
    }
}
