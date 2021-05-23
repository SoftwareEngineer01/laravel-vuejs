<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Customer\Customer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class CustomerController extends ResponseApiController
{

    public function index()
    {
        $message = null;

        $customers = Customer::orderBy('created_at', 'desc')->get();

        try {
            if ($customers->isEmpty()) {
                $message = $this->sendError('Error en la consulta', ['No hay clientes registrados'], 422);
            }else {
                $message = $this->sendResponse($customers, 'Datos recuperados correctamente');
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
            'identification' => 'required',
            'name'           => 'required',
            'telephone'      => 'required',
            'direction'      => 'required',
            'business'       => 'required',
        ]);

        try {
            if ($validator->fails()) {
                $message = $this->sendError('Error de validación', [$validator->errors()], 422);
            } else {
                $customer = new Customer();
                $customer->identification = $request->get('identification');
                $customer->name = $request->get('name');
                $customer->telephone = $request->get('telephone');
                $customer->direction = $request->get('direction');
                $customer->business = $request->get('business');
                $customer->save();

                $message = $this->sendResponse($customer, 'Registro agregado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al obtener los datos'], 500);
        }

        return $message;
    }

    public function show($id)
    {
        $message = null;

        $customer = Customer::find($id);

        if($customer === null) {
           $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
           $message = $this->sendResponse($customer, 'Registro encontrado');
        }

        return $message;
    }

    public function update(Request $request, $id)
    {
        $message = null;

        $validator = Validator::make($request->all(), [
            'identification' => 'required',
            'name'           => 'required',
            'telephone'      => 'required',
            'direction'      => 'required',
            'business'       => 'required',
        ]);

        try {

            $customer = Customer::find($id);

            if ($validator->fails() ) {
                $message = $this->sendError('Error de validación', [$validated->errors()], 422);
            } elseif($customer === null) {
                $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
            }else {
                $customer->identification = $request->get('identification');
                $customer->name = $request->get('name');
                $customer->telephone = $request->get('telephone');
                $customer->direction = $request->get('direction');
                $customer->business = $request->get('business');
                $customer->save();

                $message = $this->sendResponse($customer, 'Registro actualizado correctamente');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al actualizar los datos o en la consulta'], 500);
        }

        return $message;
    }

    public function destroy($id)
    {
        $message = null;

        $customer = Customer::find($id);

        if($customer === null) {
            $message = $this->sendError('Error en la consulta', ['El registro no existe'], 422);
        } else {
            $customer->delete();
            $message = $this->sendResponse($customer, 'Registro eliminado correctamente');
        }

        return $message;
    }
}
