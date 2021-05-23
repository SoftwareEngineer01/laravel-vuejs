<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\ResponseApiController;
use Illuminate\Http\Request;
use App\Models\Inventory\InventoryEntry;
use App\Models\Inventory\Inventory;
use Illuminate\Support\Facades\Validator;

class InventoryEntryController extends ResponseApiController
{

    public function index()
    {
        $message = null;

        $inventory_entries = InventoryEntry::select('inventory_entries.id', 'inventory_entries.inventory_type_id',
                                                    'inventory_types.name as inventory_type', 'inventory_entries.bill', 'inventory_entries.inventory_id', 'inventories.description as inventory_description', 'inventory_entries.entries','inventory_entries.cost', 'inventory_entries.created_at')
                                            ->join('inventory_types', 'inventory_entries.inventory_type_id', '=', 'inventory_types.id')
                                            ->join('inventories', 'inventory_entries.inventory_id', '=', 'inventories.id')
                                            ->orderBy('inventories.created_at', 'desc')
                                            ->get();


        try {
            if ($inventory_entries->isEmpty()) {
                $message = $this->sendError('Error', ['No hay datos'], 422);
            }else {
                $message = $this->sendResponse($inventory_entries, 'Se listan los registros');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th, ['Error en los datos o consulta'], 500);
        }

        return $message;
    }


    public function store(Request $request)
    {
       $message = null;

       $validator = Validator::make($request->all(), [
            'inventory_type_id' => 'required|integer',
            'bill' => 'required',
            'inventory_id' => 'required|integer',
            'entries' => 'required|integer',
            'cost' => 'required|integer'
       ]);

       //Inventario
       $inventory = Inventory::find($request->get('inventory_id'));

       try {
           if ($validator->fails()) {
             $message = $this->sendError('Error de validación', [$validator->errors()], 422);
           } elseif ($inventory == null) {
            $message = $this->sendError('Error', ['El inventario con ese id no existe'], 422);
           } else {
            $entries = $request->get('entries');
            $cost = $request->get('cost');

            $inventory_entry = new InventoryEntry();
            $inventory_entry->inventory_type_id = $request->get('inventory_type_id');
            $inventory_entry->bill = $request->get('bill');
            $inventory_entry->inventory_id = $request->get('inventory_id');
            $inventory_entry->entries = $entries;
            $inventory_entry->cost = $cost;
            $inventory_entry->save();

            $inventory->final_units += $entries;
            $inventory->cost = $cost;
            $inventory->save();

            $message = $this->sendResponse($inventory_entry, 'Registro completado');
           }
       } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al agregar los datos o en la consulta'], 500);
       }

       return $message;
    }


    public function show($id)
    {
        $message = null;

        $inventory_entry = InventoryEntry::select('inventory_entries.id', 'inventory_entries.inventory_type_id',
                                                'inventory_types.name as inventory_type', 'inventory_entries.bill', 'inventory_entries.inventory_id', 'inventories.description as inventory_description', 'inventory_entries.entries','inventory_entries.cost', 'inventory_entries.created_at')
                                        ->join('inventory_types', 'inventory_entries.inventory_type_id', '=', 'inventory_types.id')
                                        ->join('inventories', 'inventory_entries.inventory_id', '=', 'inventories.id')
                                        ->where('inventory_entries.id','=', $id)
                                        ->first();
        if ($inventory_entry == null) {
            $message = $this->sendError('Error', ['El registro no existe'], 422);
        }else {
            $message = $this->sendResponse($inventory_entry, 'Registro encontrado');
        }

        return $message;
    }


    public function update(Request $request, $id)
    {
        $message = null;

        $validator = Validator::make($request->all(), [
            'inventory_type_id' => 'required|integer',
            'bill' => 'required',
            'inventory_id' => 'required|integer',
            'entries' => 'required|integer',
            'cost' => 'required|integer'
        ]);

        //Inventario
        $inventory = Inventory::find($request->get('inventory_id'));

        //Entrada Inventarios
        $inventory_entry = InventoryEntry::where('id', '=', $id)->first();

        try {
            if ($validator->fails()) {
                $message = $this->sendError('Error de validación', [$validator->errors()], 422);
            } elseif ($inventory_entry == null) {
                $message = $this->sendError('Error', ['El registro no existe'], 422);
            } elseif ($inventory == null) {
                $message = $this->sendError('Error', ['El inventario con ese id no existe'], 422);
            } else {
                $entries = $request->get('entries');
                $cost = $request->get('cost');

                $inventory_entry->inventory_type_id = $request->get('inventory_type_id');
                $inventory_entry->bill = $request->get('bill');
                $inventory_entry->inventory_id = $request->get('inventory_id');
                $inventory_entry->entries = $entries;
                $inventory_entry->cost = $cost;
                $inventory_entry->save();

                $inventory->final_units += $entries;
                $inventory->cost = $cost;
                $inventory->save();

                $message = $this->sendResponse($inventory_entry, 'Registro actualizado');
            }
        } catch (\Throwable $th) {
            $message = $this->sendError($th->getMessage(), ['Error al actualizar los datos o en la consulta'], 500);
        }

        return $message;
    }

    public function destroy($id)
    {
        $message = null;

        $inventory_entry = InventoryEntry::find($id);

        if($inventory_entry === null) {
            $message = $this->sendError('Error', ['El registro no existe'], 422);
        } else {
            $inventory_entry->delete();
            $message = $this->sendResponse($inventory_entry, 'Registro eliminado correctamente');
        }

        return $message;
    }
}
